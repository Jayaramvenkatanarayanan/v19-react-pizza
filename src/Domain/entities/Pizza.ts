interface PizzaSize{
  S:number,
  M:number,
  L:number,

}
export interface Pizza {
  id?:string,
  category?:string,
  name: string;
  description: string;
  image: string;
  sizes?:PizzaSize
}