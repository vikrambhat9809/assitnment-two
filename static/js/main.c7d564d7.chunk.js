(this["webpackJsonpassitnment-two"]=this["webpackJsonpassitnment-two"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(7),c=a.n(i),l=(a(12),a(2)),r=a(3),j=a(5),u=a(4),b=(a(13),a(0)),h=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleFirstNameChange=function(e){n.setState({firstName:e.target.value})},n.handleLastNameChange=function(e){n.setState({lastName:e.target.value})},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handleSubjectChange=function(e){n.setState({subject:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state),n.setState({firstName:"",lastName:"",email:"",subject:""})},n.state={firstName:"",lastName:"",email:"",subject:null},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Login",children:[Object(b.jsx)("h2",{children:"Bailur Vikram Bhat"}),Object(b.jsx)("p",{children:"20181CSE0090"}),Object(b.jsx)("form",{onSubmit:this.handleSubmit,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"First Name"}),Object(b.jsx)("input",{required:!0,type:"text",value:this.state.firstName,onChange:this.handleFirstNameChange}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Last Name"}),Object(b.jsx)("input",{required:!0,type:"text",value:this.state.lastName,onChange:this.handleLastNameChange}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{required:!0,type:"email",value:this.state.email,onChange:this.handleEmailChange}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"subjects",children:"Choose a subject: "}),Object(b.jsxs)("select",{required:!0,name:"subject",id:"subject",value:this.state.subject,onChange:this.handleSubjectChange,children:[Object(b.jsx)("option",{children:"None"}),Object(b.jsx)("option",{value:"react",children:"React"}),Object(b.jsx)("option",{value:"angular",children:"Angular"}),Object(b.jsx)("option",{value:"django",children:"Django"}),Object(b.jsx)("option",{value:"flask",children:"Flask"})]}),Object(b.jsx)("button",{class:"button",children:"Submit"})]})})]})}}]),a}(n.Component),o=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={fields:{firstName:"",lastName:"",email:"",subject:""}},e.onSubmit=function(t){e.setState({fields:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;this.state.fields.data;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{onSubmit:function(t){return e.onSubmit(t)}}),Object(b.jsxs)("p",{class:"format-me",children:[this.state.fields.firstName,Object(b.jsx)("br",{}),this.state.fields.lastName,Object(b.jsx)("br",{}),this.state.fields.email,Object(b.jsx)("br",{}),this.state.fields.subject]})]})}}]),a}(n.Component),d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.c7d564d7.chunk.js.map