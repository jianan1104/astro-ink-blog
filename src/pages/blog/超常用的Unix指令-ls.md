---
layout: $/layouts/post.astro
title: 超常用的Unix指令-ls
date: 2021-11-25 01:06:34
tags: 
  - windows
  - mac
  - unix
  - bash
description: Unix指令-顯示指定目錄下的檔案清單與訊息
---


> 不管是什麼類型的工程師，都必須跟終端機(Terminal)好好相處，查看目錄`ls`我想是大家第一個學的Unix指令，以下是我常用的用法。



ls 基本用法
===

```bash
$ ls 
```
![ls 基本用法](/images/uploads/f69b45f945fc1f1306866ea973ca61eeb4508d0364038697045f2462ba1cb700.png)  


以清單模式顯示
===
```bash
$ ls -l
```
![以清單模式顯示](/images/uploads/00a6c6f865c97f6b6a43fc90df4c9f183d20a3c3dda5099ffe1b4bad8e7fb2d5.png)  


顯示隱藏檔案
===
```bash
$ ls -a
```
![顯示隱藏檔案](/images/uploads/deefc4eb3c3e957ef3a193b80904e99521153b1a287b2bdcd1a689ee40df88e4.png)  

以時間排序
===
```bash
$ ls -ltr
```
![以時間排序](/images/uploads/16119d3502a26a2108c7eccef4fe8ffed7d2aec790d4ec8a6b922212b3ac9da7.png)  

以檔案大小排序
===
```bash
$ ls -lS
```
![以檔案大小排序](/images/uploads/34eadbfa2e1241f59eb0a8f1dfc64e6fbc2764632371c9e2bb9437503a1ef15a.png)  


想知道更多關於: [ls](https://man7.org/linux/man-pages/man1/ls.1.html)

