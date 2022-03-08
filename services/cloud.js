const {
    PURECLOUD_CLIENTID,
    PURECLOUD_CLIENTSECRET,
} = require('../services/config');

const platformClient = require('purecloud-platform-client-v2');
const logger = require('./logger');

let client = platformClient.ApiClient.instance;
let outboundApi = new platformClient.OutboundApi();

var newCloudSession = (lead) => {
    return new Promise((resolve, reject) => {
        console.log("INICIANDO SESION EN CLOUD");
        client.loginClientCredentialsGrant(PURECLOUD_CLIENTID, PURECLOUD_CLIENTSECRET)
            .then((response) => {
                console.log("SESION INICIADA");
                outboundApi = new platformClient.OutboundApi();

                /////PARAMETROS DEL REQUEST
                let contactListId = "7d1b69c7-f885-4148-ba31-43298e89a6f5";
                let body = [lead];
                let opts = {
                    'priority': true,
                    'clearSystemData': true,
                    'doNotQueue': true
                };

                ////SE REALIZA EL REQUEST
                outboundApi.postOutboundContactlistContacts(contactListId, body, opts)
                    .then((response) => {
                        console.log(response);
                        resolve();
                    })
                    .catch((error) => {
                        logger.Error(error);
                        reject();
                    })
                
            })
            .catch((error) => {
                logger.Error(error);
                reject();
            })
    })
}

module.exports = {
    newCloudSession: newCloudSession
}