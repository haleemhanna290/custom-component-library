import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DhMLlvMY.js";import{r as O}from"./index-2UU9FgV2.js";import{B as x}from"./Button-14_e6kl2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D7lG0nq1.js";function c({isOpen:t,onClose:n,title:o,description:l,children:b,confirmText:j="Confirm",cancelText:y="Cancel",onConfirm:C,showFooter:k=!0}){return i.useEffect(()=>{if(!t)return;const r=D=>{D.key==="Escape"&&n()};return document.body.style.overflow="hidden",document.addEventListener("keydown",r),()=>{document.body.style.overflow="",document.removeEventListener("keydown",r)}},[t,n]),t?O.createPortal(e.jsx("div",{className:"modal-backdrop",onClick:n,role:"presentation",children:e.jsxs("div",{className:"modal-dialog",role:"dialog","aria-modal":"true","aria-labelledby":o?"modal-title":void 0,"aria-describedby":l?"modal-description":void 0,onClick:r=>r.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[o&&e.jsx("h2",{id:"modal-title",className:"modal-title",children:o}),e.jsx("button",{type:"button",className:"modal-close",onClick:n,"aria-label":"Close modal",children:"×"})]}),l&&e.jsx("p",{id:"modal-description",className:"modal-description",children:l}),e.jsx("div",{className:"modal-body",children:b}),k&&e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"hanna-btn btn-secondary",onClick:n,children:y}),e.jsx("button",{type:"button",className:"hanna-btn btn-primary",onClick:C||n,children:j})]})]})}),document.body):null}const B={title:"HannaUI/Modal",component:c,tags:["autodocs"]},s={render:()=>{const t=()=>{const[n,o]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>o(!0),children:"Open modal"}),e.jsx(c,{isOpen:n,onClose:()=>o(!1),title:"Confirm action",description:"This action will publish your changes.",children:e.jsx("p",{children:"Are you sure you want to continue?"})})]})};return e.jsx(t,{})}},a={render:()=>{const t=()=>{const[n,o]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>o(!0),children:"Launch confirm"}),e.jsx(c,{isOpen:n,onClose:()=>o(!1),title:"Delete item",description:"This cannot be undone.",confirmText:"Delete",onConfirm:()=>o(!1),children:e.jsx("p",{children:"Delete the selected workspace?"})})]})};return e.jsx(t,{})}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return <>\r
          <Button onClick={() => setOpen(true)}>Open modal</Button>\r
          <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action" description="This action will publish your changes.">\r
            <p>Are you sure you want to continue?</p>\r
          </Modal>\r
        </>;
    };
    return <Demo />;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return <>\r
          <Button onClick={() => setOpen(true)}>Launch confirm</Button>\r
          <Modal isOpen={open} onClose={() => setOpen(false)} title="Delete item" description="This cannot be undone." confirmText="Delete" onConfirm={() => setOpen(false)}>\r
            <p>Delete the selected workspace?</p>\r
          </Modal>\r
        </>;
    };
    return <Demo />;
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const S=["Default","WithConfirm"];export{s as Default,a as WithConfirm,S as __namedExportsOrder,B as default};
