var login = ""
var logintemp = "";
var login_numpad = 1;
var user;
var hall = "";
var table = "";
var category = "";
var additionremoveclicked = false;
var order_id = "";
var productsize = "";
var loadingProduct = "";
var selectedInput = "";
var clients = "";
$(document).ready(() =>{
    zoomcontrol();
    $(window).mousedown(() => {
        var audio = document.getElementById("audio");
        audio.play();
    })
    $(".numBtn").click(() => {
        logintemp += login;
        $(".circle-"+login_numpad).css("backgroundColor", "#3e396b");
        if(login_numpad == 4){
            auth(logintemp);
            logintemp = "";
            setTimeout(() => {
                login_numpad = 1;
                $(".circle-1").css("backgroundColor", "#fff");
                $(".circle-2").css("backgroundColor", "#fff");
                $(".circle-3").css("backgroundColor", "#fff");
                $(".circle-4").css("backgroundColor", "#fff");
            }, 500);
            return;
        }
        login_numpad++;
    });
    $(".btnRemove").click(() => {
        login_numpad--;
        logintemp = logintemp.substr(0,logintemp.length-1);
        $(".cricle-"+login_numpad).css("backgroundColor", "#fff");
    })
})
function auth(passcode){
    var found = "";
    users.forEach((user) => {
        if(user.passcode == passcode) {
            found = user;
            route("home");
        }
    })
    user = found;
    
    UIElement("user_name", user.name);
}
function route(dir){
    $("#login").hide();
    $("#home").hide();
    $("#order").hide();
    $("#"+dir).show();
    initPage(dir);
    localStorage.setItem('path', dir);
}
function initPage(dir){
    switch(dir){
        case "home":
            hall=halls[0].id;
            clearHall();
            loadHalls();
            clearTables();
            loadTables();
        break;
        case "order":
            UIElement("table_title", findTable(table).title);
            UIElement("right_table_name", findTable(table).title);
            UIElement("total_text", config.currency_left+total()+config.currency_right)
            UIElement("payOrderBtn", config.currency_left+total()+config.currency_right)
            clearCategories();
            loadCategories();
            clearOrderList();
            loadOrderPage();
            
        break;
    }
}
function openOrderFor(type){
    if(type == "shipping"){
            table = 7;
            zeroPayDetails();
            route("order");
    }
    if(type == "takeaway"){
            table = 8;
            zeroPayDetails();
            route("order");
    }
}
function openInvoices(){
    loadInvoices();
    $("#invoices_modal").modal("show");
}
function loadInvoices(){
    clearInvoices();
    invoices.forEach((invoice) => addInvoice(invoice));
}
function clearInvoices(){
    $("#invoicesList").html("")
}
function addInvoice(invoice){
    var val = invoice;
    var html =  '<hr>'
    html += '<div class="row" onclick="openOrderFor('+val.table+');">'
    html += '<div class="col-3">'
    html += '<span style="flex: 15 1 0%;"><b>'+val.time+'</b>'
    html += '<small class="d-block">'+time(new Date(val.timestring))+' ago</small>'
    html += '</span>'
    html += '</div>'
    html += '<div class="col-3">'
    html += '<span style="flex: 15 1 0%;"><b>#'+val.id+'</b>'
    html += '<small class="d-block">'+val.waiter+'</small>'
    html += '</span>'
    html += '</div>'
    html += '<div class="col-3">'
    html += '<b>'+findTable(val.table).title+'</b>'
    html += '</div>'
    html += '<div class="col-3">'
    html += '<b class="main">'+config.currency_left+val.total+config.currency_right+'</b>'
    html += '</div>'
    html += '</div>'
    html += '<hr>'
    $("#invoicesList").html($("#invoicesList").html() + html)
}
function loadOrderPage(){
    var order = findOrderByTable();
    if(order == "") return;
    order.products.forEach((product) => {
        if(!product.cancelled)
            addOrder(product);
    })
}
function hallBtn(id){
    hall = id;
    clearHall();
    loadHalls();
    clearTables();
    loadTables();
}
function tableBtn(id){
    table = id;
    
    if(findTable(id).clients  == 0 || findOrderByTable() == ""){
        $("#code").val("");
        $(".numpad-clients-count").show();
    }else{
        openOrder();
    }

}

function openOrder(){
    var clients = $("#code").val();
    $(".numpad-clients-count").css("border", '1px solid'); 
    if(clients != "") {
        findTable(table).clients = clients;
    } else {
        $(".numpad-clients-count").css("border", 'solid red'); 
        return;
    }
    zeroPayDetails();
    route("order");

}
function homeBtn(){
    $("#search_input").val("");
    clearCategories();
    loadCategories();
}
function CategoryClick(id){
    category = id;
    var child_category = findCategoryChilds(id);
    if(child_category != ""){
        clearCategories();
        loadChildCategories(id);
        return;
    }
    clearCategories();
    loadProducts();
}
function loadChildCategories(parent){
    categories.forEach((val,index) => {
        if(val.parent == parent){
            var html =   '<div class="col-2 product category" onclick="CategoryClick('+val.id+')"">'
                html += '<p>'+val.title+'</p>'
                html += '<div class="image-effect"></div>'
                html += '<img src="images/categories/'+val.image+'" alt="">'
                html += '</div>'
            $("#categories").html($("#categories").html()+html);
        }
    })
}
function ProductClick(id){
    var product = findProduct(id);
    loadingProduct = id;
    if(product.sizes.length > 0 || product.addition.length > 0) loadProductDetail(product); else saveOrder(product);
}
function loadProductDetail(product){
    UIElement("product_title", product.title);
    clearProductSizes();
    clearProductAddition();
    product.sizes.forEach((val,index) => {
        var html = '<div ><button class="btn btn-success mainbg white productsize" onclick="productsize=`'+val.id+'`">'+val.title+'</button></div>';
        $("#sizesList").html($("#sizesList").html()+html);

    })
    var html = '<div class="col-12"><div class="head">Addition </div> <hr></div>';
    product.addition.forEach((val,index) => {
            html += '<div class="col-3 product addition" id="addition_'+val.id+'" onclick="addAddition(`'+product.id+'`,`'+val.id+'`)">';
            html += '<div class="bag">'+config.currency_left+val.price+config.currency_right+'</div>';
            html += '<p>'+val.title+'</p>';
            html += '<div class="image-effect"></div>';
            html += '<img src="images/addition/'+val.image+'" alt="">';
            html += ' </div><hr>';
            
        })
    $("#addition").html($("#addition").html()+html);
    $(".productadd").show();
}
function clearProductSizes(){
    $("#sizesList").html("");
}
function clearProductAddition(){
    $("#addition").html("");
}
function orderExit(){
    cancelNumPad();
    route("home");
}
function cancelOrderbtn(){
    zeroProductParameters();
    $(".productadd").hide();
}
function ChangeCalculate(){
    var cash_input =parseFloat( $("#cash_input").val());
    var card_input =parseFloat( $("#card_input").val());
    var discount_input =parseFloat( $("#discount_input").val());
    var umico_input =parseFloat( $("#umico_input").val());
    var subtotal =parseFloat( total());
    cash_input =  Number.isNaN(cash_input) ? 0 :cash_input;
    card_input =  Number.isNaN( card_input) ? 0 : card_input;
    umico_input = Number.isNaN( umico_input) ? 0 : umico_input;
    if(cash_input > 0 && umico_input > 0 && selectedInput == "umico_input"){
        cash_input =subtotal - umico_input;
        $("#cash_input").val(cash_input.toFixed(2))   
    }else
    if(card_input > 0 && umico_input > 0 && selectedInput == "umico_input"){
        card_input =subtotal - umico_input;
        $("#card_input").val(card_input.toFixed(2))   
    }
    if(selectedInput == "umico_input" && umico_input < 1 && cash_input > 0){
        cash_input = subtotal;
        $("#cash_input").val(cash_input.toFixed(2))   
    }else
    if(selectedInput == "umico_input" && umico_input < 1 && card_input > 0){
        card_input = subtotal;
        $("#card_input").val(card_input.toFixed(2))   
    }
    var t =cash_input;
    t += umico_input;
    t += card_input;
    t = t-subtotal;
    if(t < 0) t=0;
    UIElement("confirm_change", config.currency_left+t.toFixed(2)+config.currency_right);
}
function addOrderBtn(){
    if(productsize == ""){
        $(".productsize").attr('style', 'border: solid red !important');
        return;
    }
    $(".productsize").attr('style', 'border: none');
    
    var product = findProduct(loadingProduct);
    product.sizes.forEach((size) => {if(size.id == productsize) size.selected = true})
    var count = $("#productCountCode").val();
    if(count == "") count = 1;
    product.count = count;
    $("#productCountCode").val("")
    saveOrder(product);
    zeroProductParameters();
    cancelOrderbtn();
}
function Order(){
    var cash_input =parseFloat( $("#cash_input").val());
    var card_input =parseFloat( $("#card_input").val());
    var discount_input =parseFloat( $("#discount_input").val());
    var umico_input =parseFloat( $("#umico_input").val());
    if(Number.isNaN(cash_input) && Number.isNaN(card_input) && Number.isNaN(umico_input) && Number.isNaN(discount_input)) {
        $("#cash_input").addClass("is-invalid");
        $("#card_input").addClass("is-invalid");
        return;
    }
    var order = findOrderByTable();
    order.total = total();
    order.cash = cash_input;
    order.card = card_input;
    order.umico = umico_input;
    order.discount_input = discount_input;
    order.status = "paid";
    var today = new Date();
    order.time = now();
    order.date = today.getFullYear()+'-'+integer((today.getMonth()+1))+'-'+integer(today.getDate());
    order.timestring = today.getTime();
    order.waiter = user.name;
    $(".calculate").hide();
    UIElement("order_id", "#");
    zeroProductParameters();
    zeroPayDetails();
    clearOrderList();
    var invoice = JSON.parse(JSON.stringify(order));
    invoices.push(invoice);
    removeTableOrders();
    UIElement("total_text", config.currency_left+"0"+config.currency_right);

}
function removeTableOrders(){
    orders.forEach((order) => {
        if(order.table == table) orders.splice(orders.indexOf(order), 1);
    })
}
function zeroProductParameters(){
    products.forEach((product) => {
        product.addition.forEach((addition) => addition.count = 0)
        product.sizes.forEach((size) => size.selected = false)
    })
}
function addAddition(product_id,addition_id){
    if(additionremoveclicked) {
        additionremoveclicked = false;
        return;
    }
    var product = findProduct(product_id);
    var addition = findAddition(product,addition_id);
    addition.count++;
    $("#addition_"+addition.id).html($("#addition_"+addition.id).html() + '<div class="bag-remove" onclick="AdditionMinus(`'+product.id+'`,`'+addition.id+'`)"><i class="fas fa-minus"></i></div><div class="bag-count"><b>'+addition.count+'</b></div>')
}
function AdditionMinus(product_id,addition_id){
    additionremoveclicked = true;
    var product = findProduct(product_id);
    var addition = findAddition(product,addition_id);
    addition.count--;
    if(addition.count<1) {addition.count = 0; $("#addition_"+addition_id + " .bag-remove").remove(); $("#addition_"+addition_id + " .bag-count").remove();}
    else
    $("#addition_"+addition.id).html($("#addition_"+addition.id).html() + '<div class="bag-remove" onclick="AdditionMinus(`'+product.id+'`,`'+addition.id+'`)"><i class="fas fa-minus"></i></div><div class="bag-count"><b>'+addition.count+'</b></div>')
}
function saveOrder(product){
    product = JSON.parse(JSON.stringify(product))
    var order_id = createOrder();
    var order = findOrder(order_id);
    var orderProduct = checkProductContain(product);
    if(!orderProduct){
        product.idm = new Date().getTime();
        addOrder(product);
        order.products.push(product);
    }
    else{
        orderProduct.count =parseInt(orderProduct.count) +  parseInt(product.count);
        UIElement("count_"+orderProduct.idm, orderProduct.count + "x" + config.currency_left+calculateProductTotal(product)+config.currency_right)
        UIElement("total_"+orderProduct.idm, config.currency_left+(orderProduct.count * calculateProductTotal(product))+config.currency_right)
    }
    UIElement("total_text", config.currency_left+total()+config.currency_right)
    UIElement("payOrderBtn", config.currency_left+total()+config.currency_right)
}
function checkProductContain(product){
    var order = findOrderByTable();
    var contain = false;
    var stop = false;
    var stopAddition = false;
    var additionContain = false;
    var sizeContain = false;
    if(order != ""){
        order.products.forEach((_product) => {
                if(product.id == _product.id && !stop && !_product.cancelled){
                    if(_product.addition.length > 0){
                        _product.addition.forEach((addition) => {
                            if(addition.count > 0 && !stopAddition){
                                if(addition.count == findAddition(product,addition.id).count){
                                    additionContain = true;
                                }else{
                                    additionContain = false;
                                    stopAddition = true;
                                }

                            }
                            
                        }) 
                    }else additionContain = true;
                    if(_product.sizes.length > 0){
                        _product.sizes.forEach((size) => {
                            
                            if(findSize(_product,size.id).selected &&  findSize(product,size.id).selected){
                                sizeContain = true;
                            }
                             
                        }) 
                    }else sizeContain = true;
                    if(sizeContain && additionContain) {
                        contain = _product;
                        stop = true;
                    }
                }
        })
    }
    return contain;
}
function payOrderBtn(){
    UIElement("confirm_total", config.currency_left+total()+config.currency_right);
    $(".calculate").show();
}
function zeroPayDetails(){
    $("#confirm_change").html(config.currency_left+"0"+config.currency_right);
    $("#cash_input").val("");
    $("#card_input").val("");
    $("#discount_input").val("");
    $("#umico_input").val("");
    UIElement("total_text", config.currency_left+total()+config.currency_right)
    UIElement("payOrderBtn", config.currency_left+total()+config.currency_right)
    UIElement("service", config.service+"%");
}
function createOrder(){
    var order = findOrderByTable();
    if(order == ""){
        orders.push({
            id: orders.length+1,
            table,
            products:[],
            clients: findTable(table).clients,
            total:0,
            status:"pending"
        });
        order_id = orders.length;
        UIElement("order_id", "#"+order_id);
        return orders.length;
    }
    order_id = findOrderByTable().id;
    UIElement("order_id", "#"+order_id);
    return order_id;
    
}
function calculateProductTotal(product){
    var total = parseFloat(product.price);
    if(product.addition.length > 0){
        product.addition.forEach((addition) => {
            if(addition.count > 0){
                total+=parseFloat(addition.price)*addition.count;
            }
        })
    }
    if(product.sizes.length > 0){
        product.sizes.forEach((size) => {
            if(size.selected){
                total+=parseFloat(size.price);
            }
        })
    }
    return total;
}
function total(){
    var order = findOrderByTable();
    var total = 0;
    if(order == "" ) return 0;
    order.products.forEach((product) => {
        if(!product.cancelled)
            total += calculateProductTotal(product)*product.count;
    })
    if(total > 0 && config.service>0){
        var service  =(total * parseFloat(config.service)/100)
        UIElement("service", config.service+"% ("+config.currency_left+service+config.currency_right + ")");
        total+=service;
    }
    return total.toFixed(2);
}
function findOrderProductByIdm(idm){
    var order = findOrderByTable();
    var found = "";
    order.products.forEach((product) => {
        if(product.idm == idm) found = product;
    })
    return found;
}
function reasonClick(idm,reason){
    $("#deleteReason").modal("hide");
    var product = findOrderProductByIdm(idm);
    product.cancelled = true;
    product.reason = reason;
    zeroPayDetails();
    clearOrderList();
    loadOrderPage();
    
}
function removeOrder(idm){
    $("#deleteReason").modal("show");
    loadReasons(idm);
    
}
function loadReasons(idm){
    clearReasonList();
    deleteReasons.forEach((reason) => addReason(idm,reason));
}
function addReason(idm,reason){
    var html = '<span class="col-3 reason" onclick="reasonClick(`'+idm+'`,`'+reason+'`)">'+reason+'</span>';
    $("#reasonList").html($("#reasonList").html()+html);
}
function clearReasonList(){
    $("#reasonList").html("");
}
function listAdditions(product){
    var list = "";
    product.addition.forEach((addition) => {
        if(addition.count > 0) list+= ","+addition.title +" x "+addition.count
    })
    return list.substr(1,list.length);
}
function addOrder(product){
    var html = "";
    html +='<div class="col-4">'
    html +='<span style="flex: 15 1 0%;">'+product.title+' '
    if(findProductSelectedSize(product) != "")
        html +='<small class="d-block">(Size: '+findProductSelectedSize(product).title+' Extras: '+listAdditions(product)+' )</small>'
    html +='</span>'
    html +='</div>'
    html +='<div class="col-2" id="count_'+product.idm+'">'+product.count+'x'+config.currency_left+calculateProductTotal(product)+config.currency_right+'</div>'
    html +='<div class="col-3 text-right" id="total_'+product.idm+'">'+config.currency_left+(calculateProductTotal(product))+config.currency_right+'</div>'
    html +='<div class="col-3" onclick="removeOrder('+product.idm+')"><i class="fas fa-trash-alt"></i></div>'
    html +='<div class="col-12"><hr></div>'
    
    $("#ordersList").html($("#ordersList").html()+html);
}
function findProductSelectedSize(product){
    var found ="";
    product.sizes.forEach((size) => {if(size.selected) found = size;}); return found;
}
function clearOrderList(){
    $("#ordersList").html("");
}
function loadProducts(){
    products.forEach((val,index) => {
        if(val.category == category){
            var html =   '<div class="product productItem" onclick="ProductClick('+val.id+')"">'
            html += '<div class="bag"> '+config.currency_left+val.price+config.currency_right+'</div>'
            html += '<p>'+val.title+'</p>'
            html += '<div class="image-effect"></div>'
            html += '<img src="images/products/'+val.image+'" alt="">'
            html += '</div>'
            $("#categories").html($("#categories").html()+html);
        }
    })
}
function search(q){
    clearCategories();
    if(q == ""){
        loadCategories();
        return;
    }
    products.forEach((val) => {
        if(val.title.toUpperCase().includes(q)){
            var html =   '<div class="product productItem" onclick="ProductClick('+val.id+')"">'
            html += '<div class="bag"> '+config.currency_left+val.price+config.currency_right+'</div>'
            html += '<p>'+val.title+'</p>'
            html += '<div class="image-effect"></div>'
            html += '<img src="images/products/'+val.image+'" alt="">'
            html += '</div>'
            $("#categories").html($("#categories").html()+html);
        }
    })
}
function loadCategories(){
    categories.forEach((val,index) => {
        if(val.parent == 0){
            var html =   '<div class=" product category" onclick="CategoryClick('+val.id+')"">'
                html += '<p>'+val.title+'</p>'
                html += '<div class="image-effect"></div>'
                html += '<img src="images/categories/'+val.image+'" alt="">'
                html += '</div>'
            $("#categories").html($("#categories").html()+html);
        }
    })
}
function clearCategories(){
    $("#categories").html("");
}
function cancelNumPad(){
    $(".numpad-clients-count").hide();
}

function findAddition(product, id){
    var found = false;
    product.addition.forEach((addition) => { if(addition.id == id) { found= addition} }); return found;
}
function findSize(product,id){
    var found = false;
    product.sizes.forEach((size) => { if(size.id == id) { found= size} }); return found;
}

function findTable(id){
    var found = "";
    tables.forEach((tab) => {if(tab.id==id) found = tab} ); return found;
}
function findCategory(id){
    var found = "";
    categories.forEach((category) => {if(category.id==id) found = category} ); return found;
}
function findProduct(id){
    var found = "";
    products.forEach((product) => {if(product.id==id) found = product} ); return found;
}
function findOrder(id){
    var found = "";
    orders.forEach((order) => {if(order.id==id) found = order} ); return found;
}
function findOrderByTable(){
    var found = "";
    orders.forEach((order) => {if(order.table==table) found = order} ); return found;
}
function findOrderProduct(order_id,id){
    var found = "";
    var order = findOrder(order_id);
    order.products.forEach((product) => {if(product.id==id) found = product} ); return found;
}
function findCategoryChilds(id){
    var found = "";
    categories.forEach((category) => {
        if(category.parent == id) found = category;
    })
    return found;
}

function UIElement(name,text){
    $("#"+name).html(text);
}
function loadHalls(){
    halls.forEach((val,index) => {
        var html = '<div class="col-2">'
            html+= '<button class="btn btn-default hallBtn" onclick="hallBtn('+val.id+')">'+val.title+'</button>'
            html+='</div>'
        $("#hallsList").html($("#hallsList").html()+html);
    })
}
function clearHall(){
    $("#hallsList").html("");
}
function loadTables(){
    tables.forEach((val,index) => {
        if(val.hall == hall){
             var html = '<div class="col-3 tableBtn" onclick="tableBtn('+val.id+')">';
             html += '<div class="table">';
             html += '<h3 class="align-middle">'+val.title+'</h3>';
             html +='</div></div>';
         $("#tablesList").html($("#tablesList").html()+html);
        }
     })
}
function clearTables(){
    $("#tablesList").html("");
}