const jwt = require("jsonwebtoken");
const axios = require("axios");

// user logs in

const sendClientAccessTokenToClientProfile = (token) => {


  axios({
    method: "post",
    url: "https://api.glideapp.io/api/function/mutateTables",
    data: {
      appID: "F6Ktr2mjER6lcb5mds6V",
      mutations: [
        {
          kind: "set-columns-in-row",
          tableName: "native-table-xudUieWHU43F82R68jxi",
          columnValues: {
            UX0h8: token,
          },
          rowID: "dYY1ddbOTBaGwUrX5iSjxA",
        },
      ],
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GLIDE_API_SECRET_TOKEN}`,
    },
  })
    .then(function (response) {
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
    });
};

let generatedToken = "";
const generateAccessToken = async (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "30d" });
  generatedToken = token;
  sendClientAccessTokenToClientProfile(generatedToken);
  return token;
};

// validateUserToken

const validateJwt = async (req, res, next) => {
  // Get the JWT token from the Authorization header.
  const token = req.headers?.authorization?.split(" ")[1];


  if (req.headers["content-type"] !== "application/json") {
    res.status(400).send("Invalid content type. Please send JSON data.");
    return;
  }

  // If there is no token, return a 401 Unauthorized error response.
  if (!token) {
    return res.status(401).send({
      message: "No token provided.",
    });
  }

  // Verify the JWT token.
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // If the token is valid, pass the request on to the next handler.
    req.user = decodedToken;
    next();
  } catch (error) {
    // If the token is invalid, return a 401 Unauthorized error response.
    return res.status(401).send({
      message: "Invalid token.",
    });
  }
};

const hi = (req, res, next) => {
  console.log("hi");
  next();
};
module.exports = { validateJwt, generateAccessToken };



  