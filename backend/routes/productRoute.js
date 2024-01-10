const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const { ProductCreateRoutes, ProductGetRoutes, ProductGetIdRoutes, ProductEditIdRoutes, ProductDeleteRoutes } = require('../controller/product')

const router = express.Router()

// router.use(requireAuth)

router.post('/create',ProductCreateRoutes)

router.get('/', ProductGetRoutes)

router.get('/:id',ProductGetIdRoutes )

router.put('/:id', ProductEditIdRoutes   )

router.delete('/:id', ProductDeleteRoutes)
module.exports = router;