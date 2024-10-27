import {
  Controller, Get, Query,
} from '@nestjs/common';

import { PeopleService } from './people.service'

@Controller('people')
export class PeopleController {

  constructor(private readonly peopleService: PeopleService) {}

  @Get('gender')
  async getGender(@Query('name') name: string) {
    return await this.peopleService.getGender(name);
  }

}
