import requests, json as jn, numpy as np, time
r = requests.request('GET', 'https://api.chess.com/pub/player/amethystcash/games/archives')

print(r.status_code, "\n\n\n\n")
#print(r.text)

jsonDict = jn.loads(r.text)

#print(jsonDict["archives"])

links = np.array(jsonDict["archives"])

i = 120
for x in reversed(links):
    if (i < 12):
        i+=1
        print(x)
        r2 = requests.request('GET', x)
        print(r2.status_code)
        #print(r2.text)
        month = jn.loads(r2.text)
        print(month["games"])
        time.sleep(2)
        
#r3 = requests.request('GET', 'https://api.chess.com/pub/player/amethystcash/games/2023/02')
#r4 = requests.request('GET', 'https://api.chess.com/pub/player/amethystcash/games/2023/01')
#r5 = requests.request('GET', 'https://api.chess.com/pub/player/amethystcash/games/2022/12')
#time.sleep(10)
#r6 = requests.request('GET', 'https://api.chess.com/pub/player/amethystcash/games/2022/04')


data = requests.request('https://data.mongodb-api.com/app/data-abcde/endpoint/data/v1/action/insertOne', headers='apiKey: TpqAKQgvhZE4r6AOzpVydJ9a3tB1BLMrgDzLlBLbihKNDzSJWTAHMVbsMoIOpnM6',
header 'Content-Type: application/json'
  --data-raw '{
      "dataSource": "Cluster0",
      "database": "learn-data-api",
      "collection": "hello",
      "document": {
        "text": "Hello from the Data API!",
      }
  }')

print()

#print(r3.text)
#print(r4.text)
#print(r5.text)
#print(r6.text)

#print(jn.)