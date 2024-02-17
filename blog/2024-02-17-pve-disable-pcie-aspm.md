---
title: "Proxmox 中关闭 pcie_aspm"
tags: [pve, bug]
categories: 
  - development
date: "2024-02-17 21:04:25"
---

## TL;DR
1. 更新 `/etc/kernel/cmdline`，在最后追加 `pcie_aspm=off`
2. 执行 `proxmox-boot-tool refresh`

## 起因
在零刻 SER7 上全新安装的 Proxmox VE8 持续在报错，看着烦，不知道是否跟长江存储的 Ti600 nvme 有关。报错关键词:
```
AER: Corrected error received
```

在 proxmox 论坛上看到有[同样问题的帖子](https://forum.proxmox.com/threads/aer-corrected-error-received-should-i-be-worried.127067/)，看着是 linux 内核与 nvme 的智能省电模式有关，可能版本太新了有协议上的问题。
给出的解决方案是关闭 `pcie_aspm`，或者升级 BIOS。BIOS 看起来升级未必能解，通过开机在 grub 时增加 `pcie_aspm=off` 验证有效，但添加到 `/etc/default/grub` 中时，死活没效果。

## 解决
觉察到 `update_grub` 给出的提示，proxmox 是自行管理 boot 的，并未使用 grub（或者是覆盖了？），按这个方向一阵搜索，找到一个[帖子说明了 proxmox 换了一个地方配置启动命令](https://forum.proxmox.com/threads/mitigations-off-with-proxmox-boot-tool-how.98451/)。

按帖子说明，linux 内核启动命令被迁移到 `/etc/kernel/cmdline` 了，修改之在最后追加 `pcie_aspm=off`，并执行 `proxmox-boot-tool refresh` 即可。
