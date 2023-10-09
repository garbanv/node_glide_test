const axios  = require('axios')
require('dotenv').config()

const getDataFromTable = async () =>{


  const data =  axios('https://api.glideapp.io/api/function/queryTables',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GLIDE_API_SECRET_TOKEN}`
        },
        data:{
          "appID": "F6Ktr2mjER6lcb5mds6V",
          "queries": [
            {
              "tableName": "native-table-xudUieWHU43F82R68jxi"
            }
          ]
        }
    })
    .then(function (response) {

    return response.data[0].rows
   
    })
    // then(res=>{ res.rows})
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    return data
}


const findClientByEmail = (email)=>{
    
  const clientData =data.find(client=>client.email===email)
  console.log("result",result)
  
}


module.exports ={
    getDataFromTable,
    findClientByEmail
}