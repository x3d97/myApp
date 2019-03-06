import Router from './../../utils/router'
import getUser from './getUser'
import addUser from './addUser'


const router = new Router({
  prefix: '/users',
})

router.get('/:id', getUser)
router.post('/', addUser)


export default router
