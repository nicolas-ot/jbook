(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[0],{131:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=131},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},273:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},693:function(e,t,n){},694:function(e,t,n){},695:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"updateCell",(function(){return R})),n.d(r,"deleteCell",(function(){return k})),n.d(r,"moveCell",(function(){return D})),n.d(r,"insertCellAfter",(function(){return S})),n.d(r,"createBundle",(function(){return A}));var a,c=n(44),i=n.n(c),o=(n(226),n(227),n(46)),s=n(38),u=n(207),l=n(72);!function(e){e.MOVE_CELL="move_cell",e.DELETE_CELL="delete_cell",e.INSERT_CELL_AFTER="insert_cell_after",e.UPDATE_CELL="update_cell",e.BUNDLE_START="bundle_start",e.BUNDLE_COMPLETE="bundle_complete"}(a||(a={}));var d={loading:!1,error:null,order:[],data:{}},p=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.UPDATE_CELL:var n=t.payload,r=n.id,c=n.content;return e.data[r].content=c,e;case a.DELETE_CELL:return delete e.data[t.payload],e.order=e.order.filter((function(e){return e!==t.payload})),e;case a.MOVE_CELL:var i=t.payload.direction,o=e.order.findIndex((function(e){return e===t.payload.id})),s="up"===i?o-1:o+1;return s<0||s>e.order.length-1||(e.order[o]=e.order[s],e.order[s]=t.payload.id),e;case a.INSERT_CELL_AFTER:var u={content:"",type:t.payload.type,id:t.payload.id||f()};e.data[u.id]=u;var l=e.order.findIndex((function(e){return e===t.payload.id}));return l<0?e.order.unshift(u.id):e.order.splice(l+1,0,u.id),e;default:return e}})),f=function(){return Math.random().toString(36).substr(2,5)},j=p,b={},h=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.BUNDLE_START:return e[t.payload.cellId]={loading:!0,code:"",err:""},e;case a.BUNDLE_COMPLETE:return e[t.payload.cellId]={loading:!1,code:t.payload.bundle.code,err:t.payload.bundle.err},e;default:return e}})),m=Object(s.c)({cells:j,bundles:h}),v=Object(s.d)(m,{},Object(s.a)(u.a));v.dispatch({type:a.INSERT_CELL_AFTER,payload:{id:"second",type:"code"}}),v.dispatch({type:a.INSERT_CELL_AFTER,payload:{id:null,type:"text"}}),v.dispatch({type:a.INSERT_CELL_AFTER,payload:{id:"first",type:"code"}}),v.dispatch({type:a.UPDATE_CELL,payload:{id:"first",content:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => {\n\treturn('Hello There!');\n};\n\nshow(<App />);\n// ReactDOM.render(<App />, document.querySelector('#root'));\n"}}),v.dispatch({type:a.UPDATE_CELL,payload:{id:"second",content:"show(<App />);"}}),v.dispatch({type:a.INSERT_CELL_AFTER,payload:{id:null,type:"text"}});var O,x=n(6),y=n.n(x),E=n(20),w=n(208),L=n(107),g=n.n(L),C=n(209),N=n.n(C).a.createInstance({name:"filecache"}),T=function(e){return{name:"fetch-plugin",setup:function(t){t.onLoad({filter:/^index\.js$/},function(){var t=Object(E.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{loader:"jsx",contents:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.onLoad({filter:/.*/},function(){var e=Object(E.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getItem(t.path);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.css$/},function(){var e=Object(E.a)(y.a.mark((function e(t){var n,r,a,c,i,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.path);case 2:return n=e.sent,r=n.data,a=n.request,c=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),i="\n          const style = document.createElement('style');\n          style.innerText = '".concat(c,"';\n          document.head.appendChild(style);\n        "),o={loader:"jsx",contents:i,resolveDir:new URL("./",a.responseURL).pathname},e.next=10,N.setItem(t.path,o);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.*/},function(){var e=Object(E.a)(y.a.mark((function e(t){var n,r,a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.path);case 2:return n=e.sent,r=n.data,a=n.request,c={loader:"jsx",contents:r,resolveDir:new URL("./",a.responseURL).pathname},e.next=8,N.setItem(t.path,c);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},_=function(){var e=Object(E.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=4;break}return e.next=3,w.startService({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm"});case 3:O=e.sent;case 4:return e.prev=4,e.next=7,O.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(E.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(t.path)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},T(t)],define:{"process.env.NODE_ENV":'"production"',global:"window"}});case 7:return n=e.sent,e.abrupt("return",{err:"",code:n.outputFiles[0].text});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",{err:e.t0.message,code:""});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),R=function(e,t){return{type:a.UPDATE_CELL,payload:{id:e,content:t}}},k=function(e){return{type:a.DELETE_CELL,payload:e}},D=function(e,t){return{type:a.MOVE_CELL,payload:{id:e,direction:t}}},S=function(e,t){return{type:a.INSERT_CELL_AFTER,payload:{id:e,type:t}}},A=function(e,t){return function(){var n=Object(E.a)(y.a.mark((function n(r){var c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:a.BUNDLE_START,payload:{cellId:e}}),n.next=3,_(t);case 3:c=n.sent,r({type:a.BUNDLE_COMPLETE,payload:{cellId:e,bundle:c}});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},M=(n(256),n(0)),I=o.c,U=(n(257),n(258),n(221)),F=n(210),z=n.n(F),B=n(24),V=n.n(B),P=(n(270),n(271),n(1)),H=function(e){var t=e.onChange,n=e.code,r=Object(M.useRef)();return Object(P.jsxs)("div",{className:"editor-wrapper",children:[Object(P.jsx)("button",{className:"button button-format is-primary is-small",style:{float:"right"},onClick:function(){var e=r.current.getValue(),t=z.a.format(e,{parser:"babel",plugins:[V.a],useTabs:!1,semi:!0,singleQuote:!0}).replace(/\n$/,"");r.current.setValue(t)},children:"Format"}),Object(P.jsx)(U.a,{onMount:function(e){r.current=e,e.onDidChangeModelContent((function(){t(e.getValue())})),e.setValue(n)},language:"javascript",theme:"vs-dark",options:{tabSize:2,minimap:{enabled:!1},wordWrap:"on",showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0}})]})},W=(n(273),"\n    <html>\n      <head>\n        <style>html { background-color: white; }</style>\n      </head>\n      <body>\n        <div id=\"root\"></div>\n        <script>\n          const handleError = (err) => {\n            const root = document.querySelector('#root');\n            root.innerHTML = '<div style=\"color: red;\"><h4>Runtime Error</h4>' + err + '</div>';\n            console.error(err);\n          };\n\n          window.addEventListener('error', (event) => {\n            event.preventDefault();\n            handleError(event.error);\n          });\n\n          window.addEventListener('message', (event) => {\n            try {\n              eval(event.data);\n            } catch (err) {\n              handleError(err);\n            }\n          }, false);\n        <\/script>\n      </body>\n    </html>\n  "),q=function(e){var t=e.code,n=e.err,r=Object(M.useRef)();return Object(M.useEffect)((function(){r.current.srcdoc=W,setTimeout((function(){r.current.contentWindow.postMessage(t,"*")}),50)}),[t]),Object(P.jsxs)("div",{className:"preview-wrapper",children:[Object(P.jsx)("iframe",{title:"preview",ref:r,sandbox:"allow-scripts",srcDoc:W}),n&&Object(P.jsx)("div",{className:"error-message",children:n})]})},$=n(14),J=n(13),Q=n(211),G=(n(280),function(e){var t,n=e.direction,r=e.children,a=Object(M.useState)(window.innerHeight),c=Object(J.a)(a,2),i=c[0],o=c[1],s=Object(M.useState)(window.innerWidth),u=Object(J.a)(s,2),l=u[0],d=u[1],p=Object(M.useState)(.75*window.innerWidth),f=Object(J.a)(p,2),j=f[0],b=f[1];return Object(M.useEffect)((function(){var e,t=function(){e&&clearTimeout(e),e=setTimeout((function(){o(window.innerHeight),j>.75*window.innerWidth&&b(.75*window.innerWidth),d(window.innerWidth)}),200)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[j]),t="vertical"===n?{width:1/0,height:300,resizeHandles:["s"],minConstraints:[1/0,24],maxConstraints:[1/0,.9*i]}:{className:"resize-horizontal",onResizeStop:function(e,t){b(t.size.width)},height:1/0,width:j,resizeHandles:["e"],minConstraints:[.2*l,1/0],maxConstraints:[.75*l,1/0]},Object(P.jsx)(Q.ResizableBox,Object($.a)(Object($.a)({},t),{},{children:r}))}),K=function(){var e=Object(o.b)();return Object(M.useMemo)((function(){return Object(s.b)(r,e)}),[e])},X=n(212),Y=function(e){var t,n=e.cell,r=K(),a=r.updateCell,c=r.createBundle,i=I((function(e){return e.bundles[n.id]})),o=(t=n.id,I((function(e){var n,r=e.cells,a=r.data,c=r.order.map((function(e){return a[e]})),i=[],o=Object(X.a)(c);try{for(o.s();!(n=o.n()).done;){var s=n.value;if("code"===s.type&&(s.id===t?i.push("\n    import _React from 'react';\n    import _ReactDOM from 'react-dom';\n    var show = (value) => {\n      const root = document.querySelector('#root');\n\n      if (typeof value === 'object') {\n        if (value.$$typeof && value.props) {\n          _ReactDOM.render(value, root);\n        } else {\n          root.innerHTML = JSON.stringify(value);\n        }\n      } else {\n        root.innerHTML = value;\n      }\n    };\n  "):i.push("var show = () => {}"),i.push(s.content)),s.id===t)break}}catch(u){o.e(u)}finally{o.f()}return i})).join("\n"));Object(M.useEffect)((function(){if(i){var e=setTimeout(Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(n.id,o);case 1:case"end":return e.stop()}}),e)}))),750);return function(){clearTimeout(e)}}c(n.id,o)}),[o,n.id,c]);var s=!i||i.loading?Object(P.jsx)("div",{className:"progress-cover",children:Object(P.jsx)("progress",{className:"progress is-small is-primary",max:"100",children:"Loading"})}):Object(P.jsx)(q,{code:i.code,err:i.err});return Object(P.jsx)(G,{direction:"vertical",children:Object(P.jsxs)("div",{style:{height:"calc(100% - 10px)",display:"flex",flexDirection:"row"},children:[Object(P.jsx)(G,{direction:"horizontal",children:Object(P.jsx)(H,{code:n.content,onChange:function(e){return a(n.id,e)}})}),Object(P.jsx)("div",{className:"progress-wrapper",children:s})]})})},Z=(n(281),n(113)),ee=function(e){var t=e.cell,n=Object(M.useRef)(null),r=Object(M.useState)(!1),a=Object(J.a)(r,2),c=a[0],i=a[1],o=K().updateCell;return Object(M.useEffect)((function(){var e=function(e){n.current&&e.target&&n.current.contains(e.target)||i(!1)};return document.addEventListener("click",e,{capture:!0}),function(){document.removeEventListener("click",e,{capture:!0})}}),[]),c?Object(P.jsx)("div",{className:"text-editor",ref:n,children:Object(P.jsx)(Z.a,{value:t.content,onChange:function(e){o(t.id,e||"")}})}):Object(P.jsx)("div",{className:"text-editor card",children:Object(P.jsx)("div",{className:"card-content",onClick:function(){i(!0)},children:Object(P.jsx)(Z.a.Markdown,{source:t.content||"Click to edit"})})})},te=(n(693),function(e){var t=e.id,n=K(),r=n.moveCell,a=n.deleteCell;return Object(P.jsxs)("div",{className:"action-bar",children:[Object(P.jsx)("button",{className:"button is-primary is-small",onClick:function(){return r(t,"up")},children:Object(P.jsx)("span",{className:"icon",children:Object(P.jsx)("i",{className:"fas fa-arrow-up"})})}),Object(P.jsx)("button",{className:"button is-primary is-small",onClick:function(){return r(t,"down")},children:Object(P.jsx)("span",{className:"icon",children:Object(P.jsx)("i",{className:"fas fa-arrow-down"})})}),Object(P.jsx)("button",{className:"button is-primary is-small",onClick:function(){return a(t)},children:Object(P.jsx)("span",{className:"icon",children:Object(P.jsx)("i",{className:"fas fa-times"})})})]})}),ne=function(e){var t,n=e.cell;return t="code"===n.type?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"action-bar-wrapper",children:Object(P.jsx)(te,{id:n.id})}),Object(P.jsx)(Y,{cell:n})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ee,{cell:n}),Object(P.jsx)(te,{id:n.id})]}),Object(P.jsx)("div",{className:"cell-list-item",children:t})},re=(n(694),function(e){var t=e.forceVisible,n=e.previousCellId,r=K().insertCellAfter;return Object(P.jsxs)("div",{className:"add-cell ".concat(t&&"force-visible"),children:[Object(P.jsxs)("div",{className:"add-buttons",children:[Object(P.jsxs)("button",{className:"button is-rounded is-primary is-small",onClick:function(){return r(n,"code")},children:[Object(P.jsx)("span",{className:"icon is-small",children:Object(P.jsx)("i",{className:"fas fa-plus"})}),Object(P.jsx)("span",{children:"Code"})]}),Object(P.jsxs)("button",{className:"button is-rounded is-primary is-small",onClick:function(){return r(n,"text")},children:[Object(P.jsx)("span",{className:"icon is-small",children:Object(P.jsx)("i",{className:"fas fa-plus"})}),Object(P.jsx)("span",{children:"Text"})]})]}),Object(P.jsx)("div",{className:"divider"})]})}),ae=function(){var e=I((function(e){var t=e.cells,n=t.order,r=t.data;return n.map((function(e){return r[e]}))})),t=e.map((function(e){return Object(P.jsxs)(M.Fragment,{children:[Object(P.jsx)(ne,{cell:e}),Object(P.jsx)(re,{previousCellId:e.id})]},e.id)}));return Object(P.jsxs)("div",{className:"cell-list",children:[Object(P.jsx)(re,{forceVisible:0===e.length,previousCellId:null}),t]})},ce=function(){return Object(P.jsx)(o.a,{store:v,children:Object(P.jsx)("div",{children:Object(P.jsx)(ae,{})})})};i.a.render(Object(P.jsx)(ce,{}),document.querySelector("#root"))}},[[695,1,2]]]);
//# sourceMappingURL=main.50cd9781.chunk.js.map