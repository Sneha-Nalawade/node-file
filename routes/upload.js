const express = require('express')
const router = express.Router();

const next = require('../middleware/next')
const upload = require('../controller/upload')

router.route('upload').post(next, upload)