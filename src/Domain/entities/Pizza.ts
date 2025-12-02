
export type PizzaSizeType = "S" | "M" | "L";
export interface Pizza {
  id?:string,
  category?:string,
  name: string;
  description: string;
  image: string;
  sizes?:Record<PizzaSizeType,number>
}