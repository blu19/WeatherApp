//The API key
//var APIKey = "&appid=3a3241903a9a03672ce3319352be49ed";

//Var and function to show the date
var moment = moment().format("dddd, MMMM Do YYYY");
$("#date").text(moment);

//Var for array of cities of weather checked; want it to add each entered city to the array, but then cleared on refresh.
//var cities = [""];

$(function () {
    //Creating divs for each output item
    // $("<div/>").attr('id', 'date').appendTo('div');
    //need moment.js to add current date
    // $("<div/>").attr('id', 'cityName').appendTo('div');

    //want to make a button that saves city name 
    //$("button").on("click", function() {
        
    //var userInput = $(this).attr("cityName");
    // $("<input>").attr('id', 'citySearch').appendTo('div');
    //need to save user input
    // $("<div/>").attr('id', 'temp').appendTo('div');
    // $("<div/>").attr('id', 'wind').appendTo('div');
    // $("<div/>").attr('id', 'humidity').appendTo('div');
    // $("<div/>").attr('id', 'uvIndex').appendTo('div');
    // $("<div/>").attr('id', 'iconImage').appendTo('div');

    $(".btn").on("click", function() {
        //Var to grab text from input box
        var userInput = $("#citySearch").val();

        //log the var for user's input
        console.log(userInput);
    
        //City from input is added to array
        //cities.push(userInput);

        //URL to do the query of the database
        
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
            userInput + "&appid=3a3241903a9a03672ce3319352be49ed";

        //log the queryURL
        console.log(queryURL);

        //Run AJAX call to openweather API
        var userInput = $.ajax({
            url: queryURL,
            method: "GET"
            //Store retrieved data inside object "response"
        }) .then(function(response) {

            //log the queryURL
            console.log(queryURL);

            //log the object result
            console.log(response);
            
            //Display content on html
            $("#cityName").html("City: " + response.city.name + " Weather Details");
            console.log("City: " + response.city.name + " Weather Details");
            
            // Converts the temp to Kelvin with the below formula
            var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
            $("#temp").text("Temperature (F) " + tempF);

            //log the temp data in the console
            console.log("Temperature (F): " + tempF);
            
            $("#wind").text("Wind Speed: " + response.list[0].wind.speed);
            //log wind data in the console
            console.log("Wind Speed: " + response.list[0].wind.speed);
            
            $("#humidity").text("Humidity: " + response.list[0].main.humidity);
            //log humidity data in the console
            console.log("Humidity: " + response.list[0].main.humidity);

            //declare var for the weather icon
            var queryURLicon = "http://openweathermap.org/img/wn/" + (response.list[0].weather[0].icon) + "@2x.png";
            //log the queryURLicon
            console.log(queryURLicon);
            
            //display the weather icon
            $(".icon").attr("src", queryURLicon);            
        });

});
});
