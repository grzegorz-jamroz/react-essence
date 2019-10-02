export interface ICart {
  total: number;
  subtotal: number;
  discount: number;
  delivery: number;
  quantity: number;
}

export const cart: ICart = {
  total: 347.79,
  subtotal: 332.79,
  discount: 0,
  delivery: 15,
  quantity: 6,
};
