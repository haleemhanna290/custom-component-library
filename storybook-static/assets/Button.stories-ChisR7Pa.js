import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-14_e6kl2.js";const W={title:"HannaUI/Button",component:e,tags:["autodocs"],args:{children:"Get Started",variant:"primary",size:"medium",disabled:!1,loading:!1,fullWidth:!1},argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","ghost"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},a={render:S=>r.jsx(e,{...S})},t={render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"success",children:"Success"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"warning",children:"Warning"}),r.jsx(e,{variant:"ghost",children:"Ghost"})]})},s={render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.75rem"},children:[r.jsx(e,{size:"small",children:"Small"}),r.jsx(e,{size:"medium",children:"Medium"}),r.jsx(e,{size:"large",children:"Large"})]})},n={render:()=>r.jsx(e,{variant:"primary",loading:!0,children:"Saving"})},o={render:()=>r.jsx(e,{variant:"secondary",disabled:!0,children:"Unavailable"})};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Button {...args} />
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem'
  }}>\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="success">Success</Button>\r
      <Button variant="danger">Danger</Button>\r
      <Button variant="warning">Warning</Button>\r
      <Button variant="ghost">Ghost</Button>\r
    </div>
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.75rem'
  }}>\r
      <Button size="small">Small</Button>\r
      <Button size="medium">Medium</Button>\r
      <Button size="large">Large</Button>\r
    </div>
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var B,x,y;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Button variant="primary" loading>Saving</Button>
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,f,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Button variant="secondary" disabled>Unavailable</Button>
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const w=["Default","Variants","Sizes","Loading","Disabled"];export{a as Default,o as Disabled,n as Loading,s as Sizes,t as Variants,w as __namedExportsOrder,W as default};
