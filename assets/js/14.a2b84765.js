(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{512:function(s,t,e){"use strict";e.r(t);var r=e(4),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("一直觉得架设更新源是很牛逼的事情，放google一下才发现加起来就两分钟的操作，然后等就行了。\n")]),s._v(" "),e("p",[s._v("我是按着"),e("a",{attrs:{href:"http://diandian.db89.org/post/2012-07-27/ubuntu-source-update",title:"ubuntu12.04本地搭建ubuntu更新源",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),e("OutboundLink")],1),s._v("来搞的。")]),s._v(" "),e("p",[s._v("其实我就这样转发一下链接应该也就差不多了，但若真的如此，我的博客就白花心思去架设了。我还是把我的操作说一下，给大伙儿做个印证。")]),s._v(" "),e("p"),s._v(" "),e("p",[s._v("首先是获取更新源镜像的过程：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apache2 apt-mirror\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/apt/mirror.list\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-mirror\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("我先打印一下我的mirror.list:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" nthreads "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" _tilde "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndeb-i386 http://mirrors.ustc.edu.cn/ubuntu precise main restricted universe multiverse\ndeb-i386 http://mirrors.ustc.edu.cn/ubuntu precise-security main restricted universe multiverse\ndeb-i386 http://mirrors.ustc.edu.cn/ubuntu precise-updates main restricted universe multiverse\nclean http://mirrors.ustc.edu.cn/ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("安装apt-mirror之后，在/etc/apt/下就会有一个可以使用的配置文件存在，不过我们一般要自行进行少许配置的。比如说我使用的源就是用ubuntu软件中心帮我测速得到的地址，这里少说要60G的，自然是越快越好。我因为暂时用的都是32位机子，所以配置的都是deb-i386，deb指的是64位，deb-src则是源码包。")]),s._v(" "),e("p",[s._v("按我的配置，运行apt-mirror之后，它会发出20个线程去wget各个目标文件，然后要下60G左右的deb包。正在挂着的时候，跑上来写个日志，现在跑到1G了。嗯，看某文件夹的大小是这样：")]),s._v(" "),e("blockquote",[e("p",[s._v("du -sh /var/spool/apt-mirror")])]),s._v(" "),e("p",[s._v("完成之后，在/var/spool/apt-mirror的3个目录下，各会有个mirrors.ustc.edu.cn文件夹，把这个文件夹用apache2映射到http上，便可以成为ubuntu源了。apache2的配置也不复杂，会在以后献上。")])])}),[],!1,null,null,null);t.default=n.exports}}]);