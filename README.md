# aws-sdk-js-v3 bug #999

See https://github.com/aws/aws-sdk-js-v3/issues/999

## Deployment

```bash
npm install
npm run deploy
```

## Connect to websocket

Go to https://www.websocket.org/echo.html

Pass websocket endpoint as location, click "connect",
then send message. In a response error message is received.

Log from CloudWatch:

```
{
    "errorType": "Error",
    "errorMessage": "connect ECONNREFUSED 127.0.0.1:443",
    "code": "ECONNREFUSED",
    "errno": "ECONNREFUSED",
    "syscall": "connect",
    "address": "127.0.0.1",
    "port": 443,
    "$metadata": {
        "attempts": 1,
        "totalRetryDelay": 0
    },
    "stack": [
        "Error: connect ECONNREFUSED 127.0.0.1:443",
        "    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)"
    ]
}
``` 
