const { User } = require('../models')
import * as express from 'express';

module.exports = {
  getUser: async(req: express.Request, res: express.Response) => {
    const user = await User.find({}, "-_v")
  }
}