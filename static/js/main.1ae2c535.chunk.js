(this.webpackJsonpnesan=this.webpackJsonpnesan||[]).push([[0],{36:function(e,a,t){e.exports=t(52)},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),o=t.n(r),l=(t(41),t(42),t(15)),i=t(16),s=t(19),m=t(17),u=t(20),h=(t(43),t(22)),p=t(27),d=t(32),v=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"frontMain"},c.a.createElement(h.a,{bg:"light",expand:"lg"},c.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(p.a,{className:"mr-auto"},c.a.createElement(p.a.Link,{href:"#home"},"Projects")))),c.a.createElement(d.a,{fluid:!0,className:"frontMain"},c.a.createElement("div",{className:"myName"},"Hi, my name is Nesan."),c.a.createElement("div",{className:"myFrom"},"I'm from")))}}]),a}(n.Component);var E=function(){return c.a.createElement("div",{className:"Contact"},c.a.createElement("h3",null,"https://github.com/Messier81"))},f=t(13);var b=function(){return c.a.createElement("div",{className:"Projects"},c.a.createElement(f.b,{to:"/riv"},c.a.createElement("li",null,"Reddit Image Viewer")))},N=t(35),g=(t(51),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).renderMyData=function(e){var a=new URL("https://www.reddit.com/r/".concat(t.state.subR,"/.json")),n={limit:e};Object.keys(n).forEach((function(e){return a.searchParams.append(e,n[e])})),fetch(a).then((function(e){return e.json()})).then((function(e){for(var a=[],n=e.data.children,c=0;c<n.length;c++)a.push(n[c].data.url);t.setState({data:a,nextPic:0})})).catch((function(e){console.error(e)}))},t.handleInputChange=function(e){var a=e.target,n=a.value,c=a.name;t.setState(Object(N.a)({},c,n))},t.handlePicChange=function(e){t.setState({nextPic:t.state.nextPic+e})},t.state={data:null,subR:"",nextPic:0},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"wrapper"},c.a.createElement(f.b,{to:"/",className:"topNav"},c.a.createElement("span",null,"Home")),c.a.createElement("span",{className:"topNav",onClick:function(){return e.renderMyData(100)}},"Search"),c.a.createElement("input",{className:"topNav",type:"text",name:"subR",onChange:this.handleInputChange}),this.state.data?c.a.createElement("div",{class:"container"},c.a.createElement("img",{className:"img-fluid",src:this.state.data[this.state.nextPic],alt:""})):c.a.createElement("div",null,"LOAD"),c.a.createElement("div",{className:"botNavCont"},c.a.createElement("span",{className:"botNav",onClick:function(){return e.handlePicChange(-1)}},"Previous"),c.a.createElement("span",{className:"botNav",onClick:function(){return e.handlePicChange(1)}},"Next")))}}]),a}(n.Component)),j=t(10);var w=function(){return c.a.createElement(f.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/",exact:!0,component:v}),c.a.createElement(j.a,{path:"/nesan/",exact:!0,component:v}),c.a.createElement(j.a,{path:"/contact",component:E}),c.a.createElement(j.a,{path:"/projects",component:b}),c.a.createElement(j.a,{path:"/riv",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1ae2c535.chunk.js.map