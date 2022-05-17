---
layout: $/layouts/post.astro
title: v-if與v-show有什麼不同？
date: 2021-11-23 01:32:21
tags: 
    - vue
    - frontend
description: 使用v-if和v-show看起來好像沒差別，事實上影響著渲染的效能！
---


:::tip 發生什麼事？
同樣是作為內容呈現邏輯判斷的樣板指令，究竟有何不同？什麼時候該用哪個？
:::


v-if 的特性
===
> 透過v-if指令計算出為false，則***不會輸出***到DOM中。


程式原始碼:
```html
<div v-if="true">one</div>
<div v-if="false">two</div>
```

實際輸出:
```html
<div>one</div>
```


v-show 的特性
===
> 透過v-show指令計算出為false，則**透過CSS將該元素隱藏**。


程式原始碼:
```html
<div v-show="true">one</div>
<div v-show="false">two</div>
```

實際輸出:
```html
<div>one</div>
<div style="display: none;">two</div>
```

> 雖然使用者都會看到相同的畫面，但實際存在著差異，v-if不會產生完整的HTML，v-show則透過CSS進行隱藏，所以v-if適用於還未透過ajax下載的資料，v-show用於對已存在的資料進行顯示與隱藏。

想知道更多關於: [v-if v.s. v-show](https://vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)