
##### 廖雪峰教程
-  https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013743256916071d599b3aed534aaab22a0db6c4e07fd0000

#####首先这里再明确一下，所有的版本控制系统，其实只能跟踪文本文件的改动，比如TXT文件，网页，所有的程序代码等等，Git也不例外。版本控制系统可以告诉你每次的改动，比如在第5行加了一个单词“Linux”，在第8行删了一个单词“Windows”。而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从100KB改成了120KB，但到底改了啥，版本控制系统不知道，也没法知道

#####创建版本库并添加文件：
- 创建：
  1. 创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：
  ```
  $ mkdir learngit
  $ cd learngit
  $ pwd

  pwd命令用于显示当前目录。在我的Mac上，这个仓库位于/Users/michael/learngit。
  ```
  2. 通过git init命令把这个目录变成Git可以管理的仓库:
  ```
  $ git init
  ```
- 添加文件（包括提交改动后的已有的文件）：
- 一定要放到learngit目录下（子目录也行），因为这是一个Git仓库，放到其他地方Git再厉害也找不到这个文件。

- 和把大象放到冰箱需要3步相比，把一个文件放到Git仓库只需要两步。
  1.用命令git add告诉Git，把文件添加到仓库：
  ```
  $ git add readme.txt
  ```
  2. 用命令git commit告诉Git，把文件提交到仓库
  ```
  $ git commit -m "wrote a readme file"
  ```
  -m后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录
##### 查看修改状况和内容：
- 要随时掌握工作区的状态，使用git status命令
- 如果git status告诉你有文件被修改过，用git diff可以查看修改内容。
##### git add 命令添加所有改动内容
-
git add xx命令可以将xx文件添加到暂存区，如果有很多改动可以通过 git add -A .来一次添加所有改变的文件。

注意 -A 选项后面还有一个句点。 git add -A表示添加所有内容， git add . 表示添加新文件和编辑过的文件不包括删除的文件; git add -u 表示添加编辑或者删除的文件，不包括新添加的文件。
##### 版本回退
- 查看提交日志：
```
$ git log
```
简明版：
```
$ git log --pretty=oneline
```
- 在Git中，用HEAD表示当前版本
- 回退：
首先，Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，也就是最新的提交3628164...882e1e0（注意我的提交ID和你的肯定不一样），上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
```
$ git reset --hard HEAD^
```
- 前进：
找到那个append GPL的commit id是3628164...，于是就可以指定回到未来的某个版本
```
$ git reset --hard 3628164
```
- 寻找由于关机等原因消失的版本号：
git reflog用来记录你的每一次命令， 该命令输入后可以

##### 工作区和暂存区
- 工作区（Working Directory）： 在电脑里能看到的目录
- 版本库（Repository）：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库
- git add把文件添加进去，实际上就是把文件修改添加到暂存区
- git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支（提交到版本库）
- 一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的：
```
$ git status
# On branch master
nothing to commit (working directory clean)
```

##### 管理修改
- 第一次修改 -> git add -> 第二次修改 -> git commit:
第一次修改被放入暂存区，准备提交，但是，在工作区的第二次修改并没有放入暂存区，所以，git commit只负责把暂存区的修改提交了，也就是第一次的修改被提交了，第二次的修改不会被提交。

- **提交后，用git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别：**

- 那怎么提交第二次修改呢？你可以继续git add再git commit，也可以别着急提交第一次修改，先git add第二次修改，再git commit，就相当于把两次修改合并后一块提交了：

第一次修改 -> git add -> 第二次修改 -> git add -> git commit
##### Git 比较不同版本文件差异的常用命令格式：
-
```
git diff                                       查看尚未暂存的文件更新了哪些部分, 也可以比较有冲突两个分支的差别

git diff filename 查看尚未暂存（git add）的某个文件和暂存的最新文件相比更新了哪些

git diff –-cached                    查看已经暂存起来的文件和上次提交的版本之间的差异

git diff --cached filename 查看已经暂存起来的某个文件和上次提交的版本之间的差异

git diff ffd98b291e0caa6c33575c1ef465eae661ce40c9 b8e7b00c02b95b320f14b625663fdecf2d63e74c 查看某两个版本之间的差异

git diff ffd98b291e0caa6c33575c1ef465eae661ce40c9:filename b8e7b00c02b95b320f14b625663fdecf2d63e74c:filename 查看某两个版本的某个文件之间的差异
```

##### 撤销修改
- 丢弃工作区的修改： git checkout -- file
- 丢弃暂存区的修改： git reset HEAD file
- 丢弃版本库（Repository）的修改：参见上面版本回退的部分

##### 删除文件
- 删除也是一个修改操作
- 从文件面板和工作区删除：
```
$ rm file
```
- 确认完全删除：把版本库中的也删除掉
```
1. $ rm file
2. git commit
```
- 后悔了，想恢复删除：
```
1. $ rm file
2. $ git checkout -- file
```
##### 添加到远程仓库
1. github创建远程仓库： Repository name和本地file name相同
2. 把本地仓库的内容推送到GitHub仓库：
- 关联本地和github，在本地仓库运行：
```
git remote add origin git@github.com:zy15662@UNUK/filename.git
```
- 把本地库的所有内容推送到远程库：
```
$ git push -u origin master
```
由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。
3. 把本地master分支的最新修改推送至GitHub:
```
$ git push origin master
```
##### 从远程库克隆
-
```
$ git clone git@github.com:zy15662UNUK/gitRepoName.git
```
##### 创建与合并分支
- https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840038939c291467cc7c747b1810aab2fb8863508000
- 每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支

- 每次提交，master分支都会向前移动一步，这样，随着你不断提交，master分支的线也越来越长
- 当我们创建新的分支，例如dev时，Git新建了一个指针叫dev，指向master相同的提交，再把HEAD指向dev，就表示当前分支在dev上
- 假如我们在dev上的工作完成了，就可以把dev合并到master上。Git怎么合并呢？最简单的方法，就是直接把master指向dev的当前提交，就完成了合并
- 创建dev分支：
```
$ git branch dev
```
- 切换到dev分支
```
$ git checkout dev
```
- 以上两步等效于：
```
$ git checkout -b dev
```
- 切换回master分支
```
$ git checkout master
```
- dev分支的工作成果合并到master分支（之前必须先切回master）
```
$ git merge dev
```
git merge命令用于合并指定分支到当前分支
- 删除dev分支
```
$ git branch -d dev
```
- 查看branch
```
$ git branch
```
##### 解决冲突
- https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840202368c74be33fbd884e71b570f2cc3c0d1dcf000
- 当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
- 用$ git log --graph --pretty=oneline --abbrev-commit命令可以看到分支合并图。
- git diff 查看两个分支不同
- 切回master后，修改一次，add再commit，两个就自动合并到这个修改后的版本了
##### 分支管理
- 通常，合并分支时，如果可能，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息。

- 如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。
- 准备合并dev分支，请注意--no-ff参数，表示$ git merge --no-ff -m "merged bug fix 101" issue-101
```
$ git merge --no-ff -m "merge with no-ff" dev
```
因为本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。
比较Fast forward:
<img src = "https://cdn.liaoxuefeng.com/cdn/files/attachments/00138490883510324231a837e5d4aee844d3e4692ba50f5000/0">
禁用 Fast forward，合并意味着创造一个新的提交到master
<img src = "https://cdn.liaoxuefeng.com/cdn/files/attachments/001384909222841acf964ec9e6a4629a35a7a30588281bb000/0">
##### Bug分支
- 每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除
- 临时出现bug需要修复，但是手头工作还未完成不能提交，所以需要将手头工作暂时封存：
```
$ git stash
```
- 确定要在哪个分支上修复bug，假定需要在master分支上修复，就从master创建临时分支并切换到临时分支
```
$ git checkout master
$ git checkout -b issue-101
```
- 现在修复bug
```
$ git add newFile
$ git commit -m "fix bug 101"
```
- 修复完成后，切换到master分支，并完成合并，最后删除issue-101分支：
 ```
 $ git checkout master #切回
 $ git merge --no-ff -m "merged bug fix 101" issue-101  # 禁用fast forward
 $ git branch -d issue-101 #删除bug分支
 ```
- 查看封存的手头工作：
```
$ git stash list
```
- 恢复封存的手头工作：
```
$ git stash apply
```
- 恢复stash list中指定工作
```
$ git stash apply stash@{0} # stash@{0}是$ git stash list 命令查到的
```
- 删除封存工作
```
$ git stash drop
```
- 恢复+删除：
```
$ git stash pop
```
