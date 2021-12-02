export class MenuItem {
  id: number;
  imagePath: string;
  name: string;
  description: string;
  price: number;
  categorie: string;
  restaurantId: number;
  private _quantity: number;

  constructor(data: any) {
    this.id = data.id;
    this.imagePath = data.imagePath;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.categorie = data.categorie;
    this.restaurantId = data.restaurantId;
    this._quantity = 0;
  }

  increaseQtd() {
    this._quantity++;
  }
  
  decreaseQtd() {
    if (this._quantity > 0) {
      this._quantity--;
    }
  }

  get quantity(){
    return this._quantity;
  }
}