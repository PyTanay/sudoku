(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(2),o=n.n(c),i=n(14),a=n.n(i),s=(n(22),n(5)),l=n(4),u=n.p+"static/media/logo.6ce24c58.svg";n(23),n(24);var f=function(e){var t=Object(c.useContext)(w),n=t.selected,o=t.setSelected,i=t.value,a=t.getCol,s=t.getBlock,u=t.getBlockAddress,f=t.initialValue,j=t.path,d=t.setPath,b=t.solution,O=t.displayError,v=Object(c.useState)([e.row,e.col]),h=Object(l.a)(v,1)[0],g=Object(c.useState)(O),p=Object(l.a)(g,2),x=p[0],m=p[1],S=["singleBox"],y=Object(c.useRef)();Object(c.useEffect)((function(){y.current=i})),Object(c.useEffect)((function(){m(O)}),[O]);var N=y.current;return Object(c.useEffect)((function(){if(void 0!==N){var t=i[e.row][e.col],n=N[e.row][e.col];if(t!==n&&null===f[e.row][e.col]){var r={row:e.row,col:e.col,currVal:t,prevVal:n},c=JSON.parse(JSON.stringify(j));c.push(r),d(c)}}}),[i]),f.length>0&&null!==f[h[0]][h[1]]&&S.push("disabledBox"),n.toString()!==h.toString()||S.includes("selectedBox")?S=S.filter((function(e){return"selectedBox"!==e})):S.push("selectedBox"),!x||i[h[0]][h[1]]===b[h[0]][h[1]]||null===i[h[0]][h[1]]||S.includes("errorBox")||S.includes("disabledBox")?S=S.filter((function(e){return"errorBox"!==e})):S.push("errorBox"),null!==i[h[0]][h[1]]&&void 0!==n[0]&&(i[h[0]][h[1]]===i[n[0]][n[1]]&&h.toString()!==n.toString()?S.push("similarBox"):S=S.filter((function(e){return"similarBox"!==e}))),void 0!==n[0]&&null!==i[n[0]][n[1]]&&h[0]===n[0]&&h[1]!==n[1]&&(i[h[0]].filter((function(e){return e===i[n[0]][n[1]]})).length>1&&i[h[0]][h[1]]===i[n[0]][n[1]]?S.push("dangerBox"):S=S.filter((function(e){return"dangerBox"!==e}))),void 0!==n[0]&&null!==i[n[0]][n[1]]&&h[1]===n[1]&&h[0]!==n[0]&&(a(i,n[1]).filter((function(e){return e===i[n[0]][n[1]]})).length>1&&i[h[0]][h[1]]===i[n[0]][n[1]]?S.push("dangerBox"):S=S.filter((function(e){return"dangerBox"!==e}))),void 0!==n[0]&&null!==i[n[0]][n[1]]&&h[0]!==n[0]&&u(h).toString()===u(n).toString()&&(s(i,u(h)).filter((function(e){return e===i[h[0]][h[1]]})).length>1&&i[h[0]][h[1]]===i[n[0]][n[1]]?S.push("dangerBox"):S=S.filter((function(e){return"dangerBox"!==e}))),Object(r.jsx)("div",{onClick:function(){return o(h)},className:S.join(" "),children:Object(r.jsx)("div",{className:"text1",children:i[h[0]][h[1]]})})};n(25);var j=function(e){var t=Object(c.useState)(e.row),n=Object(l.a)(t,1)[0];return Object(r.jsx)("div",{className:"oneRow",children:Object(s.a)(Array(9)).map((function(e,t){return 2===t||5===t?Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(f,{col:t,row:n}),Object(r.jsx)("div",{className:"vLine"})]},t):Object(r.jsx)(f,{col:t,row:n},t)}))})};n(26);var d=function(){var e=Object(c.useContext)(w),t=e.selected,n=e.setSelected,i=e.value,a=e.setValue,l=e.initialValue;return Object(c.useEffect)((function(){var e=function(e){if(0!==t.length&&void 0!==t[0]){if(/[1-9]/.test(e.key)){var r=JSON.parse(JSON.stringify(i));r[t[0]][t[1]]=e.key,a(r)}if(["ArrowUp","ArrowLeft","ArrowDown","ArrowRight"].includes(e.key))switch(e.preventDefault(),e.key){case"ArrowUp":var c=1;if(0!==t[0])for(;null!==l[t[0]-c][t[1]];)t[0]-c===0?c=0:c++;else c=0;0!==t[0]&&n([t[0]-c,t[1]]);break;case"ArrowLeft":var o=1;if(0!==t[1])for(;null!==l[t[0]][t[1]-o];)t[1]-o===0?o=0:o++;else o=0;0!==t[1]&&n([t[0],t[1]-o]);break;case"ArrowDown":var u=1;if(8!==t[0])for(;null!==l[t[0]+u][t[1]];)t[0]+u===8?u=0:u++;else u=0;8!==t[0]&&n([t[0]+u,t[1]]);break;case"ArrowRight":var f=1;if(8!==t[1])for(;null!==l[t[0]][t[1]+f];)t[1]+f===8?f=0:f++;else f=0;8!==t[1]&&n([t[0],t[1]+f])}if("Delete"===e.key){var j=i;j[t[0]][t[1]]=null,a(Object(s.a)(j))}"Escape"===e.key&&n([])}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t]),Object(r.jsx)("div",{className:"wholeGrid",children:Object(s.a)(Array(9)).map((function(e,t){return 2===t||5===t?Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(j,{row:t}),Object(r.jsx)("div",{className:"hLine"})]},t):Object(r.jsx)(j,{row:t},t)}))})},b=(n(27),n(16));var O=function(e){var t=Object(c.useContext)(w),n=t.value,o=t.setValue,i=t.selected,a=e.val>=0&&e.val<10?null:e.val.props.tip;return Object(r.jsx)("div",{className:"numberSelector",onClick:function(){if(i[0]>=0){var t=JSON.parse(JSON.stringify(n));console.log(e.val.type.name),e.val>=0&&e.val<10?t[i[0]][i[1]]=e.val.toString():"BiEraser"===e.val.type.name&&(t[i[0]][i[1]]=null),o(t)}},children:Object(r.jsxs)("div",{className:"text","data-tip":a,children:[Object(r.jsx)(b.a,{effect:"solid",delayShow:500,border:!0,borderColor:" rgb(56, 125, 204)"}),e.val]})})},v=(n(30),n(6)),h=n(8),g=(n(31),n(15));var p=function(){var e=Object(c.useContext)(w),t=e.value,n=e.getCol,o=e.getBlock,i=e.getBlockAddress,a=e.solution,s=e.setSolution,u=e.setDisplayError,f=Object(c.useState)(!1),j=Object(l.a)(f,2),d=j[0],b=j[1],O=Object(c.useState)(1),v=Object(l.a)(O,2),h=v[0],p=v[1],x=Object(c.useState)(Array.from({length:9},(function(){return Array.from({length:9},(function(){return Array.from("123456789")}))}))),m=Object(l.a)(x,2),S=m[0],y=m[1];Object(c.useEffect)((function(){setTimeout((function(){b(!0),s(k(t))}),200)}),[]),Object(c.useEffect)((function(){!1===N(a)&&h<20&&!0===d?(s(k(a)),p(h+1)):!0===N(a)?(console.log("Sudoku successfully solved"),s(a),b(!1),p(1)):20===h?(console.log("Maximum iteration reached, Could not solve the sudoku."),console.log(a),b(!1),p(1)):(console.log("something's wrong"),b(!1),p(1))}),[a]);var N=function(e){var t=[];return e.forEach((function(e){e.forEach((function(e){return t.push(e)}))})),0===(t=t.filter((function(e){return null===e}))).length},k=function(e){var r=JSON.parse(JSON.stringify(e)),c=Array(9).fill([]);return S.forEach((function(e,a){var s=[];e.forEach((function(e,c){if(null===t[a][c]){var l=r[a].filter((function(e){return null!==e})).filter((function(e){return e!==r[a][c]})),u=n(r,c).filter((function(e){return null!==e})).filter((function(e){return e!==r[a][c]})),f=o(r,i([a,c])).filter((function(e){return null!==e})).filter((function(e){return e!==r[a][c]})),j=e.filter((function(e){return!l.includes(e)}));j=(j=j.filter((function(e){return!u.includes(e)}))).filter((function(e){return!f.includes(e)}))}else j=[t[a][c]];s.push(JSON.parse(JSON.stringify(j))),1===j.length&&null===r[a][c]&&(r[a][c]=j[0])})),c[a]=JSON.parse(JSON.stringify(s))})),c.forEach((function(e,t){e.forEach((function(e,n){var o=A(e,c,t,n);null!==o&&null===r[t][n]&&(r[t][n]=o,c[t][n]=[o])}))})),E(c),r},E=function(e){var t=JSON.parse(JSON.stringify(e));t.forEach((function(e,r){e.forEach((function(e,c){var a=t[r],s=n(t,c),l=o(t,i([r,c]));e=B(e,a),e=B(e,s),e=B(e,l),t[r][c]=e}))})),y(t)},B=function(e,t){var n=JSON.parse(JSON.stringify(e)),r=[];return t.forEach((function(e){2===e.length&&2===t.filter((function(t){return t.toString()===e.toString()})).length&&e.toString()!==n.toString()&&(r.includes(e[0])||r.includes(e[1])||(r.push(e[0]),r.push(e[1])))})),n=n.filter((function(e){return!r.includes(e)}))},A=function(e,t,r,c){var a=JSON.parse(JSON.stringify(t)),s=J(e,a[r]),l=J(e,n(a,c)),u=J(e,o(a,i([r,c])));return s||(l||(u||null))},J=function(e,t){var n=JSON.parse(JSON.stringify(t)),r=[];n.forEach((function(e){return e.forEach((function(e){return r.push(e)}))}));var c=[];return e.forEach((function(e){return 1===r.filter((function(t){return t===e})).length&&c.push(e)})),c.toString()};return Object(r.jsxs)("button",{className:"btn",onClick:function(){u(!0),setTimeout((function(){u(!1)}),2e3)},children:[Object(r.jsx)(g.a,{})," Check"]})};var x=function(){var e=Object(c.useContext)(w),t=e.value,n=e.setValue,o=e.initialValue,i=e.timerMethods;return Object(r.jsxs)("div",{className:"utility",children:[Object(r.jsxs)("button",{className:"btn",onClick:function(){var e={creator:"Tanay",time:new Date(Date.now()).toLocaleString("en-GB"),data:t};console.log(JSON.stringify(e))},children:[Object(r.jsx)(v.b,{})," Export Sudoku"]}),Object(r.jsxs)("button",{className:"btn",onClick:function(){o.length>0&&(n(o),i.reset())},children:[Object(r.jsx)(v.c,{})," Reset"]}),Object(r.jsx)(p,{})]})};var m=function(){var e=[1,2,3,4,5,6,7,8,9,Object(r.jsx)(v.a,{tip:"Delete"}),Object(r.jsx)(h.a,{tip:"Step Back"}),Object(r.jsx)(h.b,{tip:"Step Forward"})];return window.innerWidth<=600&&(e=[1,2,3,4,5,6,7,8,9,Object(r.jsx)(h.a,{tip:"Step Back"}),Object(r.jsx)(v.a,{tip:"Delete"}),Object(r.jsx)(h.b,{tip:"Step Forward"})]),Object(r.jsxs)("div",{className:"allNumSel",children:[e.map((function(e,t){return Object(r.jsx)(O,{val:e},t)})),Object(r.jsx)(x,{})]})},S=(n(32),n(9)),y=n.n(S);var N=function(){var e=Object(c.useContext)(w),t=e.timerMethods,n=e.setTimerMethods;return Object(r.jsx)("div",{className:"pillBox",children:Object(r.jsx)(y.a,{children:function(e){var c=e.start,o=e.resume,i=e.pause,a=e.stop,s=e.reset,l=e.timerState;return void 0===t.start&&n({start:c,resume:o,pause:i,stop:a,reset:s,timerState:l}),Object(r.jsxs)(r.Fragment,{children:["Timer :",Object(r.jsx)(y.a.Hours,{formatValue:function(e){return 0!==e?" ".concat(e," h"):null}}),Object(r.jsx)(y.a.Minutes,{formatValue:function(e){return 0!==e?" ".concat(e," m"):null}}),Object(r.jsx)(y.a.Seconds,{formatValue:function(e){return" ".concat(e," s")}})]})}})})},w=o.a.createContext();var k=function(){Object(c.useEffect)((function(){var e=function(e){"text1"!==e.target.classList[0]&&"text"!==e.target.classList[0]&&o([void 0,void 0])};return fetch("puzzleList.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=Math.floor(Math.random()*e.database.length);void 0!==e.database[t].data&&h(e.database[t].data)})).catch((function(e){console.log("File could not be loaded for some reason!",e)})),document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);var e=Object(c.useState)([void 0,void 0]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(Array(9).fill(Array(9).fill(null))),a=Object(l.a)(i,2),f=a[0],j=a[1],b=Object(c.useState)(Array(9).fill(Array(9).fill(null))),O=Object(l.a)(b,2),v=O[0],h=O[1],g=Object(c.useState)(Array(9).fill(Array(9).fill(null))),p=Object(l.a)(g,2),x=p[0],S=p[1],y=Object(c.useState)(!1),k=Object(l.a)(y,2),E=k[0],B=k[1],A=Object(c.useState)([]),J=Object(l.a)(A,2),C=J[0],L=J[1],V=Object(c.useState)({}),M=Object(l.a)(V,2),D=M[0],F=M[1];Object(c.useEffect)((function(){v.length>0&&j(Object(s.a)(v))}),[v]);var T={selected:n,setSelected:o,value:f,setValue:j,getCol:function(e,t){var n=[];return e.forEach((function(e){n.push(e[t])})),n},getBlock:function(e,t){var n=[];return e.forEach((function(e,r){r<3*t[0]&&r>=3*(t[0]-1)&&n.push.apply(n,Object(s.a)(e.slice(3*(t[1]-1),3*t[1])))})),n},getBlockAddress:function(e){return[Math.floor(e[0]/3+1),Math.floor(e[1]/3+1)]},initialValue:v,solution:x,setSolution:S,path:C,setPath:L,displayError:E,setDisplayError:B,timerMethods:D,setTimerMethods:F};return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(w.Provider,{value:T,children:[Object(r.jsxs)("div",{className:"appHeader",children:[Object(r.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(r.jsx)("h1",{className:"title",children:"Sudoku"}),Object(r.jsx)("img",{src:u,className:"App-logo",alt:"logo"})]}),Object(r.jsx)("div",{className:"iconBar",children:Object(r.jsx)(N,{})}),Object(r.jsxs)("div",{className:"mainGame",children:[Object(r.jsx)(d,{}),Object(r.jsx)(m,{})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),E()}},[[37,1,2]]]);
//# sourceMappingURL=main.34086b29.chunk.js.map