// import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  index() {
    return [
      {
        id: 1,
        name: 'Hunter Kael',
      },
      {
        id: 2,
        name: 'Hyobin Lee',
      },
    ]
  }
}

