<div align="center">

# OPGG Api SDK

<img src="./images/banner.png">
</div>

📦 A quick and disruptive way to interct with op.gg website features and data to use as you want while coding with the power of types and documentation

## Usage

`yarn add op.gg-sdk` or `npm i op.gg-sdk`

you also will need to use a user encoded key that can be found into the resquest urls when you interact with the user pages, usually **found in the endpoint `https://lol-web-api.op.gg/api/v1.0/internal/bypass/` at the very end before the request parameters**

## Example code

```ts
import OPGG from 'op.gg-sdk';

const myUserEncodedKey = "jgbvpu1sta1kqo5UtoRDI343ics0aU3NZqIlG0ni4MSOYQI"

const opClient = new OPGG(myUserEncodedKey);

opClient.getMatchHistory()
    .then(console.log);

opClient.getChampionStats()
    .then(console.log);
```

## All Implemented API methods

```ts
opClient.getMatchHistory()
opClient.getChampionStats()
```

# Disclaimer

This repository is for education porpouses only, if you need to claim something just open an issue or contact me through any socials in my personal profile