$(function () {
    console.log('Get Data...')
    $.get("json/customers.json", function (data, status) {
        console.log(data);
        console.log(status);
        if (status == 'success') {
            var products = data.data;
            var tableHead = '<tr><th>ID</th><th>Name</th><th>Contact Name</th><th>Contact Title</th></th><th>Address</th></tr>';
            $('#datalist').append(tableHead);
            var product = products[document.cookie];
            var tablerow = '<tr><th>' + product.customerID + '</th><th>' + product.companyName + '</th><th>' + product.contactName + '</th><th>' + product.contactTitle + '</th><th>' + 'Street : ' + product.address.street + '<br>' + 'City : ' + product.address.city + '<br>' + 'Region : ' + product.address.region + '<br>' + 'PostalCode : ' + product.address.postalCode + '<br>' + 'Country : ' + product.address.country + '<br>' + 'Phone number : ' + product.address.phone + '</th> </tr>';
            $('#datalist').append(tablerow);
            console.log(product);
        }
    });
});