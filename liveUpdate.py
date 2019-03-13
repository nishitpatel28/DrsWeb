from gpiozero import DistanceSensor
import time
import requests

url = "https://api.thingspeak.com/update"

ultrasonic = DistanceSensor(echo=17, trigger=4)
while True:
    dis = ultrasonic.distance
    dis = 15
    querystring = {"api_key":"K5W5JJB7RXTXOR8X","field1":dis}
    response = requests.request("GET", url,params=querystring)
    print(response.text)
    time.sleep(30)
    



