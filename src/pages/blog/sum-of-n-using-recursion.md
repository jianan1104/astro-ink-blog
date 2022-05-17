---
layout: $/layouts/post.astro
title: Sum of N Using Recursion
date: 2022-01-03 20:59:59
tags:
  - c
  - c++
description: 使用遞迴實現總和運算
---

```c
#include <stdio.h>

int sum(int n){
    if (n==0) {
        return 0;
    } else {
        return sum(n-1)+n;
    }
}

int main(int argc, const char * argv[]) {
    int num = 5;
    printf("%d ", sum(num));
    return 0;
}
```