$(function () {
    console.log('Get Data...')
    $.get("json/customers.json", function (data, status) {
        console.log(data);
        console.log(status);
        if (status == 'success') {
            var products = data;
            var tableHead = '<tr><th>ID</th><th>Name</th><th>Contact Name</th><th>Contact Title</th></th><th>Address</th></tr>';
            $('#datalist').append(tableHead);
            var product = products[document.cookie];
            var tablerow = '<tr><td>' + product.customerID + '</td><td>' + product.companyName + '</td><td>' + product.contactName + '</td><td>' + product.contactTitle + '</td><td>' + 'Street : ' + product.address.street + '<br>' + 'City : ' + product.address.city + '<br>' + 'Region : ' + product.address.region + '<br>' + 'PostalCode : ' + product.address.postalCode + '<br>' + 'Country : ' + product.address.country + '<br>' + 'Phone number : ' + product.address.phone + '</td> </tr>';
            $('#datalist').append(tablerow);
            console.log(product);
        }
    });
});