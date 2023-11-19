const { accountModel } = require("../models/accounts.model");
const { categoryModel } = require("../models/categories.model");

async function validateFormAccountCreate(req, res, next) {
  const data = req.body;
  if (
    typeof data.username === "undefined" || data.username.trim() == "" ||
    typeof data.password === "undefined" || data.password.trim() == "" ||
    typeof data.category !== "object" || 
    typeof data.category.id === "undefined" || data.category.id.trim() == "" || 
    typeof data.category.title === "undefined" || data.category.title.trim() == ""
  ) {
      res.status(400).json({
        code: 400,
        message: "dữ liệu không đúng"
    });
  }
    const category = await categoryModel.findOne({_id: data.category.id})
    if(!category){
      res.status(400).json({
        code: 400,
        message: "dữ liệu không đúng"
      });
    }else{
      next()
    }
}
function validateFormCategory(req, res, next){
    const data = req.body
    if(typeof data.title === "undefined" || data.title.trim() == ""){
        res.status(400).json({
            code: 400,
            message: "dữ liệu không đúng"
        })
    }else{
        next()
    }
}
async function validateFormAccountUpdate(req, res, next){
  const data = req.body;
  if (
    typeof data.username === "undefined" || data.username.trim() == "" ||
    typeof data.password === "undefined" || data.password.trim() == "" ||
    typeof data.category !== "object" || 
    typeof data.category.id === "undefined" || data.category.id.trim() == "" || 
    typeof data.category.title === "undefined" || data.category.title.trim() == ""
  ) {
      res.status(400).json({
        code: 400,
        message: "dữ liệu không đúng"
    });
  }
    const category = await categoryModel.findOne({_id: data.category.id})
    if(!category){
      res.status(400).json({
        code: 400,
        message: "category dữ liệu không đúng"
      });
    }else{
      next()
    }
}
module.exports = {
  validateFormAccountCreate,
  validateFormAccountUpdate,
  validateFormCategory
};
