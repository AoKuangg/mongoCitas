export const validateDTO  = (schema) =>  (req, res, next) => {
    try {
        schema.parse(req.body);
      next();
    } catch (error) {
        console.log(error);
      res.status(400).send({
        status: 400,
        errorInfo: { message: "Error en la validacion de data", error: error.message },
      });
    }
  };