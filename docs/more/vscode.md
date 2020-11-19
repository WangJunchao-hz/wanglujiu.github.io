---
title: vscode使用手册
description: vscode
meta:
 - name: keywords
   content: vscode
tags: 
 - vscode
 - 开发工具
---

# VisualStudioCode

前端开发利器

## 安装

下载地址[传送门](https://code.visualstudio.com/)

## 卸载

彻底卸载

> - `win + r` 打开运行
> - `%appdata%` 回车
> - 删除 `Code` 和 `Visual Studio Code` 文件夹
> - 地址栏输入 `%userprofile%` 回车
> - 删除 `.vscode` 文件夹

## 个性化配置

待更新...

## 常用插件安装

### Chinese (Simplified) Language Pack for Visual Studio Code

适用于 VS Code 的中文（简体）语言包

### ESLint

语法规范检测工具

```json
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
"eslint.validate": [
  "javascript",
  "vue",
  "html"
]
```

### StandardJS - JavaScript Standard Style

js Standard 规范

### Vetur

vue 代码片段工具

```json
"vetur.format.defaultFormatter.js": "none"
```

### HTML CSS Support

让 html 标签上写 class 智能提示当前项目所支持的样式

### Debugger for Chrome

让 vscode 映射 chrome 的 debug 功能，静态页面都可以用 vscode 来打断点调试

### vscode-icons

让 vscode 资源树目录加上图标

### Material Icon Theme

好看的 icons 主题

### Path Intellisense

自动路径补全

### koroFileHeader

在 vscode 中用于生成文件头部注释和函数注释的插件

```json
"fileheader.customMade": {
  "Description": "",
  "Author": "wangliang",
  "Date": "Do not edit"
}
```

### Atuo Rename Tag

修改 html 标签，自动帮你完成尾部闭合标签的同步修改

### Bracket Pair Colorizer

让括号拥有独立的颜色，易于区分。可以配合任意主题使用。

### IntelliSense for CSS class names

智能提示 css 的 class 名

### Image Preview

鼠标移到路径里显示图像预览

### JavaScript (ES6) code snippets

es6 代码片段

### markdownlint

markdown 语法检查

### One Dark Pro

长时间的编码，暗色调的编码环境更不容易让视力疲劳，而且也可以让自己更加专注。

### Code Spell Checker

单词拼写检查

### settings sync

同步vscode插件和配置

#### 获取 git token

- Settings -> Personal access tokens -> Generate new token
- Note:vscode-settings && Select scopes:gist -> Generate token
- 获得 token：`8f107e3efe916bfd2639c1ec57e6a193beefd2c4`

#### 获取 gist Id

- Your gists -> 新建gist -> 随便输 -> Create secret gist
- 在地址栏获得 gist Id: `a6fa20bed2e388f2efd5e45725c275a7`

#### 常用快捷键

- `shift+ctrl+p` 搜 `sync`
- `shift+alt+u` 上传
- `shift+alt+d` 下载

### Auto Close Tag

自动闭合标签

### Markdown All in One

Markdown 辅助工具

### Markdown Preview Enhanced

Markdown 实时预览
