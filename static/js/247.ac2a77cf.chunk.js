"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r,a,c,i,s=n(861),o=n(439),p=n(168),h=n(757),u=n.n(h),d=n(791),l=n(689),m=n(340),f=n(867),v=n(184),x=f.ZP.div(r||(r=(0,p.Z)(["\n  margin: 10px;\n  padding: 10px;\n"]))),Z=f.ZP.img(a||(a=(0,p.Z)(["\n  width: 100px; // Make the actor images smaller\n  height: auto;\n"]))),g=f.ZP.h2(c||(c=(0,p.Z)(["\n  font-size: 1.5em;\n"]))),k=f.ZP.p(i||(i=(0,p.Z)(["\n  font-size: 1em;\n"])));t.default=function(){var e=(0,d.useState)(null),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,l.UO)().movieId;return(0,d.useEffect)((function(){var e=function(){var e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.Z)("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=04b4d601805ac31a2739906707e3a331"));case 3:t=e.sent,r(t.data.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,v.jsx)("div",{children:n?(0,v.jsx)("div",{children:n.map((function(e){return(0,v.jsxs)(x,{children:[(0,v.jsx)(g,{children:e.name}),(0,v.jsx)(k,{children:e.character}),e.profile_path&&(0,v.jsx)(Z,{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name})]},e.cast_id)}))}):"Loading..."})}}}]);
//# sourceMappingURL=247.ac2a77cf.chunk.js.map