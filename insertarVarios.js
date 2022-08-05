var axios = require('axios');
var data = JSON.stringify(
    {
    "collection": "Products",
    "database": "Fakestore",
    "dataSource": "Cluster0",
    "documents": [
        {
            "id":30,
            "title":"botas",
            "price":20000,
            "description":"pantaneras talla 40",
            "category":"accesorios",
            "image":"https://placeimg.com/640/480/any",
            "rating":{            
                "rate":4,
                "count":90
                    }
                    },
        {
        "id":30,
        "title":"cantuflas",
        "price":20000,
        "description":"Acolchonadas ",
        "category":"accesorios",
        "image":"https://placeimg.com/640/480/any",
        "rating":{            
            "rate":4,
            "count":90
                }
                }
            ] 
    }

    );
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-nlsxt/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '5NlSGhWYy5YybVUDEZbolQAKxKbFW5lHRT5vxmd2YnDisAI9NepjhfUcmhsC2d2P', // contraseña de la API del servidor de mongodb
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
