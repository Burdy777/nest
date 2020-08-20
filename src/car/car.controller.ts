import { Controller, Get, Post, Header, Param } from '@nestjs/common';
import { AppService } from 'src/services/app.service';
import { CarService } from './services/car.service';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  @Header('Cache-Control', 'none')
  getHello(): string {
    return this.carService.getHello();
  }

  @Get(':id')
  findOne(@Param() param):string {
    const id:number = param.id
    return `The id of the car is ${id}`;
  }


  @Post()
  create(): string {
    return 'new entity car';
  }

}
