import { CMS } from 'API';
import { MakeOptional } from 'utils/types';

export interface ICMS extends MakeOptional<CMS, 'id'> {}
export type ICMSs = ICMS[];
