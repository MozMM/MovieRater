(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(18),i=a.n(r),o=(a(48),a(33)),l=a(34),d=a(42),u=a(40),j=a(3),b=a(11),h=a.p+"static/media/RightPointing.ca24b20e.png",p=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("div",{className:"header-stuff__container",children:Object(c.jsxs)(b.b,{to:"/",children:[Object(c.jsx)("img",{className:"pointer-image",src:h,alt:""}),Object(c.jsx)("div",{id:"header__text",children:"Movie Rate-I-fier"})]})})})},m=a(41),v=a(9),O=a(4),_=a(12),x=a.n(_),f=a(16),g=a(14),N=a.n(g),y="MOVIE_DATA_LOADING",w="GET_MOVIES_SUCCESS",k="GET_MOVIES_SUCCESS_NO_RESULTS",D="MOVIE_DETAIL_LOADING",E="GET_MOVIE_DETAIL_SUCCESS",M="GET_MOVIE_FAIL",S="GET_RATING_FROM_DB",R="GET_RATING_FROM_DB_FAIL",L=function(e){return e.moviesReducer.isLoading},T=function(e){return e.moviesReducer.movieResults},I=function(e){return e.moviesReducer.errorMsg},C=function(e){return e.moviesReducer.movieDetail},F=function(e){return e.moviesReducer.ratingFromDataBase},U=a.p+"static/media/Cow.18bf5238.jpg",B=function(e){return e.poster_path?Object(c.jsx)("img",{className:"movie-results__poster",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}):Object(c.jsxs)("div",{className:"movie-results__poster__default",children:[Object(c.jsx)("div",{className:"default-text",children:e.title}),Object(c.jsx)("div",{children:"No image available"})]})},A=function(e){var t=function(e){var t="No Moovies. \n Please try \n a different query.";return"Request failed with status code 422"===e&&(t="No Moovies. \n Please provide \n a search query!"),t.split("\n")}(e);return Object(c.jsxs)("div",{className:"cow-error__container",children:[Object(c.jsxs)("div",{className:"cow-text__container",children:[Object(c.jsx)("div",{className:"cow-text",children:t[0]}),Object(c.jsx)("div",{className:"cow-text",children:t[1]}),Object(c.jsx)("div",{children:t[2]})]}),Object(c.jsx)("img",{src:U,alt:""})]})},G=function(e){var t=Object(v.b)(),a=Object(v.c)(T),s=Object(v.c)(I),r=Object(v.c)(L),i=a.length>0,o=Object(n.useState)(""),l=Object(m.a)(o,2),d=l[0],u=l[1];return r?Object(c.jsx)("div",{className:"loading-text__container",children:Object(c.jsx)("div",{className:"loading-text",children:"Loading..."})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"search-container",children:Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("form",{className:"search__form",children:[Object(c.jsx)("label",{className:"search__label",children:"What are you looking for?"}),Object(c.jsxs)("span",{className:"search__button-container",children:[Object(c.jsx)("input",{className:"search__input",type:"text",onChange:function(e){return u(e.target.value)}}),Object(c.jsx)("button",{className:"search__button",type:"submit",onClick:function(){return t((e=d,function(){var t=Object(f.a)(x.a.mark((function t(a){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),t.prev=1,t.next=4,N.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("7218fc347f4c351be35293f06086eaf2","&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 4:0===(c=t.sent).data.total_results?a({type:k,payload:c.data.results}):c.data.results&&a({type:w,payload:c.data.results}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:M,payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Search Movies"})]})]})})}),Object(c.jsxs)("div",{children:[i&&Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"movie-results__container movie-results__instructions",children:"Click on a poster for details, or to add your rating."}),Object(c.jsx)("div",{className:"movie-results__container",children:a.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(b.b,{to:"/movie/".concat(e.id),children:B(e)})},e.id)}))})]}),Object(c.jsx)("div",{children:s&&A(s)})]})]})},P=a.p+"static/media/ThumbsUp.75b42780.png",V=a.p+"static/media/ThumbsDown.12398e01.png",q=function(e){if(!e)return Object(c.jsxs)("div",{className:"ratings__container",children:[" ",Object(c.jsx)("div",{className:"rating-text",children:"No one around here has voted on this movie yet, go ahead and be the first."})]});var t=e.thumbsUp,a=e.thumbsDown;return Object(c.jsxs)("div",{className:"ratings__container",children:[Object(c.jsxs)("span",{className:"ratings__text",children:[" ","Thumbs Up: ".concat(t)]}),Object(c.jsx)("span",{className:"ratings__symbol",children:"\u2756"}),Object(c.jsx)("span",{className:"ratings__text",children:"Thumbs Down: ".concat(a)})]})},J=function(e){var t,a,s=e.match.params.id,r=Object(v.b)(),i=Object(v.c)(F),o=Object(v.c)(C),l=Object(v.c)(L);return Object(n.useEffect)((function(){r(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(a){var c,n,s,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:D}),t.prev=1,t.next=4,N.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("7218fc347f4c351be35293f06086eaf2","&language=en-US"));case 4:return c=t.sent,t.next=7,N.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("7218fc347f4c351be35293f06086eaf2","&language=en-US"));case 7:n=t.sent,s={},r="Name not available",n.data&&(s=n.data.crew.filter((function(e){return"Director"===e.job}))[0])&&(r=s.name),c.data&&a({type:E,payload:Object(O.a)(Object(O.a)({},c.data),{},{director:r})}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),a({type:M,payload:t.t0});case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()}(s)),r(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(a){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("/api/ratings/".concat(e));case 3:(c=t.sent)&&a({type:S,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:R,payload:"please check database connection."});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(s))}),[]),l?Object(c.jsx)("div",{className:"loading-text__container",children:Object(c.jsx)("div",{className:"loading-text",children:"Loading..."})}):Object(c.jsxs)("div",{className:"movie-detail__container",children:[Object(c.jsx)("div",{className:"movie-detail__poster__container",children:(a=o,a.poster_path?Object(c.jsx)("img",{className:"movie-detail__poster",src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path),alt:a.title}):Object(c.jsxs)("div",{className:"movie-detail__poster__default",children:[Object(c.jsx)("div",{children:a.title}),Object(c.jsx)("div",{children:"No image available"})]}))}),Object(c.jsxs)("div",{className:"movie-detail__text__container",children:[Object(c.jsx)("div",{className:"movie-detail__title",children:"".concat(o.title)}),Object(c.jsx)("div",{className:"movie-detail__text",children:"Director: ".concat(o.director)}),o.release_date&&Object(c.jsxs)("div",{className:"movie-detail__text",children:[" ","Released: ".concat((t=o.release_date,t.slice(0,4)))]}),Object(c.jsx)("div",{className:"movie-detail__text",children:" Description: ".concat(o.overview)}),Object(c.jsx)("div",{children:q(i)}),Object(c.jsxs)("div",{className:"thumbs__container",children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"search__button thumbs__button",onClick:function(){return r(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(a){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("/api/ratings/".concat(e,"/up"));case 3:(c=t.sent)&&a({type:S,payload:{thumbsUp:c.data.thumbsUp,thumbsDown:c.data.thumbsDown}}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:R,payload:"please check database connection."});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(o.id))},children:Object(c.jsx)("img",{className:"thumbs-image",src:P,alt:"up"})})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"search__button thumbs__button",onClick:function(){return r(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(a){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("/api/ratings/".concat(e,"/down"));case 3:(c=t.sent)&&a({type:S,payload:{thumbsUp:c.data.thumbsUp,thumbsDown:c.data.thumbsDown}}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:R,payload:"please check database connection."});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(o.id))},children:Object(c.jsx)("img",{className:"thumbs-image",src:V,alt:"down"})})})]}),Object(c.jsx)("div",{className:"back-button__container",children:Object(c.jsx)("div",{children:Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)("button",{className:"search__button",children:"Back to Search"})})})})]})]})},W=a.p+"static/media/Turtle.ec316491.jpg",z=function(){return Object(c.jsxs)("div",{className:"notFound__container",children:[Object(c.jsx)("img",{src:W,alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"notFound__text",children:"Nothing over here..."}),Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)("button",{className:"search__button",children:"Back to Search"})})]})]})},H=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:G}),Object(c.jsx)(j.a,{path:"/movie/:id",component:J}),Object(c.jsx)(j.a,{path:"*",component:z})]})]})}}]),a}(n.Component),K=a(13),Q=a(37),X=a(38),Y=a(39),Z={movieResults:[],movieDetail:{},ratingFromDataBase:null,dataBaseErr:null,errorMsg:!1,isLoading:!1};var $=Object(K.combineReducers)({moviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(O.a)(Object(O.a)({},e),{},{movieResults:[],isLoading:!0,errorMsg:null});case D:return Object(O.a)(Object(O.a)({},e),{},{isLoading:!0,errorMsg:null});case w:return Object(O.a)(Object(O.a)({},e),{},{movieResults:t.payload,errorMsg:null,isLoading:!1});case k:return Object(O.a)(Object(O.a)({},e),{},{movieResults:t.payload,errorMsg:"No Moovies. \n Please try \n a different query.",isLoading:!1});case E:return Object(O.a)(Object(O.a)({},e),{},{movieDetail:t.payload,errorMsg:null,isLoading:!1});case M:return Object(O.a)(Object(O.a)({},e),{},{errorMsg:t.payload.message,isLoading:!1});case S:return Object(O.a)(Object(O.a)({},e),{},{ratingFromDataBase:t.payload,dataBaseErr:null});case R:return Object(O.a)(Object(O.a)({},e),{},{dataBaseErr:t.payload});default:return e}}}),ee=Object(Y.composeWithDevTools)(Object(K.applyMiddleware)(X.a,Object(Q.createLogger)({collapsed:!0}))),te=Object(K.createStore)($,ee);var ae=function(){return Object(c.jsx)(b.a,{children:Object(c.jsx)(v.a,{store:te,children:Object(c.jsx)(H,{})})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ae,{})}),document.getElementById("root")),ce()}},[[77,1,2]]]);
//# sourceMappingURL=main.ed321109.chunk.js.map