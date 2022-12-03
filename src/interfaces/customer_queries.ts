import { CustomerQueries } from 'API';
import { MakeOptional } from 'utils/types';

export interface ICustomerQueries extends MakeOptional<CustomerQueries, 'id'> {}
export type ICustomerQueriesList = ICustomerQueries[];
