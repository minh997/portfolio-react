(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){},27:function(e,t,a){},461:function(e,t,a){},462:function(e,t,a){e.exports=a.p+"static/media/success.59d46b62.m4a"},463:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),o=a(51),r=a.n(o),c=a(6),l=a(7),s=a(9),m=a(8),p=a(10),u=a(52),d=a.n(u),f=function(e){return i.a.createElement("div",{className:"section"},i.a.createElement("h1",{className:"mtop"},e.title),i.a.createElement("div",{className:"mtop"},e.content))},h=(a(53),a(27),function(e){return i.a.createElement("div",{className:"slide"},i.a.createElement("div",{className:"card neumorphism-1 p-1 mtop"},i.a.createElement("video",{loop:!0,controls:!0,className:"card-img-top neumorphism-2",alt:e.title},i.a.createElement("source",{src:a(59)("./"+e.mediaFile),type:"video/mp4"})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},e.title," ",i.a.createElement("div",{style:{display:"inline-block",fontSize:"15px"}},i.a.createElement("a",{href:e.gitLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github fa-fw "})," Source Code"),e.deployable&&i.a.createElement("a",{href:e.prodLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-chrome "})," Demo"))),i.a.createElement("div",null,e.description))))});h.defaultProps={gitLink:"https://minh997.github.io/SpainWorldCup2018/",prodLink:"https://www.youtube.com/",title:"Name of App",deployable:!0};var b=h,g=function(e){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"slide"},i.a.createElement("h1",null,"Pet Projects"),i.a.createElement("div",{className:"gradient ",onClick:function(){e.fullpageApi.moveSlideRight()}},"slide or click here to see my projects")),i.a.createElement(b,{title:"Quiz Maker",description:i.a.createElement("div",null,"This website helps users create online quizzes under multiple-choice question format and keep data of who took it and their score. Users can use Gmail account to log in. App is built with",i.a.createElement("strong",null,"NodeJS, React, MongoDB, Google Oauth and Restful API.")),gitLink:"https://github.com/minh1609/question-survey",prodLink:"https://question-survey.herokuapp.com/",mediaFile:"quiz.mp4"}),i.a.createElement(b,{title:"Celebrity Face Recognition",description:i.a.createElement("div",null,"By using",i.a.createElement("strong",null," Amazon Web Sevice-Regkonition "),", this Web App can quickly identify which celebrities appear in the picture in less than 1 seconds"),gitLink:"https://github.com/minh1609/face-regconition",prodLink:"https://minh1609.github.io/face-regconition/",mediaFile:"facereg.mp4"}),i.a.createElement(b,{title:"Marvel Characters Library",description:i.a.createElement("div",null,"A website contains data of more than 1000 characters from Marvel Universe. Data is fetched directly from Marvel database through web API and served on a Single Page Application built with",i.a.createElement("strong",null," React")),gitLink:"https://github.com/minh1609/marvell-hero",prodLink:"https://minh1609.github.io/marvell-hero/",mediaFile:"marvel.mp4"}),i.a.createElement(b,{title:"Real time Chat Application",description:"Chat Application can keep track of user status, message in real time",gitLink:"https://github.com/minh1609/chat-app",mediaFile:"chat.mp4",deployable:!1}))},v=a(11),E=a.n(v),k=a(19),y=a(15),w=a.n(y);w.a.config.region="us-east-1",w.a.config.credentials=new w.a.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:630becbc-a771-444a-902b-9b97eee2e80e"});var N=new w.a.SES({apiVersion:"2010-12-01"}),x=a(4),j=a.n(x),C=(a(461),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClick=Object(k.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("copy"!==a.props.action){e.next=6;break}return e.next=3,navigator.clipboard.writeText(a.props.link);case 3:j.a.fire({type:"success",text:" ".concat(a.props.link," \n saved on your clipboard"),timer:3e3,toast:!0,showConfirmButton:!1}),e.next=7;break;case 6:"open"===a.props.action?window.open(a.props.link):a.props.onClick();case 7:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"btn contact-card neumorphism-1 ",onClick:this.handleClick},i.a.createElement("i",{style:{fontSize:"22px",marginRight:"15px"},className:this.props.icon}),this.props.name)}}]),t}(n.Component)),O=function(){var e=function(){var e=Object(k.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j.a.fire({confirmButtonText:"Send",cancelButtonText:"May be later",input:"textarea",inputPlaceholder:"Enter your message, your email, I will reply as soon as possible",showCancelButton:!0,allowOutsideClick:!1,confirmButtonClass:"btn btn-primary m-2 neumorphism-1",cancelButtonClass:"btn btn-secondary m-2 neumorphism-1",buttonsStyling:!1,title:"Send Message"}).then(function(e){var t=e.value,n=e.dismiss,i={Destination:{BccAddresses:["hoangminh160997@gmail.com"]},Message:{Body:{Text:{Data:t}},Subject:{Data:"New Message send from Portfolio"}},Source:"pointman449@gmail.com"};t&&n!==j.a.DismissReason.cancel?N.sendEmail(i,function(e,t){e?console.log(e,e.stack):(j.a.fire({type:"success",text:"Your message has been sent"}),new Audio(a(462)).play())}):n!==j.a.DismissReason.cancel&&j.a.fire({type:"warning",text:"Hmm, you forgot to write the content"})});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"contact-holder vertical-align "},i.a.createElement("div",null,i.a.createElement(C,{name:"hminh16169@gmail.com",icon:"fas fa-envelope",link:"hminh16169@gmail.com",action:"copy"}),i.a.createElement(C,{name:"Phone Number",icon:"fas fa-mobile-alt",link:"7789557706",action:"copy"}),i.a.createElement(C,{name:"Git Hub",icon:"fab fa-github",action:"open",link:"https://github.com/minh1609"}),i.a.createElement(C,{name:"Send me a message",icon:"fas fa-comment-alt",onClick:e}))))},L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ",style:{zIndex:3}},i.a.createElement("a",{className:"navbar-brand",href:"#projects"},"MINH'S PORTFOLIO"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},i.a.createElement("div",{className:"navbar-nav"},i.a.createElement("a",{className:"nav-item nav-link",href:"#projects"},"Project ",i.a.createElement("span",{className:"sr-only"},"(current)")),i.a.createElement("a",{className:"nav-item nav-link",href:"#contact"},"Contact"))))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onLeave",value:function(e,t,a){console.log("Leaving section "+e.index),console.log(e)}},{key:"afterLoad",value:function(e,t,a){console.log("After load: "+t.index)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,null),i.a.createElement("div",{style:{zIndex:-1}},i.a.createElement(d.a,{autoScrolling:!0,scrollHorizontally:!0,loopBottom:!0,loopHorizontal:!1,recordHistory:!1,navigation:!0,navigationTooltips:["Projects","Contact"],slidesNavigation:!0,verticalCentered:!1,onLeave:this.onLeave.bind(this),afterLoad:this.afterLoad.bind(this),anchors:["projects","contact"],render:function(e){e.state;var t=e.fullpageApi;return i.a.createElement("div",null,i.a.createElement(g,{title:"Pet Projects",fullpageApi:t}),i.a.createElement(f,{title:"Contact",content:i.a.createElement(O,null)}))}})))}}]),t}(i.a.Component);r.a.render(i.a.createElement(A,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a(463)},59:function(e,t,a){var n={"./badge.png":60,"./blog.gif":61,"./chat.mp4":62,"./facereg.mp4":63,"./game.gif":64,"./marvel.mp4":65,"./quiz.mp4":66};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=59},60:function(e,t,a){e.exports=a.p+"static/media/badge.c9612f20.png"},61:function(e,t,a){e.exports=a.p+"static/media/blog.6baf57d5.gif"},62:function(e,t,a){e.exports=a.p+"static/media/chat.6aefd7cf.mp4"},63:function(e,t,a){e.exports=a.p+"static/media/facereg.744e834b.mp4"},64:function(e,t,a){e.exports=a.p+"static/media/game.80a72166.gif"},65:function(e,t,a){e.exports=a.p+"static/media/marvel.e206cc6e.mp4"},66:function(e,t,a){e.exports=a.p+"static/media/quiz.08384dd1.mp4"}},[[54,1,2]]]);
//# sourceMappingURL=main.b8d00dd6.chunk.js.map