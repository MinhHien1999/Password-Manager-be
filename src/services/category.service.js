const mongoose = require("mongoose");
const { categoryModel } = require("../models/categories.model");
const { accountModel } = require("../models/accounts.model");

async function getAllCategory() {
  const result = await categoryModel.find().sort({updatedAt: -1});
  return result;
}
async function createCategory(data) {
  const category = await categoryModel.create({
    title: data.title
  });
  return category;
}
async function updateCategory(id, data) {
  const category = await categoryModel.findByIdAndUpdate(id, {
    title: data.title
  });
  return category;
}
async function deleteCategory(id) {
  const account = await accountModel.deleteMany( {category: id})
  const category = await categoryModel.findByIdAndDelete(id);
  return "Xóa danh mục thành công";
}

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
