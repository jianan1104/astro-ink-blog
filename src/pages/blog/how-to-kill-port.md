---
layout: $/layouts/post.astro
title: 如何終止當前使用本地主機上的端口的進程
date: 2021-11-22 00:00:00
tags: 
    - devops
    - bash
description: 在進行本地開發時，需要透過本地端口建立伺服器連線進行預覽或測試，碰到端口(port)佔用時該如何解決呢？
---

:::tip 發生什麼事？
在進行本地開發時，需要透過本地端口建立伺服器連線進行預覽或測試，碰到端口(port)佔用時該如何解決呢？
:::

### For Windows user

#### Step 1 找到佔用此端口的進程PID

``` bash
$ netstat -ano | findstr:PortNumber
```

想知道更多關於: [netstat](https://docs.microsoft.com/zh-tw/windows-server/administration/windows-commands/netstat)、[findstr](https://docs.microsoft.com/zh-tw/windows-server/administration/windows-commands/findstr)

#### Step 2 清除該進程

``` bash
$ taskkill /PID typeyourPIDhere /F
```

想知道更多關於: [taskkill](https://docs.microsoft.com/zh-tw/windows-server/administration/windows-commands/taskkill)

### For Unix user

#### Step 1 找到佔用此端口的進程PID

``` bash
$ lsof -i:PortNumber 
```

想知道更多關於: [lsof](https://man7.org/linux/man-pages/man8/lsof.8.html)

#### Step 2 清除該進程

``` bash
$ kill typeyourPIDhere 
```

想知道更多關於: [kill](https://man7.org/linux/man-pages/man1/kill.1.html)


