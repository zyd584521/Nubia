# Vue.use的作用？
>Vue.use是用来使用插件的。这个插件如果是一个对象的情况下必须提供一个install方法，如果这个插件是一个
函数的情况下，name这个函数就会被当做install方法。这个install方法中会有一个参数，这个参数就是Vue构造函数