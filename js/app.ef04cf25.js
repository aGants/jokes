(function(e){function t(t){for(var r,i,l=t[0],s=t[1],a=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/jokes/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b06":function(e,t,n){"use strict";n("dd98")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,i){var l=Object(r["g"])("JokesList");return Object(r["e"])(),Object(r["c"])(l)}n("ac1f"),n("841c");var o=n("c8e1"),i=n.n(o),l=i.a+"#like",s={className:"search"},a={key:0},u=Object(r["d"])("p",null,"Sorry, something went wrong :(",-1),d={key:1},p={key:0,className:"loading"},b=Object(r["d"])("div",{class:"loading-dot"},null,-1),f=Object(r["d"])("div",{class:"loading-dot"},null,-1),j=Object(r["d"])("div",{class:"loading-dot"},null,-1),O={key:1,class:"list"},k={class:"list-joke-text"},h={key:0},v={key:1},y=Object(r["d"])("use",{href:l},null,-1);function g(e,t,n,c,o,i){return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",s,[Object(r["j"])(Object(r["d"])("input",{type:"text",placeholder:"Type a word or words",className:"search__input","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.search=e})},null,512),[[r["i"],o.search]])]),o.error?(Object(r["e"])(),Object(r["c"])("div",a,[u])):(Object(r["e"])(),Object(r["c"])("div",d,[o.loading?(Object(r["e"])(),Object(r["c"])("div",p,[b,f,j])):(Object(r["e"])(),Object(r["c"])("ul",O,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["f"])(i.filteredJokes,(function(e){return Object(r["e"])(),Object(r["c"])("li",{class:["list-joke",{liked:e.liked}],key:e.id},[Object(r["d"])("div",k,["single"===e.type?(Object(r["e"])(),Object(r["c"])("p",h,Object(r["h"])(e.joke),1)):(Object(r["e"])(),Object(r["c"])("div",v,[Object(r["d"])("p",null,Object(r["h"])(e.setup),1),Object(r["d"])("p",null,Object(r["h"])(e.delivery),1)]))]),(Object(r["e"])(),Object(r["c"])("svg",{class:"list-joke-like",onClick:function(t){return i.likedJoke(e)}},[y],8,["onClick"]))],2)})),128))]))]))],64)}n("d3b7"),n("a434"),n("4de4"),n("466d");var m={name:"JokesList",data:function(){return{jokes:[],likes:[],search:"",loading:!0,error:null}},created:function(){var e=this;this.axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10").then((function(t){e.jokes=t.data.jokes})).catch((function(t){console.log(t),e.error=!0})).finally((function(){return e.loading=!1}))},methods:{likedJoke:function(e){e.liked?(e.liked=!1,this.likes.splice(this.likes.indexOf(e),1)):(e.liked=!0,this.likes.push(e))}},computed:{filteredJokes:function(){var e=this;return this.jokes.filter((function(t){return"single"===t.type?t.joke.toLowerCase().match(e.search.toLowerCase()):t.setup.toLowerCase().match(e.search.toLowerCase())||t.delivery.toLowerCase().match(e.search.toLowerCase())}))}}};m.render=g;var w=m,x={name:"App",components:{JokesList:w}};n("1b06");x.render=c;var J=x,L=n("bc3a"),C=n.n(L),_=n("2106"),P=n.n(_);Object(r["b"])(J).use(P.a,C.a).mount("#app")},c8e1:function(e,t,n){e.exports=n.p+"img/like.e6bd7d1c.svg"},dd98:function(e,t,n){}});
//# sourceMappingURL=app.ef04cf25.js.map