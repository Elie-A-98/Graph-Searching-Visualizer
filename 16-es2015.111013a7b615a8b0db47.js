(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(t,e,i){"use strict";i.r(e),i.d(e,"HomePageModule",(function(){return j}));var n=i("ofXK"),s=i("TEn/"),o=i("3Pt+"),r=i("tyNb"),a=i("fXoL");class l{constructor(t,e,i){this.index=t,this.startNode=e,this.endNode=i,this.angle=180*Math.atan2(this.endNode.posY-this.startNode.posY,this.endNode.posX-this.startNode.posX)/Math.PI}GetLength(){let t,e=Math.pow(this.endNode.posX-this.startNode.posX,2),i=Math.pow(this.endNode.posY-this.startNode.posY,2);return t=Math.sqrt(e+i),t}}class c{constructor(t,e,i){this.infos=[],this.index=t,this.posX=e,this.posY=i,this.isClicked=!1}SetColor(t){this.color=t}ReplaceInfos(t){this.infos=[],this.infos.push(t)}AddInfo(t){this.infos.push(t)}copy(){let t=new c(this.index,this.posX,this.posY);t.color=this.color,t.infos=[];for(let e=0;e<this.infos.length;e++)t.infos.push(this.infos[e]);return t}}let h=(()=>{class t{constructor(){this.nodes=[],this.edges=[],this.edgeStarted=!1,this.isNodes=!0,this.infos=[]}AddNode(t,e){this.isNodes&&this.nodes.push(new c(this.nodes.length,t,e))}StartEdge(t){this.edgeStart=this.nodes[t],this.edgeStart.isClicked=!0,this.edgeStarted=!0}EndEdge(t){this.edgeEnd=this.nodes[t],this.edgeStart.isClicked=!0,this.edgeStarted=!1}MakeEdge(){this.edges.push(new l(this.edges.length,this.edgeStart,this.edgeEnd)),this.edgeStart.isClicked=!1,this.edgeEnd.isClicked=!1}AddEdge(t){this.edgeStarted?(this.EndEdge(t),this.MakeEdge()):this.StartEdge(t)}Switch(){this.isNodes=!this.isNodes}Reset(){this.nodes=[],this.edges=[],this.infos=[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class d{constructor(t,e,i){this.index=t,this.nodes=e,this.edges=i}setMessage(t){this.msg=t}}class g{constructor(t,e){this.nodes=[],this.edges=[],this.steps=[],this.pathColor="green",this.activeColor="red",this.visitedColor="maroon",this.adjColor="yellow",this.nodes=t,this.edges=e,this.infos=[],this.adj=[];let i=this.nodes.length;for(let n=0;n<i;n++){this.adj[n]=[];for(let t=0;t<i;t++)this.adj[n][t]=this.isAdjacent(n,t)}this.infos.push({info:"Path",value:this.pathColor}),this.infos.push({info:"Active",value:this.activeColor}),this.infos.push({info:"Visited",value:this.visitedColor}),this.infos.push({info:"Adjacent",value:this.adjColor})}isAdjacent(t,e){let i=this.edges.length;for(let n=0;n<i;n++){let i=this.edges[n].startNode.index,s=this.edges[n].endNode.index;if(i==t&&s==e||i==e&&s==t)return!0}return!1}Run(){let t=new Array(this.nodes.length),e=[];for(let n=0;n<t.length;n++)t[n]=!1;let i=this.NodesCopy(this.nodes);for(t[0]=!0,e.push(0);0!=e.length;){let n=e.shift();i[n].SetColor(this.activeColor),i[n].ReplaceInfos("Active"),this.steps.push(new d(this.steps.length,i,this.edges));for(let s=0;s<this.nodes.length;s++)1==this.adj[n][s]&&0==t[s]&&(t[s]=!0,e.push(s),i=this.NodesCopy(i),i[s].SetColor(this.visitedColor),i[s].AddInfo("visited"));this.steps.push(new d(this.steps.length,i,this.edges)),i=this.NodesCopy(i),i[n].SetColor(this.pathColor),i[n].ReplaceInfos("Path")}this.steps.push(new d(this.steps.length,i,this.edges))}getSteps(){return this.steps}Display(){for(let t=0;t<this.adj[0].length;t++){let e="";for(let i=0;i<this.adj[1].length;i++)e+=this.adj[t][i]+" ";console.log(e)}}NodesCopy(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].copy());return e}}class p{constructor(t,e){this.nodes=[],this.edges=[],this.steps=[],this.pathColor="green",this.activeColor="red",this.visitedColor="maroon",this.adjColor="yellow",this.nodes=t,this.edges=e,this.infos=[],this.infos=[],this.adj=[];let i=this.nodes.length;for(let n=0;n<i;n++){this.adj[n]=[];for(let t=0;t<i;t++)this.adj[n][t]=this.isAdjacent(n,t)}this.infos.push({info:"Path",value:this.pathColor}),this.infos.push({info:"Active",value:this.activeColor}),this.infos.push({info:"Visited",value:this.visitedColor}),this.infos.push({info:"Adjacent",value:this.adjColor})}isAdjacent(t,e){let i=this.edges.length;for(let n=0;n<i;n++){let i=this.edges[n].startNode.index,s=this.edges[n].endNode.index;if(i==t&&s==e||i==e&&s==t)return!0}return!1}Run(){let t=new Array(this.nodes.length),e=[];for(let n=0;n<t.length;n++)t[n]=!1;let i=this.NodesCopy(this.nodes);for(t[0]=!0,e.push(0);0!=e.length;){let n=e.pop();i[n].SetColor(this.activeColor),i[n].ReplaceInfos("Active"),this.steps.push(new d(this.steps.length,i,this.edges));for(let s=this.nodes.length-1;s>=0;s--)1==this.adj[n][s]&&0==t[s]&&(t[s]=!0,e.push(s),i=this.NodesCopy(i),i[s].SetColor(this.visitedColor),i[s].AddInfo("visited"));this.steps.push(new d(this.steps.length,i,this.edges)),i=this.NodesCopy(i),i[n].SetColor(this.pathColor),i[n].ReplaceInfos("Path")}this.steps.push(new d(this.steps.length,i,this.edges))}getSteps(){return this.steps}Display(){for(let t=0;t<this.adj[0].length;t++){let e="";for(let i=0;i<this.adj[1].length;i++)e+=this.adj[t][i]+" ";console.log(e)}}NodesCopy(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].copy());return e}}let u=(()=>{class t{constructor(t){this.nodesManager=t,this.isRunningAnimation=!1}InitAlg(t){0==t.toLowerCase().localeCompare("bfs")?this.alg=new g(this.nodesManager.nodes,this.nodesManager.edges):0==t.toLowerCase().localeCompare("dfs")&&(this.alg=new p(this.nodesManager.nodes,this.nodesManager.edges))}RunAlg(){this.alg.Run(),this.steps=this.alg.getSteps(),this.step_index=0,this.nodesManager.infos=this.alg.infos}Visualize(){this.step_index<this.steps.length&&(this.stepRight(),this.animation_timeout=setTimeout(()=>{this.Visualize()},1e3))}stepRight(){this.nodesManager.nodes=this.steps[this.step_index].nodes,this.step_index=Math.min(this.steps.length-1,this.step_index+1)}stepLeft(){this.step_index=Math.max(0,this.step_index-1),this.nodesManager.nodes=this.steps[this.step_index].nodes}Stop(){clearTimeout(this.animation_timeout)}Reset(){this.Stop(),this.steps=[],this.step_index=0}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(h))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const f=function(t){return{hidden:t}};let b=(()=>{class t{constructor(){this.tutorials=[],this.hide=!1}ngOnInit(){this.tutorial=document.querySelector("[data-js = 'tutorial']"),this.InitTutorials(),this.tutorial_index=0,this.tutorial.innerHTML=this.tutorials[0]}SkipClicked(){this.hide=!0}NextClicked(){let t=this.tutorials.length;this.tutorial_index=this.tutorial_index+1,this.tutorial_index<t?this.tutorial.innerHTML=this.tutorials[this.tutorial_index]:this.SkipClicked()}PreviousClicked(){this.tutorial_index=Math.max(this.tutorial_index-1,0),this.tutorial_index>=0&&(this.tutorial.innerHTML=this.tutorials[this.tutorial_index])}InitTutorials(){this.tutorials.push(this.CreateTitle("Welcome to Graph Searching Visualizer")+this.CreateContent("This tutorial will walk you through all of the features of this application","<img src = '../../../assets/tutorial/General view.png' />")),this.tutorials.push(this.CreateTitle("Place some nodes")+this.CreateContent("Click anywhere on the screen to place nodes","<img src = '../../../assets/tutorial/place nodes.png' />")),this.tutorials.push(this.CreateTitle("Connect some nodes")+this.CreateContent("Switch between placing nodes and edges","<img src = '../../../assets/tutorial/switch.png' />")+this.CreateContent("Connect nodes:","<p>To connect node A to node B, click once on node A then click once on node B</p>\n\t\t\t<img src = '../../../assets/tutorial/switch.png' />")),this.tutorials.push(this.CreateTitle("Choose the algorithm")+this.CreateContent("Currently there are only 2 algorithms available:","\n\t\t\t<p>DFS and BFS</p>\n\t\t\t<img src = '../../../assets/tutorial/bfs-dfs.png' />")),this.tutorials.push(this.CreateTitle("Run Algorithm or Reset")+this.CreateContent('<div>You <span style ="color: red; font-weight: bold;">must</span> click Run \n\t\t\tto run the algorithm <span style="color:red; font-weight: bold;">before</span> visualization</div>\n\t\t\t<div>Click the Reset button to start from scratch and remove all the nodes and edges</div>\n\t\t\t',"\n\t\t\t<img src = '../../../assets/tutorial/run-reset.png' />")),this.tutorials.push(this.CreateTitle("Visualize")+this.CreateContent("Start visualizing the chosen algorithm:",'\n\t\t\t<p>A step is created each time the state of a particular node on the graph is changed:</p>\n\t\t\t<p>Ex:</p>\n\t\t\t<p>node X is placed in the queue -> a step is created which colors node X red <br>\n\t\t\tnode Y is being explored -> a step is created which colors node Y orange\n\t\t\t</p style="display: inline-block;">\n\t\t\t')+this.CreateContent("<img src = '../../../assets/tutorial/Visualize.png' />",'\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Visualize</p>\n\t\t\t<p>Automatically go through all the remaining steps with a delay of 1 second between each step</p>\n\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Stop</p>\n\t\t\t<p>Stop the automatic visualization</p>\n\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Right arrow</p>\n\t\t\t<p>Go to the next step</p>\n\n\t\t\t<p style = "color: #00B0F0; font-size: 1.2em;">Left Arrow</p>\n\t\t\t<p>Go to the previous step</p>\n\t\t\t'))}CreateTitle(t){return`\n\t\t<h1 class = "title">\n\t\t\t${t}\n\t\t</h1>\n\t\t`}CreateContent(t,e){return`\n\t\t<div class = "content">\n\t\t\t<h3 class = "content__header">\n\t\t\t\t${t} \n\t\t\t</h3>\n\t\t\n\t\t\t<div class="content__body">\n\t\t\t\t${e}\n\t\t\t</div>\n\t\t</div>\n\t\t`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-tutorial"]],decls:13,vars:4,consts:[[1,"center","main",3,"ngClass"],[2,"align-self","flex-end","padding","8px"],["data-js","tutorial",1,"tutorial"],[2,"padding","8px"],[3,"click"],[2,"float","right"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.gc(2),a.Lb(),a.Kb(3,"div",2),a.Mb(4,"div",3),a.Mb(5,"button",4),a.Tb("click",(function(){return e.SkipClicked()})),a.gc(6,"Skip Tutorial"),a.Lb(),a.Mb(7,"div",5),a.Mb(8,"button",4),a.Tb("click",(function(){return e.PreviousClicked()})),a.gc(9,"Previous"),a.Lb(),a.gc(10," \xa0 "),a.Mb(11,"button",4),a.Tb("click",(function(){return e.NextClicked()})),a.gc(12,"Next"),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.Yb("ngClass",a.Zb(2,f,!0===e.hide)),a.zb(2),a.ic("",e.tutorial_index+1,"/6"))},directives:[n.h],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;width:55%;height:75%;background-color:#fff;border:2px solid #000;border-radius:.5%;z-index:20}[_nghost-%COMP%]     .title{flex-grow:0.1;text-align:center;margin:0;font-family:karla,sans-serif;font-size:3.5em}.tutorial[_ngcontent-%COMP%], [_nghost-%COMP%]     .content{flex-grow:1;display:flex;flex-direction:column;justify-content:flex-start}[_nghost-%COMP%]     .content__header{text-align:center;margin:0;font-family:Roboto,sans-serif;font-size:1.8em;font-weight:300;padding:14px}[_nghost-%COMP%]     .content__body{font-family:Roboto,sans-serif;font-size:1em;font-weight:500;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]     img{max-width:80%}[_nghost-%COMP%]     p{margin:0;padding:8px}"]}),t})();const C=function(t){return{color:t}};function m(t,e){if(1&t&&(a.Mb(0,"div"),a.Mb(1,"div",5),a.gc(2),a.Lb(),a.Lb()),2&t){const t=e.$implicit,i=a.Vb(2);a.zb(1),a.Yb("ngStyle",a.Zb(2,C,i.color)),a.zb(1),a.hc(t)}}function M(t,e){if(1&t&&(a.Mb(0,"div"),a.fc(1,m,3,4,"div",4),a.Lb()),2&t){const t=a.Vb();a.zb(1),a.Yb("ngForOf",t.infos)}}const v=function(t,e,i){return{position:"absolute",top:t,left:e,"background-color":i}};let _=(()=>{class t{constructor(t){this.nodeManager=t,this.isClicked=!1}ngOnInit(){}NodeClicked(){this.nodeManager.AddEdge(this.index)}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(h))},t.\u0275cmp=a.Db({type:t,selectors:[["app-node"]],inputs:{index:"index",posX:"posX",posY:"posY",isClicked:"isClicked",color:"color",infos:"infos"},decls:5,vars:8,consts:[[1,"node",3,"ngStyle","ngClass","click"],[1,"node__info"],[1,"node__info__text"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"node__info__text",3,"ngStyle"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Tb("click",(function(){return e.NodeClicked()})),a.Mb(1,"div",1),a.Mb(2,"div",2),a.gc(3),a.Lb(),a.fc(4,M,2,1,"div",3),a.Lb(),a.Lb()),2&t&&(a.Yb("ngStyle",a.ac(4,v,e.posY+"px",e.posX+"px",e.color))("ngClass",e.isClicked?"clicked":"idle"),a.zb(3),a.hc(e.index),a.zb(1),a.Yb("ngIf",e.infos))},directives:[n.k,n.h,n.j,n.i],styles:["@-webkit-keyframes node-placed-animation{0%{transform:scale(1.2) translate(-50%,-50%)}to{transform:scale(1) translate(-50%,-50%)}}@keyframes node-placed-animation{0%{transform:scale(1.2) translate(-50%,-50%)}to{transform:scale(1) translate(-50%,-50%)}}.node--placed-animation[_ngcontent-%COMP%]{-webkit-animation-name:node-placed-animation;animation-name:node-placed-animation;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear}.idle[_ngcontent-%COMP%]{background-color:#fff}.clicked[_ngcontent-%COMP%]{background-color:rgba(255,0,0,.384)}.node[_ngcontent-%COMP%]{position:absolute;width:75px;height:75px;border-radius:50%;transform:translate(-50%,-50%);transition:.2s;z-index:10}.node__info[_ngcontent-%COMP%]{position:absolute;bottom:100%;right:100%;color:#fff;font-size:1.5em;pointer-events:none}.node__info__text[_ngcontent-%COMP%]{display:inline-block;padding:2px;margin:1px 0;background-color:hsla(0,0%,69.4%,.788);color:hsla(0,0%,84.7%,.904);border-radius:10%}div[_ngcontent-%COMP%]:hover{background-color:rgba(255,0,0,.384)}"]}),t})();const k=function(t,e,i,n){return{width:t,left:e,top:i,transform:n}};let w=(()=>{class t{constructor(){}ngOnInit(){this.posX=this.edgeProp.startNode.posX,this.posY=this.edgeProp.startNode.posY,this.length=this.edgeProp.GetLength(),this.angle=this.edgeProp.angle}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Db({type:t,selectors:[["app-edge"]],inputs:{edgeProp:"edgeProp"},decls:1,vars:6,consts:[[3,"ngStyle"]],template:function(t,e){1&t&&a.Kb(0,"div",0),2&t&&a.Yb("ngStyle",a.bc(1,k,e.length+"px",e.posX+"px",e.posY+"px","rotate("+e.angle+"deg)"))},directives:[n.k],styles:["div[_ngcontent-%COMP%]{position:absolute;height:4px;background-color:rgba(224,201,201,.76);border-radius:50px;transform-origin:0 0}"]}),t})();function x(t,e){if(1&t&&(a.Mb(0,"div"),a.Kb(1,"app-node",4),a.Lb()),2&t){const t=e.$implicit;a.zb(1),a.Yb("index",t.index)("posX",t.posX)("posY",t.posY)("isClicked",t.isClicked)("color",t.color)("infos",t.infos)}}function y(t,e){if(1&t&&(a.Mb(0,"div"),a.fc(1,x,2,6,"div",3),a.Lb()),2&t){const t=a.Vb();a.zb(1),a.Yb("ngForOf",t.nodesManager.nodes)}}function L(t,e){if(1&t&&(a.Mb(0,"div"),a.Kb(1,"app-edge",5),a.Lb()),2&t){const t=e.$implicit;a.zb(1),a.Yb("edgeProp",t)}}function S(t,e){if(1&t&&(a.Mb(0,"div"),a.fc(1,L,2,1,"div",3),a.Lb()),2&t){const t=a.Vb();a.zb(1),a.Yb("ngForOf",t.nodesManager.edges)}}const P=function(t){return{color:t,"font-weight":"bold"}};function O(t,e){if(1&t&&(a.Mb(0,"div"),a.gc(1),a.Mb(2,"span",7),a.gc(3),a.Lb(),a.Lb()),2&t){const t=e.$implicit;a.zb(1),a.ic(" ",t.info,": "),a.zb(1),a.Yb("ngStyle",a.Zb(3,P,t.value)),a.zb(1),a.hc(t.value)}}function z(t,e){if(1&t&&(a.Mb(0,"div",6),a.Mb(1,"div"),a.fc(2,O,4,5,"div",3),a.Lb(),a.Lb()),2&t){const t=a.Vb();a.zb(2),a.Yb("ngForOf",t.nodesManager.infos)}}let A=(()=>{class t{constructor(t){this.nodesManager=t}ngOnInit(){}MouseClicked(t){this.nodesManager.AddNode(t.clientX,t.clientY)}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(h))},t.\u0275cmp=a.Db({type:t,selectors:[["app-graph"]],decls:4,vars:3,consts:[[1,"graph",3,"click"],[4,"ngIf"],["class","alg-info",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"index","posX","posY","isClicked","color","infos"],[3,"edgeProp"],[1,"alg-info"],[3,"ngStyle"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Tb("click",(function(t){return e.MouseClicked(t)})),a.fc(1,y,2,1,"div",1),a.fc(2,S,2,1,"div",1),a.fc(3,z,3,1,"div",2),a.Lb()),2&t&&(a.zb(1),a.Yb("ngIf",e.nodesManager.nodes),a.zb(1),a.Yb("ngIf",e.nodesManager.edges),a.zb(1),a.Yb("ngIf",e.nodesManager.infos.length>0))},directives:[n.j,n.i,_,w,n.k],styles:[".graph[_ngcontent-%COMP%]{background-color:#333;width:100%;height:100%}.alg-info[_ngcontent-%COMP%]{position:absolute;right:0;font-size:1.2em;color:#fff;padding:8px;margin:8px;line-height:1.5;background-color:hsla(0,0%,69.4%,.788);border-radius:10%}"]}),t})();const N=[{path:"",component:(()=>{class t{constructor(t,e){this.nodesManager=t,this.searchAlgorithm=e,this.placing="nodes"}SwitchClicked(){this.nodesManager.Switch(),this.placing=0==this.placing.localeCompare("nodes")?"edges":"nodes"}RunClicked(){this.select_algorithm=document.querySelector("[data-js='algorithm']"),this.searchAlgorithm.InitAlg(this.select_algorithm.value),this.searchAlgorithm.RunAlg()}StepRightclicked(){this.searchAlgorithm.stepRight()}StepLeftclicked(){this.searchAlgorithm.stepLeft()}ResetClicked(){this.nodesManager.Reset(),this.searchAlgorithm.Reset()}VisualizeClicked(){this.searchAlgorithm.Visualize()}StopClicked(){this.searchAlgorithm.Stop()}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(h),a.Jb(u))},t.\u0275cmp=a.Db({type:t,selectors:[["app-home"]],decls:41,vars:2,consts:[[2,"position","relative",3,"fullscreen"],[2,"width","100%","height","5%","background-color","#567fa9"],[1,"row",2,"color","white"],[1,"row__col","row__col--33","row"],[1,"row__col","row__col--50"],[1,"center_v"],["data-js","algorithm"],[3,"click"],[1,"row__col","row__col--33"],[1,"center"],[1,"center--right"],[2,"margin-right","8px",3,"click"],[2,"width","100%","height","95%","background-color","transparent"]],template:function(t,e){1&t&&(a.Mb(0,"ion-content",0),a.Kb(1,"app-tutorial"),a.Mb(2,"div",1),a.Mb(3,"div",2),a.Mb(4,"div",3),a.Mb(5,"div",4),a.Mb(6,"div",5),a.gc(7," Choose algorithm: "),a.Mb(8,"select",6),a.Mb(9,"option"),a.gc(10,"BFS"),a.Lb(),a.Mb(11,"option"),a.gc(12,"DFS"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(13,"div",4),a.Mb(14,"div",5),a.Mb(15,"button",7),a.Tb("click",(function(){return e.SwitchClicked()})),a.gc(16," Switch "),a.Lb(),a.gc(17),a.Lb(),a.Lb(),a.Lb(),a.Mb(18,"div",8),a.Mb(19,"div",9),a.Mb(20,"button",7),a.Tb("click",(function(){return e.StepLeftclicked()})),a.Mb(21,"span"),a.gc(22,"\u2190"),a.Lb(),a.Lb(),a.gc(23," \xa0 "),a.Mb(24,"button",7),a.Tb("click",(function(){return e.StepRightclicked()})),a.Mb(25,"span"),a.gc(26,"\u2192"),a.Lb(),a.Lb(),a.gc(27," \xa0\xa0\xa0\xa0\xa0 "),a.Mb(28,"button",7),a.Tb("click",(function(){return e.VisualizeClicked()})),a.gc(29," Visualize "),a.Lb(),a.gc(30," \xa0 "),a.Mb(31,"button",7),a.Tb("click",(function(){return e.StopClicked()})),a.gc(32," Stop "),a.Lb(),a.Lb(),a.Lb(),a.Mb(33,"div",8),a.Mb(34,"div",10),a.Mb(35,"button",11),a.Tb("click",(function(){return e.RunClicked()})),a.gc(36," Run "),a.Lb(),a.Mb(37,"button",7),a.Tb("click",(function(){return e.ResetClicked()})),a.gc(38," Reset "),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(39,"div",12),a.Kb(40,"app-graph"),a.Lb(),a.Lb()),2&t&&(a.Yb("fullscreen",!0),a.zb(17),a.ic(" (",e.placing,") "))},directives:[s.b,b,o.d,o.e,A],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}.row[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.row__col[_ngcontent-%COMP%]{position:relative;float:left;height:100%}.row__col--25[_ngcontent-%COMP%]{width:25%}.row__col--33[_ngcontent-%COMP%]{width:33.33%}.row__col--50[_ngcontent-%COMP%]{width:50%}.row__col--75[_ngcontent-%COMP%]{width:75%}.center[_ngcontent-%COMP%]{left:50%;transform:translate(-50%,-50%)}.center[_ngcontent-%COMP%], .center--right[_ngcontent-%COMP%]{position:absolute;top:50%}.center--right[_ngcontent-%COMP%]{right:0;transform:translate(-14px,-50%)}.center_v[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%)}button[_ngcontent-%COMP%]{margin:0;padding:12px;border-radius:10%;font:inherit;color:inherit;outline:none;background-color:#29dfba;transition:.2s}button[_ngcontent-%COMP%]:hover{background-color:#2ef7cf}button[_ngcontent-%COMP%]:active{background-color:#25c9a8}select[_ngcontent-%COMP%]{padding:8px}select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{outline:none;border:none;background-color:#567fa9}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(N)],r.i]}),t})(),j=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[n.b,o.a,s.d,Y]]}),t})()}}]);