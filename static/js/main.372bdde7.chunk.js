(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,a,t){e.exports={shadowed:"About_shadowed__qycFA",terminal:"About_terminal__1FszD",topRow:"About_topRow__hDdE1",red:"About_red__3rPe9",amber:"About_amber__148FQ",green:"About_green__21wCl",window:"About_window__16mjn",emoji:"About_emoji__1gAYL"}},,,,,,,function(e,a,t){e.exports={shadowed:"Home_shadowed__Lv4pJ",firstName:"Home_firstName__BS-EW",emoji:"Home_emoji__3d6jG",avatar:"Home_avatar__23mjw",mainImg:"Home_mainImg__v5IGL",socials:"Home_socials__3Jz0X"}},,function(e,a,t){e.exports={shadowed:"Portfolio_shadowed__1bWvY",projectsGrid:"Portfolio_projectsGrid__2UtkP",block:"Portfolio_block__2XiVJ",image:"Portfolio_image__2WipH",source:"Portfolio_source__3BZuy"}},function(e,a,t){e.exports={shadowed:"BaseLayout_shadowed__1g7o7",light:"BaseLayout_light__1z66x",dark:"BaseLayout_dark__2BUQc",container:"BaseLayout_container__2hXED"}},function(e,a,t){e.exports={shadowed:"Navbar_shadowed__3WL2c",navList:"Navbar_navList__RwM-9",logo:"Navbar_logo__3TDue",dark:"Navbar_dark__1Fw6d",topRow:"Navbar_topRow__3z73h"}},,,,,,,function(e,a,t){e.exports={shadowed:"App_shadowed__3jrTB"}},function(e,a,t){e.exports={toggler:"Toggler_toggler__19B26"}},function(e,a,t){e.exports=t.p+"static/media/self.aa1917bd.png"},,function(e,a,t){e.exports=t.p+"static/media/mock1.456d27d3.png"},function(e,a,t){e.exports=t.p+"static/media/mock2.37e11540.png"},function(e,a,t){e.exports=t.p+"static/media/mock3.6a736fcd.png"},function(e,a,t){e.exports=t.p+"static/media/mock4.bd6a383d.png"},,function(e,a,t){e.exports=t(40)},,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),o=t.n(r),i=t(21),c=t.n(i),s=t(29),m=t(13),d=t.n(m),u=t(4),p=t.n(u),_=t(8),E=t(14),f=t.n(E),h=t(22),v=t.n(h);function b(e){var a=e.darkMode,t=e.handleClick;return l.a.createElement("div",{className:v.a.toggler,onClick:t},a?l.a.createElement("span",{"aria-label":"Full Moon",role:"img"},"\ud83c\udf15"):l.a.createElement("span",{"aria-label":"New Moon",role:"img"},"\ud83c\udf11"))}var g=t(23),w=["rgb(185, 85, 211)","rgb(247, 10, 7)"],N={firstName:"John",lastName:"Smith",initials:"js",position:"Full Stack Developer",selfPortrait:t.n(g).a,gradient:"linear-gradient(135deg, ".concat(w,")"),miniBio:[["\u2615\ufe0f","Fueled by coffee"],["\ud83c\uddfa\ud83c\uddf8","Based in the US"],["\ud83d\udcbc","Systems Engineer at Google"],["\u2709\ufe0f","johnsmith@gmail.com"]],socials:[["https://facebook.com/",l.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"})],["https://instagram.com/",l.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"})],["https://linkedin.com",l.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})],["https://medium.com",l.a.createElement("i",{className:"fa fa-medium","aria-hidden":"true"})],["https://twitter.com",l.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"})]],bio:"Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",hobbies:[["\ud83d\udcd6","reading"],["\ud83c\udfad","theater"],["\ud83c\udfa5","movies"],["\ud83c\udf36","spicy food"]],portfolio:[{title:"Project 1",liveLink:"paytonjewell.dev",sourceLink:"paytonjewell.dev"},{title:"Project 2",liveLink:"https://paytonjewell.dev",sourceLink:"https://paytonjewell.dev"},{title:"Project 3",liveLink:"https://paytonjewell.dev",sourceLink:"https://paytonjewell.dev"},{title:"Project 4",liveLink:"https://paytonjewell.dev",sourceLink:"https://paytonjewell.dev"}]};function k(e){var a=e.darkMode,t=e.handleClick;return l.a.createElement("nav",null,l.a.createElement("ul",{className:p()(f.a.navList,a?f.a.dark:null)},l.a.createElement("li",null,l.a.createElement(_.b,{exact:!0,activeClassName:"current",to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(_.b,{exact:!0,activeClassName:"current",to:"/about"},"About Me")),l.a.createElement("li",null,l.a.createElement(_.b,{exact:!0,activeClassName:"none",to:"/"},l.a.createElement("span",{className:f.a.logo},N.initials))),l.a.createElement("li",null,l.a.createElement(_.b,{exact:!0,activeClassName:"current",to:"/portfolio"},"Portfolio")),l.a.createElement(b,{darkMode:a,handleClick:t})))}var j=t(1),y=t(10),L=t.n(y);function x(){var e={background:N.gradient,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},a=N.miniBio;var t=N.socials;return l.a.createElement("main",null,l.a.createElement("div",{className:p()(L.a.avatar,L.a.shadowed),style:{background:N.gradient}},l.a.createElement("img",{src:N.selfPortrait,alt:"self",className:L.a.mainImg})),l.a.createElement("div",{className:L.a.mainText},l.a.createElement("h1",null,"Hi, I'm ",l.a.createElement("span",{style:e},N.firstName)," \ud83d\udc4b\ud83c\udffb"),l.a.createElement("h2",null,"I'm a ",N.position,"."),l.a.createElement("ul",null,function(){for(var e=[],t=0;t<a.length;t++){var n=a[t];e.push(l.a.createElement("li",null,l.a.createElement("span",{"aria-label":"emoji",role:"img",className:L.a.emoji},n[0])," ",n[1]))}return e}()),l.a.createElement("div",{className:L.a.socials},function(){for(var e=[],a=0;a<t.length;a++){var n=t[a];e.push(l.a.createElement("a",{href:n[0]},n[1]))}return e}())))}var C=t(3),P=t.n(C);function B(){var e="fa fa-circle",a=N.hobbies;return l.a.createElement("div",{className:P.a.about},l.a.createElement("div",{className:p()(P.a.terminal,P.a.shadowed)},l.a.createElement("div",{className:P.a.topRow},l.a.createElement("i",{className:p()(e,P.a.red)}),l.a.createElement("i",{className:p()(e,P.a.amber)}),l.a.createElement("i",{className:p()(e,P.a.green)})),l.a.createElement("div",{className:P.a.window},l.a.createElement("p",null,l.a.createElement("span",{style:{color:w[1]}},N.firstName.toLowerCase(),N.lastName.toLowerCase()," $")," cat about",N.firstName.toLowerCase()," "),l.a.createElement("p",null,l.a.createElement("span",{style:{color:w[1]}},"about",N.firstName.toLowerCase()," ",l.a.createElement("span",{className:P.a.green},"(master)")," $ "),N.bio))),l.a.createElement("div",{id:"bot",className:p()(P.a.terminal,P.a.shadowed)},l.a.createElement("div",{className:P.a.topRow},l.a.createElement("i",{className:p()(e,P.a.red)}),l.a.createElement("i",{className:p()(e,P.a.amber)}),l.a.createElement("i",{className:p()(e,P.a.green)})),l.a.createElement("div",{className:P.a.window},l.a.createElement("p",null,l.a.createElement("span",{style:{color:w[1]}},N.firstName.toLowerCase(),N.lastName.toLowerCase()," $")," cd hobbies/interests"),l.a.createElement("p",null,l.a.createElement("span",{style:{color:w[1]}},"hobbies/interests ",l.a.createElement("span",{className:P.a.green},"(master)")," $")," ls"),l.a.createElement("ul",null,function(){for(var e=[],t=0;t<a.length;t++){var n=a[t];e.push(l.a.createElement("li",null,l.a.createElement("span",{"aria-label":"emoji",role:"img",className:P.a.emoji},n[0])," ",n[1]))}return e}()))))}var A=t(12),I=t.n(A),H=t(25),M=t.n(H),S=t(26),F=t.n(S),J=t(27),G=t.n(J),R=t(28),T=t.n(R);function W(){var e=N.portfolio,a=[M.a,F.a,G.a,T.a];return l.a.createElement("main",null,l.a.createElement("div",{className:I.a.projectsGrid},function(){for(var t=[],n=0,r=0;r<e.length;r++)t.push(l.a.createElement("div",{className:I.a.block},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:N.portfolio[r].liveLink},l.a.createElement("img",{className:I.a.image,src:a[n++]})),l.a.createElement("h1",null,N.portfolio[r].title),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:N.portfolio[r].sourceLink,style:{backgroundColor:w[1]},className:I.a.source},"Source Code")));return t}()))}function D(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:p()(d.a.container,t?d.a.dark:d.a.light)},l.a.createElement(k,{darkMode:t,handleClick:function(){r(!t),console.log(t)}}),l.a.createElement(z,null),l.a.createElement("footer",null,l.a.createElement("p",null," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://paytonjewell.github.io/"},"Template made with \u2665 by PJ")),l.a.createElement("p",null,"\xa9 2020")))}var z=function(){return l.a.createElement(j.c,null,l.a.createElement(j.a,{exact:!0,path:"/",component:x}),l.a.createElement(j.a,{exact:!0,path:"/about",component:B}),l.a.createElement(j.a,{exact:!0,path:"/portfolio",component:W}))};var $=function(){return l.a.createElement(_.a,null,l.a.createElement("div",{className:c.a.app},l.a.createElement(D,null,l.a.createElement(x,null))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.372bdde7.chunk.js.map