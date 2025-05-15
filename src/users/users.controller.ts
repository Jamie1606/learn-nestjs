import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users
  @Get()
  findAll() {
    return [];
  }

  // GET /users/interns
  @Get('interns')
  findAllInterns() {
    return [];
  }

  // GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST /users
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  // PATCH /users/:id
  // DELETE /users/:id
}
