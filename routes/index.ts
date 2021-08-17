import * as express from 'express';

const router = express.Router()

const userRoutes = require('./userRoutes')
const bookRoutes = require('./bookRoutes')

router.get('/', (req: express.Request, res: express.Response): void => {
  res.json({
    message: " Connecting success"
  })
})

router.use('/users', userRoutes)
router.use('/books', bookRoutes)

module.exports = router