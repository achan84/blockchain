const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1530685377322,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1530685515563,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1530685583202,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b14958a07f5211e8be9c8f13c7cbb7cf",
"transactionId": "03b7f2407f5311e8be9c8f13c7cbb7cf"
},
{
"amount": 10,
"sender": "JDSKLFJLSF9O33JLK3",
"recipient": "ADKJFASKLFJSOI3LKSFJL",
"transactionId": "1d9d6eb07f5311e8be9c8f13c7cbb7cf"
},
{
"amount": 20,
"sender": "JDSKLFJLSF9O33JLK3",
"recipient": "ADKJFASKLFJSOI3LKSFJL",
"transactionId": "228a1d107f5311e8be9c8f13c7cbb7cf"
},
{
"amount": 30,
"sender": "JDSKLFJLSF9O33JLK3",
"recipient": "ADKJFASKLFJSOI3LKSFJL",
"transactionId": "258a3db07f5311e8be9c8f13c7cbb7cf"
}
],
"nonce": 98897,
"hash": "00004ad6c748a084d603ca8ba84d29e4df742f8b8b306bc896cc6750666f54b4",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1530685627959,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b14958a07f5211e8be9c8f13c7cbb7cf",
"transactionId": "2c0099507f5311e8be9c8f13c7cbb7cf"
},
{
"amount": 40,
"sender": "JDSKLFJLSF9O33JLK3",
"recipient": "ADKJFASKLFJSOI3LKSFJL",
"transactionId": "3d0793c07f5311e8be9c8f13c7cbb7cf"
},
{
"amount": 50,
"sender": "JDSKLFJLSF9O33JLK3",
"recipient": "ADKJFASKLFJSOI3LKSFJL",
"transactionId": "3ffb7f607f5311e8be9c8f13c7cbb7cf"
},
{
"amount": 60,
"sender": "JDSKLFJLSF9O33JLK3",
"recipient": "ADKJFASKLFJSOI3LKSFJL",
"transactionId": "423124107f5311e8be9c8f13c7cbb7cf"
},
{
"amount": 70,
"sender": "JDSKLFJLSF9O33JLK3",
"recipient": "ADKJFASKLFJSOI3LKSFJL",
"transactionId": "445626f07f5311e8be9c8f13c7cbb7cf"
}
],
"nonce": 54890,
"hash": "0000ff2ca2a576062363b3b124b6c8ec9ff3b64f954746114626e35b839585ed",
"previousBlockHash": "00004ad6c748a084d603ca8ba84d29e4df742f8b8b306bc896cc6750666f54b4"
},
{
"index": 5,
"timestamp": 1530685644223,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b14958a07f5211e8be9c8f13c7cbb7cf",
"transactionId": "46adf9a07f5311e8be9c8f13c7cbb7cf"
}
],
"nonce": 11721,
"hash": "00006ea61673a9a7dd21ed3f8005e8d2c45e458c03e8a6ff8477f8f1c51a9cb9",
"previousBlockHash": "0000ff2ca2a576062363b3b124b6c8ec9ff3b64f954746114626e35b839585ed"
},
{
"index": 6,
"timestamp": 1530685646765,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b14958a07f5211e8be9c8f13c7cbb7cf",
"transactionId": "505faa207f5311e8be9c8f13c7cbb7cf"
}
],
"nonce": 49587,
"hash": "0000b4368b7a8aa297eff647a8129139bd16e6e504b9c3c372ccfcd9d737de52",
"previousBlockHash": "00006ea61673a9a7dd21ed3f8005e8d2c45e458c03e8a6ff8477f8f1c51a9cb9"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "b14958a07f5211e8be9c8f13c7cbb7cf",
"transactionId": "51e363f07f5311e8be9c8f13c7cbb7cf"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
}



console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));


