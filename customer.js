$(function () {
    console.log('Get Data...')
    $.get("json/customers.json", function (data, status) {
        console.log(data);
        console.log(status);
        if (status == 'success') {
            var products = data.data;
            var tableHead = '<tr><th>customerID</th><th>companyName</th><th>contactName</th><th>contactTitle</th></tr>'
            $('#datalist').append(tableHead);
            for (var index in products) {
                var product = products[index];
                var tablerow = '<tr><th>' + product.customerID + '</th><th>' + '<a href="custdetail.html">'+product.companyName+'</a>' + '</th><th>' + product.contactName + '</th><th>' + product.contactTitle + '</th></tr>';
                $('#datalist').append(tablerow);
                console.log(product);
            }
        }
    });
});