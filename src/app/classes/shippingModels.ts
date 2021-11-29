export class shippingModels {

  type: string;
  price: number;

  constructor(data: any) {
    this.type = data.type;
    this.price = data.price;

  }
}
