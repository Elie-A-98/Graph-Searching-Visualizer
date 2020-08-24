function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return B}));var i,o,s,a=n("ofXK"),r=n("TEn/"),c=n("3Pt+"),l=n("tyNb"),h=n("fXoL"),d=function(){function t(e,n,i){_classCallCheck(this,t),this.index=e,this.startNode=n,this.endNode=i,this.angle=180*Math.atan2(this.endNode.posY-this.startNode.posY,this.endNode.posX-this.startNode.posX)/Math.PI}return _createClass(t,[{key:"GetLength",value:function(){var t=Math.pow(this.endNode.posX-this.startNode.posX,2),e=Math.pow(this.endNode.posY-this.startNode.posY,2);return Math.sqrt(t+e)}}]),t}(),u=function(){function t(e,n,i){_classCallCheck(this,t),this.infos=[],this.index=e,this.posX=n,this.posY=i,this.isClicked=!1}return _createClass(t,[{key:"SetColor",value:function(t){this.color=t}},{key:"ReplaceInfos",value:function(t){this.infos=[],this.infos.push(t)}},{key:"AddInfo",value:function(t){this.infos.push(t)}},{key:"copy",value:function(){var e=new t(this.index,this.posX,this.posY);e.color=this.color,e.infos=[];for(var n=0;n<this.infos.length;n++)e.infos.push(this.infos[n]);return e}}]),t}(),g=((i=function(){function t(){_classCallCheck(this,t),this.nodes=[],this.edges=[],this.edgeStarted=!1,this.isNodes=!0,this.infos=[]}return _createClass(t,[{key:"AddNode",value:function(t,e){this.isNodes&&this.nodes.push(new u(this.nodes.length,t,e))}},{key:"StartEdge",value:function(t){this.edgeStart=this.nodes[t],this.edgeStart.isClicked=!0,this.edgeStarted=!0}},{key:"EndEdge",value:function(t){this.edgeEnd=this.nodes[t],this.edgeStart.isClicked=!0,this.edgeStarted=!1}},{key:"MakeEdge",value:function(){this.edges.push(new d(this.edges.length,this.edgeStart,this.edgeEnd)),this.edgeStart.isClicked=!1,this.edgeEnd.isClicked=!1}},{key:"AddEdge",value:function(t){this.edgeStarted?(this.EndEdge(t),this.MakeEdge()):this.StartEdge(t)}},{key:"Switch",value:function(){this.isNodes=!this.isNodes}},{key:"Reset",value:function(){this.nodes=[],this.edges=[],this.infos=[]}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275prov=h.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),f=function(){function t(e,n,i){_classCallCheck(this,t),this.index=e,this.nodes=n,this.edges=i}return _createClass(t,[{key:"setMessage",value:function(t){this.msg=t}}]),t}(),p=function(){function t(e,n){_classCallCheck(this,t),this.nodes=[],this.edges=[],this.steps=[],this.pathColor="green",this.activeColor="red",this.visitedColor="maroon",this.adjColor="yellow",this.nodes=e,this.edges=n,this.infos=[],this.adj=[];for(var i=this.nodes.length,o=0;o<i;o++){this.adj[o]=[];for(var s=0;s<i;s++)this.adj[o][s]=this.isAdjacent(o,s)}this.infos.push({info:"Path",value:this.pathColor}),this.infos.push({info:"Active",value:this.activeColor}),this.infos.push({info:"Visited",value:this.visitedColor}),this.infos.push({info:"Adjacent",value:this.adjColor})}return _createClass(t,[{key:"isAdjacent",value:function(t,e){for(var n=this.edges.length,i=0;i<n;i++){var o=this.edges[i].startNode.index,s=this.edges[i].endNode.index;if(o==t&&s==e||o==e&&s==t)return!0}return!1}},{key:"Run",value:function(){for(var t=new Array(this.nodes.length),e=[],n=0;n<t.length;n++)t[n]=!1;var i=this.NodesCopy(this.nodes);for(t[0]=!0,e.push(0);0!=e.length;){var o=e.shift();i[o].SetColor(this.activeColor),i[o].ReplaceInfos("Active"),this.steps.push(new f(this.steps.length,i,this.edges));for(var s=0;s<this.nodes.length;s++)1==this.adj[o][s]&&0==t[s]&&(t[s]=!0,e.push(s),(i=this.NodesCopy(i))[s].SetColor(this.visitedColor),i[s].AddInfo("visited"));this.steps.push(new f(this.steps.length,i,this.edges)),(i=this.NodesCopy(i))[o].SetColor(this.pathColor),i[o].ReplaceInfos("Path")}this.steps.push(new f(this.steps.length,i,this.edges))}},{key:"getSteps",value:function(){return this.steps}},{key:"Display",value:function(){for(var t=0;t<this.adj[0].length;t++){for(var e="",n=0;n<this.adj[1].length;n++)e+=this.adj[t][n]+" ";console.log(e)}}},{key:"NodesCopy",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n].copy());return e}}]),t}(),b=function(){function t(e,n){_classCallCheck(this,t),this.nodes=[],this.edges=[],this.steps=[],this.pathColor="green",this.activeColor="red",this.visitedColor="maroon",this.adjColor="yellow",this.nodes=e,this.edges=n,this.infos=[],this.infos=[],this.adj=[];for(var i=this.nodes.length,o=0;o<i;o++){this.adj[o]=[];for(var s=0;s<i;s++)this.adj[o][s]=this.isAdjacent(o,s)}this.infos.push({info:"Path",value:this.pathColor}),this.infos.push({info:"Active",value:this.activeColor}),this.infos.push({info:"Visited",value:this.visitedColor}),this.infos.push({info:"Adjacent",value:this.adjColor})}return _createClass(t,[{key:"isAdjacent",value:function(t,e){for(var n=this.edges.length,i=0;i<n;i++){var o=this.edges[i].startNode.index,s=this.edges[i].endNode.index;if(o==t&&s==e||o==e&&s==t)return!0}return!1}},{key:"Run",value:function(){for(var t=new Array(this.nodes.length),e=[],n=0;n<t.length;n++)t[n]=!1;var i=this.NodesCopy(this.nodes);for(t[0]=!0,e.push(0);0!=e.length;){var o=e.pop();i[o].SetColor(this.activeColor),i[o].ReplaceInfos("Active"),this.steps.push(new f(this.steps.length,i,this.edges));for(var s=this.nodes.length-1;s>=0;s--)1==this.adj[o][s]&&0==t[s]&&(t[s]=!0,e.push(s),(i=this.NodesCopy(i))[s].SetColor(this.visitedColor),i[s].AddInfo("visited"));this.steps.push(new f(this.steps.length,i,this.edges)),(i=this.NodesCopy(i))[o].SetColor(this.pathColor),i[o].ReplaceInfos("Path")}this.steps.push(new f(this.steps.length,i,this.edges))}},{key:"getSteps",value:function(){return this.steps}},{key:"Display",value:function(){for(var t=0;t<this.adj[0].length;t++){for(var e="",n=0;n<this.adj[1].length;n++)e+=this.adj[t][n]+" ";console.log(e)}}},{key:"NodesCopy",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n].copy());return e}}]),t}(),v=((o=function(){function t(e){_classCallCheck(this,t),this.nodesManager=e,this.isRunningAnimation=!1}return _createClass(t,[{key:"InitAlg",value:function(t){0==t.toLowerCase().localeCompare("bfs")?this.alg=new p(this.nodesManager.nodes,this.nodesManager.edges):0==t.toLowerCase().localeCompare("dfs")&&(this.alg=new b(this.nodesManager.nodes,this.nodesManager.edges))}},{key:"RunAlg",value:function(){this.alg.Run(),this.steps=this.alg.getSteps(),this.step_index=0,this.nodesManager.infos=this.alg.infos}},{key:"Visualize",value:function(){var t=this;this.step_index<this.steps.length&&(this.stepRight(),this.animation_timeout=setTimeout((function(){t.Visualize()}),1e3))}},{key:"stepRight",value:function(){this.nodesManager.nodes=this.steps[this.step_index].nodes,this.step_index=Math.min(this.steps.length-1,this.step_index+1)}},{key:"stepLeft",value:function(){this.step_index=Math.max(0,this.step_index-1),this.nodesManager.nodes=this.steps[this.step_index].nodes}},{key:"Stop",value:function(){clearTimeout(this.animation_timeout)}},{key:"Reset",value:function(){this.Stop(),this.steps=[],this.step_index=0}}]),t}()).\u0275fac=function(t){return new(t||o)(h.Pb(g))},o.\u0275prov=h.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),C=function(t){return{hidden:t}},k=((s=function(){function t(){_classCallCheck(this,t),this.tutorials=[],this.hide=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.tutorial=document.querySelector("[data-js = 'tutorial']"),this.InitTutorials(),this.tutorial_index=0,this.tutorial.innerHTML=this.tutorials[0]}},{key:"SkipClicked",value:function(){this.hide=!0}},{key:"NextClicked",value:function(){var t=this.tutorials.length;this.tutorial_index=this.tutorial_index+1,this.tutorial_index<t?this.tutorial.innerHTML=this.tutorials[this.tutorial_index]:this.SkipClicked()}},{key:"PreviousClicked",value:function(){this.tutorial_index=Math.max(this.tutorial_index-1,0),this.tutorial_index>=0&&(this.tutorial.innerHTML=this.tutorials[this.tutorial_index])}},{key:"InitTutorials",value:function(){this.tutorials.push(this.CreateTitle("Welcome to Graph Searching Visualizer")+this.CreateContent("This tutorial will walk you through all of the features of this application","<img src = '../../../assets/tutorial/General view.png' />")),this.tutorials.push(this.CreateTitle("Place some nodes")+this.CreateContent("Click anywhere on the screen to place nodes","<img src = '../../../assets/tutorial/place nodes.png' />")),this.tutorials.push(this.CreateTitle("Connect some nodes")+this.CreateContent("Switch between placing nodes and edges","<img src = '../../../assets/tutorial/switch.png' />")+this.CreateContent("Connect nodes:","<p>To connect node A to node B, click once on node A then click once on node B</p>\n\t\t\t<img src = '../../../assets/tutorial/switch.png' />")),this.tutorials.push(this.CreateTitle("Choose the algorithm")+this.CreateContent("Currently there are only 2 algorithms available:","\n\t\t\t<p>DFS and BFS</p>\n\t\t\t<img src = '../../../assets/tutorial/bfs-dfs.png' />")),this.tutorials.push(this.CreateTitle("Run Algorithm or Reset")+this.CreateContent('<div>You <span style ="color: red; font-weight: bold;">must</span> click Run \n\t\t\tto run the algorithm <span style="color:red; font-weight: bold;">before</span> visualization</div>\n\t\t\t<div>Click the Reset button to start from scratch and remove all the nodes and edges</div>\n\t\t\t',"\n\t\t\t<img src = '../../../assets/tutorial/run-reset.png' />")),this.tutorials.push(this.CreateTitle("Visualize")+this.CreateContent("Start visualizing the chosen algorithm:",'\n\t\t\t<p>A step is created each time the state of a particular node on the graph is changed:</p>\n\t\t\t<p>Ex:</p>\n\t\t\t<p>node X is placed in the queue -> a step is created which colors node X red <br>\n\t\t\tnode Y is being explored -> a step is created which colors node Y orange\n\t\t\t</p style="display: inline-block;">\n\t\t\t')+this.CreateContent("<img src = '../../../assets/tutorial/Visualize.png' />",'\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Visualize</p>\n\t\t\t<p>Automatically go through all the remaining steps with a delay of 1 second between each step</p>\n\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Stop</p>\n\t\t\t<p>Stop the automatic visualization</p>\n\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Right arrow</p>\n\t\t\t<p>Go to the next step</p>\n\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Left Arrow</p>\n\t\t\t<p>Go to the previous step</p>\n\t\t\t'))}},{key:"CreateTitle",value:function(t){return'\n\t\t<h1 class = "title">\n\t\t\t'.concat(t,"\n\t\t</h1>\n\t\t")}},{key:"CreateContent",value:function(t,e){return'\n\t\t<div class = "content">\n\t\t\t<h3 class = "content__header">\n\t\t\t\t'.concat(t,' \n\t\t\t</h3>\n\t\t\n\t\t\t<div class="content__body">\n\t\t\t\t').concat(e,"\n\t\t\t</div>\n\t\t</div>\n\t\t")}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=h.Db({type:s,selectors:[["app-tutorial"]],decls:13,vars:4,consts:[[1,"center","main",3,"ngClass"],[2,"align-self","flex-end","padding","8px"],["data-js","tutorial",1,"tutorial"],[2,"padding","8px"],[3,"click"],[2,"float","right"]],template:function(t,e){1&t&&(h.Mb(0,"div",0),h.Mb(1,"div",1),h.gc(2),h.Lb(),h.Kb(3,"div",2),h.Mb(4,"div",3),h.Mb(5,"button",4),h.Tb("click",(function(){return e.SkipClicked()})),h.gc(6,"Skip Tutorial"),h.Lb(),h.Mb(7,"div",5),h.Mb(8,"button",4),h.Tb("click",(function(){return e.PreviousClicked()})),h.gc(9,"Previous"),h.Lb(),h.gc(10," \xa0 "),h.Mb(11,"button",4),h.Tb("click",(function(){return e.NextClicked()})),h.gc(12,"Next"),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.Yb("ngClass",h.Zb(2,C,!0===e.hide)),h.zb(2),h.ic("",e.tutorial_index+1,"/6"))},directives:[a.h],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;width:55%;height:75%;background-color:#fff;border:2px solid #000;border-radius:.5%;z-index:20}[_nghost-%COMP%]     .title{flex-grow:0.1;text-align:center;margin:0;font-family:karla,sans-serif;font-size:3.5em}.tutorial[_ngcontent-%COMP%], [_nghost-%COMP%]     .content{flex-grow:1;display:flex;flex-direction:column;justify-content:flex-start}[_nghost-%COMP%]     .content__header{text-align:center;margin:0;font-family:Roboto,sans-serif;font-size:1.8em;font-weight:300;padding:14px}[_nghost-%COMP%]     .content__body{font-family:Roboto,sans-serif;font-size:1em;font-weight:500;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]     img{max-width:80%}[_nghost-%COMP%]     p{margin:0;padding:8px}"]}),s),m=function(t){return{color:t}};function _(t,e){if(1&t&&(h.Mb(0,"div"),h.Mb(1,"div",5),h.gc(2),h.Lb(),h.Lb()),2&t){var n=e.$implicit,i=h.Vb(2);h.zb(1),h.Yb("ngStyle",h.Zb(2,m,i.color)),h.zb(1),h.hc(n)}}function y(t,e){if(1&t&&(h.Mb(0,"div"),h.fc(1,_,3,4,"div",4),h.Lb()),2&t){var n=h.Vb();h.zb(1),h.Yb("ngForOf",n.infos)}}var M,w,x=function(t,e,n){return{position:"absolute",top:t,left:e,"background-color":n}},P=((M=function(){function t(e){_classCallCheck(this,t),this.nodeManager=e,this.isClicked=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"NodeClicked",value:function(){this.nodeManager.AddEdge(this.index)}}]),t}()).\u0275fac=function(t){return new(t||M)(h.Jb(g))},M.\u0275cmp=h.Db({type:M,selectors:[["app-node"]],inputs:{index:"index",posX:"posX",posY:"posY",isClicked:"isClicked",color:"color",infos:"infos"},decls:5,vars:8,consts:[[1,"node",3,"ngStyle","ngClass","click"],[1,"node__info"],[1,"node__info__text"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"node__info__text",3,"ngStyle"]],template:function(t,e){1&t&&(h.Mb(0,"div",0),h.Tb("click",(function(){return e.NodeClicked()})),h.Mb(1,"div",1),h.Mb(2,"div",2),h.gc(3),h.Lb(),h.fc(4,y,2,1,"div",3),h.Lb(),h.Lb()),2&t&&(h.Yb("ngStyle",h.ac(4,x,e.posY+"px",e.posX+"px",e.color))("ngClass",e.isClicked?"clicked":"idle"),h.zb(3),h.hc(e.index),h.zb(1),h.Yb("ngIf",e.infos))},directives:[a.k,a.h,a.j,a.i],styles:["@-webkit-keyframes node-placed-animation{0%{transform:scale(1.2) translate(-50%,-50%)}to{transform:scale(1) translate(-50%,-50%)}}@keyframes node-placed-animation{0%{transform:scale(1.2) translate(-50%,-50%)}to{transform:scale(1) translate(-50%,-50%)}}.node--placed-animation[_ngcontent-%COMP%]{-webkit-animation-name:node-placed-animation;animation-name:node-placed-animation;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear}.idle[_ngcontent-%COMP%]{background-color:#fff}.clicked[_ngcontent-%COMP%]{background-color:rgba(255,0,0,.384)}.node[_ngcontent-%COMP%]{position:absolute;width:75px;height:75px;border-radius:50%;transform:translate(-50%,-50%);transition:.2s;z-index:10}.node__info[_ngcontent-%COMP%]{position:absolute;bottom:100%;right:100%;color:#fff;font-size:1.5em;pointer-events:none}.node__info__text[_ngcontent-%COMP%]{display:inline-block;padding:2px;margin:1px 0;background-color:hsla(0,0%,69.4%,.788);color:hsla(0,0%,84.7%,.904);border-radius:10%}div[_ngcontent-%COMP%]:hover{background-color:rgba(255,0,0,.384)}"]}),M),L=function(t,e,n,i){return{width:t,left:e,top:n,transform:i}},S=((w=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.posX=this.edgeProp.startNode.posX,this.posY=this.edgeProp.startNode.posY,this.length=this.edgeProp.GetLength(),this.angle=this.edgeProp.angle}}]),t}()).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=h.Db({type:w,selectors:[["app-edge"]],inputs:{edgeProp:"edgeProp"},decls:1,vars:6,consts:[[3,"ngStyle"]],template:function(t,e){1&t&&h.Kb(0,"div",0),2&t&&h.Yb("ngStyle",h.bc(1,L,e.length+"px",e.posX+"px",e.posY+"px","rotate("+e.angle+"deg)"))},directives:[a.k],styles:["div[_ngcontent-%COMP%]{position:absolute;height:4px;background-color:rgba(224,201,201,.76);border-radius:50px;transform-origin:0 0}"]}),w);function O(t,e){if(1&t&&(h.Mb(0,"div"),h.Kb(1,"app-node",4),h.Lb()),2&t){var n=e.$implicit;h.zb(1),h.Yb("index",n.index)("posX",n.posX)("posY",n.posY)("isClicked",n.isClicked)("color",n.color)("infos",n.infos)}}function z(t,e){if(1&t&&(h.Mb(0,"div"),h.fc(1,O,2,6,"div",3),h.Lb()),2&t){var n=h.Vb();h.zb(1),h.Yb("ngForOf",n.nodesManager.nodes)}}function A(t,e){if(1&t&&(h.Mb(0,"div"),h.Kb(1,"app-edge",5),h.Lb()),2&t){var n=e.$implicit;h.zb(1),h.Yb("edgeProp",n)}}function j(t,e){if(1&t&&(h.Mb(0,"div"),h.fc(1,A,2,1,"div",3),h.Lb()),2&t){var n=h.Vb();h.zb(1),h.Yb("ngForOf",n.nodesManager.edges)}}var N=function(t){return{color:t,"font-weight":"bold"}};function Y(t,e){if(1&t&&(h.Mb(0,"div"),h.gc(1),h.Mb(2,"span",7),h.gc(3),h.Lb(),h.Lb()),2&t){var n=e.$implicit;h.zb(1),h.ic(" ",n.info,": "),h.zb(1),h.Yb("ngStyle",h.Zb(3,N,n.value)),h.zb(1),h.hc(n.value)}}function R(t,e){if(1&t&&(h.Mb(0,"div",6),h.Mb(1,"div"),h.fc(2,Y,4,5,"div",3),h.Lb(),h.Lb()),2&t){var n=h.Vb();h.zb(2),h.Yb("ngForOf",n.nodesManager.infos)}}var T,I,X,F,V=((T=function(){function t(e){_classCallCheck(this,t),this.nodesManager=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"MouseClicked",value:function(t){this.nodesManager.AddNode(t.clientX,t.clientY)}}]),t}()).\u0275fac=function(t){return new(t||T)(h.Jb(g))},T.\u0275cmp=h.Db({type:T,selectors:[["app-graph"]],decls:4,vars:3,consts:[[1,"graph",3,"click"],[4,"ngIf"],["class","alg-info",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"index","posX","posY","isClicked","color","infos"],[3,"edgeProp"],[1,"alg-info"],[3,"ngStyle"]],template:function(t,e){1&t&&(h.Mb(0,"div",0),h.Tb("click",(function(t){return e.MouseClicked(t)})),h.fc(1,z,2,1,"div",1),h.fc(2,j,2,1,"div",1),h.fc(3,R,3,1,"div",2),h.Lb()),2&t&&(h.zb(1),h.Yb("ngIf",e.nodesManager.nodes),h.zb(1),h.Yb("ngIf",e.nodesManager.edges),h.zb(1),h.Yb("ngIf",e.nodesManager.infos.length>0))},directives:[a.j,a.i,P,S,a.k],styles:[".graph[_ngcontent-%COMP%]{background-color:#333;width:100%;height:100%}.alg-info[_ngcontent-%COMP%]{position:absolute;right:0;font-size:1.2em;color:#fff;padding:8px;margin:8px;line-height:1.5;background-color:hsla(0,0%,69.4%,.788);border-radius:10%}"]}),T),E=[{path:"",component:(I=function(){function t(e,n){_classCallCheck(this,t),this.nodesManager=e,this.searchAlgorithm=n,this.placing="nodes"}return _createClass(t,[{key:"SwitchClicked",value:function(){this.nodesManager.Switch(),this.placing=0==this.placing.localeCompare("nodes")?"edges":"nodes"}},{key:"RunClicked",value:function(){this.select_algorithm=document.querySelector("[data-js='algorithm']"),this.searchAlgorithm.InitAlg(this.select_algorithm.value),this.searchAlgorithm.RunAlg()}},{key:"StepRightclicked",value:function(){this.searchAlgorithm.stepRight()}},{key:"StepLeftclicked",value:function(){this.searchAlgorithm.stepLeft()}},{key:"ResetClicked",value:function(){this.nodesManager.Reset(),this.searchAlgorithm.Reset()}},{key:"VisualizeClicked",value:function(){this.searchAlgorithm.Visualize()}},{key:"StopClicked",value:function(){this.searchAlgorithm.Stop()}}]),t}(),I.\u0275fac=function(t){return new(t||I)(h.Jb(g),h.Jb(v))},I.\u0275cmp=h.Db({type:I,selectors:[["app-home"]],decls:41,vars:2,consts:[[2,"position","relative",3,"fullscreen"],[2,"width","100%","height","5%","background-color","#567fa9"],[1,"row",2,"color","white"],[1,"row__col","row__col--33","row"],[1,"row__col","row__col--50"],[1,"center_v"],["data-js","algorithm"],[3,"click"],[1,"row__col","row__col--33"],[1,"center"],[1,"center--right"],[2,"margin-right","8px",3,"click"],[2,"width","100%","height","95%","background-color","transparent"]],template:function(t,e){1&t&&(h.Mb(0,"ion-content",0),h.Kb(1,"app-tutorial"),h.Mb(2,"div",1),h.Mb(3,"div",2),h.Mb(4,"div",3),h.Mb(5,"div",4),h.Mb(6,"div",5),h.gc(7," Choose algorithm: "),h.Mb(8,"select",6),h.Mb(9,"option"),h.gc(10,"BFS"),h.Lb(),h.Mb(11,"option"),h.gc(12,"DFS"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(13,"div",4),h.Mb(14,"div",5),h.Mb(15,"button",7),h.Tb("click",(function(){return e.SwitchClicked()})),h.gc(16," Switch "),h.Lb(),h.gc(17),h.Lb(),h.Lb(),h.Lb(),h.Mb(18,"div",8),h.Mb(19,"div",9),h.Mb(20,"button",7),h.Tb("click",(function(){return e.StepLeftclicked()})),h.Mb(21,"span"),h.gc(22,"\u2190"),h.Lb(),h.Lb(),h.gc(23," \xa0 "),h.Mb(24,"button",7),h.Tb("click",(function(){return e.StepRightclicked()})),h.Mb(25,"span"),h.gc(26,"\u2192"),h.Lb(),h.Lb(),h.gc(27," \xa0\xa0\xa0\xa0\xa0 "),h.Mb(28,"button",7),h.Tb("click",(function(){return e.VisualizeClicked()})),h.gc(29," Visualize "),h.Lb(),h.gc(30," \xa0 "),h.Mb(31,"button",7),h.Tb("click",(function(){return e.StopClicked()})),h.gc(32," Stop "),h.Lb(),h.Lb(),h.Lb(),h.Mb(33,"div",8),h.Mb(34,"div",10),h.Mb(35,"button",11),h.Tb("click",(function(){return e.RunClicked()})),h.gc(36," Run "),h.Lb(),h.Mb(37,"button",7),h.Tb("click",(function(){return e.ResetClicked()})),h.gc(38," Reset "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(39,"div",12),h.Kb(40,"app-graph"),h.Lb(),h.Lb()),2&t&&(h.Yb("fullscreen",!0),h.zb(17),h.ic(" (",e.placing,") "))},directives:[r.b,k,c.d,c.e,V],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}.row[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.row__col[_ngcontent-%COMP%]{position:relative;float:left;height:100%}.row__col--25[_ngcontent-%COMP%]{width:25%}.row__col--33[_ngcontent-%COMP%]{width:33.33%}.row__col--50[_ngcontent-%COMP%]{width:50%}.row__col--75[_ngcontent-%COMP%]{width:75%}.center[_ngcontent-%COMP%]{left:50%;transform:translate(-50%,-50%)}.center[_ngcontent-%COMP%], .center--right[_ngcontent-%COMP%]{position:absolute;top:50%}.center--right[_ngcontent-%COMP%]{right:0;transform:translate(-14px,-50%)}.center_v[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%)}button[_ngcontent-%COMP%]{margin:0;padding:12px;border-radius:10%;font:inherit;color:inherit;outline:none;background-color:#29dfba;transition:.2s}button[_ngcontent-%COMP%]:hover{background-color:#2ef7cf}button[_ngcontent-%COMP%]:active{background-color:#25c9a8}select[_ngcontent-%COMP%]{padding:8px}select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{outline:none;border:none;background-color:#567fa9}"]}),I)}],D=((F=function t(){_classCallCheck(this,t)}).\u0275mod=h.Hb({type:F}),F.\u0275inj=h.Gb({factory:function(t){return new(t||F)},imports:[[l.i.forChild(E)],l.i]}),F),B=((X=function t(){_classCallCheck(this,t)}).\u0275mod=h.Hb({type:X}),X.\u0275inj=h.Gb({factory:function(t){return new(t||X)},imports:[[a.b,c.a,r.d,D]]}),X)}}]);