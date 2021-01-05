let soap = require('strong-soap').soap;

let url = 'http://localhost:8080/ws/countries.wsdl';

let options = {};

soap.createClient(
    url, 
    options, 
    function(err, client) {

        let soapRequestParam = {
            getCountryRequest: {
                name: 'Poland'
            }
        };

        client.getCountry(
            soapRequestParam, 
            function(err, result, envelope, soapHeader) {

                console.log(result);
            }
        );
    }
);