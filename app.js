const mqtt = require('mqtt');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: ""
  });

const options = {
    port :,
    clientId : 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username : '',
    password : '',
    clean : true,
}

const database = admin.database();
const client = mqtt.connect(', options);

client.on('connect', function(){
    client.subscribe('standAlone/your_deviceId/KeepAlive')
})

client.on('message', function(topic, message){
     let deviectId = topic.split('/')[1];
     const valid_message = message.toString();
     if(valid_message == "2"){
            const time = new Date().getTime();
            console.log("device is offline from "+time);
                }
    else if(valid_message == "1"){

        console.log("device is online");
    }
})
