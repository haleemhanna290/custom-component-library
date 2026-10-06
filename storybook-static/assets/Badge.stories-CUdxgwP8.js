import{j as a}from"./jsx-runtime-D_zvdyIk.js";const d={success:"badge-success",warning:"badge-warning",danger:"badge-danger",info:"badge-info",neutral:"badge-neutral",primary:"badge-primary"},i={small:"badge-small",medium:"badge-medium",large:"badge-large"};function e({children:n,variant:g="primary",size:p="medium",className:f=""}){return a.jsx("span",{className:`hanna-badge ${d[g]||d.primary} ${i[p]||i.medium} ${f}`.trim(),children:n})}e.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const B={title:"HannaUI/Badge",component:e,tags:["autodocs"],args:{children:"New",variant:"primary",size:"medium"},argTypes:{variant:{control:"select",options:["success","warning","danger","info","neutral","primary"]},size:{control:"select",options:["small","medium","large"]}}},r={render:n=>a.jsx(e,{...n})},s={render:()=>a.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[a.jsx(e,{variant:"success",children:"Success"}),a.jsx(e,{variant:"warning",children:"Popular"}),a.jsx(e,{variant:"danger",children:"Error"}),a.jsx(e,{variant:"info",children:"Info"}),a.jsx(e,{variant:"neutral",children:"Neutral"}),a.jsx(e,{variant:"primary",children:"Primary"})]})};var t,l,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Badge {...args} />
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap'
  }}>\r
      <Badge variant="success">Success</Badge>\r
      <Badge variant="warning">Popular</Badge>\r
      <Badge variant="danger">Error</Badge>\r
      <Badge variant="info">Info</Badge>\r
      <Badge variant="neutral">Neutral</Badge>\r
      <Badge variant="primary">Primary</Badge>\r
    </div>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const x=["Default","AllVariants"];export{s as AllVariants,r as Default,x as __namedExportsOrder,B as default};
