import{t as g,c as u,v as C,o as S,i as T,a as B,s as r,e as R,w as k,F as P}from"./vendor.e8d1db19.js";import{u as E}from"./index.7d25957e.js";import"https://cdn.skypack.dev/@octokit/graphql";const F=g('<section id="section_repos" class="bg-base-300 pt-2 pb-16"><div class="container mx-auto mt-2"><a id="repos" href="#" class="text-info"><h1 class="py-8 sm:py-8 md:py-8 lg:py-8 xl:py-12 2xl:py-16 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-extrabold text-center drop-shadow-md">Github Repos</h1></a><div class="flex flex-wrap"></div></div></section>'),N=g('<div class="card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 pl-2 pr-2 py-2"><div class="card bg-neutral glass w-full h-full p-1 shadow-lg"><div class="card shadow-lg w-full h-full"><a><img width="400" height="120" decoding="async" loading="lazy" class="w-full h-full"></a></div></div></div>'),j=()=>{let a;const e=E();let f=e.getThemeSignal();const[p,m]=u("default"),[x,v]=u("000000"),$=t=>{a=e.data().statsBg;const l=e.data().statsTheme;m(l[t]),a&&v(a[t])};return C(()=>$(f())),S(async()=>{await e.getRepos()}),(()=>{const t=F.cloneNode(!0),l=t.firstChild,_=l.firstChild,w=_.nextSibling;return T(w,B(P,{get each(){return e.data().sections.repos.cards},children:(i,z)=>(()=>{const d=N.cloneNode(!0),b=d.firstChild,n=b.firstChild,o=n.firstChild,c=o.firstChild;return r(o,"href",`https://github.com/guinetik/${i}`),r(c,"alt",i),R(s=>{const y=`background:#${x()}`,h=`https://github-readme-stats.vercel.app/api/pin/?username=guinetik&repo=${i}&theme=${p()}&show_owner=true&hide_border=true`;return s._v$=k(n,y,s._v$),h!==s._v$2&&r(c,"src",s._v$2=h),s},{_v$:void 0,_v$2:void 0}),d})()})),t})()};export{j as default};
