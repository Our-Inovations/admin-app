import { Product } from 'API';
import { MakeOptional } from 'utils/types';

export interface IProduct extends MakeOptional<Product, 'id'> {}
export type IProducts = IProduct[];
