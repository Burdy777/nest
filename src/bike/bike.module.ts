import { Module } from '@nestjs/common';
import { BikeController } from './bike.controller';
import { BikeService } from './services/bike.service';
import { CarModule } from 'src/car/car.module';
import { CarService } from 'src/car/services/car.service';


@Module({
  imports: [],
  controllers: [BikeController],
  providers: [BikeService],
})
export class BikeModule {}
