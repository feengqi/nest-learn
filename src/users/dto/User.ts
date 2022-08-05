import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, Matches } from "class-validator";

export class User {

  @ApiProperty({
    description: '用户名',
  })
  username: string;

  @ApiProperty({
    description: '密码',
  })
  password: string;

  @ApiProperty({
    description: '每页数据条数',
    example: 10,
    required: false,
  })
  @IsOptional() // 可选参数
  // @Matches(regPositiveOrEmpty, { message: 'pageSize 不可小于 0' }) // 对参数校验
  readonly pageSize?: number;
}
