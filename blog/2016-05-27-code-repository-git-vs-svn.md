---

title: 代码仓储（git vs svn)
date: 2016-05-27 15:46:38
categories: 
  - development
tags: [git,svn,collaboration]
---

个人感觉git比起svn有着太多的优势了。
本文议论一下git和svn，以及团队协作的开发模式。
<!-- more -->

## SVN开发模式
在CVS年代，甚至到SVN的年代，许多中小型开发团队的开发流程是这样的：
[这个](http://blog.sina.com.cn/s/blog_6168c7aa0101ph0q.html)说得挺清楚的。
一般有两种开发方式。

### 集中式开发
1. 开始一天新的开发工作，打开电脑，从trunk中同步所有代码到本地。
2. 改改改。
3. 差不多1个小时了，这个过程没写完，先这样吧能编译就行，开始提交版本。
4. 同步trunk到本地，解决conflict，上传。
5. 看看离下班还有多久，大于30分钟则去2。
6. 晃到下班走人。

### 分散式开发
1. 新功能开发，分配任务。分配到任务qqq。
2. 创建从trunk中检出（checkout）所有文件到本地；创建branches/dev_1.1.2_qqq文件夹，提交所有文件到该文件夹（于是创建了分支，是copy过去的）。
3. 改改改。
4. 提交到branches/dev_1.1.2_qqq。
5. 完成qqq了吗？没有则跳转到3。
6. 合并branches/dev_1.1.2_qqq到trunk，解决所有冲突问题。
7. 中途随时下班可以upload所有东西到branches/dev_1.1.2_qqq，随时上班可以从branches/dev_1.1.2_qqq同步所有东西下来。


## svn与git的区别
感觉其实跟使用git差不了太多是吧？
看看这篇[my-git](https://github.com/xirong/my-git/blob/master/why-git.md)。

我觉得其中最大的区别是：
1. 内容控制git是以“行”为单位的，更关注变化；而svn是以文件为单位的，更关注区别；所以svn更容易[产生冲突](http://blog.csdn.net/windone0109/article/details/4857044)（好像就没办法auto merge好么！）。
2. git（和hg）是分布式仓储，而svn（和cvs）是集中式的。什么意思呢？那是svn所有的提交检出操作，都是联网进行的，都是跟服务器通信的，没有本地仓储。
3. 速度。

### 冲突
你看看刚刚[这个博客](http://blog.csdn.net/windone0109/article/details/4857044)里怎么写的：
>如何降低冲突解决的复杂度：
1、当文档编辑完成后，尽快提交，频繁的提交/更新可以降低在冲突发生的概率，以及发生时解决冲突的复杂度。
2、在提交时，写上明确的message，方便以后查找用户更新的原因，毕竟随着时间的推移，对当初更新的原因有可能会遗忘
3、养成良好的使用习惯，使用SVN时每次都是先提交，后更新。每天早上打开后，首先要从版本库获取最新版本。每天下班前必须将已经编辑过的文档都提交到版本库。

就是提交、提交、提交！更新、更新、更新！
很容易就改同一个文件好不好！
只要改同一个文件就是冲突！
是冲突就得自己处理！

#### 注意
不过实际上，git merge的时候，如果同样两个文件被修改，即使合并成功了，也应该自己评审一遍。
因为自动合并是会出问题的，比如[由苹果的低级Bug想到的](http://coolshell.cn/articles/11112.html)这篇文章。
自动合并是基于文本(行)而不是基于语法，所以有可能发生上述问题。

不管怎样，自动合并简直就是神器！！快谢谢它。

### 集中式 vs 分布式 仓储
git在刚刚学习的时候觉得很奇怪，working directory是什么啊，local repository是什么啊，checkout 和 pull 还有merge又是什么鬼！
的确这个比svn的commit/update复杂一点点，那是因为这相当于在本地架设了一个svn服务器，并提供了简单灵活的同步管理工具好不好！

有人觉得集中式仓储还是有好处的，比如代码安全性，防盗啊！
难道svn就不能盗走了吗？我有朋友的亲戚公司的代码被程序员删了走人的。离职前把代码拷走更是正常不过。
说真的，防抄袭这种事情只能靠程序员的个人职业操守、和签署的非竞协议。

本地分支啊，多爽啊！

对，还没说到重点
#### 重点
重点是，一旦连不上svn服务器你就傻逼了。在公司万一svn服务器一卡一断网，就可以喝咖啡放假了。更别提什么回家写、咖啡厅图书馆写、边做火车边写什么的。
你checkout一个代码，等通过svn服务器；提交一个代码，得通过svn服务器；查一个日志，得通过svn服务器；对比一个改动，得通过svn服务器。
而且，就算在公司局域网里，svn操作也非、常、慢！

## 集中式 vs 分散式 开发
不管是git还是svn，都有集中式和分散式开发方式的区别。（其实这里分散式和分布式是一个意思，我沿用某篇引用博客的说法，而他使用这个说法估计是为了不要引起误解）

我是强烈推荐分散式开发的，正如我强烈推荐分布式代码管理一样。
当然我不认为“各自开发3个月，然后凑在一起试一下，然后合并代码”是对的。
分散式开发中，一个临时开发分支的生命周期应该是几小时至几天不等。如果一个临时开发分支需要存活十几天甚至一两个月的话，考虑拆分任务。

正因为分散式开发对分支高度的需求，使得分布式仓储对比集中式仓储有着极大的优势。

## 速度
git的速度大大大于svn的速度，具体原因涉及其具体实现，不解释。
git支持本地文件、ssh、git、http四种协议，口味很广。

## 二进制
我们现在更多的是git。git关注于文本文件的变化，它的观察是以“行”为单位的。
通常我不希望在我们的git仓储中带上二进制文件如：doc、jpg、png、gif、mp3、avi等，甚至是pdf。（希望用html或者md来代替）
CVS和SVN对文本文件和二进制文件的口味比较不挑，经常研发经理会把编译好的安装包，服务器打包文件，文档（doc+jpg），甚至连一些需要预安装的库和程序也打包进来，仓储起来。
似乎是因为git不管你二进制的东西是什么，它都会帮你压缩一遍，而像刚刚说的jpg、mp3，还有一些个zip、mkv等文件是压不了多少空间的，压缩反倒浪费时间。
这里涉及其设计哲学。git设计者认为你就不应该往这里扔大的文件，不是我不对，是你不会用。git主要面向文本文件（最好是源码）、以及小文件（比如小于10kb）。
而二进制文件，你不压怎么知道压不压地动呢？那些个压不动的文件之所以压不动，那是因为他们已经被压过了。
压过的文件你就更不应该往git里传了。

似乎这里svn还有点用，可以用来放文档、压缩包、安装包（安装包也自动被压过的）啊！
但是[lfs](https://git-lfs.github.com/)一出，就没svn什么事了，除非那些懒得学lfs的。（我有空研究一下lfs）

## 适用性
基于文本文件的项目，都应该考虑git。
git更强于移动开发。
强于大规模项目。
强于超小型项目。

svn只适用于中小型项目组，而且他们懒得学git的。
或者设计师什么的，而且他们的作品都是二进制的那种。

而且svn还得自己买研发服务器，否则网一卡你就哭。
