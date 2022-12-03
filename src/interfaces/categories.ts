import { Category } from 'API';
import { MakeOptional } from 'utils/types';

export interface ICategory extends MakeOptional<Category, 'id'> {}
export type ICategories = ICategory[];
