---
title: "安利使用 Tailscale 建设虚拟专用网"
tags: [tailscale, vpn, proxy]
categories: 
  - development
date: "2024-01-20 15:44:00"
---

之前在内网穿透场景，默认使用 ssh 和 [frp](https://github.com/fatedier/frp) 的方式进行，frp 的使用其实是挺便利了。
使用 VPN 来实现内网穿透有点杀鸡用牛刀了，最近无事尝试使用 [Tailscale](https://tailscale.com/) 把我的几个常用服务器串到一个内网上。
尝试过程很顺利，设备添加丝滑。要注意的地方：

- macOS 上使用 brew services 运行服务，需要使用 sudo 进行。即 `sudo brew services start tailscale`
- 广播节点为流量出口后，需要在[控制面](https://login.tailscale.com/admin/machines)进行配置打开，之后其他 client 可以使用该节点作为流量出口
- 手机上国区无法下载 app，需要切海外

手机（iphone）上能轻松登陆，然后选择一个节点作为流量出口，体验 vpn 代理能力。

![my devices](/img/blog/screenshot-20240120-155441.png)
![connected](/img/blog/screenshot-20240120-215500-7987C320-1355-4573-91BA-97C3798B00D0_1_102_o.jpeg)