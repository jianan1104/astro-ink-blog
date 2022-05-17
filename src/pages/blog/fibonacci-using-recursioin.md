---
layout: $/layouts/post.astro
title: Fibonacci Using Recursioin
date: 2022-01-09 23:58:38
tags:
  - c
  - c++
description: 使用遞迴實現斐波那契函數
---
---


```c
#include <stdio.h>

int Fibo(int n){
   if(n<=1)
       return n;
   else
       return Fibo(n-2) + Fibo(n-1);
}

int main(int argc, const char * argv[]) {
    for(int i=0;i<10;i++)
        F[i] = -1;
    printf("%d\n", Fibo(5));
    return 0;
}

```

Using memorisation
===
```c
#include <stdio.h>

int F[10];
int Fibo(int n){
    if (n<=1) {
        F[n] = n;
        return F[n];
    } else {
        if(F[n-2] == -1)
            F[n-2] = Fibo(n-2);
        if(F[n-1] == -1)
            F[n-1] = Fibo(n-1);
        return F[n-2] + F[n-1];
    }
}
int main(int argc, const char * argv[]) {
    for(int i=0;i<10;i++)
        F[i] = -1;
    printf("%d\n", Fibo(5));
    return 0;
}

```