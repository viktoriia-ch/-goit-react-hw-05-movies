"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[867],{8867:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(5861),a=r(9439),s=r(7757),c=r.n(s),u=r(2791),i=r(1087),o=r(5264),f=r(3061),m="movies-search-form_container__eEJ1B",p="movies-search-form_form__QkZ9F",l="movies-search-form_input__s5QWc",v="movies-search-form_button__uDFeG",h="movies-search-form_icon__1e85T",_=r(184),d=function(e){var t=e.onSubmit,r=(0,u.useState)(""),n=(0,a.Z)(r,2),s=n[0],c=n[1];return(0,_.jsx)("div",{className:m,children:(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s)},className:p,children:[(0,_.jsx)("input",{name:"search",type:"text",placeholder:"Enter name of movie...",onChange:function(e){var t=e.target.value;c(t)},className:l}),(0,_.jsx)("button",{type:"submit",className:v,children:(0,_.jsx)(f.FKI,{className:h})})]})})},x=r(724),g=r(6850),b=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],f=(0,i.lr)(),m=(0,a.Z)(f,2),p=m[0],l=m[1],v=p.get("search");(0,u.useEffect)((function(){if(v){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.Wf)(v);case 3:t=e.sent,r=t.results,s(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response,o.Notify.failure(n.data.status_message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d,{onSubmit:function(e){l({search:e})}}),(0,_.jsx)(g.Z,{items:r})]})},w=function(){return(0,_.jsx)(b,{})}},6850:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(1087),a=r(7689),s="movies-list_list__m+Us7",c="movies-list_item__B8oPM",u="movies-list_link__ML-sK",i="movies-list_image__BiAYH",o="movies-list_title__LFQn7",f=r(7979),m=r(184),p=function(e){var t=e.items,r=(0,a.TH)(),p=function(e){return e?"https://image.tmdb.org/t/p/w200/".concat(e):f},l=t.map((function(e){var t=e.id,a=e.title,s=e.poster_path;return(0,m.jsx)("li",{className:c,children:(0,m.jsxs)(n.rU,{to:"/movies/".concat(t),className:u,state:{from:r},children:[(0,m.jsx)("img",{src:p(s),alt:a,className:i}),(0,m.jsx)("p",{className:o,children:a})]})},t)}));return(0,m.jsx)("ul",{className:s,children:l})},l=p;p.defaultProps={items:[]}},724:function(e,t,r){r.d(t,{Df:function(){return u},Ku:function(){return f},Pg:function(){return i},Wf:function(){return o},fI:function(){return m}});var n=r(5861),a=r(7757),s=r.n(a),c=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"f382609d477ce9aec3e1d07c01aab879",language:"en-US"}}),u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t,page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7979:function(e,t,r){e.exports=r.p+"static/media/movie-poster.517b3f81901fe6a5812c.jpg"}}]);
//# sourceMappingURL=867.9b70e7b4.chunk.js.map