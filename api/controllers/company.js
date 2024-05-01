const companyModel = require("../models/company");

const getAll = async (req, res, next) => {
  const data = await companyModel.find().select("_id General");
  res.json({ data: JSON.stringify(data) });
};

const getById = async (req, res, next) => {
  const Id = req.params.id;
  const data = await companyModel.findById(Id);
  res.json({ data: JSON.stringify(data) });
};

const updateById = async (req, res, next) => {
  const Id = req.params.id;
  const reqData = req.body;
  const data = await companyModel.findByIdAndUpdate(Id, reqData, { new: true });
  res.json({ data: JSON.stringify(data) });
};

const create = async (req, res, next) => {
  const reqData = req.body;
  const data = await companyModel.create(reqData);
  res.json({ data: JSON.stringify(data._id) });
};

module.exports = { getAll, getById, updateById, create };
