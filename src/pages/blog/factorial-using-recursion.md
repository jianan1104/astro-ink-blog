---
layout: $/layouts/post.astro
title: Factorial Using Recursion
date: 2022-01-06 00:05:19
tags:
  - c
  - c++
description: 使用遞迴實現階乘運算
---


```c
#include <stdio.h>

int factorial(int n){
    if (n==0) {
        return 1;
    } else {
        return factorial(n-1)*n;
    }
}

int main(int argc, const char * argv[]) {
    int num = 5;
    printf("%d\n", factorial(num));
    return 0;
}

```