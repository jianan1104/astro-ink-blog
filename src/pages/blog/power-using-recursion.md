---
layout: $/layouts/post.astro
title: Power Using Recursion
date: 2022-01-06 22:42:33
tags:
  - c
  - c++
description: 使用遞迴實現次方運算
---



```c
int power(int m, int n){
   if(n==0)
       return 1;
   else
       return power(m, n-1)*m;
}

int main(int argc, const char * argv[]) {
    printf("%d\n", power(2, 5));
    return 0;
}

```

Faster solution
===
```c
int power(int m, int n){
    if(n==0)
        return 1;
    if(n%2==0)
        return power(m*m, n/2);
    else
        return m*power(m*m, (n-1)/2);
}

int main(int argc, const char * argv[]) {
    printf("%d\n", power(2, 5));
    return 0;
}
```