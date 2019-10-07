export interface ICart {
  total: number;
  subtotal: number;
  discount: number;
  delivery: number;
  quantity: number;
}

export const cart: ICart = {
  total: 0,
  subtotal: 0,
  discount: 0,
  delivery: 0,
  quantity: 0,
};
