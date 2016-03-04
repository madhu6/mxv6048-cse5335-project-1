var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

   
var obj=[
        {
            "place":"Golden Gate Bridge",
	    "abbrev":"US-CA",
            "tourists1":"8175000",
             "tourists2":"9008000",
	 "location":"San Francisco",
            "latitude":37.8005, 
            "longitude":-122.4649
        },
        {
           "place":"Disney World",
	   "abbrev":"US-FL",
            "tourists1":"123792000", 
	   "tourists2":"131694000", 
            "location":"Florida",
            "latitude": 28.3693, 
            "longitude":-81.5190
        },
        {
            "place": "Statue of Liberty",
	    "abbrev":"US-NY",
            "tourists1":"76950002",
            "tourists2":"98960005", 
            "location":"New York",
            "latitude": 40.6936,
            "longitude":-74.0190
        },
        {
            "place":"Yellowstone National Park" ,
	    "abbrev":"US-WY",
           "tourists1":"2099000",
 "tourists2":"3953000",
            "location":"Wyoming",
            "latitude": 44.8539,
            "longitude":-110.6743
        },
         {
            "place":"Great Smoky Mountains National Park",
	    "abbrev":"US-TN",
           "tourists1":"4526000",
 		"tourists2":"6517000",
             "location":"Tennessee",
             "latitude": 35.7289, 
             "longitude":-83.4874
        },
        {
            "place":"Times Square",
            "abbrev":"US-NY",
	    "tourists1":"80355624",
            "tourists2":"11953000",
	    "location":"New York",
            "latitude":40.7597, 
            "longitude":-73.9918
        },
        {
            "place":"Niagara Falls",
            "abbrev":"US-NY",
           "tourists1":"45692495",
 	    "tourists2":"59531340",
	    "location":"New York",
            "latitude":43.0954,
            "longitude":-79.0414
        },
        {
            "place":"Yosemite",
            "abbrev":"US-CA",
"tourists1":"24963041",
            "tourists2":"32491554",
	    "location":"California",
            "latitude": 37.6500,
            "longitude":-119.7200
        },
         {
            "place":"Mount Rushmore",
            "abbrev":"US-SD",
            "tourists1":"54920935",
"tourists2":"70495363",
            "location":"South Dakota",
             "latitude": 43.9696,
             "longitude":-103.3351
        },
        {
            "place":"Glacier National Park",
            "abbrev":"US-MT",
            "tourists1":"23844576",
"tourists2":"29495363",
            "location":"Montana",
            "latitude":48.4599, 
            "longitude":-113.3172
        }
    ];
app.get('/getItems', function(req, res) {

    res.contentType('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(obj);
}); 



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


