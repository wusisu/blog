---
title: "安利使用 Tailscale 建设虚拟专用网"
tags: [tailscale, vpn, proxy]
categories: 
  - development
date: "2024-01-20 15:44:00"
---

之前在内网穿透场景，默认使用 ssh 和 [frp](https://github.com/fatedier/frp) 的方式进行，frp 的使用其实是挺便利了。
使用 VPN 来实现内网穿透有点杀鸡用牛刀了，最近无事尝试使用 [Tailscale](https://tailscale.com/) 把我的几个常用服务器串到一个内网上。
尝试过程很顺利，设备添加丝滑。仅有一点要注意：
macOS 上使用 brew services 运行服务，需要使用 sudo 进行。即 `sudo brew services start tailscale`

手机（iphone）上也能顺利组网，但是没有提供代理服务，看情况是需要自行再建一个 proxy 向内网提供服务。但 tailscale 已经占据了 vpn 渠道，也不清楚 proxy 如何进行全局配置。

![my devices](/img/blog/screenshot-20240120-155441.png)
