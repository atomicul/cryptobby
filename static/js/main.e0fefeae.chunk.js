(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{194:function(e,t,n){"use strict";(function(e){var c=n(6),i=n(0),a=n(370),o=n(371),r=n(195),u=n(87),s=n.n(u),f=n(196),b=n.n(f),l=(n(360),n(2));t.a=function(t){var n=t.text,u=t.render,f=Object(i.useState)(null),j=Object(c.a)(f,2),d=j[0],p=j[1],O=Object(i.useState)(""),h=Object(c.a)(O,2),m=h[0],v=h[1],g=Object(i.useState)(!1),x=Object(c.a)(g,2),y=x[0],k=x[1];return Object(i.useEffect)((function(){p(function(t){var n=r.a,c=new s.a(e.from(n,"base64"),"pkcs8-public-der");return"https://atomicul.github.io/cryptobby/msg/"+encodeURIComponent(c.encrypt(e.from(t),"base64"))}(n))}),[u]),Object(i.useEffect)((function(){!function(e,t){b.a.toDataURL(e,(function(e,n){e?console.log(e):t(n)}))}(d,v),console.log(d)}),[d]),Object(i.useEffect)((function(){var e;return y&&(e=setTimeout((function(){k(!1)}),3e3)),function(){clearTimeout(e)}}),[y]),Object(l.jsxs)("div",{className:"result",children:[Object(l.jsx)("a",{href:m,download:"encrypted-qr.png",children:Object(l.jsx)("img",{src:m})}),Object(l.jsx)(a.a,{open:y,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Copied",children:Object(l.jsx)(o.a,{variant:"contained",fullWidth:!0,onClick:function(){var e;e=d,navigator.clipboard.writeText(e),k(!0)},children:"Copy Link"})})]})}}).call(this,n(17).Buffer)},195:function(e,t,n){"use strict";t.a="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4lNkTvRy8Fe7/ENVkDUuJwq/vxsbF+i/YYTkEapOuKVV5tBERYFZ7sYqRv6JWojjY/FuWQ/ard1oNztvgrM8lmMm2MHd3h+pCiUvxPqY8Bs52lQ3ErivvC5Stg+VwdTT4HDaH0AiDPzNVpaPehY9vFB2byaMGcgFdnw5cCWLaTwIDAQAB"},201:function(e,t,n){"use strict";(function(e){var c=n(10),i=n(87),a=n.n(i),o=n(77),r=n.n(o),u=(n(0),n(366),n(2)),s=function(t){var n=r.a.get("key");return console.log(n),void 0===n?"Nu e pentru tine >_<":new a.a(e.from(n,"base64"),"pkcs8-private-der").decrypt(e.from(t,"base64"),"utf8")};t.a=function(){var t=Object(c.m)().msg;return console.log(r.a.get("key")),console.log(e.from(t,"base64").byteLength),Object(u.jsx)("div",{className:"decode",children:Object(u.jsx)("h1",{children:s(t)})})}}).call(this,n(17).Buffer)},227:function(e,t){},229:function(e,t){},239:function(e,t){},241:function(e,t){},266:function(e,t){},268:function(e,t){},269:function(e,t){},274:function(e,t){},276:function(e,t){},282:function(e,t){},284:function(e,t){},303:function(e,t){},315:function(e,t){},318:function(e,t){},360:function(e,t,n){},364:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);var c=n(193),i=n.n(c),a=n(0),o=n(126),r=n(10),u=n(6),s=n(414),f=n(371),b=n(194),l=(n(364),n(2)),j=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),r=o[0],j=o[1],d=Object(a.useState)(0),p=Object(u.a)(d,2),O=p[0],h=p[1];return Object(l.jsxs)("div",{className:"encrypt",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(Object(l.jsx)(b.a,{text:r,render:O})),h((function(e){return e+1})),j("")},children:[Object(l.jsx)(s.a,{label:"Message",variant:"outlined",fullWidth:!0,margin:"dense",value:r,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)(f.a,{variant:"outlined",fullWidth:!0,margin:"dense",type:"submit",children:"Submit"})]}),n]})},d=function(e){var t=e.path,n=Object(r.k)();Object(a.useEffect)((function(){n(t)}),[])},p=n(201),O=n(77),h=n.n(O),m=function(){var e=Object(r.m)().key;return h.a.set("key",e,{expires:365,path:"/"}),Object(l.jsx)(d,{path:"/cryptobby/encrypt"})},v=(n(367),Object(o.a)([{path:"/",element:Object(l.jsx)(d,{path:"/encrypt"})},{path:"/msg/:msg",element:Object(l.jsx)(p.a,{})},{path:"/encrypt",element:Object(l.jsx)(j,{})},{path:"/setkey/:key",element:Object(l.jsx)(m,{})}],{basename:"/cryptobby"}));var g=function(){return Object(l.jsx)(r.b,{router:v})};i.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(g,{}))}},[[368,1,2]]]);
//# sourceMappingURL=main.e0fefeae.chunk.js.map