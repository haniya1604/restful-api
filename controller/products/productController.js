const Joi = require("joi");
const productService = require("../../service/productService");

const productSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  title: Joi.string().required(),
  price: Joi.number().integer().required(),
});

module.exports = {
  getProducts: (req, res) => {
    const data = productService.getProducts();
    res.send(data);
  },

  updateProduct: (req, res) => {
    const data = productService.updateProduct(req.params.id, req.body);
    res.send(data);
  },

  deleteProduct: (req, res) => {
    const data = productService.deleteProduct(req.params.id);
    res.send(data);
  },

  addProduct: (req, res) => {
    try {
      const validate = productSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error.details[0].message);
      } else {
        const data = productService.addProduct(req.body);
        res.send(data);
      }
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  },
};
