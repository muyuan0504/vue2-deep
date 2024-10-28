### initRender

slot 的实现原理贯穿从编译到渲染阶段，在 Vue 编译模板时，识别 slot 并标记，会在节点中记录插槽的名称；

-   编译阶段

首先在模板编译阶段，编译器会将模板解析为抽象语法树（AST），包括解析 <slot> 标签，在 Vue.js 的 AST 中，表示 <slot> 标签的节点类型为 ASTElement，

之后在 AST 的代码生成阶段，针对 slot 标签单独处理生成了可执行的渲染函数；

在父组件编译过程中，对于子组件标签内部的 slot 内容，编译器会将他们提取出来，然后传递给子组件，即 props.slot；

总的来说，插槽是在编译阶段被处理的，在渲染函数中作为子组件的属性进行传递。子组件在渲染过程中通过访问 $slots 属性来获取插槽内容，并将其渲染到自身的虚拟 DOM 中;之后再 patch 阶段挂载到 DOM 上。

举个例子：

```
假设有一个插槽名称为 'header'，且该插槽包含子节点的情况，那么 genSlot 函数生成的字符串大致可能是这样的


'_t("header",_ctx,{ default: function(){ return [' + children + ']} })'

1. _t 表示渲染插槽内容的函数，它是 Vue.js 内部定义的函数, 实际上执行的是renderSlot函数；

2. "header" 是插槽的名称，用于标识具名插槽

3. _ctx 是 Vue.js 组件实例的上下文对象，用于在渲染函数中访问组件的属性和方法

4. { default: function() { return [ ... ] } } 表示插槽的内容，如果有子节点，则将子节点作为数组返回

这个字符串表示了在渲染函数中渲染具名插槽 'header' 的代码逻辑，包括插槽名称、上下文对象和插槽内容的处理逻辑

```

```typescript

// slot的AST节点信息：
{
  type: 1, // 节点类型，1 表示元素节点
  tag: 'slot', // 标签名
  attrsList: [ /* 属性列表 */ ],
  attrsMap: { /* 属性名及值的映射 */ },
  children: [], // 子节点列表，可能包含插槽的内容
  slotName: 'header', // 插槽名称
  ...
}

/** src\compiler\codegen\index.js */

export function genElement(el: ASTElement, state: CodegenState): string {
    if (el.staticRoot && !el.staticProcessed) {
        return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
        return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
        return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
        return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
		return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
        /** 插槽的编译 */
        return genSlot(el, state)
    } else {
    }
}

function genSlot (el: ASTElement, state: CodegenState): string {
  const slotName = el.slotName || '"default"'
  const children = genChildren(el, state)
  /** 这里的_t，就是下面提到的 renderSlot 函数，会在 vue 初始化的时候挂载到 Vue 的原型上 */
  let res = `_t(${slotName}${children ? `,${children}` : ''}`
  const attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(attr => ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      })))
    : null
  const bind = el.attrsMap['v-bind']
  if ((attrs || bind) && !children) {
    res += `,null`
  }
  if (attrs) {
    res += `,${attrs}`
  }
  if (bind) {
    res += `${attrs ? '' : ',null'},${bind}`
  }
  return res + ')'
}

/** 接收一个 AST 节点的子节点列表作为参数，然后遍历这些子节点，并生成相应的代码片段 */
export function genChildren (
  el: ASTElement,
  state: CodegenState,
  checkSkip?: boolean,
  altGenElement?: Function,
  altGenNode?: Function
): string | void {
  const children = el.children
  if (children.length) {
    const el: any = children[0]
    // optimize single v-for
    if (children.length === 1 &&
      el.for &&
      el.tag !== 'template' &&
      el.tag !== 'slot'
    ) {
      const normalizationType = checkSkip
        ? state.maybeComponent(el) ? `,1` : `,0`
        : ``
      return `${(altGenElement || genElement)(el, state)}${normalizationType}`
    }
    const normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0
    const gen = altGenNode || genNode
    return `[${children.map(c => gen(c, state)).join(',')}]${
      normalizationType ? `,${normalizationType}` : ''
    }`
  }
}
```

-   渲染阶段

在组件的渲染函数中，会根据插槽的名称，动态的渲染插槽的内容

-   对于默认插槽，通过 $slots.default 访问插槽内容；

-   对于具名插槽，会使用 $slots\[name\] 访问相应的插槽内容；

```javascript
/** src\core\instance\render.js， 会在组件挂载执行init函数阶段执行 */
export function initRender(vm: Component) {
    vm._vnode = null // the root of the child tree
    vm._staticTrees = null // v-once cached trees
    const options = vm.$options
    const parentVnode = (vm.$vnode = options._parentVnode) // the placeholder node in parent tree
    const renderContext = parentVnode && parentVnode.context
    /** 执行slot的渲染函数并挂载vnode到$slots上 */
    vm.$slots = resolveSlots(options._renderChildren, renderContext)
    vm.$scopedSlots = emptyObject
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    const parentData = parentVnode && parentVnode.data

    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
        defineReactive(
            vm,
            '$attrs',
            (parentData && parentData.attrs) || emptyObject,
            () => {
                !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm)
            },
            true
        )
        defineReactive(
            vm,
            '$listeners',
            options._parentListeners || emptyObject,
            () => {
                !isUpdatingChildComponent && warn(`$listeners is readonly.`, vm)
            },
            true
        )
    } else {
        defineReactive(vm, '$attrs', (parentData && parentData.attrs) || emptyObject, null, true)
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)
    }
}

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 * src\core\instance\render-helpers\resolve-slots.js
 */
export function resolveSlots(children: ?Array<VNode>, context: ?Component): { [key: string]: Array<VNode> } {
    if (!children || !children.length) {
        return {}
    }
    const slots = {}
    for (let i = 0, l = children.length; i < l; i++) {
        const child = children[i]
        const data = child.data
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
            const name = data.slot
            const slot = slots[name] || (slots[name] = [])
            if (child.tag === 'template') {
                // children就是渲染函数，这里直接执行了slot的渲染函数
                slot.push.apply(slot, child.children || [])
            } else {
                slot.push(child)
            }
        } else {
            ;(slots.default || (slots.default = [])).push(child)
        }
    }
    // ignore slots that contains only whitespace
    for (const name in slots) {
        if (slots[name].every(isWhitespace)) {
            delete slots[name]
        }
    }
    return slots
}

/**
 * src\core\instance\render-helpers\resolve-slots.js
 * 当父组件包含了一个具名插槽并且传递了内容给该插槽时，renderSlot 函数会被调用。
 * 父组件会在它的 render 函数中渲染子组件，并将插槽内容作为参数传递给子组件。子组件会在它的 render 函数中调用 renderSlot 函数来渲染插槽的内容
 */
export function renderSlot(name: string, fallback: ?Array<VNode>, props: ?Object, bindObject: ?Object): ?Array<VNode> {
    const scopedSlotFn = this.$scopedSlots[name]
    let nodes
    if (scopedSlotFn) {
        // scoped slot - 作用域插槽数据传递，将bind给slot的数据，传递给props
        props = props || {}
        if (bindObject) {
            if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
                warn('slot v-bind without argument expects an Object', this)
            }
            props = extend(extend({}, bindObject), props)
        }
        nodes = scopedSlotFn(props) || fallback
    } else {
        nodes = this.$slots[name] || fallback
    }

    const target = props && props.slot
    if (target) {
      /** props.slot 是在渲染组件时用于指定插槽的名称。这个属性通常用于函数式组件，以便在渲染时动态地选择要渲染到的插槽 */
        return this.$createElement('template', { slot: target }, nodes)
    } else {
        return nodes
    }
}
```
