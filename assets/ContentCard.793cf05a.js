import{t as m,i as n,a as h,x as $,e as b,s as i,F as C}from"./vendor.e8d1db19.js";const y=m('<div class="card shadow-xl glass"><figure class="rounded sm:h-96 md:h-60 lg:h-48 xl:h-72 2xl:h-96 w-full"><img width="320" height="192" decoding="async" loading="lazy" class="object-cover object-center h-full w-full"></figure><div class="justify-end card-body bg-neutral"><h2 class="card-title text-primary prose lg:prose-xl bg-opacity-30"></h2><p class="text-sm text-neutral-content prose-sm"></p></div><div class="card-actions flex justify-between p-4 gap-1 content-center bg-white bg-opacity-30"><a class="btn btn-secondary btn-sm sm:btn-md gap-2 md:btn-sm lg:btn-sm xl:btn-sm 2xl:btn-md" target="_blank">LAUNCH</a><div class="tech_stack flex flex-wrap self-center gap-1 float-right"></div></div></div>'),w=m('<span class="badge badge-accent badge-sm hover:bg-accent-focus shadow-xl float-right"><a target="_blank"></a></span>'),p=t=>(()=>{const c=y.cloneNode(!0),d=c.firstChild,o=d.firstChild,g=d.nextSibling,f=g.firstChild,_=f.nextSibling,u=g.nextSibling,s=u.firstChild,v=s.firstChild,x=s.nextSibling;return n(f,()=>t.card.title),n(_,()=>t.card.description),n(s,h($,{size:16}),v),n(x,h(C,{get each(){return t.card.tags},children:(e,r)=>(()=>{const l=w.cloneNode(!0),a=l.firstChild;return n(a,()=>e.name),b(()=>i(a,"href",e.link)),l})()})),b(e=>{const r=t.card.image,l=t.card.title,a=t.card.link;return r!==e._v$&&i(o,"src",e._v$=r),l!==e._v$2&&i(o,"alt",e._v$2=l),a!==e._v$3&&i(s,"href",e._v$3=a),e},{_v$:void 0,_v$2:void 0,_v$3:void 0}),c})();export{p as C};