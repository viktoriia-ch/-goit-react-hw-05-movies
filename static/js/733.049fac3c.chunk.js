"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{2733:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(5861),a=r(9439),s=r(7757),c=r.n(s),i=r(2791),u=r(1087),o=r(7689),p=r(724),l=r(3061),d=r(5264),f=r(7979),v="movie-details-page_container__fhQcU",m="movie-details-page_button__bOgoc",h="movie-details-page_icon__eb+SQ",_="movie-details-page_block__nq5vP",x="movie-details-page_data__Dh1bI",g="movie-details-page_title__lvyVs",b="movie-details-page_poster__D1-+q",j="movie-details-page_info__mrhcR",w="movie-details-page_link__Chm7G",k=r(184),N=function(){var e,t=(0,i.useState)({}),r=(0,a.Z)(t,2),s=r[0],N=r[1],y=(0,i.useState)(""),Z=(0,a.Z)(y,2),S=Z[0],U=Z[1],C=(0,i.useState)([]),P=(0,a.Z)(C,2),q=P[0],D=P[1],O=(0,o.UO)().id,R=(0,o.s0)(),G=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/";(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Pg)(t);case 3:r=e.sent,N(r),U(r.poster_path?"https://image.tmdb.org/t/p/w300/".concat(r.poster_path):f),D(r.genres),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n=e.t0.response,d.Notify.failure(n.data.status_message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();e(O)}),[O]);var I=(0,i.useCallback)((function(){R(G)}),[R,G]),Q=Number(10*s.vote_average),A=q.map((function(e){var t=e.id,r=e.name;return(0,k.jsx)("li",{children:r},t)}));return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{className:v,children:[(0,k.jsx)("button",{type:"button",onClick:I,className:m,children:(0,k.jsx)(l.PjY,{className:h})}),(0,k.jsxs)("div",{className:_,children:[(0,k.jsx)("img",{src:S,alt:s.title,className:b}),(0,k.jsxs)("div",{className:x,children:[(0,k.jsxs)("h3",{className:g,children:[s.title," (",s.release_date?s.release_date.substr(0,4):" ",")"]}),(0,k.jsxs)("p",{className:j,children:["User Score: ",Math.round(Q),"%"]}),(0,k.jsx)("h4",{className:g,children:"Overview"}),(0,k.jsx)("p",{className:j,children:s.overview}),(0,k.jsx)("h4",{className:g,children:"Genres"}),(0,k.jsx)("ul",{className:j,children:A}),(0,k.jsx)("h4",{className:g,children:"Addition information"}),(0,k.jsx)(u.rU,{to:"cast",state:{from:G},className:w,children:"Cast"}),(0,k.jsx)(u.rU,{to:"reviews",state:{from:G},className:w,children:"Reviews"})]})]}),(0,k.jsx)("div",{children:(0,k.jsx)(i.Suspense,{children:(0,k.jsx)(o.j3,{})})})]})})}},724:function(e,t,r){r.d(t,{Df:function(){return i},Ku:function(){return p},Pg:function(){return u},Wf:function(){return o},fI:function(){return l}});var n=r(5861),a=r(7757),s=r.n(a),c=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"f382609d477ce9aec3e1d07c01aab879",language:"en-US"}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t,page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7979:function(e,t,r){e.exports=r.p+"static/media/movie-poster.517b3f81901fe6a5812c.jpg"}}]);
//# sourceMappingURL=733.049fac3c.chunk.js.map