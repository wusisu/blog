(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{537:function(s,e,a){"use strict";a.r(e);var t=a(4),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("想搭建自己的 vpn 和 ss 吗？")]),s._v(" "),a("h2",{attrs:{id:"ss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ss"}},[s._v("#")]),s._v(" SS")]),s._v(" "),a("p",[s._v("[1] https://teddysun.com/342.html")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget --no-check-certificate -O shadowsocks.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh\nchmod +x shadowsocks.sh\n./shadowsocks.sh 2>&1 | tee shadowsocks.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("即可。")]),s._v(" "),a("h2",{attrs:{id:"vpn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vpn"}},[s._v("#")]),s._v(" VPN")]),s._v(" "),a("p",[s._v("[2] https://quericy.me/blog/860/\n[3] https://github.com/quericy/one-key-ikev2-vpn")]),s._v(" "),a("h3",{attrs:{id:"看自己是什么虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#看自己是什么虚拟机"}},[s._v("#")]),s._v(" 看自己是什么虚拟机")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/code/master/vm_check.sh && bash vm_check.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"用-acme-sh-来做申请-ssl-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-acme-sh-来做申请-ssl-key"}},[s._v("#")]),s._v(" 用 acme.sh 来做申请 ssl key")]),s._v(" "),a("h4",{attrs:{id:"安装-acme-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-acme-sh"}},[s._v("#")]),s._v(" 安装 acme.sh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl https://get.acme.sh | sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("需要重新登录或者重加载配置，以使用 acme.sh 快捷命令")]),s._v(" "),a("h4",{attrs:{id:"申请-ssl-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#申请-ssl-key"}},[s._v("#")]),s._v(" 申请 ssl key")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("acme.sh --issue --standalone -d hk.wusisu.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"用-one-key-ikev2-vpn-来部署-vpn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-one-key-ikev2-vpn-来部署-vpn"}},[s._v("#")]),s._v(" 用 one-key-ikev2-vpn 来部署 vpn")]),s._v(" "),a("h4",{attrs:{id:"拷贝-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝-key"}},[s._v("#")]),s._v(" 拷贝 key")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cp ~/.acme.sh/hk.wusisu.com/{ca.cer hk.wusisu.com.cer hk.wusisu.com.key} .\nmv ca.cer ca.cert.pem\nmv hk.wusisu.com.cer server.cert.pem\nmv hk.wusisu.com.key server.pem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"一键安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键安装"}},[s._v("#")]),s._v(" 一键安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget --no-check-certificate https://raw.githubusercontent.com/quericy/one-key-ikev2-vpn/master/one-key-ikev2.sh\nchmod +x one-key-ikev2.sh\nbash one-key-ikev2.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"设置自己-renew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置自己-renew"}},[s._v("#")]),s._v(" 设置自己 renew")]),s._v(" "),a("h4",{attrs:{id:"key-renew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-renew"}},[s._v("#")]),s._v(" key renew")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("acme.sh --days 30 --renew --standalone -d hk.wusisu.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"编辑-cp-key-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑-cp-key-sh"}},[s._v("#")]),s._v(" 编辑 cp_key.sh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#! /bin/bash\ncert_file="/root/.acme.sh/hk.wusisu.com/hk.wusisu.com.cer"\nkey_file="/root/.acme.sh/hk.wusisu.com/hk.wusisu.com.key"\n\nsudo cp -f $cert_file /usr/local/etc/ipsec.d/certs/server.cert.pem\nsudo cp -f $key_file /usr/local/etc/ipsec.d/private/server.pem\nsudo cp -f $cert_file /usr/local/etc/ipsec.d/certs/client.cert.pem\nsudo cp -f $key_file /usr/local/etc/ipsec.d/private/client.pem\nsudo /usr/local/sbin/ipsec restart\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"编辑-crontab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑-crontab"}},[s._v("#")]),s._v(" 编辑 crontab")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("crontab -e\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("加一行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("59 02 1 * * bash /root/cp_key.sh > /dev/null\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);