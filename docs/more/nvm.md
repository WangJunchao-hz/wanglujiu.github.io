---
title: node版本管理(nvm for windows)
description: nvm for windows
meta:
 - name: keywords
   content: nvm,node版本管理
tags: 
 - nvm
 - node版本管理
 - 开发工具
---
# nvm for windows

## 下载与安装

[传送门](https://github.com/coreybutler/nvm-windows/releases)

安装前，这里有一点需要注意，如果以前安装过node，需要先卸载，并且要把目录清理干净。下面是官方给的说明：

>It comes with an installer (and uninstaller), because getting it should be easy. Please note, you need to uninstall any existing versions of node.js before installing NVM for Windows. Also delete any existing nodejs installation directories (e.g., "C:\Program Files\nodejs") that might remain. NVM's generated symlink will not overwrite an existing (even empty) installation directory.
>You should also delete the existing npm install location (e.g. "C:\Users\<user>\AppData\Roaming\npm") so that the nvm install location will be correctly used instead. After install, reinstalling global utilities (e.g. gulp) will have to be done for each installed version of node:

## 使用

**注意：** 为了防止`node`和`npm`安装失败，需要配置`node`和`npm`的下载地址指向淘宝的镜像，打开nvm安装路径下的settings.txt文件修改为：

>root: D:\works_install\nvm
>path: D:\works_install\node
>node_mirror: <https://npm.taobao.org/mirrors/node/>
>npm_mirror: <https://npm.taobao.org/mirrors/npm/>

## 查看当前已经安装的nodejs版本

``` shell
λ nvm ls

    10.7.0
  * 8.11.3 (Currently using 64-bit executable)
```

## 查看可以安装的nodejs版本

``` shell
λ nvm list available

| CURRENT | LTS    | OLD STABLE | OLD UNSTABLE |
| ------- | ------ | ---------- | ------------ |
| 10.8.0  | 8.11.3 | 0.12.18    | 0.11.16      |
| 10.7.0  | 8.11.2 | 0.12.17    | 0.11.15      |
| 10.6.0  | 8.11.1 | 0.12.16    | 0.11.14      |
| 10.5.0  | 8.11.0 | 0.12.15    | 0.11.13      |
| 10.4.1  | 8.10.0 | 0.12.14    | 0.11.12      |
| 10.4.0  | 8.9.4  | 0.12.13    | 0.11.11      |
| 10.3.0  | 8.9.3  | 0.12.12    | 0.11.10      |
| 10.2.1  | 8.9.2  | 0.12.11    | 0.11.9       |
| 10.2.0  | 8.9.1  | 0.12.10    | 0.11.8       |
| 10.1.0  | 8.9.0  | 0.12.9     | 0.11.7       |
| 10.0.0  | 6.14.3 | 0.12.8     | 0.11.6       |
| 9.11.2  | 6.14.2 | 0.12.7     | 0.11.5       |
| 9.11.1  | 6.14.1 | 0.12.6     | 0.11.4       |
| 9.11.0  | 6.14.0 | 0.12.5     | 0.11.3       |
| 9.10.1  | 6.13.1 | 0.12.4     | 0.11.2       |
| 9.10.0  | 6.13.0 | 0.12.3     | 0.11.1       |
| 9.9.0   | 6.12.3 | 0.12.2     | 0.11.0       |
| 9.8.0   | 6.12.2 | 0.12.1     | 0.9.12       |
| 9.7.1   | 6.12.1 | 0.12.0     | 0.9.11       |
| 9.7.0   | 6.12.0 | 0.10.48    | 0.9.10       |

This is a partial list. For a complete list, visit https://nodejs.org/download/release
```

## 安装指定版本的node

``` shell
λ nvm install 10.8.0
Downloading node.js version 10.8.0 (64-bit)...
Complete
Creating D:\works_install\nvm\temp

Downloading npm version 6.2.0... Download failed. Rolling Back.
Rollback failed. remove D:\works_install\nvm\temp\npm-v6.2.0.zip: The process cannot access the file because it is being used by another process.
Could not download npm for node v10.8.0.
Please visit https://github.com/npm/npm/releases/tag/v6.2.0 to download npm.
It should be extracted to D:\works_install\nvm\v10.8.0
```

报错了--！`npm`下载失败。

原因：因为上面用的是淘宝的镜像，安装的`10.8.0`是最新版本，淘宝的npm还没有收录，所以安装失败

解决：先找到nvm的安装路径，把10.8.0的文件夹彻底删除。然后安装其它版本的就OK了。

``` shell
λ nvm install 10.6.0
Downloading node.js version 10.6.0 (64-bit)...
Complete
Downloading npm version 6.1.0... Complete
Installing npm v6.1.0...

Installation complete. If you want to use this version, type

nvm use 10.6.0
```

安装成功，再次查看已安装的版本

``` shell
λ nvm ls

    10.7.0
    10.6.0
  * 8.11.3 (Currently using 64-bit executable)
```

## 使用指定版本的node

``` shell
λ nvm use 10.6.0
Now using node v10.6.0 (64-bit)

λ nvm ls

    10.7.0
  * 10.6.0 (Currently using 64-bit executable)
    8.11.3

λ npm -v
6.1.0
```

## 删除指定版本的node

``` shell
λ nvm uninstall 10.6.0
Uninstalling node v10.6.0... done

λ nvm ls

    10.7.0
  * 8.11.3 (Currently using 64-bit executable)
```
