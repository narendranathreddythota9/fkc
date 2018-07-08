


//User Register
curl -s -X POST http://18.191.174.121:4000/users -H "content-type: application/x-www-form-urlencoded" -d 'username=Jim&orgName=Org1'


//Create Cannel
curl -s -X POST \
  http://18.191.174.121:4000/channels \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"channelName":"private",
	"channelConfigPath":"../channel-artifacts/private1.tx"
}'

//Add Peers to Channel
curl -s -X POST \
  http://18.191.174.121:4000/channels/private/peers \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"]
}'

//Install Chain code on Private Channel
curl -s -X POST \
  http://18.191.174.121:4000/chaincodes \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"],
	"chaincodeName":"rate",
	"chaincodePath":"github.com/private/go",
	"chaincodeType": "golang",
	"chaincodeVersion":"v0"
}'

// Instantiate chain code
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel1/chaincodes \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"],
	"chaincodeName":"rate",
	"chaincodeVersion":"v0",
  "channelName":"channel1",
	"chaincodeType": "golang",
	"args":[""]
}'

// Invoke Chain Code createRate
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel1/chaincodes/rate \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"],
	"fcn":"createRate",
	"args":["001","CarBusiness","2.5Lakhs"]
}'

//Oracle
curl -X POST \
 http://18.191.174.121:5100/bcsgw/rest/v1/transaction/invocation \
-H "Content-type:application/json" \
-d ' {
  "channel": "innoprivate",
  "chaincode": "private",
  "chaincodeVer": "1.0",
  "method": "createRate",
  "args": ["001","CarBusiness","3L"],
  "proposalWaitTime": 50000,
  "transactionWaitTime": 60000
}'



//Query ChainCode
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel1 \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
  "chaincodeName":"rate",
	"peer": "peer0.org1.example.com",
	"fcn":"queryRate",
	"args":["001"]
}'


---------------------------------------  Private Channel Completed   ---------------




//Create Cannel
curl -s -X POST \
  http://18.191.174.121:4000/channels \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"channelName":"channel2",
	"channelConfigPath":"../artifacts/channel/channel2.tx"
}'

//Add Peers to Channel
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel2/peers \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"]
}'

//Install Chain code on Public Channel
curl -s -X POST \
  http://18.191.174.121:4000/chaincodes \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"],
	"chaincodeName":"vistexdev",
	"chaincodePath":"github.com/public/go",
	"chaincodeType": "golang",
	"chaincodeVersion":"v0"
}'

// Instantiate chain code
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel2/chaincodes \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"],
	"chaincodeName":"vistexdev",
	"chaincodeVersion":"v0",
  "channelName":"channel2",
	"chaincodeType": "golang",
	"args":["check"]
}'

// Invoke Chain Code createRate
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel2/chaincodes/vistexdev \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"],
	"fcn":"createRebate",
	"args":["rebate1","senderx2345345","receiverx245425","AGN0","2454255","FULL","Info","0"]
}'
//baaa23455c52368e316d4a830651dfab70513475a077ac47c35a218b39ecb481

// Invoke Chain Code updateRate
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel2/chaincodes/vistex \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["peer0.org1.example.com","peer1.org1.example.com"],
	"fcn":"ackRebate",
	"args":["e9255q8jj44ci1p","acknowledge","1","Mon Jul 02 2018 17:01:49 GMT+0530 (India Standard Time)"]
}'
//56c3b276e65b18e127f3091d42ee830d658d4ed1b56ccf6e073ded3f6e11bb01

//Query ChainCode
curl -s -X POST \
  http://18.191.174.121:4000/channels/channel2 \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
  "chaincodeName":"vistexdev",
	"peer": "peer0.org1.example.com",
	"fcn":"queryRebate",
	"args":["rebate1"]
}'

curl -s -X POST \
  http://18.191.174.121:4000/channels/channel2 \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json" \
  -d '{
  "chaincodeName":"general",
	"peer": "peer0.org1.example.com",
	"fcn":"getrebateHistory",
	"args":["rebate1"]
}'


curl -s -X GET http://18.191.174.121:4000/channels/channel2/transactions/d9607b4e5365ab3ab7da43a72834aec04422795862011dee0771ae469ad6fbdd?peer=peer0.org1.example.com \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzA4NDMwNDksInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzA4MDcwNDl9.VOQofFtD0h5Z7mFDhE7Qvq_5ucbmOoPlUwax_NKK2bM" \
  -H "content-type: application/json"


  curl -s -X GET \
  "http://18.191.174.121:4000/channels/private/blocks/1?peer=peer0.org1.example.com" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mjg4MjI5MjUsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1Mjg3ODY5MjV9.bzlxN1fLv8i_7hvkBtzCb8odo99RZmT3v5QKAdNZ4cc" \
  -H "content-type: application/json"

  curl -s -X GET \
  "http://18.191.174.121:4000/channels?peer=peer0.org1.example.com" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mjg4MjI5MjUsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1Mjg3ODY5MjV9.bzlxN1fLv8i_7hvkBtzCb8odo99RZmT3v5QKAdNZ4cc" \
  -H "content-type: application/json"

  curl -s -X GET \
  "http://18.191.174.121:4000/channels/private?peer=peer0.org1.example.com" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mjg4MjI5MjUsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1Mjg3ODY5MjV9.bzlxN1fLv8i_7hvkBtzCb8odo99RZmT3v5QKAdNZ4cc" \
  -H "content-type: application/json"
