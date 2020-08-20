import { Controller, Get, Header } from '@nestjs/common';
import { BikeService } from './services/bike.service';

@Controller('bike')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Get()
  @Header('Cache-Control', 'none')
  getHello(): string {
    return this.bikeService.getHello();
  }

}
