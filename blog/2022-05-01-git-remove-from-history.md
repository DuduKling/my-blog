---
layout: post
categories: git
time-to-read: 3
---

Remove a line or a file from git commit history.


### Remove a line from all history
```bash
git filter-branch -f --tree-filter 'test -f [FILE_PATH] && sed -i.bak "/[FIND]/d" [FILE_PATH] || echo “skipping file“' -- --all
```
<br />
This command generates a `.bak` file that should be removed too.

Reference: [StackOverflow](https://stackoverflow.com/questions/7194939/git-change-one-line-in-file-for-the-complete-history)


### Substitute a string from all history
```bash
git filter-branch -f --tree-filter 'test -f [FILE_PATH] && sed -i.bak "s/[FIND]/[SUBSTITUTE]/g" [FILE_PATH] || echo “skipping file“' -- --all
```
<br />
This command generates a `.bak` file that should be removed too.

Reference: [GeeksForGeeks - Sed Command](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/)


### Remove a file from all history
```bash
git filter-branch -f --index-filter 'git rm -rf --cached --ignore-unmatch [FILE_PATH]' HEAD
```

Reference: [StackOverflow](https://stackoverflow.com/questions/43762338/how-to-remove-file-from-git-history)


### Publish modifications
```bash
git push --force --all
```

