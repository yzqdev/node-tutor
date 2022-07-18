import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HomeDto } from './home.dto';

@ApiTags('home')
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/verify')
  public verify(): object {
    return this.homeService.verify();
  }
  @ApiOperation({ summary: '添加一个用户' })
  @Post('/add')
  async addOnePhoto(@Body() homeDto: HomeDto): Promise<any> {
    return await this.homeService.add(homeDto);
  }
  @Get('/codeList')
  async getCodeList() {
    return this.homeService.codeList();
  }
  @Get('/codeDetail')
  async getDetail(@Query('id') id: string) {
    return this.homeService.codeDetail(id);
  }
  @Post('/removeData/:id')
  async removeData(@Param('id') id: string) {
    return this.homeService.removeData(id);
  }
}
