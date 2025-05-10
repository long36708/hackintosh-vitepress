# CPB 睿频

core performance boost

bios 默认值为auto 修改为disabled保存退出

## [变频] 五代及以下CPU Sonoma14.4睿频
https://bbs.pcbeta.com/viewthread-1995640-1-1.html

此教程是针对五代及以下CPU无法睿频的问题，先用ssdtPRGen.sh生成CPU电源管理文件，如添加并启用后仍无法睿频，请添加AppleIntelCPUPowerManagement.kext和AppleIntelCPUPowerManagementClient.kext驱动，感谢7楼提供的驱动文件。@guhaitao
工具下载地址：https://share.weiyun.com/BloG94yb

具体操作如下：
点击前往选择转到入输~/library回车复制ssdtPRGen文件夹到打开的文件夹，然后在终端执行以下命令。
1、chmod +x ~/library/ssdtPRGen/ssdtPRGen.sh
2、~/library/ssdtPRGen/ssdtPRGen.sh -target 0  二代CUP
~/library/ssdtPRGen/ssdtPRGen.sh -target 1  三代CUP
~/library/ssdtPRGen/ssdtPRGen.sh -target 2  四代CUP
~/library/ssdtPRGen/ssdtPRGen.sh -target 3  五代CUP
执行完成后点击前往选择转到入输~/library回车，进入ssdtPRGen文件夹复制生成的SSDT.aml文件到ACPI文件夹并启用。
