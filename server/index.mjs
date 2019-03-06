import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import mongoose from 'mongoose'

import config from './config/config'
import users from './routes/users'

mongoose.Promise = global.Promise

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))

const app = new Koa();

const router = new Router()

app.use(bodyParser());
app.use(cors());

router.prefix('/api')

router.use(users.routes())
router.use(users.allowedMethods())

app.use(router.routes())
app.use(router.allowedMethods())
