import * as yup from 'yup';

const STRING_TYPE = yup.string();
const ARRAY_TYPE = yup.array();
const NUMBER_TYPE = yup.number();
const OBJECT_TYPE = yup.object();

export const LOGIN_FORM_SCHEMA = () =>
  yup.object({
    email: STRING_TYPE.required('REQUIRED_EMAIL').email('ENTER_VALID_EMAIL'),
    password: STRING_TYPE.required('REQUIRED_PASSWORD').min(
      8,
      'ENTER_VALID_PASSWORD',
    ),
  });

export const CATEGORY_FORM_SCHEMA = () =>
  yup.object({
    name: STRING_TYPE.required('Required Name'),
    parent_id: STRING_TYPE.required('Required Parent Category'),
  });

export const PRODUCT_FORM_SCHEMA = () =>
  yup.object({
    title: STRING_TYPE.required('REQUIRED_TITLE'),
    price: NUMBER_TYPE.min(1, 'REQUIRED_PRICE').required('REQUIRED_PRICE'),
    sku: STRING_TYPE.required('REQUIRED_SKU'),
    model: STRING_TYPE.required('REQUIRED_MODEL'),
    length: NUMBER_TYPE.min(1, 'REQUIRED_LENGTH').required('REQUIRED_LENGTH'),
    width: NUMBER_TYPE.min(1, 'REQUIRED_WIDTH').required('REQUIRED_WIDTH'),
    height: NUMBER_TYPE.min(1, 'REQUIRED_HEIGHT').required('REQUIRED_HEIGHT'),
    length_class: STRING_TYPE.required('REQUIRED_LENGTH_CLASS'),
    weight_class: STRING_TYPE.required('REQUIRED_WEIGHT_CLASS'),
    out_of_stock_status: STRING_TYPE.required('REQUIRED_OUT_OF_STOCK_STATUS'),
    qty: NUMBER_TYPE.min(1, 'REQUIRED_QTY').required('REQUIRED_QTY'),
    weight: NUMBER_TYPE.min(1, 'REQUIRED_WEIGHT').required('REQUIRED_WEIGHT'),
    document: ARRAY_TYPE.of(OBJECT_TYPE)
      .min(1, 'at least 1 image')
      .required('REQUIRED IMAGE'),
  });
