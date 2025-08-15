import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.get('/users', [UsersController, 'index'])
