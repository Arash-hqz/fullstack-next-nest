import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      { id: 1, name: 'پمپ صنعتی', price: 15000 },
      { id: 2, name: 'ژنراتور برق', price: 30000 },
    ];
  }
}
