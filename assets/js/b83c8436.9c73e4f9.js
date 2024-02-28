"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[456],{1905:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(4848),r=t(8453);const s={title:"Git Remove from History",tags:["git"]},n=void 0,l={id:"git-remove-from-history",title:"Git Remove from History",description:"To remove a line or a file from git commit history.",source:"@site/docs/git-remove-from-history.md",sourceDirName:".",slug:"/git-remove-from-history",permalink:"/my-blog/docs/git-remove-from-history",draft:!1,unlisted:!1,tags:[{label:"git",permalink:"/my-blog/docs/tags/git"}],version:"current",frontMatter:{title:"Git Remove from History",tags:["git"]},sidebar:"tutorialSidebar",previous:{title:"Git change old commit messages",permalink:"/my-blog/docs/git-change-old-commit-messages"}},a={},c=[{value:"Remove a line from all history",id:"remove-a-line-from-all-history",level:2},{value:"Substitute a string from all history",id:"substitute-a-string-from-all-history",level:2},{value:"Remove a file from all history",id:"remove-a-file-from-all-history",level:2},{value:"Publish modifications",id:"publish-modifications",level:2}];function m(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"To remove a line or a file from git commit history."}),"\n",(0,o.jsx)(i.admonition,{title:"Warning",type:"danger",children:(0,o.jsx)(i.p,{children:"This changes the history of your repository and can cause some unexpected side effects, be careful."})}),"\n",(0,o.jsx)(i.h2,{id:"remove-a-line-from-all-history",children:"Remove a line from all history"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git filter-branch -f --tree-filter 'test -f [FILE_PATH] && sed -i.bak \"/[FIND]/d\" [FILE_PATH] || echo \u201cskipping file\u201c' -- --all\n"})}),"\n",(0,o.jsxs)(i.p,{children:["This command generates a ",(0,o.jsx)(i.code,{children:".bak"})," file that should be removed too."]}),"\n",(0,o.jsxs)(i.p,{children:["Reference: ",(0,o.jsx)(i.a,{href:"https://stackoverflow.com/questions/7194939/git-change-one-line-in-file-for-the-complete-history",children:"StackOverflow - Git change one line in file for the complete history"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"substitute-a-string-from-all-history",children:"Substitute a string from all history"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git filter-branch -f --tree-filter 'test -f [FILE_PATH] && sed -i.bak \"s/[FIND]/[SUBSTITUTE]/g\" [FILE_PATH] || echo \u201cskipping file\u201c' -- --all\n"})}),"\n",(0,o.jsxs)(i.p,{children:["This command generates a ",(0,o.jsx)(i.code,{children:".bak"})," file that should be removed too."]}),"\n",(0,o.jsxs)(i.p,{children:["Reference: ",(0,o.jsx)(i.a,{href:"https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/",children:"GeeksForGeeks - Sed command in linux unix with examples"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"remove-a-file-from-all-history",children:"Remove a file from all history"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git filter-branch -f --index-filter 'git rm -rf --cached --ignore-unmatch [FILE_PATH]' HEAD\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Reference: ",(0,o.jsx)(i.a,{href:"https://stackoverflow.com/questions/43762338/how-to-remove-file-from-git-history",children:"StackOverflow - How to remove file from git history"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"publish-modifications",children:"Publish modifications"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"git push --force --all\n"})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>l});var o=t(6540);const r={},s=o.createContext(r);function n(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);