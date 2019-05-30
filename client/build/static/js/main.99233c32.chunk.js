(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(25),a(26),a(2)),i=a(3),s=a(6),u=a(4),m=a(5),d=a(9),h=a(11),E=new(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._orders=[],a._customer={},a._window={},a._shoppingCart=[],a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"emitChange",value:function(){this.emit("change")}},{key:"addChangeListener",value:function(e){this.on("change",e)}},{key:"removeChangeListener",value:function(e){this.removeListener("change",e)}}]),t}(h.EventEmitter)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._onChange=a._onChange.bind(Object(d.a)(a)),a.state={shoppingCart:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({shoppingCart:E._shoppingCart})}},{key:"componentDidMount",value:function(){E.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){E.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"card-header"},"Order details"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},this.state.shoppingCart.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h5",null,"Customer: ",e.customer.name),r.a.createElement("h5",null,"Price: ",e.price," \u20ac"),r.a.createElement("hr",{className:"mt-3 mb-3"}))}))))}}]),t}(r.a.Component),f=a(7),v=a.n(f),p=a(17),g=a(10),y=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"showAssembleMessage",value:function(e,t){var a="";a=t?"Shutter has been assembled.":"Shutter has not been assembled yet.",Object(g.b)(a+" Order ID: "+e)}},{key:"showInvoiceMessage",value:function(e,t){var a="";a=t?"Invoice has been created.":"Invoice has not been created.",Object(g.b)(a+" Order ID: "+e)}},{key:"showPayMessage",value:function(e,t){var a="";a=t?"Payment has been completed successfully.":"Payment has not been completed successfully.",Object(g.b)(a+" Order ID: "+e)}},{key:"showInstallationTimeMessage",value:function(e,t){var a=t.year+"."+t.month+"1."+t.day+" "+t.hours+":00";Object(g.b)("Installation has been organized for orderID: "+e+" "+a)}},{key:"showNewOrderMessage",value:function(e){var t="";t=e?"Order has been created":"There was an error. Order has not been created.",Object(g.b)(t+" Order ID: "+e)}}]),e}()),O=new(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._orders=[],a._requiredParts=null,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"emitChange",value:function(){this.emit("change")}},{key:"addChangeListener",value:function(e){this.on("change",e)}},{key:"removeChangeListener",value:function(e){this.removeListener("change",e)}}]),t}(h.EventEmitter)),C=new(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._orders=[],a._ordersFromSelectedUser=null,a._statistics={},a._selectedCustomer={},a._selectedOrderPaymentStatus={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"emitChange",value:function(){this.emit("change")}},{key:"addChangeListener",value:function(e){this.on("change",e)}},{key:"removeChangeListener",value:function(e){this.removeListener("change",e)}}]),t}(h.EventEmitter)),_=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"listOrders",value:function(){M.handleViewAction({actionType:v.a.WORKER_LIST_ORDERS,payload:null})}},{key:"listParts",value:function(e){M.handleViewAction({actionType:v.a.WORKER_LIST_PARTS,payload:e})}},{key:"assembleShutter",value:function(e){M.handleViewAction({actionType:v.a.WORKER_ASSEMBLE_SHUTTER,payload:e})}}]),e}()),N=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),_.listOrders(),a._onChange=a._onChange.bind(Object(d.a)(a)),a.state={orders:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({orders:O._orders})}},{key:"componentDidMount",value:function(){O.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){O.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Orders"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},this.state.orders.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("div",{onClick:function(){return _.listParts(e._id)}},r.a.createElement("h5",null,"Customer name: ",e.customer.name),r.a.createElement("h5",null,"Customer e-mail: ",e.customer.email),r.a.createElement("h5",null,"Price: ",e.price," \u20ac")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return _.assembleShutter(e._id)}},"Assemble this shutter")),r.a.createElement("hr",{className:"mt-3 mb-3"}))}))))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._onChange=a._onChange.bind(Object(d.a)(a)),a.state={parts:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({parts:O._requiredParts})}},{key:"componentDidMount",value:function(){O.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){O.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Required shutter parts"),r.a.createElement("table",{className:"table table-light"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"louvers"),r.a.createElement("td",null,this.state.parts.louvers)),r.a.createElement("tr",null,r.a.createElement("td",null,"shutter staples"),r.a.createElement("td",null,this.state.parts.shutterStaples)),r.a.createElement("tr",null,r.a.createElement("td",null,"rails"),r.a.createElement("td",null,this.state.parts.rails)),r.a.createElement("tr",null,r.a.createElement("td",null,"tilt rod"),r.a.createElement("td",null,this.state.parts.tiltRod)),r.a.createElement("tr",null,r.a.createElement("td",null,"hinges"),r.a.createElement("td",null,this.state.parts.hinges)))),r.a.createElement("button",{className:"btn btn-info",onClick:function(){return l.a.render(r.a.createElement(N),document.getElementById("mainContent"))}},"Back")))}}]),t}(r.a.Component),k=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"listOrders",value:function(){M.handleViewAction({actionType:v.a.MANAGER_LIST_ORDERS,payload:null})}},{key:"listOrdersFromUser",value:function(e){M.handleViewAction({actionType:v.a.MANAGER_VIEW_CUSTOMER,payload:e})}},{key:"organizeInstallation",value:function(e){M.handleViewAction({actionType:v.a.MANAGER_ORGANIZE_INSTALLATION,payload:e})}},{key:"createInvoice",value:function(e){M.handleViewAction({actionType:v.a.MANAGER_CREATE_INVOICE,payload:e})}},{key:"checkStatistics",value:function(){M.handleViewAction({actionType:v.a.MANAGER_CHECK_STATISTICS,payload:null})}}]),e}()),w=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),k.listOrders(),a._onChange=a._onChange.bind(Object(d.a)(a)),a.state={orders:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({orders:C._orders})}},{key:"componentDidMount",value:function(){C.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){C.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Orders"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},this.state.orders.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("h5",null,"Order ID: ",e._id),r.a.createElement("h5",null,"Customer: ",e.customer.name),r.a.createElement("h5",null,"Price: ",e.price," \u20ac"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return k.createInvoice(e._id)}},"Create Invoice"),r.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return k.listOrdersFromUser(e.customer.name)}},"View Customer"),r.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return k.organizeInstallation(e._id)}},"Organize Installation")),r.a.createElement("hr",{className:"mt-3 mb-3"}))}))))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),k.listOrdersFromUser(C._selectedCustomer),a._onChange=a._onChange.bind(Object(d.a)(a)),a.state={orders:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({orders:C._ordersFromSelectedUser})}},{key:"componentDidMount",value:function(){C.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){C.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Orders from ",C._selectedCustomer),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},this.state.orders.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("h5",null,"Order ID: ",e._id),r.a.createElement("h5",null,"Price: ",e.price," \u20ac"),r.a.createElement("h5",null,"Paid: ",e.isPaid?"Yes":"No"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return k.createInvoice(e._id)}},"Create Invoice"),r.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return k.organizeInstallation(e._id)}},"Organize Installation"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-info mt-2",onClick:function(){return l.a.render(r.a.createElement(w),document.getElementById("mainContent"))}},"Back"))),r.a.createElement("hr",{className:"mt-3 mb-3"}))}))))}}]),t}(r.a.Component),R=a(13),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleViewAction",value:function(e){this.dispatch({source:"VIEW_ACTION",payload:e})}}]),t}(p.Dispatcher),I="http://localhost:8080",A=new T;A.register(function(e){e.payload.actionType===v.a.WORKER_LIST_ORDERS&&fetch("".concat(I,"/worker/list")).then(function(e){return e.json()}).then(function(e){O._orders=e,O.emitChange()})}),A.register(function(e){e.payload.actionType===v.a.WORKER_LIST_PARTS&&(O._requiredParts=O._orders.find(function(t){return t._id===e.payload.payload}),fetch("".concat(I,"/worker/listParts/").concat(e.payload.payload),{headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).then(function(e){O._requiredParts=e,O.emitChange()}),l.a.render(r.a.createElement(j),document.getElementById("mainContent")),O.emitChange())}),A.register(function(e){if(e.payload.actionType===v.a.WORKER_ASSEMBLE_SHUTTER){var t=O._orders.find(function(t){return t._id===e.payload.payload});fetch("".concat(I,"/worker/assemble/").concat(e.payload.payload)).then(function(e){y.showAssembleMessage(t._id,e)})}}),A.register(function(e){e.payload.actionType===v.a.MANAGER_LIST_ORDERS&&fetch("".concat(I,"/manager/list")).then(function(e){return e.json()}).then(function(e){C._orders=e,C.emitChange()})}),A.register(function(e){e.payload.actionType===v.a.MANAGER_VIEW_CUSTOMER&&(C._selectedCustomer=e.payload.payload,C._ordersFromSelectedUser=C._orders.find(function(t){return t.customer.name===e.payload.payload}),fetch("".concat(I,"/manager/viewCustomer/").concat(e.payload.payload)).then(function(e){return e.json()}).then(function(e){C._ordersFromSelectedUser=e,C.emitChange()}),l.a.render(r.a.createElement(S),document.getElementById("mainContent")),C.emitChange())}),A.register(function(e){if(e.payload.actionType===v.a.MANAGER_CREATE_INVOICE){var t=C._orders.find(function(t){return t._id===e.payload.payload});fetch("".concat(I,"/manager/createInvoice/").concat(e.payload.payload)).then(function(e){y.showInvoiceMessage(t._id,e)})}}),A.register(function(e){e.payload.actionType===v.a.MANAGER_CHECK_STATISTICS&&fetch("".concat(I,"/manager/list")).then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return e.price});C._statistics={orderCount:e.length,maxPrice:Object(R.max)(t),minPrice:Object(R.min)(t),sumPrice:t.reduce(function(e,t){return e+t},0)},C.emitChange()})}),A.register(function(e){e.payload.actionType===v.a.MANAGER_ORGANIZE_INSTALLATION&&fetch("".concat(I,"/manager/organizeInstallation/").concat(e.payload.payload)).then(function(e){return e.json()}).then(function(t){y.showInstallationTimeMessage(e.payload.payload,t)})}),A.register(function(e){e.payload.actionType===v.a.CUSTOMER_LIST_ORDERS&&fetch("".concat(I,"/customer/list/").concat(e.payload.payload)).then(function(e){return e.json()}).then(function(e){E._orders=e,E.emitChange()})}),A.register(function(e){e.payload.actionType===v.a.CUSTOMER_SEND_ORDER&&fetch("".concat(I,"/customer/sendOrder/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.payload.payload)}).then(function(e){return e.json()}).then(function(e){y.showNewOrderMessage(e.orderId)})}),A.register(function(e){if(e.payload.actionType===v.a.CUSTOMER_PAY_ORDER){var t=E._orders.find(function(t){return t._id===e.payload.payload});fetch("".concat(I,"/customer/pay/").concat(e.payload.payload),{method:"POST"}).then(function(e){y.showPayMessage(t._id,e)})}});var M=A,L=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"listOrders",value:function(e){M.handleViewAction({actionType:v.a.CUSTOMER_LIST_ORDERS,payload:e})}},{key:"sendOrder",value:function(e){M.handleViewAction({actionType:v.a.CUSTOMER_SEND_ORDER,payload:e})}},{key:"payOrder",value:function(e){M.handleViewAction({actionType:v.a.CUSTOMER_PAY_ORDER,payload:e})}}]),e}()),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:null,email:null,phoneNumber:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"mb-3"},r.a.createElement("h5",null,"Customer Info"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-3 col-form-label",htmlFor:"customerName"},"Customer Name"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{id:"customerName",ref:"customerName",className:"form-control",onChange:function(t){var a=t.target.value;e.setState({name:a}),E._customer.name=a},type:"text"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-3 col-form-label",htmlFor:"customerName"},"E-mail"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{id:"customerName",className:"form-control",onChange:function(t){var a=t.target.value;e.setState({email:a}),E._customer.email=a},type:"email"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-3 col-form-label",htmlFor:"customerName"},"Mobile number"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{id:"customerName",className:"form-control",onChange:function(t){var a=t.target.value;e.setState({phoneNumber:a}),E._customer.phoneNumber=a},type:"phone"}))))}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={height:0,width:0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"mb-3"},r.a.createElement("h5",null,"Window Size"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"width",className:"col-3 col-form-label"},"Width (cm)"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{type:"number",className:"form-control",id:"width",onChange:function(t){var a=t.target.value;e.setState({width:a}),E._window.width=a}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"height",className:"col-3 col-form-label"},"Height (cm)"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{type:"number",className:"form-control",id:"height",onChange:function(t){var a=t.target.value;e.setState({height:a}),E._window.height=a}}))))}}]),t}(r.a.Component),U=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"calculateWindow",value:function(e,t){return{width:e,height:t,panels:Math.max(1,Math.round(e/100)),mountSize:Math.max(1,10*Math.round(e/100))}}}]),e}()),W=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"calculateParts",value:function(e,t){var a=Math.ceil(t/30),n=Math.ceil(e/40);return{louvers:n*a,shutterStaples:n*(a-1),rails:n,tiltRod:n,hinges:n*(2*(a-1))}}}]),e}()),V=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"calculatePrice",value:function(e){return 22*e.louvers+11*e.shutterStaples+2*e.hinges+20*e.tiltRod+16*e.rails}}]),e}()),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._onChange=a._onChange.bind(Object(d.a)(a)),a.state={shoppingCart:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({shoppingCart:E._shoppingCart})}},{key:"componentDidMount",value:function(){E.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){E.removeChangeListener(this._onChange)}},{key:"saveToShoppingCart",value:function(){var e=E._window.width,t=E._window.height,a=U.calculateWindow(e,t),n=W.calculateParts(e,t),r=V.calculatePrice(n),c={customer:E._customer,window:a,parts:n,price:r};E._shoppingCart.push(c),P.refs.customerName.value="",E.emitChange()}},{key:"sendOrders",value:function(e){e.forEach(function(e){L.sendOrder(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"New Order"),r.a.createElement("div",{className:"card-body"},r.a.createElement(P,null),r.a.createElement(D,null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"add",className:"col-3 col-form-label"}),r.a.createElement("div",{className:"col-9"},r.a.createElement("button",{onClick:function(){e.saveToShoppingCart()},className:"btn btn-warning"},"Add")))),r.a.createElement(b,null),r.a.createElement("button",{className:"btn btn-danger btn-block mt-2",onClick:function(){return e.sendOrders(E._shoppingCart)}},"Send Order")))}}]),t}(r.a.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._onChange=a._onChange.bind(Object(d.a)(a)),a.state={orders:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({orders:E._orders})}},{key:"componentDidMount",value:function(){E.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){E.removeChangeListener(this._onChange)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Select Customer"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-3 col-form-label",htmlFor:"customerName"},"Customer Name"),r.a.createElement("div",{className:"col-9"},r.a.createElement("input",{id:"customerName",className:"form-control",onChange:function(t){var a=t.target.value;e.setState({name:a}),E._name=a},type:"text"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:function(){L.listOrders(E._name)},className:"btn btn-warning btn-block"},"List")))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Orders"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},this.state.orders.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("h5",null,"Order ID: ",e._id),r.a.createElement("h5",null,"Customer: ",e.customer.name),r.a.createElement("h5",null,"Price: ",e.price," \u20ac"),r.a.createElement("div",{className:"mt-2"},r.a.createElement("button",{className:"btn btn-danger btn-block",onClick:function(){return L.payOrder(e._id)}},"Pay")),r.a.createElement("hr",{className:"mt-3 mb-3"}))})))))}}]),t}(r.a.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._onChange=a._onChange.bind(Object(d.a)(a)),a.state={parts:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({parts:O._requiredParts})}},{key:"componentDidMount",value:function(){O.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){O.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Customer"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group btn-block"},r.a.createElement("button",{className:"btn btn-info",onClick:function(){return l.a.render(r.a.createElement(B),document.getElementById("customerMainContent"))}},"New Order")),r.a.createElement("ul",{className:"list-group btn-block"},r.a.createElement("button",{className:"btn btn-info",onClick:function(){return l.a.render(r.a.createElement(G),document.getElementById("customerMainContent"))}},"List Orders"))))),r.a.createElement("div",{className:"col-8",id:"customerMainContent"}))}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=null,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"workerMainContent"},r.a.createElement(N,null))}}]),t}(r.a.Component),K=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),k.checkStatistics(),a._onChange=a._onChange.bind(Object(d.a)(a)),a.state={statistics:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({statistics:C._statistics})}},{key:"componentDidMount",value:function(){C.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){C.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Statistics"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,r.a.createElement("h5",null,"Number of orders"),r.a.createElement("h1",null,this.state.statistics.orderCount),r.a.createElement("hr",{className:"mt-3 mb-3"})),r.a.createElement("div",null,r.a.createElement("h5",null,"Maximum order price"),r.a.createElement("h1",null,this.state.statistics.maxPrice," \u20ac"),r.a.createElement("hr",{className:"mt-3 mb-3"})),r.a.createElement("div",null,r.a.createElement("h5",null,"Minimum order price"),r.a.createElement("h1",null,this.state.statistics.minPrice," \u20ac"),r.a.createElement("hr",{className:"mt-3 mb-3"})),r.a.createElement("div",null,r.a.createElement("h5",null,"All income"),r.a.createElement("h1",null,this.state.statistics.sumPrice," \u20ac"))))}}]),t}(r.a.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._onChange=a._onChange.bind(Object(d.a)(a)),a.state={parts:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_onChange",value:function(){this.setState({parts:O._requiredParts})}},{key:"componentDidMount",value:function(){O.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){O.removeChangeListener(this._onChange)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Manager"),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group btn-block"},r.a.createElement("button",{className:"btn btn-info",onClick:function(){return l.a.render(r.a.createElement(w),document.getElementById("managerMainContent"))}},"List Orders")),r.a.createElement("ul",{className:"list-group btn-block "},r.a.createElement("button",{className:"btn btn-info",onClick:function(){return l.a.render(r.a.createElement(K),document.getElementById("managerMainContent"))}},"Check Statistics")))))),r.a.createElement("div",{className:"col-8",id:"managerMainContent"}))}}]),t}(r.a.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state=null,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return l.a.render(r.a.createElement(F),document.getElementById("mainContent"))}},"Customer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return l.a.render(r.a.createElement(x),document.getElementById("mainContent"))}},"Worker")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:function(){return l.a.render(r.a.createElement(z),document.getElementById("mainContent"))}},"Manager"))))}}]),t}(r.a.Component);a(34);g.b.configure();var H=function(){return r.a.createElement("div",{className:"App container-fluid p-0"},r.a.createElement(g.a,null),r.a.createElement(q,null),r.a.createElement("div",{className:"container-fluid pt-4 content-area"},r.a.createElement("div",{className:"container",id:"mainContent"},r.a.createElement(x,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t){e.exports={CUSTOMER_LIST_ORDERS:"customer-list-orders",CUSTOMER_SEND_ORDER:"customer-send-order",CUSTOMER_PAY_ORDER:"customer-pay-order",WORKER_LIST_ORDERS:"worker-list-orders",WORKER_ASSEMBLE_SHUTTER:"worker-assemble-shutter",WORKER_LIST_PARTS:"worker-list-parts",MANAGER_LIST_ORDERS:"manager-list-orders",MANAGER_VIEW_CUSTOMER:"manager-view-customer",MANAGER_CREATE_INVOICE:"manager-create-invoice",MANAGER_CHECK_STATISTICS:"manager-check-statistics",MANAGER_ORGANIZE_INSTALLATION:"manager-organize-installation"}}},[[20,1,2]]]);
//# sourceMappingURL=main.99233c32.chunk.js.map