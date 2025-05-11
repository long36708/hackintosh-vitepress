# index

## [CLOVER] XPS15 9570 FHD OC 0.5.8

https://bbs.pcbeta.com/forum.php?mod=viewthread&tid=1856387

搬运来自github
https://github.com/jaromeyer/XPS9570-Catalina

做了少许修改
1、修改BIOS设置关闭了cfg lock 关闭了OC配置中AppleCpuPmCfgLock 及AppleXcpmCfgLock这2项来使用原生的电源管理
方法参考 https://bbs.pcbeta.com/viewthread-1855590-1-1.html

2、将无法驱动的读卡器用SSDT屏蔽了（SSDT-RP05.PXSX-disbale.aml）

3、将部分kext升级至最新版

4、smbios信息补充完整

此引导比之前的Clover 修复了睡眠掉电问题 睡一个晚上0~1% (97Wh大容量电池)

## XPS15 9570 解锁cfg lock开启原生电源管理 
https://bbs.pcbeta.com/viewthread-1855590-1-1.html

众所周知在intel4代以后 主板上cfg lock这个选项基本默认都是开启状态 导致需要在Clover或者OC中开启内核补丁才能顺利启动macOS XPS15 9570这个笔记本也不例外 默认cfg lock也是开启状态的 且在BIOS设置中没有该项的设置 这就需要我们通过第三方的工具来解锁cfg lock了。用第三方工具解锁cfg lock的前提是你必须知道cfg lock的这个设置项在BIOS中的位置代号 也就是偏移量
幸运的是 在gihub上已经有人提取出了 XPS15 9570的所有BIOS选项的偏移量
https://github.com/jaromeyer/XPS9570-Firmware-IFR
该文件对应的BIOS版本为1.15.0
在正式开始修改之前确认下BIOS版本极其重要请务必确认 以免修改BOIS后机器变砖
在确认完你的BIOS版本为1.15.0后就可以进行下一步了
准备一个U盘格式化为fat32 在U盘中建立如下结构的文件夹：EFI\BOOT\
在BOOT下放入用于修改BIOS的grub启动文件：modGRUBShell.efi
把modGRUBShell.efi更改文件名为bootx64.efi
这样一个可用于启动到修改BIOS环境的U盘就制作好了
XPS15 9570这个本本有些特别无法在默认的BIOS设置下直接启动到U盘里的环境
需要在开机出现dell logo的时候按下F12 然后将引导模式改为传统模式+安全启动关闭

## ‌RTS525A 网卡 PCI Express Card Reader
‌RTS525A是一款USB无线网卡，由Realtek公司生产‌。

它支持802.11n标准，传输速率可达150Mbps，适用于笔记本电脑和台式机，提供稳定的无线连接。

该网卡采用USB接口，安装方便，适合需要高速无线连接的用户使用‌
https://github.com/0xFireWolf/RealtekCardReader/
## kextupdater
https://github.com/MacThings/kextupdater/

## 生成自己的CPU变频数据
- 生成自己的CPU变频数据 [one-key-cpufriend](https://github.com/stevezhengshiqi/one-key-cpufriend)
- 开启HIDPI [one-key-hidpi](https://github.com/xzhih/one-key-hidpi)
- 修复深度睡眠、定制USBPort [Hackintool](https://github.com/headkaze/Hackintool/releases)
- 若无法登录 iMessage、FaceTime：1.[内建网卡](https://github.com/daliansky/OC-little/tree/master/13-%E4%BB%BF%E5%86%92%E4%BB%A5%E5%A4%AA%E7%BD%91%E5%92%8C%E9%87%8D%E7%BD%AE%E4%BB%A5%E5%A4%AA%E7%BD%91BSD%20Name)、2.修改 PlatformInfo，修改前请务必退出当前AppleID，否则账号将可能被拉黑
  > 用默认序列号可以登录的就不要再折腾了，用 OC 版全新安装完一般都可以登录的，无法登录很可能是账号被拉黑了）
    
