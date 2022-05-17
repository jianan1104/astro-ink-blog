---
layout: $/layouts/post.astro
title: Leetcode - Palindrome Number(Easy)
date: 2021-11-25 00:22:31
tags: 
  - javascript
  - leetcode
description: Leetcode第九題 Palindrome Number 解法
---

No.9 Palindrome Number
---

:::tip Problem
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
:::


簡單來說，題目給定整數x，只要順著與反著順序相同回傳True反之Fasle。

解題思路
===
在做任何題目之前，千萬別著急開始coding，應當先理清題目與**假設**會遇到的情況，將解題流程拆分成數個條件，再來寫程式與測試。


- 條件一 x 不能為負 
  - 正反順序相同，前面若是配上個`-`負號就不能通過，所以x <  0則return false

- 條件二 頭尾需相同
  - 正反順序相同，意味著頭與尾是同個數字，所以檢測頭尾是否相同，不同則return false

- 條件三 須符合鏡射
  - 正反順序相同，也就代表以該數中間為中心，左右數字需對稱，所以若不符合鏡射則return false

my solution
===

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const array = x.toString();
  const len = array.length;
  if(x < 0 || array[0] !== array[len-1]) 
    return false
  else {
    for(let i = 1; i < (len-1) / 2 + 1; i++) 
      if(array[i-1] !== array[Math.abs(i-len)]) 
        return false
    return true
  }
};
```

想知道更多關於: [toString](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/toString), [length](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
, [abs](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)


