(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{194:function(e,t,n){"use strict";(function(e){var c=n(6),i=n(0),o=n(370),r=n(371),a=n(195),u=n(87),s=n.n(u),f=n(196),b=n.n(f),l=(n(360),n(2));t.a=function(t){var n=t.text,u=t.render,f=Object(i.useState)(null),j=Object(c.a)(f,2),p=j[0],O=j[1],d=Object(i.useState)(""),m=Object(c.a)(d,2),h=m[0],v=m[1],x=Object(i.useState)(!1),g=Object(c.a)(x,2),y=g[0],k=g[1];return Object(i.useEffect)((function(){O(function(t){var n=a.a,c=new s.a(e.from(n,"base64"),"pkcs8-public-der");return"https://atomicul.github.io/cryptobby/#/msg/"+encodeURIComponent(c.encrypt(e.from(t),"base64"))}(n))}),[u]),Object(i.useEffect)((function(){!function(e,t){b.a.toDataURL(e,(function(e,n){e?console.log(e):t(n)}))}(p,v),console.log(p)}),[p]),Object(i.useEffect)((function(){var e;return y&&(e=setTimeout((function(){k(!1)}),3e3)),function(){clearTimeout(e)}}),[y]),Object(l.jsxs)("div",{className:"result",children:[Object(l.jsx)("a",{href:h,download:"encrypted-qr.png",children:Object(l.jsx)("img",{src:h})}),Object(l.jsx)(o.a,{open:y,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Copied",children:Object(l.jsx)(r.a,{variant:"contained",fullWidth:!0,onClick:function(){var e;e=p,navigator.clipboard.writeText(e),k(!0)},children:"Copy Link"})})]})}}).call(this,n(17).Buffer)},195:function(e,t,n){"use strict";t.a="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrw63Y3B3FeRZa263/W5KZn1a63OnWKtS9gwUVDqb1p9BnAmHW1COK9ypmpfe5XcY70HNvcJEiXbx7XieQF5omEOqAN4SeIIRT7m4EClXJNVyYBX+25p0MjKf7Uqf715IbUFISdXR756w0D8Nlrxf6ABBIR1pByPwzN7GIIVeZlwIDAQAB"},201:function(e,t,n){"use strict";(function(e){var c=n(10),i=n(87),o=n.n(i),r=n(77),a=n.n(r),u=(n(0),n(366),n(2)),s=function(t){var n=a.a.get("key");return console.log(n),void 0===n?"Nu e pentru tine >_<":new o.a(e.from(n,"base64"),"pkcs8-private-der").decrypt(e.from(t,"base64"),"utf8")};t.a=function(){var t=Object(c.m)().msg;return console.log(a.a.get("key")),console.log(e.from(t,"base64").byteLength),Object(u.jsx)("div",{className:"decode",children:Object(u.jsx)("h1",{children:s(t)})})}}).call(this,n(17).Buffer)},227:function(e,t){},229:function(e,t){},239:function(e,t){},241:function(e,t){},266:function(e,t){},268:function(e,t){},269:function(e,t){},274:function(e,t){},276:function(e,t){},282:function(e,t){},284:function(e,t){},303:function(e,t){},315:function(e,t){},318:function(e,t){},360:function(e,t,n){},364:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);var c=n(193),i=n.n(c),o=n(0),r=n(126),a=n(10),u=n(6),s=n(414),f=n(371),b=n(194),l=(n(364),n(2)),j=function(){var e=Object(o.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(""),r=Object(u.a)(i,2),a=r[0],j=r[1],p=Object(o.useState)(0),O=Object(u.a)(p,2),d=O[0],m=O[1];return Object(l.jsxs)("div",{className:"encrypt",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(Object(l.jsx)(b.a,{text:a,render:d})),m((function(e){return e+1})),j("")},children:[Object(l.jsx)(s.a,{label:"Message",variant:"outlined",fullWidth:!0,margin:"dense",value:a,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)(f.a,{variant:"outlined",fullWidth:!0,margin:"dense",type:"submit",children:"Submit"})]}),n]})},p=function(e){var t=e.path,n=Object(a.k)();Object(o.useEffect)((function(){n(t)}),[])},O=n(201),d=n(77),m=n.n(d),h=function(){var e=Object(a.m)().key;return m.a.set("key",e,{expires:365,path:"/cryptobby"}),Object(l.jsx)(p,{path:"/encrypt"})},v=(n(367),Object(r.a)([{path:"/",element:Object(l.jsx)(p,{path:"/encrypt"})},{path:"/msg/:msg",element:Object(l.jsx)(O.a,{})},{path:"/encrypt",element:Object(l.jsx)(j,{})},{path:"/setkey/:key",element:Object(l.jsx)(h,{})}]));var x=function(){return Object(l.jsx)(a.b,{router:v})};i.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(x,{}))}},[[368,1,2]]]);
//# sourceMappingURL=main.0f0c59f1.chunk.js.map