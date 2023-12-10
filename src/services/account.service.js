const mongoose = require("mongoose");
const { accountModel } = require("../models/accounts.model");
const { categoryModel } = require("../models/categories.model");
const Schema = mongoose.Schema;
const accountFillable = {
  username: 1,
  category: 1,
  site: 1,
  note: 1,
};
async function getAllAccount() {
  const result = await accountModel
    .find({}, accountFillable)
    .populate("category").sort({updatedAt: -1});
  return result;
}
async function getAccountById(id) {
  const result = await accountModel.findById(id).populate("category");
  return result;
}
async function getAccountByCategoryId(id) {
  const result = await accountModel.find({category: id}, accountFillable).populate("category");
  return result;
}
async function createAccount(data) {
  const category = await categoryModel.findById(data.category.id);
  const account = new accountModel({
    username: data.username,
    password: data.password,
    site: data.site,
    note: data.note,
  });
  account.category = category._id;
  await account.save();
  return account;
}
async function updateAccount(id, data) {
  const account = await accountModel.findByIdAndUpdate(id, {
    username: data.username,
    password: data.password,
    site: data.site,
    note: data.note,
    category: new mongoose.Types.ObjectId(data.category.id),
  });
  return account;
}
async function deleteAccount(id) {
  const result = await accountModel.findByIdAndDelete(id);
  return "Xóa tài khoản thành công";
}
async function getPasswordById(id) {
  const password = await accountModel.findById(id, { password: 1 });
  return password;
}
module.exports = {
  getAllAccount,
  getAccountById,
  getAccountByCategoryId,
  createAccount,
  updateAccount,
  deleteAccount,
  getPasswordById,
};
