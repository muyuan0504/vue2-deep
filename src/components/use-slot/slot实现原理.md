### slot

Vue 在编译阶段，解析模板时对于插槽 slot 标签会识别并生成对应的 AST 节点，这些节点包含了插槽的名称，位置等；

之后再使用生成的 AST 生成渲染函数时，对于插槽会生成对应的插槽渲染函数，并将其保存在组件的 \_render 方法中；这样在后续渲染组件时，如果解析标签为 slot，则执行对应插槽渲染函数，并生成

对应的虚拟 DOM，这些虚拟 DOM 会被插入到父组件的虚拟 DOM 中的插槽位置，完成了 slot 的挂载。

-   作用域插槽

**让插槽内容能够访问子组件中才有的数据**

作用于插槽是通过插槽渲染函数的参数来实现的，当父组件向子组件传递数据时，这些数据会作为参数传递给插槽渲染函数。在渲染过程中，子组件可以通过访问这些参数来使用父组件传递的数据。

通过这种方式，Vue.js 实现了父子组件之间更加灵活的数据传递和交互

如何使用作用域插槽：

1. 父组件模板声明

在父组件的模板中，使用 <template> 标签定义作用域插槽，并通过 slot-scope 属性指定作用域变量的名称

```vue
<template>
    <ChildComponent>
        <template slot-scope="scopeProps">
            <span>{{ scopeProps.data }}</span>
        </template>
    </ChildComponent>
</template>
```

2. 子组件接收作用域插槽

在子组件的模板中，使用 v-slot 指令接收父组件传递的作用域插槽，并在模板中使用传递的数据

```vue
<template>
    <div>
        <slot :data="childData"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            childData: 'Hello from child',
        }
    },
}
</script>
```
