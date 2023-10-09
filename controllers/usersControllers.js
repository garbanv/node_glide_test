const { generateAccessToken } = require("../middlewares/auth");
const { getDataFromTable } = require("../utils/glide/getDataFromTable");

module.exports = {
  createAccessToken: async (req, res) => {
 
console.log("req.body", req.body)
    const user = {};
    const { Name, Email } = req.body.params || req.body;
    user.name = Name;
    user.email = Email;
    const response = await generateAccessToken(user);
    const token = await response;
    res.send({ token: token });
  },
  getAllUsers: async (req, res) => {
    const data = getDataFromTable();
    res.send(data);
  },
  getMoney: async (req, res) => {
    console.log("ejecutando getMoney");

    const dataFromStripeSuccessfulSubscription = await req.body.data.object;
  //  console.log("dataFromStripeSuccessfulSubscription",dataFromStripeSuccessfulSubscription)
    const subscriber = await dataFromStripeSuccessfulSubscription;
    const clientEmail = await subscriber.receipt_email || subscriber.customer_details.email;


    // getAllClients

    const allClients = await getDataFromTable()

    const findClientByEmail = async (clientList,clientEmail)=>{
      const clientData = await clientList.find(client=>client.Owner===clientEmail)
      return clientData['$rowID']
      
    }
    const clientId= await findClientByEmail(allClients,clientEmail)

  

  },
};
