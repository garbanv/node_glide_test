module.exports = {
    getDataFromTableName: async (req, res) => {
    //   const response = await generateAccessToken(req.body);
  
    //   const token = await response;
  
    //   res.send({ token: token });

    const bancos= [
        {
          "nombre": "Banco Central",
          "direccion": "123 Calle Principal",
          "telefono": "+1-123-456-7890",
          "pais": "Estados Unidos"
        },
        {
          "nombre": "Banco Nacional",
          "direccion": "456 Avenida Central",
          "telefono": "+44-20-1234-5678",
          "pais": "Reino Unido"
        },
        {
          "nombre": "Banco de Paris",
          "direccion": "789 Rue de la Banque",
          "telefono": "+33-1-2345-6789",
          "pais": "Francia"
        },
        {
          "nombre": "Banco de Madrid",
          "direccion": "567 Calle Principal",
          "telefono": "+34-91-123-4567",
          "pais": "España"
        },
        {
          "nombre": "Banco de Roma",
          "direccion": "321 Via Bancaria",
          "telefono": "+39-06-7890-1234",
          "pais": "Italia"
        },
        {
          "nombre": "Banco de Berlín",
          "direccion": "456 Bankstraße",
          "telefono": "+49-30-5678-9012",
          "pais": "Alemania"
        },
        {
          "nombre": "Banco de Tokio",
          "direccion": "789 Ginza Dori",
          "telefono": "+81-3-1234-5678",
          "pais": "Japón"
        },
        {
          "nombre": "Banco de Pekín",
          "direccion": "123 Wangfujing Dajie",
          "telefono": "+86-10-5678-1234",
          "pais": "China"
        },
        {
          "nombre": "Banco de México",
          "direccion": "456 Calle Reforma",
          "telefono": "+52-55-1234-5678",
          "pais": "México"
        },
        {
          "nombre": "Banco de Buenos Aires",
          "direccion": "789 Avenida de Mayo",
          "telefono": "+54-11-5678-9012",
          "pais": "Argentina"
        }
      ]

    res.send(bancos)



    },

  };