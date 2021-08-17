import * as express from 'express';
const router = express.Router()

const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controller/userController')

router.get('/', getUser)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete(':id', deleteUser)

module.exports = router