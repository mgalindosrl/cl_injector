const cloud = require('./services/cloud');

/////EJEMPLO DE LEAD REEMPLAZAR
var lead = {
    ////EL OBJETO data ES OBLIGATORIO
    data: {
        "IdInterno": "2",
        "Nombre": "Jesus Galindo",
        "Telefono": "5520308929",
        "Compania": "SRL Soluciones"
    }
}

cloud.newCloudSession(lead)
    .then((response) => {
       
    })
    .catch((error) => {

    })