---
layout: $/layouts/post.astro
title: Exponential Function Using Recursion
date: 2022-01-08 03:46:31
tags: 
    - c
    - c++
description: 使用遞迴實現指數函數方法
---


```c
double e(int m, int n){
    double r;
    static double p = 1, f = 1;
    if (n==0) {
        return 1;
    } else {
        r = e(m, n-1);
        p = p*m;
        f = f*n;
        return r + p/f;
    }
}

int main(int argc, const char * argv[]) {
    printf("%lf\n", e(1,10));
    return 0;
}

```

Use horner's rule
===
```c
double e(int m, int n){
    static double s = 1;
    if(n==0){
        return s;
    } else {
        s = 1 + m*s/n;
        return e(m, n-1);
    }
}

int main(int argc, const char * argv[]) {
    printf("%lf\n", e(1,10));
    return 0;
}
```

Output
===
```bash
2.718282
Program ended with exit code: 0
```