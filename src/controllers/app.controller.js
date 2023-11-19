const accountServices = require("../services/account.service");
const categoryServices = require("../services/category.service");

async function getAccount(req, res, next) {
  try {
    const result = await accountServices.getAllAccount();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function getAccountById(req, res, next) {
  try {
    const ACCOUNT_ID = req.params.id;
    const result = await accountServices.getAccountById(ACCOUNT_ID);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ 
      status: 404,
      message: "không tìm thấy tài khoản" 
    });
  }
}
async function createAccount(req, res, next) {
  try {
    const data = req.body;
    const result = await accountServices.createAccount(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function updateAccount(req, res, next) {
  try {
    const ACCOUNT_ID = req.params.id;
    const data = req.body;
    const result = await accountServices.updateAccount(ACCOUNT_ID, data);
    res.status(200).json({
      status: 200,
      message: "Cập nhật tài khoản thành công",
    });
  } catch (error) {
    res.status(404).json({
      code: 404,
      message: "không tìm thấy tài khoản"
    });
  }
}
async function deleteAccount(req, res, next) {
  try {
    const account_id = req.params.id;
    const result = await accountServices.deleteAccount(account_id);
    res.status(200).json({
      status: 200,
      message: result,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: "không tìm thấy tài khoản"
    });
  }
}
async function showPasswordById(req, res, next) {
  try {
    const account_id = req.params.id;
    const result = await accountServices.getPasswordById(account_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: "không tìm thấy tài khoản"
    });
  }
}
async function getCategory(req, res, next) {
  try {
    const result = await categoryServices.getAllCategory();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function createCategory(req, res, next) {
  try {
    const data = req.body;
    const result = await categoryServices.createCategory(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function updateCategory(req, res, next) {
  try {
    const category_id = req.params.id;
    const data = req.body;
    const result = await categoryServices.updateCategory(category_id, data);
    res.status(200).json({
      status: 200,
      message: "Cập nhật danh mục thành công" 
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: "không tìm thấy danh mục" 
    });
  }
}

async function deleteCategory(req, res, next) {
  try {
    const category_id = req.params.id;
    const result = await categoryServices.deleteCategory(category_id);
    res.status(200).json({
      status: 200,
      message: result,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: "không tìm thấy danh mục"
    });
  }
}
module.exports = {
  getAccount,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
  showPasswordById,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
