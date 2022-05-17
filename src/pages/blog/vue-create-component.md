---
layout: $/layouts/post.astro
title: Vue Component介紹
date: 2021-12-01 01:23:37
tags: 
    - vue
    - frontend
description: 30秒創建一個簡單的Vue元件！
---


:::tip 什麼是component?
元件(component)是一段獨立的程式碼，代表網頁的一部份。元件有自己的資料與Javascript，通常也帶有自己的樣式。可以包含其他的元件，也能彼此進行溝通。元件可以是按鈕或是圖示，也可以是能在整個網站或網頁中重複使用的表單這種大元素。
:::


元件基礎
===

撰寫一個間單的元件
```javascript
const SimpleButton = {
    template: <button>Simple button</button>
}
```
接下來可以透過 components物件將這個元件傳進app中

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<div id="app">
    <simple-button></simple-button>
</div>
<script>
    const SimpleButton = {
        template: '<button>Simple Button</button>'
    };
    new Vue({
        el: '#app',
        components: {
            SimpleButton
        }
    });
</script>
```

也可以透過全域的方式註冊元件

```javascript
Vue.component('simple-button', {
    template: 'button>Simple Button</button>'
})
```

