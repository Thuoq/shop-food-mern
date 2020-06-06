const Foods = require("../models/shop.model");

exports.getShops = async  (req,res) => {
	const foods = await Foods.find()
	res.status(200).json(foods)
}
