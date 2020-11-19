---
title: npm镜像管理(nrm)
description: npm镜像管理工具
meta:
 - name: keywords
   content: nrm,npm镜像管理
tags: 
 - nrm
 - npm镜像管理
 - 开发工具
---
# nrm

## 安装nrm

`npm install -g nrm`

## 查看可用镜像

`nrm ls`

``` shell
λ nrm ls

  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

## 切换镜像

`nrm use taobao`

``` shell
λ nrm use taobao


  Registry has been set to: https://registry.npm.taobao.org/
```
