(this.webpackJsonpreact_1=this.webpackJsonpreact_1||[]).push([[4],{298:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3wRKZ",dialogItems:"Dialogs_dialogItems__36gDl",active:"Dialogs_active__BWal8",messages:"Dialogs_messages__3LdBp",dialog:"Dialogs_dialog__xSk7y",message:"Dialogs_message__1pVpe",pct:"Dialogs_pct__2r-8L"}},299:function(e,s,a){e.exports={dialogItems:"Message_dialogItems__3TFiH",active:"Message_active__k3Ccg",messages:"Message_messages__g-74-",message:"Message_message__1OEot"}},304:function(e,s,a){"use strict";a.r(s);a(0);var i=a(129),t=a(1),n=a(298),c=a.n(n),o=a(299),d=a.n(o),g=function(e){return Object(t.jsx)("div",{className:d.a.message,children:e.message})},l=a(14),r=function(e){var s="/dialogs/"+e.id;return Object(t.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(t.jsxs)(l.b,{to:s,children:[e.path1," ",e.name]})})},m=a(54),j=a(91),_=a(65),b=a(75),u=Object(b.a)(50),O=Object(j.a)({form:"dialog-add-message-form"})((function(e){return Object(t.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(t.jsx)("div",{children:Object(t.jsx)(m.a,{component:_.b,validate:[b.b,u],placeholder:"Enter your message",name:"newMessageBody"})}),Object(t.jsx)("div",{children:Object(t.jsx)("button",{children:"Send"})})]})})),x=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(t.jsx)(r,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return Object(t.jsx)(g,{message:e.message},e.id)}));s.newMessageBody;return Object(t.jsxs)("div",{className:c.a.dialogs,children:[Object(t.jsx)("div",{className:c.a.dialogsItems,children:a}),Object(t.jsx)("div",{className:c.a.messages,children:Object(t.jsx)("div",{children:i})}),Object(t.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},f=a(15),h=(a(5),a(34),a(35),a(38),a(37),a(11),a(9));s.default=Object(h.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})))(x)}}]);
//# sourceMappingURL=4.522088a8.chunk.js.map