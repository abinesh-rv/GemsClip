const router = require("express").Router();
const {
  getAll,
  getById,
  updateById,
  create,
} = require("../controllers/company");

router.get("/", getAll);
router.get("/:id", getById);
router.patch("/:id", updateById);
router.post("/", create);

module.exports = router;
