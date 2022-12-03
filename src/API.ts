/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  stripe_customer_id?: string | null;
  customerCustomer_paymentId?: string | null;
  customerReviewsId?: string | null;
};

export type ModelCustomerConditionInput = {
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  stripe_customer_id?: ModelStringInput | null;
  and?: Array<ModelCustomerConditionInput | null> | null;
  or?: Array<ModelCustomerConditionInput | null> | null;
  not?: ModelCustomerConditionInput | null;
  customerCustomer_paymentId?: ModelIDInput | null;
  customerReviewsId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Customer = {
  __typename: 'Customer';
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  stripe_customer_id?: string | null;
  orders?: ModelOrderConnection | null;
  customer_addresses?: ModelCustomerAddressConnection | null;
  customer_payment?: CustomerPayment | null;
  reviews?: Review | null;
  createdAt: string;
  updatedAt: string;
  customerCustomer_paymentId?: string | null;
  customerReviewsId?: string | null;
  createdBy?: string | null;
};

export type ModelOrderConnection = {
  __typename: 'ModelOrderConnection';
  items: Array<Order | null>;
  nextToken?: string | null;
};

export type Order = {
  __typename: 'Order';
  id: string;
  customer_id?: string | null;
  customer_address_id?: string | null;
  total?: number | null;
  order_tracking?: OrderTracking | null;
  order_products?: ModelOrderProductConnection | null;
  createdAt: string;
  updatedAt: string;
  orderOrder_trackingId?: string | null;
  createdBy?: string | null;
};

export type OrderTracking = {
  __typename: 'OrderTracking';
  id: string;
  order?: Order | null;
  tracking_id?: string | null;
  customer_id?: string | null;
  tracking_status?: OrderStatus | null;
  createdAt: string;
  updatedAt: string;
  orderTrackingOrderId?: string | null;
  createdBy?: string | null;
};

export enum OrderStatus {
  PLACED = 'PLACED',
  DISPUTED = 'DISPUTED',
  PENDING = 'PENDING',
  PROCESSED = 'PROCESSED',
  SHIPPED = 'SHIPPED',
  COMPLETE = 'COMPLETE',
  CANCELED = 'CANCELED',
  REFUNDED = 'REFUNDED',
}

export type ModelOrderProductConnection = {
  __typename: 'ModelOrderProductConnection';
  items: Array<OrderProduct | null>;
  nextToken?: string | null;
};

export type OrderProduct = {
  __typename: 'OrderProduct';
  id: string;
  price: number;
  qty: number;
  order_id: string;
  product_id: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type ModelCustomerAddressConnection = {
  __typename: 'ModelCustomerAddressConnection';
  items: Array<CustomerAddress | null>;
  nextToken?: string | null;
};

export type CustomerAddress = {
  __typename: 'CustomerAddress';
  id: string;
  line1: string;
  line2?: string | null;
  city: string;
  state: string;
  country: string;
  post: string;
  lat?: number | null;
  long?: number | null;
  default_address?: boolean | null;
  orders?: ModelOrderConnection | null;
  customer_id?: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type CustomerPayment = {
  __typename: 'CustomerPayment';
  id: string;
  stripe_payment_id?: string | null;
  customer_id?: Customer | null;
  createdAt: string;
  updatedAt: string;
  customerPaymentCustomer_idId?: string | null;
  createdBy?: string | null;
};

export type Review = {
  __typename: 'Review';
  id: string;
  desc?: string | null;
  rating: number;
  customer?: Customer | null;
  active?: boolean | null;
  product_id: string;
  createdAt: string;
  updatedAt: string;
  reviewCustomerId?: string | null;
  createdBy?: string | null;
};

export type UpdateCustomerInput = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  username?: string | null;
  email?: string | null;
  phone?: string | null;
  stripe_customer_id?: string | null;
  customerCustomer_paymentId?: string | null;
  customerReviewsId?: string | null;
};

export type DeleteCustomerInput = {
  id: string;
};

export type CreateCustomerAddressInput = {
  id?: string | null;
  line1: string;
  line2?: string | null;
  city: string;
  state: string;
  country: string;
  post: string;
  lat?: number | null;
  long?: number | null;
  default_address?: boolean | null;
  customer_id?: string | null;
};

export type ModelCustomerAddressConditionInput = {
  line1?: ModelStringInput | null;
  line2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  country?: ModelStringInput | null;
  post?: ModelStringInput | null;
  lat?: ModelFloatInput | null;
  long?: ModelFloatInput | null;
  default_address?: ModelBooleanInput | null;
  customer_id?: ModelIDInput | null;
  and?: Array<ModelCustomerAddressConditionInput | null> | null;
  or?: Array<ModelCustomerAddressConditionInput | null> | null;
  not?: ModelCustomerAddressConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateCustomerAddressInput = {
  id: string;
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  post?: string | null;
  lat?: number | null;
  long?: number | null;
  default_address?: boolean | null;
  customer_id?: string | null;
};

export type DeleteCustomerAddressInput = {
  id: string;
};

export type CreateCustomerPaymentInput = {
  id?: string | null;
  stripe_payment_id?: string | null;
  customerPaymentCustomer_idId?: string | null;
};

export type ModelCustomerPaymentConditionInput = {
  stripe_payment_id?: ModelStringInput | null;
  and?: Array<ModelCustomerPaymentConditionInput | null> | null;
  or?: Array<ModelCustomerPaymentConditionInput | null> | null;
  not?: ModelCustomerPaymentConditionInput | null;
  customerPaymentCustomer_idId?: ModelIDInput | null;
};

export type UpdateCustomerPaymentInput = {
  id: string;
  stripe_payment_id?: string | null;
  customerPaymentCustomer_idId?: string | null;
};

export type DeleteCustomerPaymentInput = {
  id: string;
};

export type CreateOrderInput = {
  id?: string | null;
  customer_id?: string | null;
  customer_address_id?: string | null;
  total?: number | null;
  orderOrder_trackingId?: string | null;
};

export type ModelOrderConditionInput = {
  customer_id?: ModelIDInput | null;
  customer_address_id?: ModelIDInput | null;
  total?: ModelIntInput | null;
  and?: Array<ModelOrderConditionInput | null> | null;
  or?: Array<ModelOrderConditionInput | null> | null;
  not?: ModelOrderConditionInput | null;
  orderOrder_trackingId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateOrderInput = {
  id: string;
  customer_id?: string | null;
  customer_address_id?: string | null;
  total?: number | null;
  orderOrder_trackingId?: string | null;
};

export type DeleteOrderInput = {
  id: string;
};

export type CreateOrderTrackingInput = {
  id?: string | null;
  tracking_id?: string | null;
  customer_id?: string | null;
  tracking_status?: OrderStatus | null;
  orderTrackingOrderId?: string | null;
};

export type ModelOrderTrackingConditionInput = {
  tracking_id?: ModelStringInput | null;
  customer_id?: ModelIDInput | null;
  tracking_status?: ModelOrderStatusInput | null;
  and?: Array<ModelOrderTrackingConditionInput | null> | null;
  or?: Array<ModelOrderTrackingConditionInput | null> | null;
  not?: ModelOrderTrackingConditionInput | null;
  orderTrackingOrderId?: ModelIDInput | null;
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null;
  ne?: OrderStatus | null;
};

export type UpdateOrderTrackingInput = {
  id: string;
  tracking_id?: string | null;
  customer_id?: string | null;
  tracking_status?: OrderStatus | null;
  orderTrackingOrderId?: string | null;
};

export type DeleteOrderTrackingInput = {
  id: string;
};

export type CreateOrderProductInput = {
  id?: string | null;
  price: number;
  qty: number;
  order_id: string;
  product_id: string;
};

export type ModelOrderProductConditionInput = {
  price?: ModelFloatInput | null;
  qty?: ModelIntInput | null;
  order_id?: ModelIDInput | null;
  product_id?: ModelIDInput | null;
  and?: Array<ModelOrderProductConditionInput | null> | null;
  or?: Array<ModelOrderProductConditionInput | null> | null;
  not?: ModelOrderProductConditionInput | null;
};

export type UpdateOrderProductInput = {
  id: string;
  price?: number | null;
  qty?: number | null;
  order_id?: string | null;
  product_id?: string | null;
};

export type DeleteOrderProductInput = {
  id: string;
};

export type CreateOrderHistoryInput = {
  id?: string | null;
  status: OrderStatus;
  orderHistoryOrder_idId?: string | null;
};

export type ModelOrderHistoryConditionInput = {
  status?: ModelOrderStatusInput | null;
  and?: Array<ModelOrderHistoryConditionInput | null> | null;
  or?: Array<ModelOrderHistoryConditionInput | null> | null;
  not?: ModelOrderHistoryConditionInput | null;
  orderHistoryOrder_idId?: ModelIDInput | null;
};

export type OrderHistory = {
  __typename: 'OrderHistory';
  id: string;
  status: OrderStatus;
  order_id?: Order | null;
  createdAt: string;
  updatedAt: string;
  orderHistoryOrder_idId?: string | null;
  createdBy?: string | null;
};

export type UpdateOrderHistoryInput = {
  id: string;
  status?: OrderStatus | null;
  orderHistoryOrder_idId?: string | null;
};

export type DeleteOrderHistoryInput = {
  id: string;
};

export type CreateReturnInput = {
  id?: string | null;
  reason: string;
  date: string;
  customer_id?: string | null;
  returnOrder_idId?: string | null;
};

export type ModelReturnConditionInput = {
  reason?: ModelStringInput | null;
  date?: ModelStringInput | null;
  customer_id?: ModelIDInput | null;
  and?: Array<ModelReturnConditionInput | null> | null;
  or?: Array<ModelReturnConditionInput | null> | null;
  not?: ModelReturnConditionInput | null;
  returnOrder_idId?: ModelIDInput | null;
};

export type Return = {
  __typename: 'Return';
  id: string;
  reason: string;
  date: string;
  customer_id?: string | null;
  order_id?: Order | null;
  createdAt: string;
  updatedAt: string;
  returnOrder_idId?: string | null;
  createdBy?: string | null;
};

export type UpdateReturnInput = {
  id: string;
  reason?: string | null;
  date?: string | null;
  customer_id?: string | null;
  returnOrder_idId?: string | null;
};

export type DeleteReturnInput = {
  id: string;
};

export type CreateProductInput = {
  id?: string | null;
  title: string;
  desc?: string | null;
  sku?: string | null;
  model: string;
  price: number;
  qty: number;
  minimum_qty?: number | null;
  seo_keywords?: string | null;
  length: number;
  width: number;
  height: number;
  length_class: LengthType;
  weight: number;
  weight_class: WeightType;
  sort_order?: number | null;
  out_of_stock_status: OutOfStockStatus;
  active?: boolean | null;
  stripe_product_id?: string | null;
};

export enum LengthType {
  CENTIMETER = 'CENTIMETER',
  MILLIMETER = 'MILLIMETER',
  INCH = 'INCH',
}

export enum WeightType {
  KILOGRAM = 'KILOGRAM',
  GRAM = 'GRAM',
  POUND = 'POUND',
  OUNCE = 'OUNCE',
}

export enum OutOfStockStatus {
  IN_STOCK = 'IN_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  PRE_ORDER = 'PRE_ORDER',
}

export type ModelProductConditionInput = {
  title?: ModelStringInput | null;
  desc?: ModelStringInput | null;
  sku?: ModelStringInput | null;
  model?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  qty?: ModelIntInput | null;
  minimum_qty?: ModelIntInput | null;
  seo_keywords?: ModelStringInput | null;
  length?: ModelFloatInput | null;
  width?: ModelFloatInput | null;
  height?: ModelFloatInput | null;
  length_class?: ModelLengthTypeInput | null;
  weight?: ModelFloatInput | null;
  weight_class?: ModelWeightTypeInput | null;
  sort_order?: ModelIntInput | null;
  out_of_stock_status?: ModelOutOfStockStatusInput | null;
  active?: ModelBooleanInput | null;
  stripe_product_id?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type ModelLengthTypeInput = {
  eq?: LengthType | null;
  ne?: LengthType | null;
};

export type ModelWeightTypeInput = {
  eq?: WeightType | null;
  ne?: WeightType | null;
};

export type ModelOutOfStockStatusInput = {
  eq?: OutOfStockStatus | null;
  ne?: OutOfStockStatus | null;
};

export type Product = {
  __typename: 'Product';
  id: string;
  title: string;
  desc?: string | null;
  sku?: string | null;
  model: string;
  price: number;
  qty: number;
  minimum_qty?: number | null;
  seo_keywords?: string | null;
  length: number;
  width: number;
  height: number;
  length_class: LengthType;
  weight: number;
  weight_class: WeightType;
  sort_order?: number | null;
  out_of_stock_status: OutOfStockStatus;
  active?: boolean | null;
  stripe_product_id?: string | null;
  order_products?: ModelOrderProductConnection | null;
  product_categories?: ModelProductCategoryConnection | null;
  product_images?: ModelProductImageConnection | null;
  product_attributes?: ModelProductAttributeConnection | null;
  reviews?: ModelReviewConnection | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type ModelProductCategoryConnection = {
  __typename: 'ModelProductCategoryConnection';
  items: Array<ProductCategory | null>;
  nextToken?: string | null;
};

export type ProductCategory = {
  __typename: 'ProductCategory';
  id: string;
  product_id: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type ModelProductImageConnection = {
  __typename: 'ModelProductImageConnection';
  items: Array<ProductImage | null>;
  nextToken?: string | null;
};

export type ProductImage = {
  __typename: 'ProductImage';
  id: string;
  key: string;
  product_id: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type ModelProductAttributeConnection = {
  __typename: 'ModelProductAttributeConnection';
  items: Array<ProductAttribute | null>;
  nextToken?: string | null;
};

export type ProductAttribute = {
  __typename: 'ProductAttribute';
  id: string;
  product_id: string;
  attribute_id?: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type ModelReviewConnection = {
  __typename: 'ModelReviewConnection';
  items: Array<Review | null>;
  nextToken?: string | null;
};

export type UpdateProductInput = {
  id: string;
  title?: string | null;
  desc?: string | null;
  sku?: string | null;
  model?: string | null;
  price?: number | null;
  qty?: number | null;
  minimum_qty?: number | null;
  seo_keywords?: string | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  length_class?: LengthType | null;
  weight?: number | null;
  weight_class?: WeightType | null;
  sort_order?: number | null;
  out_of_stock_status?: OutOfStockStatus | null;
  active?: boolean | null;
  stripe_product_id?: string | null;
};

export type DeleteProductInput = {
  id: string;
};

export type CreateAttributeInput = {
  id?: string | null;
  name: string;
};

export type ModelAttributeConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelAttributeConditionInput | null> | null;
  or?: Array<ModelAttributeConditionInput | null> | null;
  not?: ModelAttributeConditionInput | null;
};

export type Attribute = {
  __typename: 'Attribute';
  id: string;
  name: string;
  product_attributes?: ModelProductAttributeConnection | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type UpdateAttributeInput = {
  id: string;
  name?: string | null;
};

export type DeleteAttributeInput = {
  id: string;
};

export type CreateProductAttributeInput = {
  id?: string | null;
  product_id: string;
  attribute_id?: string | null;
};

export type ModelProductAttributeConditionInput = {
  product_id?: ModelIDInput | null;
  attribute_id?: ModelIDInput | null;
  and?: Array<ModelProductAttributeConditionInput | null> | null;
  or?: Array<ModelProductAttributeConditionInput | null> | null;
  not?: ModelProductAttributeConditionInput | null;
};

export type UpdateProductAttributeInput = {
  id: string;
  product_id?: string | null;
  attribute_id?: string | null;
};

export type DeleteProductAttributeInput = {
  id: string;
};

export type CreateProductImageInput = {
  id?: string | null;
  key: string;
  product_id: string;
};

export type ModelProductImageConditionInput = {
  key?: ModelStringInput | null;
  product_id?: ModelIDInput | null;
  and?: Array<ModelProductImageConditionInput | null> | null;
  or?: Array<ModelProductImageConditionInput | null> | null;
  not?: ModelProductImageConditionInput | null;
};

export type UpdateProductImageInput = {
  id: string;
  key?: string | null;
  product_id?: string | null;
};

export type DeleteProductImageInput = {
  id: string;
};

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
  seo_keywords?: string | null;
  sort_order?: number | null;
  active?: boolean | null;
  parent_id?: string | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  seo_keywords?: ModelStringInput | null;
  sort_order?: ModelIntInput | null;
  active?: ModelBooleanInput | null;
  parent_id?: ModelIDInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type Category = {
  __typename: 'Category';
  id: string;
  name: string;
  seo_keywords?: string | null;
  sort_order?: number | null;
  active?: boolean | null;
  product_categories?: ModelProductCategoryConnection | null;
  parent_id?: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  seo_keywords?: string | null;
  sort_order?: number | null;
  active?: boolean | null;
  parent_id?: string | null;
};

export type DeleteCategoryInput = {
  id: string;
};

export type CreateReviewInput = {
  id?: string | null;
  desc?: string | null;
  rating: number;
  active?: boolean | null;
  product_id: string;
  reviewCustomerId?: string | null;
};

export type ModelReviewConditionInput = {
  desc?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  active?: ModelBooleanInput | null;
  product_id?: ModelIDInput | null;
  and?: Array<ModelReviewConditionInput | null> | null;
  or?: Array<ModelReviewConditionInput | null> | null;
  not?: ModelReviewConditionInput | null;
  reviewCustomerId?: ModelIDInput | null;
};

export type UpdateReviewInput = {
  id: string;
  desc?: string | null;
  rating?: number | null;
  active?: boolean | null;
  product_id?: string | null;
  reviewCustomerId?: string | null;
};

export type DeleteReviewInput = {
  id: string;
};

export type CreateProductCategoryInput = {
  id?: string | null;
  product_id: string;
  category_id: string;
};

export type ModelProductCategoryConditionInput = {
  product_id?: ModelIDInput | null;
  category_id?: ModelIDInput | null;
  and?: Array<ModelProductCategoryConditionInput | null> | null;
  or?: Array<ModelProductCategoryConditionInput | null> | null;
  not?: ModelProductCategoryConditionInput | null;
};

export type UpdateProductCategoryInput = {
  id: string;
  product_id?: string | null;
  category_id?: string | null;
};

export type DeleteProductCategoryInput = {
  id: string;
};

export type CreateCMSInput = {
  id?: string | null;
  title: string;
  seo_url: string;
  content: string;
  active?: boolean | null;
};

export type ModelCMSConditionInput = {
  title?: ModelStringInput | null;
  seo_url?: ModelStringInput | null;
  content?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelCMSConditionInput | null> | null;
  or?: Array<ModelCMSConditionInput | null> | null;
  not?: ModelCMSConditionInput | null;
};

export type CMS = {
  __typename: 'CMS';
  id: string;
  title: string;
  seo_url: string;
  content: string;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
};

export type UpdateCMSInput = {
  id: string;
  title?: string | null;
  seo_url?: string | null;
  content?: string | null;
  active?: boolean | null;
};

export type DeleteCMSInput = {
  id: string;
};

export type CreateCustomerQueriesInput = {
  id?: string | null;
  name: string;
  email: string;
  message: string;
  createdBy?: string | null;
};

export type ModelCustomerQueriesConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  message?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  and?: Array<ModelCustomerQueriesConditionInput | null> | null;
  or?: Array<ModelCustomerQueriesConditionInput | null> | null;
  not?: ModelCustomerQueriesConditionInput | null;
};

export type CustomerQueries = {
  __typename: 'CustomerQueries';
  id: string;
  name: string;
  email: string;
  message: string;
  createdBy?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCustomerQueriesInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  message?: string | null;
  createdBy?: string | null;
};

export type DeleteCustomerQueriesInput = {
  id: string;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  stripe_customer_id?: ModelStringInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
  customerCustomer_paymentId?: ModelIDInput | null;
  customerReviewsId?: ModelIDInput | null;
};

export type ModelCustomerConnection = {
  __typename: 'ModelCustomerConnection';
  items: Array<Customer | null>;
  nextToken?: string | null;
};

export type ModelCustomerAddressFilterInput = {
  id?: ModelIDInput | null;
  line1?: ModelStringInput | null;
  line2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  country?: ModelStringInput | null;
  post?: ModelStringInput | null;
  lat?: ModelFloatInput | null;
  long?: ModelFloatInput | null;
  default_address?: ModelBooleanInput | null;
  customer_id?: ModelIDInput | null;
  and?: Array<ModelCustomerAddressFilterInput | null> | null;
  or?: Array<ModelCustomerAddressFilterInput | null> | null;
  not?: ModelCustomerAddressFilterInput | null;
};

export type ModelCustomerPaymentFilterInput = {
  id?: ModelIDInput | null;
  stripe_payment_id?: ModelStringInput | null;
  and?: Array<ModelCustomerPaymentFilterInput | null> | null;
  or?: Array<ModelCustomerPaymentFilterInput | null> | null;
  not?: ModelCustomerPaymentFilterInput | null;
  customerPaymentCustomer_idId?: ModelIDInput | null;
};

export type ModelCustomerPaymentConnection = {
  __typename: 'ModelCustomerPaymentConnection';
  items: Array<CustomerPayment | null>;
  nextToken?: string | null;
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null;
  customer_id?: ModelIDInput | null;
  customer_address_id?: ModelIDInput | null;
  total?: ModelIntInput | null;
  and?: Array<ModelOrderFilterInput | null> | null;
  or?: Array<ModelOrderFilterInput | null> | null;
  not?: ModelOrderFilterInput | null;
  orderOrder_trackingId?: ModelIDInput | null;
};

export type ModelOrderTrackingFilterInput = {
  id?: ModelIDInput | null;
  tracking_id?: ModelStringInput | null;
  customer_id?: ModelIDInput | null;
  tracking_status?: ModelOrderStatusInput | null;
  and?: Array<ModelOrderTrackingFilterInput | null> | null;
  or?: Array<ModelOrderTrackingFilterInput | null> | null;
  not?: ModelOrderTrackingFilterInput | null;
  orderTrackingOrderId?: ModelIDInput | null;
};

export type ModelOrderTrackingConnection = {
  __typename: 'ModelOrderTrackingConnection';
  items: Array<OrderTracking | null>;
  nextToken?: string | null;
};

export type ModelOrderProductFilterInput = {
  id?: ModelIDInput | null;
  price?: ModelFloatInput | null;
  qty?: ModelIntInput | null;
  order_id?: ModelIDInput | null;
  product_id?: ModelIDInput | null;
  and?: Array<ModelOrderProductFilterInput | null> | null;
  or?: Array<ModelOrderProductFilterInput | null> | null;
  not?: ModelOrderProductFilterInput | null;
};

export type ModelOrderHistoryFilterInput = {
  id?: ModelIDInput | null;
  status?: ModelOrderStatusInput | null;
  and?: Array<ModelOrderHistoryFilterInput | null> | null;
  or?: Array<ModelOrderHistoryFilterInput | null> | null;
  not?: ModelOrderHistoryFilterInput | null;
  orderHistoryOrder_idId?: ModelIDInput | null;
};

export type ModelOrderHistoryConnection = {
  __typename: 'ModelOrderHistoryConnection';
  items: Array<OrderHistory | null>;
  nextToken?: string | null;
};

export type ModelReturnFilterInput = {
  id?: ModelIDInput | null;
  reason?: ModelStringInput | null;
  date?: ModelStringInput | null;
  customer_id?: ModelIDInput | null;
  and?: Array<ModelReturnFilterInput | null> | null;
  or?: Array<ModelReturnFilterInput | null> | null;
  not?: ModelReturnFilterInput | null;
  returnOrder_idId?: ModelIDInput | null;
};

export type ModelReturnConnection = {
  __typename: 'ModelReturnConnection';
  items: Array<Return | null>;
  nextToken?: string | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  desc?: ModelStringInput | null;
  sku?: ModelStringInput | null;
  model?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  qty?: ModelIntInput | null;
  minimum_qty?: ModelIntInput | null;
  seo_keywords?: ModelStringInput | null;
  length?: ModelFloatInput | null;
  width?: ModelFloatInput | null;
  height?: ModelFloatInput | null;
  length_class?: ModelLengthTypeInput | null;
  weight?: ModelFloatInput | null;
  weight_class?: ModelWeightTypeInput | null;
  sort_order?: ModelIntInput | null;
  out_of_stock_status?: ModelOutOfStockStatusInput | null;
  active?: ModelBooleanInput | null;
  stripe_product_id?: ModelStringInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelProductConnection = {
  __typename: 'ModelProductConnection';
  items: Array<Product | null>;
  nextToken?: string | null;
};

export type ModelAttributeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelAttributeFilterInput | null> | null;
  or?: Array<ModelAttributeFilterInput | null> | null;
  not?: ModelAttributeFilterInput | null;
};

export type ModelAttributeConnection = {
  __typename: 'ModelAttributeConnection';
  items: Array<Attribute | null>;
  nextToken?: string | null;
};

export type ModelProductAttributeFilterInput = {
  id?: ModelIDInput | null;
  product_id?: ModelIDInput | null;
  attribute_id?: ModelIDInput | null;
  and?: Array<ModelProductAttributeFilterInput | null> | null;
  or?: Array<ModelProductAttributeFilterInput | null> | null;
  not?: ModelProductAttributeFilterInput | null;
};

export type ModelProductImageFilterInput = {
  id?: ModelIDInput | null;
  key?: ModelStringInput | null;
  product_id?: ModelIDInput | null;
  and?: Array<ModelProductImageFilterInput | null> | null;
  or?: Array<ModelProductImageFilterInput | null> | null;
  not?: ModelProductImageFilterInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  seo_keywords?: ModelStringInput | null;
  sort_order?: ModelIntInput | null;
  active?: ModelBooleanInput | null;
  parent_id?: ModelIDInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCategoryConnection = {
  __typename: 'ModelCategoryConnection';
  items: Array<Category | null>;
  nextToken?: string | null;
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null;
  desc?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  active?: ModelBooleanInput | null;
  product_id?: ModelIDInput | null;
  and?: Array<ModelReviewFilterInput | null> | null;
  or?: Array<ModelReviewFilterInput | null> | null;
  not?: ModelReviewFilterInput | null;
  reviewCustomerId?: ModelIDInput | null;
};

export type ModelProductCategoryFilterInput = {
  id?: ModelIDInput | null;
  product_id?: ModelIDInput | null;
  category_id?: ModelIDInput | null;
  and?: Array<ModelProductCategoryFilterInput | null> | null;
  or?: Array<ModelProductCategoryFilterInput | null> | null;
  not?: ModelProductCategoryFilterInput | null;
};

export type ModelCMSFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  seo_url?: ModelStringInput | null;
  content?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelCMSFilterInput | null> | null;
  or?: Array<ModelCMSFilterInput | null> | null;
  not?: ModelCMSFilterInput | null;
};

export type ModelCMSConnection = {
  __typename: 'ModelCMSConnection';
  items: Array<CMS | null>;
  nextToken?: string | null;
};

export type ModelCustomerQueriesFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  message?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  and?: Array<ModelCustomerQueriesFilterInput | null> | null;
  or?: Array<ModelCustomerQueriesFilterInput | null> | null;
  not?: ModelCustomerQueriesFilterInput | null;
};

export type ModelCustomerQueriesConnection = {
  __typename: 'ModelCustomerQueriesConnection';
  items: Array<CustomerQueries | null>;
  nextToken?: string | null;
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput;
  condition?: ModelCustomerConditionInput | null;
};

export type CreateCustomerMutation = {
  createCustomer?: {
    __typename: 'Customer';
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    stripe_customer_id?: string | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_addresses?: {
      __typename: 'ModelCustomerAddressConnection';
      items: Array<{
        __typename: 'CustomerAddress';
        id: string;
        line1: string;
        line2?: string | null;
        city: string;
        state: string;
        country: string;
        post: string;
        lat?: number | null;
        long?: number | null;
        default_address?: boolean | null;
        customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_payment?: {
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null;
    reviews?: {
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerCustomer_paymentId?: string | null;
    customerReviewsId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput;
  condition?: ModelCustomerConditionInput | null;
};

export type UpdateCustomerMutation = {
  updateCustomer?: {
    __typename: 'Customer';
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    stripe_customer_id?: string | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_addresses?: {
      __typename: 'ModelCustomerAddressConnection';
      items: Array<{
        __typename: 'CustomerAddress';
        id: string;
        line1: string;
        line2?: string | null;
        city: string;
        state: string;
        country: string;
        post: string;
        lat?: number | null;
        long?: number | null;
        default_address?: boolean | null;
        customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_payment?: {
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null;
    reviews?: {
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerCustomer_paymentId?: string | null;
    customerReviewsId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput;
  condition?: ModelCustomerConditionInput | null;
};

export type DeleteCustomerMutation = {
  deleteCustomer?: {
    __typename: 'Customer';
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    stripe_customer_id?: string | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_addresses?: {
      __typename: 'ModelCustomerAddressConnection';
      items: Array<{
        __typename: 'CustomerAddress';
        id: string;
        line1: string;
        line2?: string | null;
        city: string;
        state: string;
        country: string;
        post: string;
        lat?: number | null;
        long?: number | null;
        default_address?: boolean | null;
        customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_payment?: {
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null;
    reviews?: {
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerCustomer_paymentId?: string | null;
    customerReviewsId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type CreateCustomerAddressMutationVariables = {
  input: CreateCustomerAddressInput;
  condition?: ModelCustomerAddressConditionInput | null;
};

export type CreateCustomerAddressMutation = {
  createCustomerAddress?: {
    __typename: 'CustomerAddress';
    id: string;
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    post: string;
    lat?: number | null;
    long?: number | null;
    default_address?: boolean | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateCustomerAddressMutationVariables = {
  input: UpdateCustomerAddressInput;
  condition?: ModelCustomerAddressConditionInput | null;
};

export type UpdateCustomerAddressMutation = {
  updateCustomerAddress?: {
    __typename: 'CustomerAddress';
    id: string;
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    post: string;
    lat?: number | null;
    long?: number | null;
    default_address?: boolean | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteCustomerAddressMutationVariables = {
  input: DeleteCustomerAddressInput;
  condition?: ModelCustomerAddressConditionInput | null;
};

export type DeleteCustomerAddressMutation = {
  deleteCustomerAddress?: {
    __typename: 'CustomerAddress';
    id: string;
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    post: string;
    lat?: number | null;
    long?: number | null;
    default_address?: boolean | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateCustomerPaymentMutationVariables = {
  input: CreateCustomerPaymentInput;
  condition?: ModelCustomerPaymentConditionInput | null;
};

export type CreateCustomerPaymentMutation = {
  createCustomerPayment?: {
    __typename: 'CustomerPayment';
    id: string;
    stripe_payment_id?: string | null;
    customer_id?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerPaymentCustomer_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type UpdateCustomerPaymentMutationVariables = {
  input: UpdateCustomerPaymentInput;
  condition?: ModelCustomerPaymentConditionInput | null;
};

export type UpdateCustomerPaymentMutation = {
  updateCustomerPayment?: {
    __typename: 'CustomerPayment';
    id: string;
    stripe_payment_id?: string | null;
    customer_id?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerPaymentCustomer_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type DeleteCustomerPaymentMutationVariables = {
  input: DeleteCustomerPaymentInput;
  condition?: ModelCustomerPaymentConditionInput | null;
};

export type DeleteCustomerPaymentMutation = {
  deleteCustomerPayment?: {
    __typename: 'CustomerPayment';
    id: string;
    stripe_payment_id?: string | null;
    customer_id?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerPaymentCustomer_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput;
  condition?: ModelOrderConditionInput | null;
};

export type CreateOrderMutation = {
  createOrder?: {
    __typename: 'Order';
    id: string;
    customer_id?: string | null;
    customer_address_id?: string | null;
    total?: number | null;
    order_tracking?: {
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderOrder_trackingId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput;
  condition?: ModelOrderConditionInput | null;
};

export type UpdateOrderMutation = {
  updateOrder?: {
    __typename: 'Order';
    id: string;
    customer_id?: string | null;
    customer_address_id?: string | null;
    total?: number | null;
    order_tracking?: {
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderOrder_trackingId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput;
  condition?: ModelOrderConditionInput | null;
};

export type DeleteOrderMutation = {
  deleteOrder?: {
    __typename: 'Order';
    id: string;
    customer_id?: string | null;
    customer_address_id?: string | null;
    total?: number | null;
    order_tracking?: {
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderOrder_trackingId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type CreateOrderTrackingMutationVariables = {
  input: CreateOrderTrackingInput;
  condition?: ModelOrderTrackingConditionInput | null;
};

export type CreateOrderTrackingMutation = {
  createOrderTracking?: {
    __typename: 'OrderTracking';
    id: string;
    order?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    tracking_id?: string | null;
    customer_id?: string | null;
    tracking_status?: OrderStatus | null;
    createdAt: string;
    updatedAt: string;
    orderTrackingOrderId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type UpdateOrderTrackingMutationVariables = {
  input: UpdateOrderTrackingInput;
  condition?: ModelOrderTrackingConditionInput | null;
};

export type UpdateOrderTrackingMutation = {
  updateOrderTracking?: {
    __typename: 'OrderTracking';
    id: string;
    order?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    tracking_id?: string | null;
    customer_id?: string | null;
    tracking_status?: OrderStatus | null;
    createdAt: string;
    updatedAt: string;
    orderTrackingOrderId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type DeleteOrderTrackingMutationVariables = {
  input: DeleteOrderTrackingInput;
  condition?: ModelOrderTrackingConditionInput | null;
};

export type DeleteOrderTrackingMutation = {
  deleteOrderTracking?: {
    __typename: 'OrderTracking';
    id: string;
    order?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    tracking_id?: string | null;
    customer_id?: string | null;
    tracking_status?: OrderStatus | null;
    createdAt: string;
    updatedAt: string;
    orderTrackingOrderId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type CreateOrderProductMutationVariables = {
  input: CreateOrderProductInput;
  condition?: ModelOrderProductConditionInput | null;
};

export type CreateOrderProductMutation = {
  createOrderProduct?: {
    __typename: 'OrderProduct';
    id: string;
    price: number;
    qty: number;
    order_id: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateOrderProductMutationVariables = {
  input: UpdateOrderProductInput;
  condition?: ModelOrderProductConditionInput | null;
};

export type UpdateOrderProductMutation = {
  updateOrderProduct?: {
    __typename: 'OrderProduct';
    id: string;
    price: number;
    qty: number;
    order_id: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteOrderProductMutationVariables = {
  input: DeleteOrderProductInput;
  condition?: ModelOrderProductConditionInput | null;
};

export type DeleteOrderProductMutation = {
  deleteOrderProduct?: {
    __typename: 'OrderProduct';
    id: string;
    price: number;
    qty: number;
    order_id: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateOrderHistoryMutationVariables = {
  input: CreateOrderHistoryInput;
  condition?: ModelOrderHistoryConditionInput | null;
};

export type CreateOrderHistoryMutation = {
  createOrderHistory?: {
    __typename: 'OrderHistory';
    id: string;
    status: OrderStatus;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderHistoryOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type UpdateOrderHistoryMutationVariables = {
  input: UpdateOrderHistoryInput;
  condition?: ModelOrderHistoryConditionInput | null;
};

export type UpdateOrderHistoryMutation = {
  updateOrderHistory?: {
    __typename: 'OrderHistory';
    id: string;
    status: OrderStatus;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderHistoryOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type DeleteOrderHistoryMutationVariables = {
  input: DeleteOrderHistoryInput;
  condition?: ModelOrderHistoryConditionInput | null;
};

export type DeleteOrderHistoryMutation = {
  deleteOrderHistory?: {
    __typename: 'OrderHistory';
    id: string;
    status: OrderStatus;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderHistoryOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type CreateReturnMutationVariables = {
  input: CreateReturnInput;
  condition?: ModelReturnConditionInput | null;
};

export type CreateReturnMutation = {
  createReturn?: {
    __typename: 'Return';
    id: string;
    reason: string;
    date: string;
    customer_id?: string | null;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    returnOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type UpdateReturnMutationVariables = {
  input: UpdateReturnInput;
  condition?: ModelReturnConditionInput | null;
};

export type UpdateReturnMutation = {
  updateReturn?: {
    __typename: 'Return';
    id: string;
    reason: string;
    date: string;
    customer_id?: string | null;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    returnOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type DeleteReturnMutationVariables = {
  input: DeleteReturnInput;
  condition?: ModelReturnConditionInput | null;
};

export type DeleteReturnMutation = {
  deleteReturn?: {
    __typename: 'Return';
    id: string;
    reason: string;
    date: string;
    customer_id?: string | null;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    returnOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type CreateProductMutationVariables = {
  input: CreateProductInput;
  condition?: ModelProductConditionInput | null;
};

export type CreateProductMutation = {
  createProduct?: {
    __typename: 'Product';
    id: string;
    title: string;
    desc?: string | null;
    sku?: string | null;
    model: string;
    price: number;
    qty: number;
    minimum_qty?: number | null;
    seo_keywords?: string | null;
    length: number;
    width: number;
    height: number;
    length_class: LengthType;
    weight: number;
    weight_class: WeightType;
    sort_order?: number | null;
    out_of_stock_status: OutOfStockStatus;
    active?: boolean | null;
    stripe_product_id?: string | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_images?: {
      __typename: 'ModelProductImageConnection';
      items: Array<{
        __typename: 'ProductImage';
        id: string;
        key: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      items: Array<{
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput;
  condition?: ModelProductConditionInput | null;
};

export type UpdateProductMutation = {
  updateProduct?: {
    __typename: 'Product';
    id: string;
    title: string;
    desc?: string | null;
    sku?: string | null;
    model: string;
    price: number;
    qty: number;
    minimum_qty?: number | null;
    seo_keywords?: string | null;
    length: number;
    width: number;
    height: number;
    length_class: LengthType;
    weight: number;
    weight_class: WeightType;
    sort_order?: number | null;
    out_of_stock_status: OutOfStockStatus;
    active?: boolean | null;
    stripe_product_id?: string | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_images?: {
      __typename: 'ModelProductImageConnection';
      items: Array<{
        __typename: 'ProductImage';
        id: string;
        key: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      items: Array<{
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput;
  condition?: ModelProductConditionInput | null;
};

export type DeleteProductMutation = {
  deleteProduct?: {
    __typename: 'Product';
    id: string;
    title: string;
    desc?: string | null;
    sku?: string | null;
    model: string;
    price: number;
    qty: number;
    minimum_qty?: number | null;
    seo_keywords?: string | null;
    length: number;
    width: number;
    height: number;
    length_class: LengthType;
    weight: number;
    weight_class: WeightType;
    sort_order?: number | null;
    out_of_stock_status: OutOfStockStatus;
    active?: boolean | null;
    stripe_product_id?: string | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_images?: {
      __typename: 'ModelProductImageConnection';
      items: Array<{
        __typename: 'ProductImage';
        id: string;
        key: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      items: Array<{
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateAttributeMutationVariables = {
  input: CreateAttributeInput;
  condition?: ModelAttributeConditionInput | null;
};

export type CreateAttributeMutation = {
  createAttribute?: {
    __typename: 'Attribute';
    id: string;
    name: string;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateAttributeMutationVariables = {
  input: UpdateAttributeInput;
  condition?: ModelAttributeConditionInput | null;
};

export type UpdateAttributeMutation = {
  updateAttribute?: {
    __typename: 'Attribute';
    id: string;
    name: string;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteAttributeMutationVariables = {
  input: DeleteAttributeInput;
  condition?: ModelAttributeConditionInput | null;
};

export type DeleteAttributeMutation = {
  deleteAttribute?: {
    __typename: 'Attribute';
    id: string;
    name: string;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateProductAttributeMutationVariables = {
  input: CreateProductAttributeInput;
  condition?: ModelProductAttributeConditionInput | null;
};

export type CreateProductAttributeMutation = {
  createProductAttribute?: {
    __typename: 'ProductAttribute';
    id: string;
    product_id: string;
    attribute_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateProductAttributeMutationVariables = {
  input: UpdateProductAttributeInput;
  condition?: ModelProductAttributeConditionInput | null;
};

export type UpdateProductAttributeMutation = {
  updateProductAttribute?: {
    __typename: 'ProductAttribute';
    id: string;
    product_id: string;
    attribute_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteProductAttributeMutationVariables = {
  input: DeleteProductAttributeInput;
  condition?: ModelProductAttributeConditionInput | null;
};

export type DeleteProductAttributeMutation = {
  deleteProductAttribute?: {
    __typename: 'ProductAttribute';
    id: string;
    product_id: string;
    attribute_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateProductImageMutationVariables = {
  input: CreateProductImageInput;
  condition?: ModelProductImageConditionInput | null;
};

export type CreateProductImageMutation = {
  createProductImage?: {
    __typename: 'ProductImage';
    id: string;
    key: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateProductImageMutationVariables = {
  input: UpdateProductImageInput;
  condition?: ModelProductImageConditionInput | null;
};

export type UpdateProductImageMutation = {
  updateProductImage?: {
    __typename: 'ProductImage';
    id: string;
    key: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteProductImageMutationVariables = {
  input: DeleteProductImageInput;
  condition?: ModelProductImageConditionInput | null;
};

export type DeleteProductImageMutation = {
  deleteProductImage?: {
    __typename: 'ProductImage';
    id: string;
    key: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type CreateCategoryMutation = {
  createCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    seo_keywords?: string | null;
    sort_order?: number | null;
    active?: boolean | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    parent_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryMutation = {
  updateCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    seo_keywords?: string | null;
    sort_order?: number | null;
    active?: boolean | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    parent_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type DeleteCategoryMutation = {
  deleteCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    seo_keywords?: string | null;
    sort_order?: number | null;
    active?: boolean | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    parent_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput;
  condition?: ModelReviewConditionInput | null;
};

export type CreateReviewMutation = {
  createReview?: {
    __typename: 'Review';
    id: string;
    desc?: string | null;
    rating: number;
    customer?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    active?: boolean | null;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    reviewCustomerId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput;
  condition?: ModelReviewConditionInput | null;
};

export type UpdateReviewMutation = {
  updateReview?: {
    __typename: 'Review';
    id: string;
    desc?: string | null;
    rating: number;
    customer?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    active?: boolean | null;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    reviewCustomerId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput;
  condition?: ModelReviewConditionInput | null;
};

export type DeleteReviewMutation = {
  deleteReview?: {
    __typename: 'Review';
    id: string;
    desc?: string | null;
    rating: number;
    customer?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    active?: boolean | null;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    reviewCustomerId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type CreateProductCategoryMutationVariables = {
  input: CreateProductCategoryInput;
  condition?: ModelProductCategoryConditionInput | null;
};

export type CreateProductCategoryMutation = {
  createProductCategory?: {
    __typename: 'ProductCategory';
    id: string;
    product_id: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateProductCategoryMutationVariables = {
  input: UpdateProductCategoryInput;
  condition?: ModelProductCategoryConditionInput | null;
};

export type UpdateProductCategoryMutation = {
  updateProductCategory?: {
    __typename: 'ProductCategory';
    id: string;
    product_id: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteProductCategoryMutationVariables = {
  input: DeleteProductCategoryInput;
  condition?: ModelProductCategoryConditionInput | null;
};

export type DeleteProductCategoryMutation = {
  deleteProductCategory?: {
    __typename: 'ProductCategory';
    id: string;
    product_id: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateCMSMutationVariables = {
  input: CreateCMSInput;
  condition?: ModelCMSConditionInput | null;
};

export type CreateCMSMutation = {
  createCMS?: {
    __typename: 'CMS';
    id: string;
    title: string;
    seo_url: string;
    content: string;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type UpdateCMSMutationVariables = {
  input: UpdateCMSInput;
  condition?: ModelCMSConditionInput | null;
};

export type UpdateCMSMutation = {
  updateCMS?: {
    __typename: 'CMS';
    id: string;
    title: string;
    seo_url: string;
    content: string;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type DeleteCMSMutationVariables = {
  input: DeleteCMSInput;
  condition?: ModelCMSConditionInput | null;
};

export type DeleteCMSMutation = {
  deleteCMS?: {
    __typename: 'CMS';
    id: string;
    title: string;
    seo_url: string;
    content: string;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type CreateCustomerQueriesMutationVariables = {
  input: CreateCustomerQueriesInput;
  condition?: ModelCustomerQueriesConditionInput | null;
};

export type CreateCustomerQueriesMutation = {
  createCustomerQueries?: {
    __typename: 'CustomerQueries';
    id: string;
    name: string;
    email: string;
    message: string;
    createdBy?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCustomerQueriesMutationVariables = {
  input: UpdateCustomerQueriesInput;
  condition?: ModelCustomerQueriesConditionInput | null;
};

export type UpdateCustomerQueriesMutation = {
  updateCustomerQueries?: {
    __typename: 'CustomerQueries';
    id: string;
    name: string;
    email: string;
    message: string;
    createdBy?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCustomerQueriesMutationVariables = {
  input: DeleteCustomerQueriesInput;
  condition?: ModelCustomerQueriesConditionInput | null;
};

export type DeleteCustomerQueriesMutation = {
  deleteCustomerQueries?: {
    __typename: 'CustomerQueries';
    id: string;
    name: string;
    email: string;
    message: string;
    createdBy?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetCustomerQueryVariables = {
  id: string;
};

export type GetCustomerQuery = {
  getCustomer?: {
    __typename: 'Customer';
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    stripe_customer_id?: string | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_addresses?: {
      __typename: 'ModelCustomerAddressConnection';
      items: Array<{
        __typename: 'CustomerAddress';
        id: string;
        line1: string;
        line2?: string | null;
        city: string;
        state: string;
        country: string;
        post: string;
        lat?: number | null;
        long?: number | null;
        default_address?: boolean | null;
        customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_payment?: {
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null;
    reviews?: {
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerCustomer_paymentId?: string | null;
    customerReviewsId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCustomersQuery = {
  listCustomers?: {
    __typename: 'ModelCustomerConnection';
    items: Array<{
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCustomerAddressQueryVariables = {
  id: string;
};

export type GetCustomerAddressQuery = {
  getCustomerAddress?: {
    __typename: 'CustomerAddress';
    id: string;
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    post: string;
    lat?: number | null;
    long?: number | null;
    default_address?: boolean | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListCustomerAddressesQueryVariables = {
  filter?: ModelCustomerAddressFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCustomerAddressesQuery = {
  listCustomerAddresses?: {
    __typename: 'ModelCustomerAddressConnection';
    items: Array<{
      __typename: 'CustomerAddress';
      id: string;
      line1: string;
      line2?: string | null;
      city: string;
      state: string;
      country: string;
      post: string;
      lat?: number | null;
      long?: number | null;
      default_address?: boolean | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_id?: string | null;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCustomerPaymentQueryVariables = {
  id: string;
};

export type GetCustomerPaymentQuery = {
  getCustomerPayment?: {
    __typename: 'CustomerPayment';
    id: string;
    stripe_payment_id?: string | null;
    customer_id?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerPaymentCustomer_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type ListCustomerPaymentsQueryVariables = {
  filter?: ModelCustomerPaymentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCustomerPaymentsQuery = {
  listCustomerPayments?: {
    __typename: 'ModelCustomerPaymentConnection';
    items: Array<{
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOrderQueryVariables = {
  id: string;
};

export type GetOrderQuery = {
  getOrder?: {
    __typename: 'Order';
    id: string;
    customer_id?: string | null;
    customer_address_id?: string | null;
    total?: number | null;
    order_tracking?: {
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderOrder_trackingId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOrdersQuery = {
  listOrders?: {
    __typename: 'ModelOrderConnection';
    items: Array<{
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOrderTrackingQueryVariables = {
  id: string;
};

export type GetOrderTrackingQuery = {
  getOrderTracking?: {
    __typename: 'OrderTracking';
    id: string;
    order?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    tracking_id?: string | null;
    customer_id?: string | null;
    tracking_status?: OrderStatus | null;
    createdAt: string;
    updatedAt: string;
    orderTrackingOrderId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type ListOrderTrackingsQueryVariables = {
  filter?: ModelOrderTrackingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOrderTrackingsQuery = {
  listOrderTrackings?: {
    __typename: 'ModelOrderTrackingConnection';
    items: Array<{
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOrderProductQueryVariables = {
  id: string;
};

export type GetOrderProductQuery = {
  getOrderProduct?: {
    __typename: 'OrderProduct';
    id: string;
    price: number;
    qty: number;
    order_id: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOrderProductsQuery = {
  listOrderProducts?: {
    __typename: 'ModelOrderProductConnection';
    items: Array<{
      __typename: 'OrderProduct';
      id: string;
      price: number;
      qty: number;
      order_id: string;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOrderHistoryQueryVariables = {
  id: string;
};

export type GetOrderHistoryQuery = {
  getOrderHistory?: {
    __typename: 'OrderHistory';
    id: string;
    status: OrderStatus;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderHistoryOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type ListOrderHistoriesQueryVariables = {
  filter?: ModelOrderHistoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOrderHistoriesQuery = {
  listOrderHistories?: {
    __typename: 'ModelOrderHistoryConnection';
    items: Array<{
      __typename: 'OrderHistory';
      id: string;
      status: OrderStatus;
      order_id?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderHistoryOrder_idId?: string | null;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetReturnQueryVariables = {
  id: string;
};

export type GetReturnQuery = {
  getReturn?: {
    __typename: 'Return';
    id: string;
    reason: string;
    date: string;
    customer_id?: string | null;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    returnOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type ListReturnsQueryVariables = {
  filter?: ModelReturnFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListReturnsQuery = {
  listReturns?: {
    __typename: 'ModelReturnConnection';
    items: Array<{
      __typename: 'Return';
      id: string;
      reason: string;
      date: string;
      customer_id?: string | null;
      order_id?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      returnOrder_idId?: string | null;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductQueryVariables = {
  id: string;
};

export type GetProductQuery = {
  getProduct?: {
    __typename: 'Product';
    id: string;
    title: string;
    desc?: string | null;
    sku?: string | null;
    model: string;
    price: number;
    qty: number;
    minimum_qty?: number | null;
    seo_keywords?: string | null;
    length: number;
    width: number;
    height: number;
    length_class: LengthType;
    weight: number;
    weight_class: WeightType;
    sort_order?: number | null;
    out_of_stock_status: OutOfStockStatus;
    active?: boolean | null;
    stripe_product_id?: string | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_images?: {
      __typename: 'ModelProductImageConnection';
      items: Array<{
        __typename: 'ProductImage';
        id: string;
        key: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      items: Array<{
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductsQuery = {
  listProducts?: {
    __typename: 'ModelProductConnection';
    items: Array<{
      __typename: 'Product';
      id: string;
      title: string;
      desc?: string | null;
      sku?: string | null;
      model: string;
      price: number;
      qty: number;
      minimum_qty?: number | null;
      seo_keywords?: string | null;
      length: number;
      width: number;
      height: number;
      length_class: LengthType;
      weight: number;
      weight_class: WeightType;
      sort_order?: number | null;
      out_of_stock_status: OutOfStockStatus;
      active?: boolean | null;
      stripe_product_id?: string | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      product_categories?: {
        __typename: 'ModelProductCategoryConnection';
        nextToken?: string | null;
      } | null;
      product_images?: {
        __typename: 'ModelProductImageConnection';
        nextToken?: string | null;
      } | null;
      product_attributes?: {
        __typename: 'ModelProductAttributeConnection';
        nextToken?: string | null;
      } | null;
      reviews?: {
        __typename: 'ModelReviewConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetAttributeQueryVariables = {
  id: string;
};

export type GetAttributeQuery = {
  getAttribute?: {
    __typename: 'Attribute';
    id: string;
    name: string;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListAttributesQueryVariables = {
  filter?: ModelAttributeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAttributesQuery = {
  listAttributes?: {
    __typename: 'ModelAttributeConnection';
    items: Array<{
      __typename: 'Attribute';
      id: string;
      name: string;
      product_attributes?: {
        __typename: 'ModelProductAttributeConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductAttributeQueryVariables = {
  id: string;
};

export type GetProductAttributeQuery = {
  getProductAttribute?: {
    __typename: 'ProductAttribute';
    id: string;
    product_id: string;
    attribute_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListProductAttributesQueryVariables = {
  filter?: ModelProductAttributeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductAttributesQuery = {
  listProductAttributes?: {
    __typename: 'ModelProductAttributeConnection';
    items: Array<{
      __typename: 'ProductAttribute';
      id: string;
      product_id: string;
      attribute_id?: string | null;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductImageQueryVariables = {
  id: string;
};

export type GetProductImageQuery = {
  getProductImage?: {
    __typename: 'ProductImage';
    id: string;
    key: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListProductImagesQueryVariables = {
  filter?: ModelProductImageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductImagesQuery = {
  listProductImages?: {
    __typename: 'ModelProductImageConnection';
    items: Array<{
      __typename: 'ProductImage';
      id: string;
      key: string;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCategoryQueryVariables = {
  id: string;
};

export type GetCategoryQuery = {
  getCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    seo_keywords?: string | null;
    sort_order?: number | null;
    active?: boolean | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    parent_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCategoriesQuery = {
  listCategories?: {
    __typename: 'ModelCategoryConnection';
    items: Array<{
      __typename: 'Category';
      id: string;
      name: string;
      seo_keywords?: string | null;
      sort_order?: number | null;
      active?: boolean | null;
      product_categories?: {
        __typename: 'ModelProductCategoryConnection';
        nextToken?: string | null;
      } | null;
      parent_id?: string | null;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetReviewQueryVariables = {
  id: string;
};

export type GetReviewQuery = {
  getReview?: {
    __typename: 'Review';
    id: string;
    desc?: string | null;
    rating: number;
    customer?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    active?: boolean | null;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    reviewCustomerId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListReviewsQuery = {
  listReviews?: {
    __typename: 'ModelReviewConnection';
    items: Array<{
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProductCategoryQueryVariables = {
  id: string;
};

export type GetProductCategoryQuery = {
  getProductCategory?: {
    __typename: 'ProductCategory';
    id: string;
    product_id: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProductCategoriesQuery = {
  listProductCategories?: {
    __typename: 'ModelProductCategoryConnection';
    items: Array<{
      __typename: 'ProductCategory';
      id: string;
      product_id: string;
      category_id: string;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCMSQueryVariables = {
  id: string;
};

export type GetCMSQuery = {
  getCMS?: {
    __typename: 'CMS';
    id: string;
    title: string;
    seo_url: string;
    content: string;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type ListCMSQueryVariables = {
  filter?: ModelCMSFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCMSQuery = {
  listCMS?: {
    __typename: 'ModelCMSConnection';
    items: Array<{
      __typename: 'CMS';
      id: string;
      title: string;
      seo_url: string;
      content: string;
      active?: boolean | null;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCustomerQueriesQueryVariables = {
  id: string;
};

export type GetCustomerQueriesQuery = {
  getCustomerQueries?: {
    __typename: 'CustomerQueries';
    id: string;
    name: string;
    email: string;
    message: string;
    createdBy?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCustomerQueriesQueryVariables = {
  filter?: ModelCustomerQueriesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCustomerQueriesQuery = {
  listCustomerQueries?: {
    __typename: 'ModelCustomerQueriesConnection';
    items: Array<{
      __typename: 'CustomerQueries';
      id: string;
      name: string;
      email: string;
      message: string;
      createdBy?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCustomerSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?: {
    __typename: 'Customer';
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    stripe_customer_id?: string | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_addresses?: {
      __typename: 'ModelCustomerAddressConnection';
      items: Array<{
        __typename: 'CustomerAddress';
        id: string;
        line1: string;
        line2?: string | null;
        city: string;
        state: string;
        country: string;
        post: string;
        lat?: number | null;
        long?: number | null;
        default_address?: boolean | null;
        customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_payment?: {
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null;
    reviews?: {
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerCustomer_paymentId?: string | null;
    customerReviewsId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateCustomerSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?: {
    __typename: 'Customer';
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    stripe_customer_id?: string | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_addresses?: {
      __typename: 'ModelCustomerAddressConnection';
      items: Array<{
        __typename: 'CustomerAddress';
        id: string;
        line1: string;
        line2?: string | null;
        city: string;
        state: string;
        country: string;
        post: string;
        lat?: number | null;
        long?: number | null;
        default_address?: boolean | null;
        customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_payment?: {
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null;
    reviews?: {
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerCustomer_paymentId?: string | null;
    customerReviewsId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteCustomerSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?: {
    __typename: 'Customer';
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    stripe_customer_id?: string | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_addresses?: {
      __typename: 'ModelCustomerAddressConnection';
      items: Array<{
        __typename: 'CustomerAddress';
        id: string;
        line1: string;
        line2?: string | null;
        city: string;
        state: string;
        country: string;
        post: string;
        lat?: number | null;
        long?: number | null;
        default_address?: boolean | null;
        customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_payment?: {
      __typename: 'CustomerPayment';
      id: string;
      stripe_payment_id?: string | null;
      customer_id?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerPaymentCustomer_idId?: string | null;
      createdBy?: string | null;
    } | null;
    reviews?: {
      __typename: 'Review';
      id: string;
      desc?: string | null;
      rating: number;
      customer?: {
        __typename: 'Customer';
        id: string;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone: string;
        stripe_customer_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerCustomer_paymentId?: string | null;
        customerReviewsId?: string | null;
        createdBy?: string | null;
      } | null;
      active?: boolean | null;
      product_id: string;
      createdAt: string;
      updatedAt: string;
      reviewCustomerId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerCustomer_paymentId?: string | null;
    customerReviewsId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnCreateCustomerAddressSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateCustomerAddressSubscription = {
  onCreateCustomerAddress?: {
    __typename: 'CustomerAddress';
    id: string;
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    post: string;
    lat?: number | null;
    long?: number | null;
    default_address?: boolean | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateCustomerAddressSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateCustomerAddressSubscription = {
  onUpdateCustomerAddress?: {
    __typename: 'CustomerAddress';
    id: string;
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    post: string;
    lat?: number | null;
    long?: number | null;
    default_address?: boolean | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteCustomerAddressSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteCustomerAddressSubscription = {
  onDeleteCustomerAddress?: {
    __typename: 'CustomerAddress';
    id: string;
    line1: string;
    line2?: string | null;
    city: string;
    state: string;
    country: string;
    post: string;
    lat?: number | null;
    long?: number | null;
    default_address?: boolean | null;
    orders?: {
      __typename: 'ModelOrderConnection';
      items: Array<{
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    customer_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateCustomerPaymentSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateCustomerPaymentSubscription = {
  onCreateCustomerPayment?: {
    __typename: 'CustomerPayment';
    id: string;
    stripe_payment_id?: string | null;
    customer_id?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerPaymentCustomer_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateCustomerPaymentSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateCustomerPaymentSubscription = {
  onUpdateCustomerPayment?: {
    __typename: 'CustomerPayment';
    id: string;
    stripe_payment_id?: string | null;
    customer_id?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerPaymentCustomer_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteCustomerPaymentSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteCustomerPaymentSubscription = {
  onDeleteCustomerPayment?: {
    __typename: 'CustomerPayment';
    id: string;
    stripe_payment_id?: string | null;
    customer_id?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    customerPaymentCustomer_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnCreateOrderSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateOrderSubscription = {
  onCreateOrder?: {
    __typename: 'Order';
    id: string;
    customer_id?: string | null;
    customer_address_id?: string | null;
    total?: number | null;
    order_tracking?: {
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderOrder_trackingId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateOrderSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?: {
    __typename: 'Order';
    id: string;
    customer_id?: string | null;
    customer_address_id?: string | null;
    total?: number | null;
    order_tracking?: {
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderOrder_trackingId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteOrderSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?: {
    __typename: 'Order';
    id: string;
    customer_id?: string | null;
    customer_address_id?: string | null;
    total?: number | null;
    order_tracking?: {
      __typename: 'OrderTracking';
      id: string;
      order?: {
        __typename: 'Order';
        id: string;
        customer_id?: string | null;
        customer_address_id?: string | null;
        total?: number | null;
        createdAt: string;
        updatedAt: string;
        orderOrder_trackingId?: string | null;
        createdBy?: string | null;
      } | null;
      tracking_id?: string | null;
      customer_id?: string | null;
      tracking_status?: OrderStatus | null;
      createdAt: string;
      updatedAt: string;
      orderTrackingOrderId?: string | null;
      createdBy?: string | null;
    } | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderOrder_trackingId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnCreateOrderTrackingSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateOrderTrackingSubscription = {
  onCreateOrderTracking?: {
    __typename: 'OrderTracking';
    id: string;
    order?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    tracking_id?: string | null;
    customer_id?: string | null;
    tracking_status?: OrderStatus | null;
    createdAt: string;
    updatedAt: string;
    orderTrackingOrderId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateOrderTrackingSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateOrderTrackingSubscription = {
  onUpdateOrderTracking?: {
    __typename: 'OrderTracking';
    id: string;
    order?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    tracking_id?: string | null;
    customer_id?: string | null;
    tracking_status?: OrderStatus | null;
    createdAt: string;
    updatedAt: string;
    orderTrackingOrderId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteOrderTrackingSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteOrderTrackingSubscription = {
  onDeleteOrderTracking?: {
    __typename: 'OrderTracking';
    id: string;
    order?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    tracking_id?: string | null;
    customer_id?: string | null;
    tracking_status?: OrderStatus | null;
    createdAt: string;
    updatedAt: string;
    orderTrackingOrderId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnCreateOrderProductSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateOrderProductSubscription = {
  onCreateOrderProduct?: {
    __typename: 'OrderProduct';
    id: string;
    price: number;
    qty: number;
    order_id: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateOrderProductSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateOrderProductSubscription = {
  onUpdateOrderProduct?: {
    __typename: 'OrderProduct';
    id: string;
    price: number;
    qty: number;
    order_id: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteOrderProductSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteOrderProductSubscription = {
  onDeleteOrderProduct?: {
    __typename: 'OrderProduct';
    id: string;
    price: number;
    qty: number;
    order_id: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateOrderHistorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateOrderHistorySubscription = {
  onCreateOrderHistory?: {
    __typename: 'OrderHistory';
    id: string;
    status: OrderStatus;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderHistoryOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateOrderHistorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateOrderHistorySubscription = {
  onUpdateOrderHistory?: {
    __typename: 'OrderHistory';
    id: string;
    status: OrderStatus;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderHistoryOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteOrderHistorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteOrderHistorySubscription = {
  onDeleteOrderHistory?: {
    __typename: 'OrderHistory';
    id: string;
    status: OrderStatus;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    orderHistoryOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnCreateReturnSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateReturnSubscription = {
  onCreateReturn?: {
    __typename: 'Return';
    id: string;
    reason: string;
    date: string;
    customer_id?: string | null;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    returnOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateReturnSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateReturnSubscription = {
  onUpdateReturn?: {
    __typename: 'Return';
    id: string;
    reason: string;
    date: string;
    customer_id?: string | null;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    returnOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteReturnSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteReturnSubscription = {
  onDeleteReturn?: {
    __typename: 'Return';
    id: string;
    reason: string;
    date: string;
    customer_id?: string | null;
    order_id?: {
      __typename: 'Order';
      id: string;
      customer_id?: string | null;
      customer_address_id?: string | null;
      total?: number | null;
      order_tracking?: {
        __typename: 'OrderTracking';
        id: string;
        tracking_id?: string | null;
        customer_id?: string | null;
        tracking_status?: OrderStatus | null;
        createdAt: string;
        updatedAt: string;
        orderTrackingOrderId?: string | null;
        createdBy?: string | null;
      } | null;
      order_products?: {
        __typename: 'ModelOrderProductConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      orderOrder_trackingId?: string | null;
      createdBy?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    returnOrder_idId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnCreateProductSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateProductSubscription = {
  onCreateProduct?: {
    __typename: 'Product';
    id: string;
    title: string;
    desc?: string | null;
    sku?: string | null;
    model: string;
    price: number;
    qty: number;
    minimum_qty?: number | null;
    seo_keywords?: string | null;
    length: number;
    width: number;
    height: number;
    length_class: LengthType;
    weight: number;
    weight_class: WeightType;
    sort_order?: number | null;
    out_of_stock_status: OutOfStockStatus;
    active?: boolean | null;
    stripe_product_id?: string | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_images?: {
      __typename: 'ModelProductImageConnection';
      items: Array<{
        __typename: 'ProductImage';
        id: string;
        key: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      items: Array<{
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateProductSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?: {
    __typename: 'Product';
    id: string;
    title: string;
    desc?: string | null;
    sku?: string | null;
    model: string;
    price: number;
    qty: number;
    minimum_qty?: number | null;
    seo_keywords?: string | null;
    length: number;
    width: number;
    height: number;
    length_class: LengthType;
    weight: number;
    weight_class: WeightType;
    sort_order?: number | null;
    out_of_stock_status: OutOfStockStatus;
    active?: boolean | null;
    stripe_product_id?: string | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_images?: {
      __typename: 'ModelProductImageConnection';
      items: Array<{
        __typename: 'ProductImage';
        id: string;
        key: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      items: Array<{
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteProductSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?: {
    __typename: 'Product';
    id: string;
    title: string;
    desc?: string | null;
    sku?: string | null;
    model: string;
    price: number;
    qty: number;
    minimum_qty?: number | null;
    seo_keywords?: string | null;
    length: number;
    width: number;
    height: number;
    length_class: LengthType;
    weight: number;
    weight_class: WeightType;
    sort_order?: number | null;
    out_of_stock_status: OutOfStockStatus;
    active?: boolean | null;
    stripe_product_id?: string | null;
    order_products?: {
      __typename: 'ModelOrderProductConnection';
      items: Array<{
        __typename: 'OrderProduct';
        id: string;
        price: number;
        qty: number;
        order_id: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_images?: {
      __typename: 'ModelProductImageConnection';
      items: Array<{
        __typename: 'ProductImage';
        id: string;
        key: string;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    reviews?: {
      __typename: 'ModelReviewConnection';
      items: Array<{
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateAttributeSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateAttributeSubscription = {
  onCreateAttribute?: {
    __typename: 'Attribute';
    id: string;
    name: string;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateAttributeSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateAttributeSubscription = {
  onUpdateAttribute?: {
    __typename: 'Attribute';
    id: string;
    name: string;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteAttributeSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteAttributeSubscription = {
  onDeleteAttribute?: {
    __typename: 'Attribute';
    id: string;
    name: string;
    product_attributes?: {
      __typename: 'ModelProductAttributeConnection';
      items: Array<{
        __typename: 'ProductAttribute';
        id: string;
        product_id: string;
        attribute_id?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateProductAttributeSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateProductAttributeSubscription = {
  onCreateProductAttribute?: {
    __typename: 'ProductAttribute';
    id: string;
    product_id: string;
    attribute_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateProductAttributeSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateProductAttributeSubscription = {
  onUpdateProductAttribute?: {
    __typename: 'ProductAttribute';
    id: string;
    product_id: string;
    attribute_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteProductAttributeSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteProductAttributeSubscription = {
  onDeleteProductAttribute?: {
    __typename: 'ProductAttribute';
    id: string;
    product_id: string;
    attribute_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateProductImageSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateProductImageSubscription = {
  onCreateProductImage?: {
    __typename: 'ProductImage';
    id: string;
    key: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateProductImageSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateProductImageSubscription = {
  onUpdateProductImage?: {
    __typename: 'ProductImage';
    id: string;
    key: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteProductImageSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteProductImageSubscription = {
  onDeleteProductImage?: {
    __typename: 'ProductImage';
    id: string;
    key: string;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateCategorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateCategorySubscription = {
  onCreateCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    seo_keywords?: string | null;
    sort_order?: number | null;
    active?: boolean | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    parent_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateCategorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    seo_keywords?: string | null;
    sort_order?: number | null;
    active?: boolean | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    parent_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteCategorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    seo_keywords?: string | null;
    sort_order?: number | null;
    active?: boolean | null;
    product_categories?: {
      __typename: 'ModelProductCategoryConnection';
      items: Array<{
        __typename: 'ProductCategory';
        id: string;
        product_id: string;
        category_id: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    parent_id?: string | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateReviewSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateReviewSubscription = {
  onCreateReview?: {
    __typename: 'Review';
    id: string;
    desc?: string | null;
    rating: number;
    customer?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    active?: boolean | null;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    reviewCustomerId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateReviewSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?: {
    __typename: 'Review';
    id: string;
    desc?: string | null;
    rating: number;
    customer?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    active?: boolean | null;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    reviewCustomerId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteReviewSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?: {
    __typename: 'Review';
    id: string;
    desc?: string | null;
    rating: number;
    customer?: {
      __typename: 'Customer';
      id: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      phone: string;
      stripe_customer_id?: string | null;
      orders?: {
        __typename: 'ModelOrderConnection';
        nextToken?: string | null;
      } | null;
      customer_addresses?: {
        __typename: 'ModelCustomerAddressConnection';
        nextToken?: string | null;
      } | null;
      customer_payment?: {
        __typename: 'CustomerPayment';
        id: string;
        stripe_payment_id?: string | null;
        createdAt: string;
        updatedAt: string;
        customerPaymentCustomer_idId?: string | null;
        createdBy?: string | null;
      } | null;
      reviews?: {
        __typename: 'Review';
        id: string;
        desc?: string | null;
        rating: number;
        active?: boolean | null;
        product_id: string;
        createdAt: string;
        updatedAt: string;
        reviewCustomerId?: string | null;
        createdBy?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      customerCustomer_paymentId?: string | null;
      customerReviewsId?: string | null;
      createdBy?: string | null;
    } | null;
    active?: boolean | null;
    product_id: string;
    createdAt: string;
    updatedAt: string;
    reviewCustomerId?: string | null;
    createdBy?: string | null;
  } | null;
};

export type OnCreateProductCategorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateProductCategorySubscription = {
  onCreateProductCategory?: {
    __typename: 'ProductCategory';
    id: string;
    product_id: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateProductCategorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateProductCategorySubscription = {
  onUpdateProductCategory?: {
    __typename: 'ProductCategory';
    id: string;
    product_id: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteProductCategorySubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteProductCategorySubscription = {
  onDeleteProductCategory?: {
    __typename: 'ProductCategory';
    id: string;
    product_id: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateCMSSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateCMSSubscription = {
  onCreateCMS?: {
    __typename: 'CMS';
    id: string;
    title: string;
    seo_url: string;
    content: string;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnUpdateCMSSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateCMSSubscription = {
  onUpdateCMS?: {
    __typename: 'CMS';
    id: string;
    title: string;
    seo_url: string;
    content: string;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnDeleteCMSSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteCMSSubscription = {
  onDeleteCMS?: {
    __typename: 'CMS';
    id: string;
    title: string;
    seo_url: string;
    content: string;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
  } | null;
};

export type OnCreateCustomerQueriesSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnCreateCustomerQueriesSubscription = {
  onCreateCustomerQueries?: {
    __typename: 'CustomerQueries';
    id: string;
    name: string;
    email: string;
    message: string;
    createdBy?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCustomerQueriesSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnUpdateCustomerQueriesSubscription = {
  onUpdateCustomerQueries?: {
    __typename: 'CustomerQueries';
    id: string;
    name: string;
    email: string;
    message: string;
    createdBy?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCustomerQueriesSubscriptionVariables = {
  createdBy?: string | null;
};

export type OnDeleteCustomerQueriesSubscription = {
  onDeleteCustomerQueries?: {
    __typename: 'CustomerQueries';
    id: string;
    name: string;
    email: string;
    message: string;
    createdBy?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
