import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BikeModule } from './bike/bike.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [BikeModule, CarModule],
  controllers: [AppController],
  providers: [],

})
export class AppModule {}
