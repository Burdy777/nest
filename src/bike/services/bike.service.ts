import { Injectable } from '@nestjs/common';

@Injectable()
export class BikeService {
  getHello(): string {
    return 'Hello My Bike !';
  }
}
