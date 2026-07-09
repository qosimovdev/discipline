const router = require("express").Router()
const controller = require("../controller/auth.controller")
const validator = require("../middleware/validate.middleware")
const auth = require("../middleware/auth.middleware")
const { registerSchema, loginSchema } = require("../validator/authValidator")

router.post("/register", validator(registerSchema), controller.register)
router.post("/login", validator(loginSchema), controller.login)
router.get("/me", auth, controller.me)

module.exports = router