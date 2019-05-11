$(function () {
    console.log('Get Data...')
    $.get("json/customers.json", function (data, status) {
        console.log(data);
        console.log(status);
        if (status == 'success') {
            var products = data.data;
            var product = products[document.cookie];

            var id = product.customerID;
            $('#id').val(id);
            console.log(id);

            var name = product.companyName;
            $('#name').val(name);
            console.log(name);

            var contactName = product.contactName;
            $('#contactName').val(contactName);
            console.log(contactName);

            var contactTitle = product.contactTitle;
            $('#contactTitle').val(contactTitle);
            console.log(contactTitle);

            var address = product.address.street +" "+ product.address.city +" "+ product.address.region +" "+ product.address.postalCode +" "+ product.address.country +" "+ product.address.phone;
            $('#address').val(address);
            console.log(address);
        }
    });
});