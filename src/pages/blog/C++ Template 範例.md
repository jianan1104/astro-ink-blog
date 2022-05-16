---
title: C++ Template 範例
description: C/C++ Template 範例，實現不同變數類型的簡單加減法
tags:
  - c/c++
author: Jian-An, Lin
authorTwitter: linjianan_1104
date: 2022-01-06 22:52:55
---
```cpp
#include <iostream>
using namespace std;

template<class T>
class math {
    private:
        T a;
        T b;
    public:
        math(T a, T b);
        T add();
        T sub();
};

template<class T>
math<T>::math(T a, T b){
    this->a = a;
    this->b = b;
};
template<class T>
T math<T>::add(){
    return a + b;
};
template<class T>
T math<T>::sub(){
    return a - b;
};

int main(int argc, const char * argv[]) {
    math<int> m1(10,5);
    math<float> m2(2.5,0.5);
    cout << m1.add() << endl << m1.sub() << endl;
    cout << m2.add() << endl << m2.sub() << endl;
    return 0;
}
```