function UIWrite(text){
    document.write(text);
}
function UIShow(id){
    $("#"+id).show();
}
function UIHide(id){
    $("#"+id).hide();
}
function UIVal(id,val){
    if(val) $("#"+id).val(val); else return $("#"+id).val();
}
