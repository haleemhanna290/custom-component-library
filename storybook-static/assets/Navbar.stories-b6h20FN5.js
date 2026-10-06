import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";function n({logo:l="HannaUI",links:t=[{label:"Home",href:"#home"},{label:"Components",href:"#components"},{label:"Docs",href:"#docs"},{label:"Pricing",href:"#pricing"}],ctaText:x="Get Started",onCtaClick:g,className:j=""}){var d;const[o,c]=m.useState(!1),[i,N]=m.useState(((d=t[0])==null?void 0:d.label)||"Home");return e.jsx("header",{className:`hanna-navbar ${j}`.trim(),children:e.jsxs("nav",{className:"navbar-shell","aria-label":"Main navigation",children:[e.jsxs("div",{className:"navbar-brand","aria-label":"HannaUI home",children:[e.jsx("span",{className:"brand-mark",children:"H"}),e.jsx("span",{children:l})]}),e.jsxs("button",{type:"button",className:"mobile-menu-toggle","aria-label":o?"Close navigation menu":"Open navigation menu","aria-expanded":o,"aria-controls":"mobile-menu",onClick:()=>c(a=>!a),children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("div",{className:`navbar-links ${o?"is-open":""}`,id:"mobile-menu",children:t.map(a=>e.jsx("a",{href:a.href,className:i===a.label?"nav-link active":"nav-link",onClick:()=>{N(a.label),c(!1)},"aria-current":i===a.label?"page":void 0,children:a.label},a.label))}),e.jsx("button",{type:"button",className:"navbar-cta hanna-btn btn-primary",onClick:g,children:x})]})})}n.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{logo:{defaultValue:{value:"'HannaUI'",computed:!1},required:!1},links:{defaultValue:{value:`[\r
  { label: 'Home', href: '#home' },\r
  { label: 'Components', href: '#components' },\r
  { label: 'Docs', href: '#docs' },\r
  { label: 'Pricing', href: '#pricing' },\r
]`,computed:!1},required:!1},ctaText:{defaultValue:{value:"'Get Started'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const k={title:"HannaUI/Navbar",component:n,tags:["autodocs"],args:{logo:"HannaUI",ctaText:"Get Started",links:[{label:"Home",href:"#home"},{label:"Components",href:"#components"},{label:"Docs",href:"#docs"},{label:"Pricing",href:"#pricing"}]}},r={render:l=>e.jsx(n,{...l})},s={render:()=>e.jsx(n,{logo:"HannaUI",links:[{label:"Overview",href:"#overview"},{label:"Features",href:"#features"},{label:"Docs",href:"#docs"}],ctaText:"Launch"})};var u,b,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Navbar {...args} />
}`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Navbar logo="HannaUI" links={[{
    label: 'Overview',
    href: '#overview'
  }, {
    label: 'Features',
    href: '#features'
  }, {
    label: 'Docs',
    href: '#docs'
  }]} ctaText="Launch" />
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const C=["Default","ProductStyle"];export{r as Default,s as ProductStyle,C as __namedExportsOrder,k as default};
