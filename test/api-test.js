var muscle = "biceps";

function test(muscle) {
    $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
        headers: { "X-Api-Key": "wP5vqzkikC7Gw3IK1nXbDg==bQIOoLezyk0YDbm4" },
        contentType: "application/json",
        success: function (result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error("Error: ", jqXHR.responseText);
        },
    });
}

var workOutSelector = "/exercises?";
function exercises(workOutSelector) {
    const requestUrl = `${URL}${workOutSelector}& api_key ${Key}`;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var f = false;
            // cards();
        });
}

const request = require('request');
var muscle = 'biceps';
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {
    'X-Api-Key': 'wP5vqzkikC7Gw3IK1nXbDg==bQIOoLezyk0YDbm4'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});