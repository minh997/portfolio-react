(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/badge.c9612f20.png"},function(e,t,a){},,,,,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){var n={"./badge.png":8,"./blog.gif":23,"./email.gif":24,"./face-reg.gif":25,"./facebook.gif":26,"./game.gif":27,"./marvel.gif":28,"./porfolio.gif":29,"./social.gif":30};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=22},function(e,t,a){e.exports=a.p+"static/media/blog.6baf57d5.gif"},function(e,t,a){e.exports=a.p+"static/media/email.74fa7acc.gif"},function(e,t,a){e.exports=a.p+"static/media/face-reg.3392a549.gif"},function(e,t,a){e.exports=a.p+"static/media/facebook.93af9812.gif"},function(e,t,a){e.exports=a.p+"static/media/game.80a72166.gif"},function(e,t,a){e.exports=a.p+"static/media/marvel.514f4def.gif"},function(e,t,a){e.exports=a.p+"static/media/porfolio.89158b3f.gif"},function(e,t,a){e.exports=a.p+"static/media/social.ee912868.gif"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r),c=a(1),l=a(2),s=a(4),m=a(3),p=a(5),u=a(11),f=a.n(u),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"section"},i.a.createElement("h1",null,this.props.title),i.a.createElement("div",null,this.props.content))}}]),t}(n.Component);d.defaultProps={title:"title",content:"ABALNDLADNLSDNDnalshflasnpehq;f ajsf;ansf;ajasd;a"};var h=d,b=a(12),g=a.n(b),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"info"},i.a.createElement("div",null,"I am full stack developer, curiosity about modern technology"),i.a.createElement(g.a,{cursor:{show:!1},avgTypingDelay:50},i.a.createElement("div",null,"Always learning to solve bigger and better problem")),i.a.createElement("a",{target:"blank",href:"https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-09-10&ci=AWS01045729"},i.a.createElement("img",{src:a(8),style:{width:"150px",marginTop:"20px"},alt:"aws-certified",className:"zoom-on-hover mt-4"})))}}]),t}(n.Component),k=(a(21),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={skillType:0},a.skills=["React-Redux","Node JS, Express","C#, .Net, Entity Framwork","AWS Certified Developer - Associate","Mongo DB, SQL Database, Redis","HTML, CSS, SASS","Bootstrap, Semantic UI"],a.skillswantToLearn=[" GoLang, Python","Serverless Architecture (API Gateway, Lambda function)"],a.renderBtnStyle=function(e){return e===a.state.skillType?"circle-btn btn-dark":"circle-btn btn-light"},a.renderSkillList=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return i.a.createElement("div",{className:"zoom-on-hover"},e)})},a.renderContent=function(){return 0===a.state.skillType?i.a.createElement("div",{style:{lineHeight:"2.0",padding:"5px"}},i.a.createElement("h4",null,"I am working with"),i.a.createElement("div",null,a.renderSkillList(a.skills))):1===a.state.skillType?i.a.createElement("div",{style:{lineHeight:"2.0",padding:"5px"}},i.a.createElement("h4",null,"I want to learn"),a.renderSkillList(a.skillswantToLearn)):void 0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex-box"},i.a.createElement("button",{onClick:function(){return e.setState({skillType:0})},className:this.renderBtnStyle(0)+" zoom-on-hover"},i.a.createElement("i",{className:"fas fa-cog fa-spin"})),i.a.createElement("button",{onClick:function(){return e.setState({skillType:1})},className:this.renderBtnStyle(1)+" zoom-on-hover"},i.a.createElement("i",{className:"fas fa-question"}))),i.a.createElement("div",{className:"skill-detail"},this.renderContent()))}}]),t}(n.Component)),E=(a(9),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).renderLink=function(){return!0===a.props.deployable?i.a.createElement("a",{href:a.props.prodLink,class:"btn btn-primary btn-sm",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fab fa-chrome",style:{fontSize:"12px"}}),"See it Now"):i.a.createElement("a",{href:a.props.prodLink,class:"btn btn-success btn-sm",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fas fa-book",style:{fontSize:"12px"}}),"Document")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"slide"},i.a.createElement("div",{class:"card "},i.a.createElement("img",{src:a(22)("./"+this.props.img),class:"card-img-top",alt:this.props.title}),i.a.createElement("div",{class:"card-body"},i.a.createElement("h5",{class:"card-title"},this.props.title),i.a.createElement("div",null,this.props.description),i.a.createElement("div",null,i.a.createElement("strong",null,"Built with: "),this.props.built)),i.a.createElement("div",{className:"footer"},i.a.createElement("a",{href:this.props.gitLink,class:"btn btn-dark btn-sm",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{class:"fab fa-github fa-fw",style:{fontSize:"12px"}}),"Source Code"),this.renderLink())))}}]),t}(n.Component));E.defaultProps={gitLink:"https://minh997.github.io/SpainWorldCup2018/",prodLink:"https://www.youtube.com/",description:"Tis is a web App",title:"Name of App",built:"Cobol, Binary",img:"email.gif",deployable:!0};var y=E,j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderIntroPage",value:function(){var e=this;return i.a.createElement("div",{className:"slide"},i.a.createElement("h1",null,"Pet Projects"),i.a.createElement("div",{className:"gradient",onClick:function(){e.props.fullpageApi.moveSlideRight()}},"slide or click here to see my projects"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"section"},this.renderIntroPage(),i.a.createElement(y,{title:"Celebrity Face Recognition",description:"Easily identify who is in the picture",built:"React-Redux, Marvel API",gitLink:"https://github.com/minh1609/face-regconition",prodLink:"https://minh1609.github.io/face-regconition/",img:"face-reg.gif"}),i.a.createElement(y,{title:"Marvel Hero",description:"Find information about your favaourite marvel hero\r ",built:"React-Redux, Marvel API",gitLink:"https://github.com/minh1609/marvell-hero",prodLink:"https://minh1609.github.io/marvell-hero/",img:"marvel.gif"}),i.a.createElement(y,{title:"Game Store Management",description:"Web application helps managing items, employees, ... for a game store",built:"SQL database, HTML, CSS, JavaScript, PHP",gitLink:"https://github.com/minh1609/gameStore",prodLink:"https://mygamestore1609.000webhostapp.com/",img:"game.gif"}),i.a.createElement(y,{title:"Online Diary",description:"A Website helps users keep all the private diary, image. Data is safety stored on cloud",built:"React-Redux, Node-Express, Redis, Amazon S3, Jest, MongoDB, Materialize CSS",gitLink:"https://github.com/minh1609/Blogg",prodLink:"https://github.com/minh1609/Blogg#technical-document",img:"blog.gif",deployable:!1}),i.a.createElement(y,{title:"Social Network",description:"An online info board, allow anyone to share everything to the world",built:"React-Redux, Node-Express, MongoDB, Semantic UI",gitLink:"https://github.com/minh1609/social-network",prodLink:"https://matrix-network.herokuapp.com/",img:"social.gif"}),i.a.createElement(y,{title:"FaceBook",description:"FaceBook Demo fishing application, demonstrate how hacker steal password from inexperienced web user\r ",built:"HTML, CSS, JavaScript",gitLink:"https://github.com/minh1609/facebook-clickjacking",prodLink:"https://minh1609.github.io/facebook-clickjacking/",img:"facebook.gif"}))}}]),t}(n.Component),O=(a(31),a(6)),w=a.n(O),S=a(13),x=a(14),L=a.n(x),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClick=Object(S.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("copy"!==a.props.action){e.next=6;break}return e.next=3,navigator.clipboard.writeText(a.props.link);case 3:L.a.fire({type:"success",text:" ".concat(a.props.link," \n saved on your clipboard"),timer:3e3,toast:!0,showConfirmButton:!1}),e.next=7;break;case 6:"open"===a.props.action&&window.open(a.props.link);case 7:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"btn contact-card",onClick:this.handleClick},i.a.createElement("i",{style:{fontSize:"25px",marginRight:"15px"},className:this.props.icon}),this.props.name)}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"contact-holder"},i.a.createElement("p",null,"Feel free to contact me at"),i.a.createElement("div",null,i.a.createElement(N,{name:"hminh16169@gmail.com",icon:"fas fa-envelope",link:"hminh16169@gmail.com",action:"copy"}),i.a.createElement(N,{name:"Phone Number",icon:"fas fa-mobile-alt",link:"7789557706",action:"copy"}),i.a.createElement(N,{name:"My project on Git Hub",icon:"fab fa-github",action:"open",link:"https://github.com/minh1609"}))))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ",style:{zIndex:3}},i.a.createElement("a",{className:"navbar-brand",href:"#intro"},"MINH"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},i.a.createElement("div",{className:"navbar-nav"},i.a.createElement("a",{className:"nav-item nav-link",href:"#intro"},"About Me ",i.a.createElement("span",{class:"sr-only"},"(current)")),i.a.createElement("a",{className:"nav-item nav-link",href:"#skills"},"My Skills"),i.a.createElement("a",{className:"nav-item nav-link",href:"#projects"},"Project"),i.a.createElement("a",{className:"nav-item nav-link",href:"#contact"},"Contact"))))}}]),t}(n.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onLeave",value:function(e,t,a){console.log("Leaving section "+e.index),console.log(e)}},{key:"afterLoad",value:function(e,t,a){console.log("After load: "+t.index)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,null),i.a.createElement("div",{style:{zIndex:-1}},i.a.createElement(f.a,{autoScrolling:!0,scrollHorizontally:!0,loopBottom:!0,loopHorizontal:!1,recordHistory:!1,navigation:!0,navigationTooltips:["About Me","Skills","Projects","Contact"],slidesNavigation:!0,verticalCentered:!1,onLeave:this.onLeave.bind(this),afterLoad:this.afterLoad.bind(this),anchors:["intro","skills","projects","contact"],render:function(e){e.state;var t=e.fullpageApi;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{title:"About me",content:i.a.createElement(v,null)}),i.a.createElement(h,{title:"Tech I work with",content:i.a.createElement(k,null)}),i.a.createElement(j,{title:"My Project",fullpageApi:t}),i.a.createElement(h,{title:"Contact",content:i.a.createElement(C,null)}))}})))}}]),t}(i.a.Component);o.a.render(i.a.createElement(M,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.b0986fce.chunk.js.map