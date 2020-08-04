(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{32:function(t,e,n){t.exports=n(60)},42:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(29),c=n.n(r),l=n(18),i=n(7),s=n(8),d=n(10),u=n(9),p=n(11),m=n(1);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},h={color:"#fff",textDecoration:"none"},b=function(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"To Do List"),o.a.createElement(p.c,{style:h,to:"/"},"Home")," | ",o.a.createElement(p.c,{style:h,to:"/about"},"About"))},y=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"x")))}}]),n}(a.Component),v={background:"#ff0000",color:"white",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},g=y,E=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(g,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),n}(a.Component),j=n(31),k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo..",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),n}(a.Component);var O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is my TodoList app v1.0.0",o.a.createElement("br",null),"It is built as a learning exercise using React."))},x=(n(42),n(14)),C=n.n(x),T=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){C.a.post("https://jsonplaceholder.typicode.com/todos?_limit=10",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){console.log(e.data),t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(b,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:t.addTodo}),o.a.createElement(E,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}),"  ")}}),o.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(a.Component);c.a.render(o.a.createElement(p.b,null,o.a.createElement(T,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.eba648c6.chunk.js.map