<template>
  <div class="typescript onlearncontent">
    <h3>
      Typescrip中的那些符号
    </h3>
    <div class="on_text">
      一、! 非空断言操作符
    </div>
    <div>
      ! 可以用于断言操作对象是非 null 和非 undefined 类型。具体而言， x! 将从 x 值域中排除 null 和 undefined 。
    </div>
    <div>
      let x!: number; //x一定有值，断言操作对象是非 null 和非 undefined 类型并且是数字类型
    </div>
    <div class="on_text">
      一、？可选元素
    </div>
    <div>
      interface Person { name: string; age?: number; //age可以为空 }<br />
      let lolo: Person = { name: "lolo" }
    </div>
    <div class="on_text">
      ？.可选元素
    </div>
    <div>
      run?.(a,b) //指当run这个函数存在时执行该函数
    </div>
  </div>
</template>
