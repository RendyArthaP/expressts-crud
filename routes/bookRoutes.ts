import * as express from 'express';
const router = express.Router()

const {
  getAllBooks,
  getBooksByID,
  getBooksByUser,
  createBooks,
  updateBooks,
  deleteBooks
} = require('../controller/bookController')

router.get('/', getAllBooks)
router.get('/:id', getBooksByID)
router.get('/:user', getBooksByUser)
router.post('/', createBooks)
router.put('/:id', updateBooks)
router.delete('/:id', deleteBooks)

module.exports = router