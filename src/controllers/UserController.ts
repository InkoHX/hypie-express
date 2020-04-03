import { Get, JsonController, Param } from 'routing-controllers'
import { Service } from 'typedi'

import { Client } from '../Client'

@Service()
@JsonController()
export class UserController {
  public readonly client: Client

  public constructor (client: Client) {
    this.client = client
  }

  @Get('/user/:id')
  public async getUser (@Param('id') id: string): Promise<object> {
    const user = await this.client.users.fetch(id)

    return user.toJSON()
  }
}
