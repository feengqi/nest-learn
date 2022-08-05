import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { ApiHeader, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiImplicitFile } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';

@ApiTags('用户')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ApiImplicitFile 可以用于文件上传的文档测试
  @ApiImplicitFile({
    name: '头像',
    description: '上传头像',
    required: false,
  })
  @ApiResponse({ status: 401, description: '权限不足'})
  @Post()
  @ApiParam({
    name: 'username',
    description: '这是用户username',
  })
  @ApiQuery({
    name: 'password',
    description: '这是用户password',
  })
  // @ApiHeader({
  //   name: 'authoriation',
  //   required: true,
  //   description: '本次请求请带上token',
  // })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
