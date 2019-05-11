$(function() {
    $.get("json/products.json", function(data) {
        for(var i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#products").append(x);
    });
    $.get("json/customers.json", function(data) {
        for(var i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#customers").append(x);
    });
    $.get("json/suppliers.json", function(data) {
        for(var i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#suppliers").append(x);
    });
    $.get("json/orders.json", function(data) {
        for(var i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#orders").append(x);
    });
});