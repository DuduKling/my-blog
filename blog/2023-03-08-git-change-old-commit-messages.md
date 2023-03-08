---
slug: git-change-old-commit-messages
title: Git change old commit messages
authors: [dudu]
tags: [git]
---

If a commit message contains unclear, incorrect, or sensitive information, you can change and push the new message.

It is strongly discouraged force pushing, since this changes the history of your repository. If you force push, people who have already cloned your repository will have to manually fix their local history.

:::danger Warning
This changes the history of your repository and can cause some unexpected side effects, be careful.
:::

## Amending older or multiple commit messages

To change the message of older or multiple commit messages, use interactive rebase, then force push to change the commit history.


### Start rebase

Use the command below to display a list of the last `n` commits in your default text editor.

```bash
git rebase -i HEAD~n
```

With:
- `n`: Number of commits from the last commit of the `HEAD`.

#### Find the last commit

To get the exact number of `n` to reach the commit you want to change, you can use the command:

```bash
(git rev-list HEAD --count) - (git rev-list [COMMIT_SHA] --count) + 1
```

With:
- `COMMIT_SHA`: The hash of the commit you want to get.

### Select commits to change

Then, `Vim` will open with a list of commits and some other info, like this:

```bash
...
pick e499d89 Delete CNAME
pick 0c39034 Better README
pick f7fde4a Change the commit message but push the same commit.

# Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
#
# Commands:
# p, pick = use commit
...
```

You need to change the word `pick` with `reword` before each commit message you want to change.

To do that, first you need to enter in `INSERT MODE`, change what you want and then save, using the `COMMAND MODE` in [Vim](#about-vim).

When you finish editing, save and close the commit list file.

### Change commits selected

Then, for each commit you added `reword` to, will pop up and you can change the commit message to a new commit message.

Again, you will need to enter in `INSERT MODE`, change what you want and then save, using the `COMMAND MODE` in [Vim](#about-vim).

When finished, save the file and close it.

### Push changes

When you're ready to push your changes to the remote, use the push --force command to force push over the old commit.

```bash
git push --force origin [BRANCH]
```


## About Vim

### Insert mode

This mode allows you to enter text into your document.

You can enter insert mode by pressing the `i` key.

Keep in mind that to save your document, you'll need to go back to `command mode` since only text input is allowed in this mode.

### Command mode

This is the default mode that you'll be in once you open Vim.

This mode allows you to use Vim commands and move through your document.

If you're in a different mode and want to go back to command mode, just hit the `Escape` key.

From command mode, you can also use last-line commands, which generally start with the use of a colon.

For example:
- `:q`: Allows you to exit Vim.
- `:q!` Quit without saving the file.
- `:w`: Saves your file.
- `:wq` Save your file and close Vim.


## Reference

- [Github Docs - Changing a commit message](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message).
- [StackOverflow - How do i get the git commit count](https://stackoverflow.com/questions/677436/how-do-i-get-the-git-commit-count).
- [KeyCDN - Vim commands](https://www.keycdn.com/blog/vim-commands).
