import{d,u as _,a as u,c as m,b as p,r as h,o as a,e as r,f as t,t as s,g as l,F as f,h as v,n as g,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-ReZYmLbS.js";import{N as P}from"./NoteDisplay-lsWQg9Xe.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(a(),r("div",{id:"page-root",style:g(l(x))},[t("div",V,[t("div",L,[t("h1",S,s(l(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(a(!0),r(f,null,v(i.value,(e,c)=>(a(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),r("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/runner/work/slidev-resources-template/slidev-resources-template/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
