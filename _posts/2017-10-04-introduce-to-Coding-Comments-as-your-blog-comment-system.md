---

title: 在你的博客中引入 Coding Comments
tags: [blog,coding.net,jekyll,comments]
categories: develop
date: "2017-10-04 11:35:42"
---

我司的[设计师小哥哥](https://coding.net/u/tankxu)做了个新的专题页： [https://coding.coding.me/Comments](https://coding.coding.me/Comments/)

~~先扔链接 [https://github.com/Coding/Comments](https://github.com/Coding/Comments)。~~

我认为静态博客是程序员展示自己的最好的地方。
无论是 [Github Pages](https://help.github.com/articles/what-is-github-pages/) 
还是 [Coding Pages](https://coding.net/help/doc/coding-service/coding-pages-introduction.html)，
都是通过 jekyll 编译静态页面，能实现『在线编写博客，在线展示』的工作流程。（比如此文就是如此。）
![图片](https://dn-coding-net-production-pp.qbox.me/6ebad592-66e5-4bbd-a189-323f5185f3f7.png)

然而我少了一个评论系统。

<!-- more -->

即使在国内统治级的第三方评论系统『多说』下线之际，其实也有很多[评论系统](https://blog.shuiba.co/comment-systems-recommendation)供君选用。

然而，总是感觉有这样那样的问题。
比如，服务器在国外速度慢时不时被墙我就不能忍。数据不归自己不能导出我也不能忍。
最难过的是，不知道什么时候，服务商就倒闭了。

其实基于 Github Issue 的 [gitment](https://github.com/imsun/gitment) 是一个很好很好的选择，惜之有点慢。
机缘巧合之下，我在 gitment 的基础上改出了 [Coding.net](https://coding.net) 版的 gitment —— [Coding Comments](https://github.com/Coding/Comments)。

有兴趣的同学们可以到那个项目看看，上面有 demo 有帮助有作为 example 的 commit。
我觉得有 jekyll/hexo theme 的折腾经历，把一个 Coding Comments 搞上线，也就是半小时之内的事情。

为了让更多人能用得上，我想给各个主题提供 Coding Comments 的插件支持。
以及提供一个支持 Coding Comments 的主题列表。
