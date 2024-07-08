const express = require('express')
const router = express.Router()

const userSignUpController = require('../controller/userSignUp')
const userSignInController = require('../controller/userSignIn')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/userDetails')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/updateUser')
const UploadProductController = require('../controller/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/updateProduct')

router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get("/userLogout", userLogout)

//Admin Panel
router.get("/all-users", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

//product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProductController)
router.post("/update-product", authToken, updateProductController)

module.exports = router