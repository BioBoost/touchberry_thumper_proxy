# Touchberry Thumper Proxy

Simple NodeJs app that proxies REST commands send to the local machine to the REST interface of the Thumper.

The machine running the proxy should both be connected to the LAN and Wireless Access Point of the Thumper.

## First time

To install all the required modules just execute an `npm install` command inside the project dir.

## Running the script

Running the script can be done using the following command:

```shell
node proxy.js --thumper=192.168.1.100
```

The thumper argument should be the ip address of the Raspberry Pi on the Thumper.
