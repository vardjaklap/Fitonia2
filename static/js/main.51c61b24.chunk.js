(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e,t,a){e.exports=a(545)},255:function(e,t,a){},257:function(e,t,a){},545:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(37),c=a.n(i),r=(a(255),a(28)),o=a(29),s=a(31),h=a(30),m=a(32),d=(a(257),a(6)),u=a(227),b=a.n(u),p=a(228),g=a.n(p),y=a(54),E=a.n(y),v=a(229),f=a.n(v),k=a(230),j=a.n(k),C=a(226),O=a.n(C),w=a(120),T=a.n(w),x=a(231),P=a.n(x),F=a(125),D=a.n(F),S=a(66),B=a.n(S),M=a(549),L=a(96),N=a.n(L),W=a(97),z=a.n(W),R=a(98),K=a(99),A=a.n(K),H=a(87),I=a.n(H),G=a(100),J=a.n(G),V=a(148),$=a.n(V),q=a(57),Q=a.n(q),U=a(64),X=a.n(U),Y=a(63),Z=a.n(Y),_=a(219),ee=a.n(_),te=a(220),ae=a.n(te),ne=a(221),le=a.n(ne),ie=a(222),ce=a.n(ie),re=a(223),oe=a.n(re),se=a(224),he=a.n(se),me=a(225),de=a.n(me),ue={grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},avatarBig:{margin:10,width:60,height:60},avatar:{margin:10}},be=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={selTest:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({selTest:this.props.selTest}),console.log(this.props.selTest)}},{key:"render",value:function(){return l.a.createElement("div",{style:{width:250}},l.a.createElement(T.a,{style:ue.avatarBig,color:"red"},"H"),l.a.createElement("div",{style:{marginLeft:10}},l.a.createElement(E.a,{variant:"h5",color:"inherit",style:ue.grow},"Alex Peresta"),l.a.createElement(E.a,{variant:"caption",fontWeight:"fontWeightLight",color:"default",paragraph:!0,style:ue.grow},"alexperesta@gmail.com")),l.a.createElement($.a,null,l.a.createElement(Q.a,{button:!0,style:{color:B.a[200]},selected:"Dashboard"===this.state.selTest,component:M.a,from:"",to:"/dashboard"},l.a.createElement(Z.a,null,l.a.createElement(ee.a,{style:{color:B.a[500]}})),l.a.createElement(X.a,{primary:"Dashboard"})),l.a.createElement(Q.a,{button:!0,style:{color:N.a[200]},selected:"Training"===this.state.selTest,component:M.a,to:"/training"},l.a.createElement(Z.a,null,l.a.createElement(ae.a,{style:{color:N.a[500]}})),l.a.createElement(X.a,{primary:"Training"})),l.a.createElement(Q.a,{button:!0,style:{color:z.a[200]},selected:"Notepad"===this.state.selTest,component:M.a,to:"/notepad"},l.a.createElement(Z.a,null,l.a.createElement(le.a,{style:{color:z.a[600]}})),l.a.createElement(X.a,{primary:"Notepad"})),l.a.createElement(Q.a,{button:!0,style:{color:R.a[200]},selected:"Nutrition"===this.state.selTest,component:M.a,to:"/nutrition"},l.a.createElement(Z.a,null,l.a.createElement(ce.a,{style:{color:R.a[500]}})),l.a.createElement(X.a,{primary:"Nutrition"})),l.a.createElement(Q.a,{button:!0,style:{color:A.a[200]},selected:"Hydration"===this.state.selTest,component:M.a,to:"/hydration"},l.a.createElement(Z.a,null,l.a.createElement(oe.a,{style:{color:A.a[500]}})),l.a.createElement(X.a,{primary:"Hydration"})),l.a.createElement(Q.a,{button:!0,style:{color:I.a[200]},selected:"Sleep"===this.state.selTest,component:M.a,to:"/sleep"},l.a.createElement(Z.a,null,l.a.createElement(he.a,{style:{color:I.a[500]}})),l.a.createElement(X.a,{primary:"Sleep"})),l.a.createElement(Q.a,{button:!0,style:{color:J.a[200]},selected:"Meditation"===this.state.selTest,component:M.a,to:"/meditation"},l.a.createElement(Z.a,null,l.a.createElement(de.a,{style:{color:J.a[500]}})),l.a.createElement(X.a,{primary:"Meditation"}))))}}]),t}(n.Component),pe={grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},avatarBig:{margin:10,width:60,height:60},avatar:{margin:10}},ge=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).toggleDrawer=function(e,t){return function(){a.setState({left:t})}},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.state={left:!1,anchorEl:null},a.toggleDrawer=a.toggleDrawer.bind(Object(d.a)(Object(d.a)(a))),a.handleMenu=a.handleMenu.bind(Object(d.a)(Object(d.a)(a))),a.handleClose=a.handleClose.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("section",{id:"Navigation",styles:pe.root},l.a.createElement(O.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},l.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},l.a.createElement(be,{selTest:this.props.title})),l.a.createElement(E.a,{variant:"caption",fontWeight:"fontWeightLight",color:"default",style:{position:"absolute",bottom:0,margin:10}}," v. ALPHA 0.0.3")),l.a.createElement(b.a,{position:"static"},l.a.createElement(g.a,null,l.a.createElement(f.a,{color:"inherit","aria-label":"Menu",style:pe.menuButton,onClick:this.toggleDrawer("left",!0)},l.a.createElement(j.a,null)),l.a.createElement(E.a,{variant:"h5",color:"inherit",align:"center",style:pe.grow},this.props.title),l.a.createElement("div",null,l.a.createElement(T.a,{style:pe.avatar,onClick:this.handleMenu},"H"),l.a.createElement(P.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.handleClose},l.a.createElement(D.a,{onClick:this.handleClose},"Profile"),l.a.createElement(D.a,{onClick:this.handleClose},"My account"),l.a.createElement(D.a,{onClick:this.handleClose},"Logout"))))))}}]),t}(n.Component),ye=a(232),Ee=a(13),ve=a.n(Ee),fe=a(550),ke=a(552),je=a(551),Ce=a(512),Oe=a(513),we=a(546),Te=a(194),xe=a(547),Pe=[{name:"Day 1",Calories:40,Proteins:60,Fats:90,Carbohydrates:60},{name:"Day 2",Calories:30,Proteins:40,Fats:100,Carbohydrates:90},{name:"Day 3",Calories:60,Proteins:60,Fats:40,Carbohydrates:20},{name:"Day 4",Calories:28,Proteins:40,Fats:20,Carbohydrates:28},{name:"Day 5",Calories:100,Proteins:100,Fats:60,Carbohydrates:20},{name:"Day 6",Calories:90,Proteins:50,Fats:20,Carbohydrates:100,amt:25},{name:"Day 7",Calories:28,Proteins:100,Fats:20,Carbohydrates:40,amt:21}],Fe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[],checked:!0})}},{key:"render",value:function(){return l.a.createElement("section",{id:"NutritionHist"},l.a.createElement(ve.a,{container:!0},l.a.createElement(ve.a,{item:!0,xs:12},l.a.createElement("div",{style:{height:"500px"}},l.a.createElement(fe.a,{width:"100%",height:"100%"},l.a.createElement(ke.a,{data:Pe,margin:{top:20,right:30,left:20,bottom:5}},l.a.createElement(je.a,{strokeDasharray:"3 3"}),l.a.createElement(Ce.a,{dataKey:"name",margin:{top:20},stroke:"teal"}),l.a.createElement(Oe.a,{domain:[0,100],stroke:"teal"}),l.a.createElement(we.a,null),l.a.createElement(Te.a,null),l.a.createElement(xe.a,{barSize:10,dataKey:"Calories",fill:"#e53935"}),l.a.createElement(xe.a,{barSize:10,dataKey:"Proteins",fill:"#fb8c00"}),l.a.createElement(xe.a,{barSize:10,dataKey:"Fats",fill:"#ffeb3b"}),l.a.createElement(xe.a,{barSize:10,dataKey:"Carbohydrates",fill:"#2196f3"})))))))}}]),t}(n.Component),De=a(26),Se=a.n(De),Be=a(38),Me=a.n(Be),Le=a(33),Ne=a.n(Le),We=a(39),ze=a.n(We),Re=a(40),Ke=a.n(Re),Ae=a(511),He=a(68),Ie=a.n(He),Ge=a(79),Je=a.n(Ge),Ve=a(35),$e=a.n(Ve),qe=["#e53935","#fb8c00","#ffeb3b","#2196f3","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],Qe={Paper:{padding:"20px",marginTop:"20px",marginBottom:"10px"},footer:{position:"fixed",bottom:0,width:"100%"},textField:{width:"40%",margin:"5%"},button:{width:"50%",height:"10vh"},cont:{marginTop:50}},Ue=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={calories:0,proteins:0,fats:0,carbohydrates:0,dataToDisplay:[],dataToSave:[{name:"Calories",value:0},{name:"Protein",value:0},{name:"Fats",value:0},{name:"Carbohydrates",value:0}],checked:!1,page:1},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleChangeNav=a.handleChangeNav.bind(Object(d.a)(Object(d.a)(a))),a.sendTheme=a.sendTheme.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[{name:"Calories",value:0},{name:"Protein",value:0},{name:"Fats",value:0},{name:"Carbohydrates",value:0}],checked:!0}),this.sendTheme()}},{key:"sendTheme",value:function(){this.props.callBackFromParent("green")}},{key:"handleClick",value:function(){var e=this.state.dataToSave[0].value+1*this.state.calories,t=this.state.dataToSave[1].value+1*this.state.proteins,a=this.state.dataToSave[2].value+1*this.state.fats,n=this.state.dataToSave[3].value+1*this.state.carbohydrates;console.log(e),console.log(t),console.log(a),console.log(n);var l=this.state.dataToSave;l[0].value=e,l[1].value=t,l[2].value=a,l[3].value=n,this.setState({dataToSave:l});var i=this.state.dataToDisplay;l[0].value<3e3?i[0].value=l[0].value/30:i[0].value=100,l[1].value<165?i[1].value=l[1].value/1.65:i[1].value=100,l[2].value<60?i[2].value=l[2].value/.6:i[2].value=100,l[3].value<250?i[3].value=l[3].value/2.5:i[3].value=100}},{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(ye.a)({},t,a))}},{key:"handleChangeNav",value:function(e,t){this.setState({page:t})}},{key:"render",value:function(){return l.a.createElement($e.a,{in:this.state.checked},l.a.createElement("section",{id:"Nutrition"},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(ve.a,{item:!0,xs:10},l.a.createElement(Se.a,{style:Qe.Paper},0===this.state.page?l.a.createElement($e.a,{in:0===this.state.page},l.a.createElement(Fe,null)):null,1===this.state.page?l.a.createElement($e.a,{in:1===this.state.page},l.a.createElement(ve.a,{container:!0},l.a.createElement(ve.a,{item:!0,xs:12,md:6},l.a.createElement("div",{style:{height:"500px"}},l.a.createElement(fe.a,{width:"100%",height:"100%"},l.a.createElement(ke.a,{data:this.state.dataToDisplay},l.a.createElement(Ce.a,{dataKey:"name",stroke:"teal"}),l.a.createElement(Oe.a,{domain:[0,100],stroke:"teal"}),l.a.createElement(xe.a,{dataKey:"value",fill:"#8884d8",barSize:25,background:{fill:"#eee"}},this.state.dataToDisplay.map(function(e,t){return l.a.createElement(Ae.a,{key:"cell-".concat(t),fill:qe[t%20]})})))))),l.a.createElement(ve.a,{item:!0,xs:12,md:6},l.a.createElement(Ie.a,{id:"calories",name:"calories",type:"number",label:"Calories",style:Qe.textField,margin:"dense",variant:"outlined",onChange:this.handleChange}),l.a.createElement(Ie.a,{id:"proteins",name:"proteins",type:"number",label:"Proteins",style:Qe.textField,margin:"dense",variant:"outlined",onChange:this.handleChange}),l.a.createElement(Ie.a,{id:"fats",name:"fats",type:"number",label:"Fats",style:Qe.textField,margin:"dense",variant:"outlined",onChange:this.handleChange}),l.a.createElement(Ie.a,{id:"carbohydrates",name:"carbohydrates",type:"number",label:"Carbohydrates",style:Qe.textField,margin:"dense",variant:"outlined",onChange:this.handleChange}),l.a.createElement(ve.a,{container:!0,justify:"center",style:Qe.cont},l.a.createElement(Je.a,{variant:"contained",style:Qe.button,color:"primary",onClick:this.handleClick},"Add values!"))))):null))),l.a.createElement(Se.a,{style:Qe.footer},l.a.createElement(Me.a,{value:this.state.page,onChange:this.handleChangeNav,showLabels:!0},l.a.createElement(Ne.a,{label:"Recent",icon:l.a.createElement(ze.a,null)}),l.a.createElement(Ne.a,{label:"New",icon:l.a.createElement(Ke.a,null)})))))}}]),t}(n.Component),Xe=a(245),Ye=a.n(Xe),Ze=a(244),_e=a.n(Ze),et={Paper:{padding:"20px",marginTop:"20px",marginBottom:"10px"},footer:{position:"fixed",bottom:0,width:"100%"},textField:{width:"40%"},cont:{marginTop:50},svg:{position:"absolute",bottom:0,zIndex:100},svgContainer:{width:"100%",height:"100%"},svgSecond:{position:"absolute",bottom:0,zIndex:10},separator:{width:"100%",height:400,zIndex:80,position:"absolute",transition:"all 0.4s"},button:{width:"35%",height:"10vh"}},tt=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={checked:!1,percentage:"100%",perc:100,humanFill:"#2196f3"},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.sendTheme=a.sendTheme.bind(Object(d.a)(Object(d.a)(a))),a.addWaterPercentage=a.addWaterPercentage.bind(Object(d.a)(Object(d.a)(a))),a.handle100=a.handle100.bind(Object(d.a)(Object(d.a)(a))),a.handle250=a.handle250.bind(Object(d.a)(Object(d.a)(a))),a.handle500=a.handle500.bind(Object(d.a)(Object(d.a)(a))),a.handle1L=a.handle1L.bind(Object(d.a)(Object(d.a)(a))),a.handleCustom=a.handleCustom.bind(Object(d.a)(Object(d.a)(a))),a.handleCustomChange=a.handleCustomChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[],checked:!0}),this.sendTheme()}},{key:"sendTheme",value:function(){this.props.callBackFromParent("blue")}},{key:"handleClick",value:function(){}},{key:"addWaterPercentage",value:function(e){var t=this.state.perc-e/2500*100;t<=0?this.setState({perc:0,percentage:"0%",humanFill:"#ffea00"}):this.setState({perc:t,percentage:t+"%",humanFill:"#2196f3"})}},{key:"handle100",value:function(){this.addWaterPercentage(100)}},{key:"handle250",value:function(){this.addWaterPercentage(250)}},{key:"handle500",value:function(){this.addWaterPercentage(500)}},{key:"handle1L",value:function(){this.addWaterPercentage(1e3)}},{key:"handleCustomChange",value:function(e){var t=e.target.value;this.setState({customChange:t})}},{key:"handleCustom",value:function(){""===this.state.customChange||(this.addWaterPercentage(this.state.customChange),this.setState({customChange:0}))}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){return l.a.createElement($e.a,{in:this.state.checked},l.a.createElement("section",{id:"Water"},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(ve.a,{item:!0,xs:12,sm:10,md:8},l.a.createElement(Se.a,{style:et.Paper},l.a.createElement(ve.a,{container:!0,justify:"center",style:{padding:"25px 0"}},l.a.createElement(ve.a,{item:!0,xs:12,md:6},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement("div",{className:"containerTest",style:{width:"200px",height:"350px",position:"relative"}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"180%",height:"100%",viewBox:"0 0 220 210",style:{position:"absolute",top:0}},l.a.createElement("path",{fill:this.state.humanFill,d:"M97.2.4s7.8-2.5 10.9 5c0 0 11.6 12.9 12.9 22.2 0 0 .4 2.8-2.3 4.4-2 1-4.9 3.9-6.7 6.2 0 0-6.3 7.8-17.6 7.8 0 0-1.5-.2-4.6 7.2-1.6 3.7-6 9.3-9.3 13.7a60 60 0 0 0-5.3 11.6c-1.5 4.5-2 15.7-.3 18.8 0 0 5.1 12.3 6.5 17.7.1.3 2.5 7.5 1.3 17.7-.1 1-.8 5-1 7.2a36 36 0 0 0 1 13.3c1.2 3 4.8 5.7 5.9 13.5 1 7.6-1.2 18.5-.4 25.1a15 15 0 0 0 9.3 12.4s6.7 1.6 3.7 3.9c0 0-7.8.3-12.3-1.4 0 0-7.8.6-8.8-2.3 0 0 0-2.2.9-4 0 0-1.7-11.3-7.3-18.8-4-5.3-4.9-7.5-2.8-26.7 0 0-6.4-4-10.1-18.5l-4.1-17s-9.8 20.4-9 30.7c0 0 4.7 10.5 5.3 14.5.5 3.4.4 8.9-1 13.7-1.5 5 1.7 16.6 2.7 20.5 0 0 2.5 6.8-2.4 6.7 0 0-8.4-1-11 .9 0 0-9.7 1.2-11.7.3 0 0-3.2-1.2 2.2-3.6 0 0 5.7-.2 7.7-3.8 0 0 2.6-3 3.4-3.5 0 0-3.5-8.8-7-21.6-1.2-4.9-2.1-16.2-3-21.2-.4-3.1 1.2-10.5.2-13.5-2.6-8-6.6-14.2-.3-33.5l5.4-12.7a43.8 43.8 0 0 0 0-26.7s-5.7-8.2-6-16c0 0 .6-5.2-7.7-5 0 0-6.2 1.3-16.5-8.2l-6-4.5s-3.2-1.6.1-10.4c0 0 5.8-11.1 9-14.4l2.1-4.5s2-5 10.3-2.9c0 0 4.8.7 4 3.5 0 0 1.2 9-1.6 7.9 0 0-1.4-.7-1.7-2.6 0 0-4.2-.2-5.1-1.4 0 0-2.2 6.9-3.3 8 0 0 1 9.9.1 11.9 0 0 8.8-4.6 14.4 3.4 0 0 10.7-3.3 15 2.5 0 0 7.4 5.6 8.5-1.1l-.1-4s-1-2.4-1.3-4.2c0 0-1.8 1.2-2.4-3.8 0 0-1.1-3.3 1.1-2.8 0 0-3.7-9.8 6.6-12.6 0 0 13.5-3 12.3 11.7 0 0 4.9-1.2 0 7.4 0 0-1.4-.4-1.2.3.2.4.5 4.4.5 4.4s.3 6.5 5.8 5.4c0 0 10-7 14.8-3 0 0 6.3-8 14.8-3.8 0 0 2.7.5 3.5-1.9 0 0-5.3-4.3-4-16 0 0-.5-4.2-2.4-3.2L100 7s-.4 3-5.9 2.8c0 0 .2 1 0 1.2-1 .8-3.8.6-4.8 0-2.2-1.3-2.5-7.8 2.7-9.3L97.2.4z"})),l.a.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0}},l.a.createElement("rect",{width:"100%",height:"100%",fill:"white",style:{transition:"all 0.3s",height:this.state.percentage}})),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"180%",height:"100%",viewBox:"0 0 220 210",style:{position:"absolute",top:0}},l.a.createElement("path",{fill:"transparent",stroke:"#bdbdbd",strokeWidth:"2",d:"M97.2.4s7.8-2.5 10.9 5c0 0 11.6 12.9 12.9 22.2 0 0 .4 2.8-2.3 4.4-2 1-4.9 3.9-6.7 6.2 0 0-6.3 7.8-17.6 7.8 0 0-1.5-.2-4.6 7.2-1.6 3.7-6 9.3-9.3 13.7a60 60 0 0 0-5.3 11.6c-1.5 4.5-2 15.7-.3 18.8 0 0 5.1 12.3 6.5 17.7.1.3 2.5 7.5 1.3 17.7-.1 1-.8 5-1 7.2a36 36 0 0 0 1 13.3c1.2 3 4.8 5.7 5.9 13.5 1 7.6-1.2 18.5-.4 25.1a15 15 0 0 0 9.3 12.4s6.7 1.6 3.7 3.9c0 0-7.8.3-12.3-1.4 0 0-7.8.6-8.8-2.3 0 0 0-2.2.9-4 0 0-1.7-11.3-7.3-18.8-4-5.3-4.9-7.5-2.8-26.7 0 0-6.4-4-10.1-18.5l-4.1-17s-9.8 20.4-9 30.7c0 0 4.7 10.5 5.3 14.5.5 3.4.4 8.9-1 13.7-1.5 5 1.7 16.6 2.7 20.5 0 0 2.5 6.8-2.4 6.7 0 0-8.4-1-11 .9 0 0-9.7 1.2-11.7.3 0 0-3.2-1.2 2.2-3.6 0 0 5.7-.2 7.7-3.8 0 0 2.6-3 3.4-3.5 0 0-3.5-8.8-7-21.6-1.2-4.9-2.1-16.2-3-21.2-.4-3.1 1.2-10.5.2-13.5-2.6-8-6.6-14.2-.3-33.5l5.4-12.7a43.8 43.8 0 0 0 0-26.7s-5.7-8.2-6-16c0 0 .6-5.2-7.7-5 0 0-6.2 1.3-16.5-8.2l-6-4.5s-3.2-1.6.1-10.4c0 0 5.8-11.1 9-14.4l2.1-4.5s2-5 10.3-2.9c0 0 4.8.7 4 3.5 0 0 1.2 9-1.6 7.9 0 0-1.4-.7-1.7-2.6 0 0-4.2-.2-5.1-1.4 0 0-2.2 6.9-3.3 8 0 0 1 9.9.1 11.9 0 0 8.8-4.6 14.4 3.4 0 0 10.7-3.3 15 2.5 0 0 7.4 5.6 8.5-1.1l-.1-4s-1-2.4-1.3-4.2c0 0-1.8 1.2-2.4-3.8 0 0-1.1-3.3 1.1-2.8 0 0-3.7-9.8 6.6-12.6 0 0 13.5-3 12.3 11.7 0 0 4.9-1.2 0 7.4 0 0-1.4-.4-1.2.3.2.4.5 4.4.5 4.4s.3 6.5 5.8 5.4c0 0 10-7 14.8-3 0 0 6.3-8 14.8-3.8 0 0 2.7.5 3.5-1.9 0 0-5.3-4.3-4-16 0 0-.5-4.2-2.4-3.2L100 7s-.4 3-5.9 2.8c0 0 .2 1 0 1.2-1 .8-3.8.6-4.8 0-2.2-1.3-2.5-7.8 2.7-9.3L97.2.4z"})))),l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(E.a,{style:{textAlign:"center",marginTop:15},variant:"h5"},this.state.perc,"% left!"))),l.a.createElement(ve.a,{item:!0,xs:12,md:6},l.a.createElement(ve.a,{container:!0,justify:"center",alignItems:"center"},l.a.createElement(ve.a,{container:!0,justify:"space-around",style:{marginTop:20}},l.a.createElement(Je.a,{variant:"contained",size:"large",color:"primary",style:et.button,onClick:this.handle100},"100ML"),l.a.createElement(Je.a,{variant:"contained",size:"large",color:"primary",style:et.button,onClick:this.handle250},"250ML")),l.a.createElement(ve.a,{container:!0,justify:"space-around",style:{marginTop:50}},l.a.createElement(Je.a,{variant:"contained",size:"large",color:"primary",style:et.button,onClick:this.handle500},"500ML"),l.a.createElement(Je.a,{variant:"contained",size:"large",color:"primary",style:et.button,onClick:this.handle1L},"1L")),l.a.createElement(ve.a,{container:!0,justify:"space-around",style:{marginTop:30}},l.a.createElement(Ie.a,{id:"waterMl",name:"ml",type:"number",label:"Enter ml",style:et.textField,margin:"dense",variant:"outlined",onChange:this.handleCustomChange})),l.a.createElement(ve.a,{container:!0,justify:"space-around"},l.a.createElement(_e.a,{color:"primary","aria-label":"Add",onClick:this.handleCustom},l.a.createElement(Ye.a,null))))))))),l.a.createElement(Se.a,{style:et.footer},l.a.createElement(Me.a,null,l.a.createElement(Ne.a,{label:"Recent",icon:l.a.createElement(ze.a,null)}),l.a.createElement(Ne.a,{label:"Favorites",icon:l.a.createElement(Ke.a,null)})))))}}]),t}(n.Component),at={Paper:{padding:"20px",marginTop:"20px",marginBottom:"10px"},footer:{position:"fixed",bottom:0,width:"100%"},textField:{width:"40%",margin:"5%"},button:{width:"50%",height:"10vh"},cont:{marginTop:50}},nt=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={checked:!1},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.sendTheme=a.sendTheme.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[],checked:!0}),this.sendTheme()}},{key:"sendTheme",value:function(){this.props.callBackFromParent("red")}},{key:"handleClick",value:function(){}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){return l.a.createElement($e.a,{in:this.state.checked},l.a.createElement("section",{id:"Nutrition"},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(ve.a,{item:!0,xs:10},l.a.createElement(Se.a,{style:at.Paper},l.a.createElement(ve.a,{container:!0,justify:"center",style:{padding:"25px 0"}},l.a.createElement(ve.a,{item:!0,xs:12,md:6},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement("div",{className:"containerTest",style:{width:"200px",height:"500px",backgroundColor:"salmon",position:"relative"}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"180%",height:"100%",viewBox:"0 -5 220 220",style:{position:"absolute",top:0}},l.a.createElement("path",{fill:"#ffea00",d:"M97.2.4s7.8-2.5 10.9 5c0 0 11.6 12.9 12.9 22.2 0 0 .4 2.8-2.3 4.4-2 1-4.9 3.9-6.7 6.2 0 0-6.3 7.8-17.6 7.8 0 0-1.5-.2-4.6 7.2-1.6 3.7-6 9.3-9.3 13.7a60 60 0 0 0-5.3 11.6c-1.5 4.5-2 15.7-.3 18.8 0 0 5.1 12.3 6.5 17.7.1.3 2.5 7.5 1.3 17.7-.1 1-.8 5-1 7.2a36 36 0 0 0 1 13.3c1.2 3 4.8 5.7 5.9 13.5 1 7.6-1.2 18.5-.4 25.1a15 15 0 0 0 9.3 12.4s6.7 1.6 3.7 3.9c0 0-7.8.3-12.3-1.4 0 0-7.8.6-8.8-2.3 0 0 0-2.2.9-4 0 0-1.7-11.3-7.3-18.8-4-5.3-4.9-7.5-2.8-26.7 0 0-6.4-4-10.1-18.5l-4.1-17s-9.8 20.4-9 30.7c0 0 4.7 10.5 5.3 14.5.5 3.4.4 8.9-1 13.7-1.5 5 1.7 16.6 2.7 20.5 0 0 2.5 6.8-2.4 6.7 0 0-8.4-1-11 .9 0 0-9.7 1.2-11.7.3 0 0-3.2-1.2 2.2-3.6 0 0 5.7-.2 7.7-3.8 0 0 2.6-3 3.4-3.5 0 0-3.5-8.8-7-21.6-1.2-4.9-2.1-16.2-3-21.2-.4-3.1 1.2-10.5.2-13.5-2.6-8-6.6-14.2-.3-33.5l5.4-12.7a43.8 43.8 0 0 0 0-26.7s-5.7-8.2-6-16c0 0 .6-5.2-7.7-5 0 0-6.2 1.3-16.5-8.2l-6-4.5s-3.2-1.6.1-10.4c0 0 5.8-11.1 9-14.4l2.1-4.5s2-5 10.3-2.9c0 0 4.8.7 4 3.5 0 0 1.2 9-1.6 7.9 0 0-1.4-.7-1.7-2.6 0 0-4.2-.2-5.1-1.4 0 0-2.2 6.9-3.3 8 0 0 1 9.9.1 11.9 0 0 8.8-4.6 14.4 3.4 0 0 10.7-3.3 15 2.5 0 0 7.4 5.6 8.5-1.1l-.1-4s-1-2.4-1.3-4.2c0 0-1.8 1.2-2.4-3.8 0 0-1.1-3.3 1.1-2.8 0 0-3.7-9.8 6.6-12.6 0 0 13.5-3 12.3 11.7 0 0 4.9-1.2 0 7.4 0 0-1.4-.4-1.2.3.2.4.5 4.4.5 4.4s.3 6.5 5.8 5.4c0 0 10-7 14.8-3 0 0 6.3-8 14.8-3.8 0 0 2.7.5 3.5-1.9 0 0-5.3-4.3-4-16 0 0-.5-4.2-2.4-3.2L100 7s-.4 3-5.9 2.8c0 0 .2 1 0 1.2-1 .8-3.8.6-4.8 0-2.2-1.3-2.5-7.8 2.7-9.3L97.2.4z"})),l.a.createElement("svg",{width:"100%",height:"100%",style:{position:"absolute",top:0}},l.a.createElement("rect",{width:"100%",height:"100%",fill:"white",style:{transition:"all 0.3s",height:"100%"}})),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"180%",height:"100%",viewBox:"0 -5 220 220",style:{position:"absolute",top:0}},l.a.createElement("path",{fill:"transparent",stroke:"#bdbdbd",strokeWidth:"2",d:"M97.2.4s7.8-2.5 10.9 5c0 0 11.6 12.9 12.9 22.2 0 0 .4 2.8-2.3 4.4-2 1-4.9 3.9-6.7 6.2 0 0-6.3 7.8-17.6 7.8 0 0-1.5-.2-4.6 7.2-1.6 3.7-6 9.3-9.3 13.7a60 60 0 0 0-5.3 11.6c-1.5 4.5-2 15.7-.3 18.8 0 0 5.1 12.3 6.5 17.7.1.3 2.5 7.5 1.3 17.7-.1 1-.8 5-1 7.2a36 36 0 0 0 1 13.3c1.2 3 4.8 5.7 5.9 13.5 1 7.6-1.2 18.5-.4 25.1a15 15 0 0 0 9.3 12.4s6.7 1.6 3.7 3.9c0 0-7.8.3-12.3-1.4 0 0-7.8.6-8.8-2.3 0 0 0-2.2.9-4 0 0-1.7-11.3-7.3-18.8-4-5.3-4.9-7.5-2.8-26.7 0 0-6.4-4-10.1-18.5l-4.1-17s-9.8 20.4-9 30.7c0 0 4.7 10.5 5.3 14.5.5 3.4.4 8.9-1 13.7-1.5 5 1.7 16.6 2.7 20.5 0 0 2.5 6.8-2.4 6.7 0 0-8.4-1-11 .9 0 0-9.7 1.2-11.7.3 0 0-3.2-1.2 2.2-3.6 0 0 5.7-.2 7.7-3.8 0 0 2.6-3 3.4-3.5 0 0-3.5-8.8-7-21.6-1.2-4.9-2.1-16.2-3-21.2-.4-3.1 1.2-10.5.2-13.5-2.6-8-6.6-14.2-.3-33.5l5.4-12.7a43.8 43.8 0 0 0 0-26.7s-5.7-8.2-6-16c0 0 .6-5.2-7.7-5 0 0-6.2 1.3-16.5-8.2l-6-4.5s-3.2-1.6.1-10.4c0 0 5.8-11.1 9-14.4l2.1-4.5s2-5 10.3-2.9c0 0 4.8.7 4 3.5 0 0 1.2 9-1.6 7.9 0 0-1.4-.7-1.7-2.6 0 0-4.2-.2-5.1-1.4 0 0-2.2 6.9-3.3 8 0 0 1 9.9.1 11.9 0 0 8.8-4.6 14.4 3.4 0 0 10.7-3.3 15 2.5 0 0 7.4 5.6 8.5-1.1l-.1-4s-1-2.4-1.3-4.2c0 0-1.8 1.2-2.4-3.8 0 0-1.1-3.3 1.1-2.8 0 0-3.7-9.8 6.6-12.6 0 0 13.5-3 12.3 11.7 0 0 4.9-1.2 0 7.4 0 0-1.4-.4-1.2.3.2.4.5 4.4.5 4.4s.3 6.5 5.8 5.4c0 0 10-7 14.8-3 0 0 6.3-8 14.8-3.8 0 0 2.7.5 3.5-1.9 0 0-5.3-4.3-4-16 0 0-.5-4.2-2.4-3.2L100 7s-.4 3-5.9 2.8c0 0 .2 1 0 1.2-1 .8-3.8.6-4.8 0-2.2-1.3-2.5-7.8 2.7-9.3L97.2.4z"}))))),l.a.createElement(ve.a,{item:!0,xs:12,md:6}))))),l.a.createElement(Se.a,{style:at.footer},l.a.createElement(Me.a,null,l.a.createElement(Ne.a,{label:"Recent",icon:l.a.createElement(ze.a,null)}),l.a.createElement(Ne.a,{label:"Favorites",icon:l.a.createElement(Ke.a,null)})))))}}]),t}(n.Component),lt={Paper:{padding:"20px",marginTop:"20px",marginBottom:"10px"},footer:{position:"fixed",bottom:0,width:"100%"},textField:{width:"40%",margin:"5%"},button:{width:"50%",height:"10vh"},cont:{marginTop:50}},it=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={checked:!1},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.sendTheme=a.sendTheme.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[],checked:!0}),this.sendTheme()}},{key:"sendTheme",value:function(){this.props.callBackFromParent("orange")}},{key:"handleClick",value:function(){}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){return l.a.createElement($e.a,{in:this.state.checked},l.a.createElement("section",{id:"Nutrition"},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(ve.a,{item:!0,xs:10},l.a.createElement(Se.a,{style:lt.Paper}))),l.a.createElement(Se.a,{style:lt.footer},l.a.createElement(Me.a,null,l.a.createElement(Ne.a,{label:"Recent",icon:l.a.createElement(ze.a,null)}),l.a.createElement(Ne.a,{label:"Favorites",icon:l.a.createElement(Ke.a,null)})))))}}]),t}(n.Component),ct={Paper:{padding:"20px",marginTop:"20px",marginBottom:"10px"},footer:{position:"fixed",bottom:0,width:"100%"},textField:{width:"40%",margin:"5%"},button:{width:"50%",height:"10vh"},cont:{marginTop:50}},rt=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={checked:!1},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.sendTheme=a.sendTheme.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[],checked:!0}),this.sendTheme()}},{key:"sendTheme",value:function(){this.props.callBackFromParent("yellow")}},{key:"handleClick",value:function(){}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){return l.a.createElement($e.a,{in:this.state.checked},l.a.createElement("section",{id:"Nutrition"},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(ve.a,{item:!0,xs:10},l.a.createElement(Se.a,{style:ct.Paper}))),l.a.createElement(Se.a,{style:ct.footer},l.a.createElement(Me.a,null,l.a.createElement(Ne.a,{label:"Recent",icon:l.a.createElement(ze.a,null)}),l.a.createElement(Ne.a,{label:"Favorites",icon:l.a.createElement(Ke.a,null)})))))}}]),t}(n.Component),ot={Paper:{padding:"20px",marginTop:"20px",marginBottom:"10px"},footer:{position:"fixed",bottom:0,width:"100%"},textField:{width:"40%",margin:"5%"},button:{width:"50%",height:"10vh"},cont:{marginTop:50}},st=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={checked:!1},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.sendTheme=a.sendTheme.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[],checked:!0}),this.sendTheme()}},{key:"sendTheme",value:function(){this.props.callBackFromParent("indigo")}},{key:"handleClick",value:function(){}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){return l.a.createElement($e.a,{in:this.state.checked},l.a.createElement("section",{id:"Nutrition"},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(ve.a,{item:!0,xs:10},l.a.createElement(Se.a,{style:ot.Paper}))),l.a.createElement(Se.a,{style:ot.footer},l.a.createElement(Me.a,null,l.a.createElement(Ne.a,{label:"Recent",icon:l.a.createElement(ze.a,null)}),l.a.createElement(Ne.a,{label:"Favorites",icon:l.a.createElement(Ke.a,null)})))))}}]),t}(n.Component),ht={Paper:{padding:"20px",marginTop:"20px",marginBottom:"10px"},footer:{position:"fixed",bottom:0,width:"100%"},textField:{width:"40%",margin:"5%"},button:{width:"50%",height:"10vh"},cont:{marginTop:50}},mt=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={checked:!1},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.sendTheme=a.sendTheme.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({dataToDisplay:[],checked:!0}),this.sendTheme()}},{key:"sendTheme",value:function(){this.props.callBackFromParent("deepPurple")}},{key:"handleClick",value:function(){}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){return l.a.createElement($e.a,{in:this.state.checked},l.a.createElement("section",{id:"Nutrition"},l.a.createElement(ve.a,{container:!0,justify:"center"},l.a.createElement(ve.a,{item:!0,xs:10},l.a.createElement(Se.a,{style:ht.Paper}))),l.a.createElement(Se.a,{style:ht.footer},l.a.createElement(Me.a,null,l.a.createElement(Ne.a,{label:"Recent",icon:l.a.createElement(ze.a,null)}),l.a.createElement(Ne.a,{label:"Favorites",icon:l.a.createElement(Ke.a,null)})))))}}]),t}(n.Component),dt=a(553),ut=a(554),bt=a(150),pt=a.n(bt),gt=a(78),yt=a(246),Et=a.n(yt),vt=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).myCallback=function(e){var t,n;"green"===e?(t=R.a,n="Nutrition"):"blue"===e?(t=A.a,n="Hydration"):"red"===e?(t=B.a,n="Dashboard"):"orange"===e?(t=N.a,n="Training"):"yellow"===e?(t=z.a,n="Notepad"):"indigo"===e?(t=I.a,n="Sleep"):"deepPurple"===e&&(t=J.a,n="Meditation");var l=Object(gt.createMuiTheme)({palette:{primary:t},typography:{useNextVariants:!0}});a.setState({theme:l,title:n})},a.state={components:[{name:l.a.createElement(nt,{callBackFromParent:a.myCallback}),path:"/dashboard",icon:""},{name:l.a.createElement(it,{callBackFromParent:a.myCallback}),path:"/training",icon:""},{name:l.a.createElement(rt,{callBackFromParent:a.myCallback}),path:"/notepad",icon:""},{name:l.a.createElement(Ue,{callBackFromParent:a.myCallback}),path:"/nutrition",icon:""},{name:l.a.createElement(tt,{callBackFromParent:a.myCallback}),path:"/hydration",icon:""},{name:l.a.createElement(st,{callBackFromParent:a.myCallback}),path:"/sleep",icon:""},{name:l.a.createElement(mt,{callBackFromParent:a.myCallback}),path:"/meditation",icon:""}],theme:Object(gt.createMuiTheme)({palette:{primary:B.a},typography:{useNextVariants:!0}}),title:"default"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(dt.a,null,l.a.createElement(pt.a,{theme:this.state.theme},l.a.createElement(Et.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(ge,{title:this.state.title}),this.state.components.map(function(e){return l.a.createElement(ut.a,{key:e.path,exact:!0,path:e.path,render:function(){return e.name}})})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(vt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[250,2,1]]]);
//# sourceMappingURL=main.51c61b24.chunk.js.map