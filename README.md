# 我的磨主题

> Bootstrap 风格的 Wodemo 主题

![](./image.png)

## 项目信息

- 作者：欧阳鹏
- 官方网站：https://apee.top
- 开发日期：2023 年 1 月 12 日

## 主题代码

- 主页模板：[`home.html`](./home.html)
- 文章页模板：[`page.html`](./page.html)
- 主页列表模板
    ```
    {wo.entry.title}
    {wo.entry.creation.timestamp}
    {wo.entry.url}
    ```

## 我的磨快速清空默认模板

将主页模板设置为如下内容即可：

```html
<style>
    .apee-wodemo-main~* {
        display: none !important;
    }
</style>
<div class="apee-wodemo-main">
    你的网页内容
</div>
```