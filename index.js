var request = new XMLHttpRequest();
const apiKey = '3F0RH3CQ1QBN278S';

request.open('GET', 'https://api.thingspeak.com/channels/727900/fields/1.json?api_key=564GKK6O0IZE5ZJS&results=1', true);
request.onload = function () {
    // Begin accessing JSON data here
    var status = JSON.parse(body);
    var slot = status.feeds[0].field1;
    var slotValue = parseInt(slot);
    document.getElementById('stat').innerHTML=slotValue;

    }
  
  // Send request
  request.send();