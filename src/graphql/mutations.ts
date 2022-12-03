/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      first_name
      last_name
      username
      email
      phone
      stripe_customer_id
      orders {
        items {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        nextToken
      }
      customer_addresses {
        items {
          id
          line1
          line2
          city
          state
          country
          post
          lat
          long
          default_address
          customer_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      customer_payment {
        id
        stripe_payment_id
        customer_id {
          id
          first_name
          last_name
          username
          email
          phone
          stripe_customer_id
          createdAt
          updatedAt
          customerCustomer_paymentId
          customerReviewsId
          createdBy
        }
        createdAt
        updatedAt
        customerPaymentCustomer_idId
        createdBy
      }
      reviews {
        id
        desc
        rating
        customer {
          id
          first_name
          last_name
          username
          email
          phone
          stripe_customer_id
          createdAt
          updatedAt
          customerCustomer_paymentId
          customerReviewsId
          createdBy
        }
        active
        product_id
        createdAt
        updatedAt
        reviewCustomerId
        createdBy
      }
      createdAt
      updatedAt
      customerCustomer_paymentId
      customerReviewsId
      createdBy
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      first_name
      last_name
      username
      email
      phone
      stripe_customer_id
      orders {
        items {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        nextToken
      }
      customer_addresses {
        items {
          id
          line1
          line2
          city
          state
          country
          post
          lat
          long
          default_address
          customer_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      customer_payment {
        id
        stripe_payment_id
        customer_id {
          id
          first_name
          last_name
          username
          email
          phone
          stripe_customer_id
          createdAt
          updatedAt
          customerCustomer_paymentId
          customerReviewsId
          createdBy
        }
        createdAt
        updatedAt
        customerPaymentCustomer_idId
        createdBy
      }
      reviews {
        id
        desc
        rating
        customer {
          id
          first_name
          last_name
          username
          email
          phone
          stripe_customer_id
          createdAt
          updatedAt
          customerCustomer_paymentId
          customerReviewsId
          createdBy
        }
        active
        product_id
        createdAt
        updatedAt
        reviewCustomerId
        createdBy
      }
      createdAt
      updatedAt
      customerCustomer_paymentId
      customerReviewsId
      createdBy
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      first_name
      last_name
      username
      email
      phone
      stripe_customer_id
      orders {
        items {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        nextToken
      }
      customer_addresses {
        items {
          id
          line1
          line2
          city
          state
          country
          post
          lat
          long
          default_address
          customer_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      customer_payment {
        id
        stripe_payment_id
        customer_id {
          id
          first_name
          last_name
          username
          email
          phone
          stripe_customer_id
          createdAt
          updatedAt
          customerCustomer_paymentId
          customerReviewsId
          createdBy
        }
        createdAt
        updatedAt
        customerPaymentCustomer_idId
        createdBy
      }
      reviews {
        id
        desc
        rating
        customer {
          id
          first_name
          last_name
          username
          email
          phone
          stripe_customer_id
          createdAt
          updatedAt
          customerCustomer_paymentId
          customerReviewsId
          createdBy
        }
        active
        product_id
        createdAt
        updatedAt
        reviewCustomerId
        createdBy
      }
      createdAt
      updatedAt
      customerCustomer_paymentId
      customerReviewsId
      createdBy
    }
  }
`;
export const createCustomerAddress = /* GraphQL */ `
  mutation CreateCustomerAddress(
    $input: CreateCustomerAddressInput!
    $condition: ModelCustomerAddressConditionInput
  ) {
    createCustomerAddress(input: $input, condition: $condition) {
      id
      line1
      line2
      city
      state
      country
      post
      lat
      long
      default_address
      orders {
        items {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        nextToken
      }
      customer_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateCustomerAddress = /* GraphQL */ `
  mutation UpdateCustomerAddress(
    $input: UpdateCustomerAddressInput!
    $condition: ModelCustomerAddressConditionInput
  ) {
    updateCustomerAddress(input: $input, condition: $condition) {
      id
      line1
      line2
      city
      state
      country
      post
      lat
      long
      default_address
      orders {
        items {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        nextToken
      }
      customer_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteCustomerAddress = /* GraphQL */ `
  mutation DeleteCustomerAddress(
    $input: DeleteCustomerAddressInput!
    $condition: ModelCustomerAddressConditionInput
  ) {
    deleteCustomerAddress(input: $input, condition: $condition) {
      id
      line1
      line2
      city
      state
      country
      post
      lat
      long
      default_address
      orders {
        items {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        nextToken
      }
      customer_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createCustomerPayment = /* GraphQL */ `
  mutation CreateCustomerPayment(
    $input: CreateCustomerPaymentInput!
    $condition: ModelCustomerPaymentConditionInput
  ) {
    createCustomerPayment(input: $input, condition: $condition) {
      id
      stripe_payment_id
      customer_id {
        id
        first_name
        last_name
        username
        email
        phone
        stripe_customer_id
        orders {
          nextToken
        }
        customer_addresses {
          nextToken
        }
        customer_payment {
          id
          stripe_payment_id
          createdAt
          updatedAt
          customerPaymentCustomer_idId
          createdBy
        }
        reviews {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        createdAt
        updatedAt
        customerCustomer_paymentId
        customerReviewsId
        createdBy
      }
      createdAt
      updatedAt
      customerPaymentCustomer_idId
      createdBy
    }
  }
`;
export const updateCustomerPayment = /* GraphQL */ `
  mutation UpdateCustomerPayment(
    $input: UpdateCustomerPaymentInput!
    $condition: ModelCustomerPaymentConditionInput
  ) {
    updateCustomerPayment(input: $input, condition: $condition) {
      id
      stripe_payment_id
      customer_id {
        id
        first_name
        last_name
        username
        email
        phone
        stripe_customer_id
        orders {
          nextToken
        }
        customer_addresses {
          nextToken
        }
        customer_payment {
          id
          stripe_payment_id
          createdAt
          updatedAt
          customerPaymentCustomer_idId
          createdBy
        }
        reviews {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        createdAt
        updatedAt
        customerCustomer_paymentId
        customerReviewsId
        createdBy
      }
      createdAt
      updatedAt
      customerPaymentCustomer_idId
      createdBy
    }
  }
`;
export const deleteCustomerPayment = /* GraphQL */ `
  mutation DeleteCustomerPayment(
    $input: DeleteCustomerPaymentInput!
    $condition: ModelCustomerPaymentConditionInput
  ) {
    deleteCustomerPayment(input: $input, condition: $condition) {
      id
      stripe_payment_id
      customer_id {
        id
        first_name
        last_name
        username
        email
        phone
        stripe_customer_id
        orders {
          nextToken
        }
        customer_addresses {
          nextToken
        }
        customer_payment {
          id
          stripe_payment_id
          createdAt
          updatedAt
          customerPaymentCustomer_idId
          createdBy
        }
        reviews {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        createdAt
        updatedAt
        customerCustomer_paymentId
        customerReviewsId
        createdBy
      }
      createdAt
      updatedAt
      customerPaymentCustomer_idId
      createdBy
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      customer_id
      customer_address_id
      total
      order_tracking {
        id
        order {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        tracking_id
        customer_id
        tracking_status
        createdAt
        updatedAt
        orderTrackingOrderId
        createdBy
      }
      order_products {
        items {
          id
          price
          qty
          order_id
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      orderOrder_trackingId
      createdBy
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      customer_id
      customer_address_id
      total
      order_tracking {
        id
        order {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        tracking_id
        customer_id
        tracking_status
        createdAt
        updatedAt
        orderTrackingOrderId
        createdBy
      }
      order_products {
        items {
          id
          price
          qty
          order_id
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      orderOrder_trackingId
      createdBy
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      customer_id
      customer_address_id
      total
      order_tracking {
        id
        order {
          id
          customer_id
          customer_address_id
          total
          createdAt
          updatedAt
          orderOrder_trackingId
          createdBy
        }
        tracking_id
        customer_id
        tracking_status
        createdAt
        updatedAt
        orderTrackingOrderId
        createdBy
      }
      order_products {
        items {
          id
          price
          qty
          order_id
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      orderOrder_trackingId
      createdBy
    }
  }
`;
export const createOrderTracking = /* GraphQL */ `
  mutation CreateOrderTracking(
    $input: CreateOrderTrackingInput!
    $condition: ModelOrderTrackingConditionInput
  ) {
    createOrderTracking(input: $input, condition: $condition) {
      id
      order {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      tracking_id
      customer_id
      tracking_status
      createdAt
      updatedAt
      orderTrackingOrderId
      createdBy
    }
  }
`;
export const updateOrderTracking = /* GraphQL */ `
  mutation UpdateOrderTracking(
    $input: UpdateOrderTrackingInput!
    $condition: ModelOrderTrackingConditionInput
  ) {
    updateOrderTracking(input: $input, condition: $condition) {
      id
      order {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      tracking_id
      customer_id
      tracking_status
      createdAt
      updatedAt
      orderTrackingOrderId
      createdBy
    }
  }
`;
export const deleteOrderTracking = /* GraphQL */ `
  mutation DeleteOrderTracking(
    $input: DeleteOrderTrackingInput!
    $condition: ModelOrderTrackingConditionInput
  ) {
    deleteOrderTracking(input: $input, condition: $condition) {
      id
      order {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      tracking_id
      customer_id
      tracking_status
      createdAt
      updatedAt
      orderTrackingOrderId
      createdBy
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      id
      price
      qty
      order_id
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      id
      price
      qty
      order_id
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      id
      price
      qty
      order_id
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createOrderHistory = /* GraphQL */ `
  mutation CreateOrderHistory(
    $input: CreateOrderHistoryInput!
    $condition: ModelOrderHistoryConditionInput
  ) {
    createOrderHistory(input: $input, condition: $condition) {
      id
      status
      order_id {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      createdAt
      updatedAt
      orderHistoryOrder_idId
      createdBy
    }
  }
`;
export const updateOrderHistory = /* GraphQL */ `
  mutation UpdateOrderHistory(
    $input: UpdateOrderHistoryInput!
    $condition: ModelOrderHistoryConditionInput
  ) {
    updateOrderHistory(input: $input, condition: $condition) {
      id
      status
      order_id {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      createdAt
      updatedAt
      orderHistoryOrder_idId
      createdBy
    }
  }
`;
export const deleteOrderHistory = /* GraphQL */ `
  mutation DeleteOrderHistory(
    $input: DeleteOrderHistoryInput!
    $condition: ModelOrderHistoryConditionInput
  ) {
    deleteOrderHistory(input: $input, condition: $condition) {
      id
      status
      order_id {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      createdAt
      updatedAt
      orderHistoryOrder_idId
      createdBy
    }
  }
`;
export const createReturn = /* GraphQL */ `
  mutation CreateReturn(
    $input: CreateReturnInput!
    $condition: ModelReturnConditionInput
  ) {
    createReturn(input: $input, condition: $condition) {
      id
      reason
      date
      customer_id
      order_id {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      createdAt
      updatedAt
      returnOrder_idId
      createdBy
    }
  }
`;
export const updateReturn = /* GraphQL */ `
  mutation UpdateReturn(
    $input: UpdateReturnInput!
    $condition: ModelReturnConditionInput
  ) {
    updateReturn(input: $input, condition: $condition) {
      id
      reason
      date
      customer_id
      order_id {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      createdAt
      updatedAt
      returnOrder_idId
      createdBy
    }
  }
`;
export const deleteReturn = /* GraphQL */ `
  mutation DeleteReturn(
    $input: DeleteReturnInput!
    $condition: ModelReturnConditionInput
  ) {
    deleteReturn(input: $input, condition: $condition) {
      id
      reason
      date
      customer_id
      order_id {
        id
        customer_id
        customer_address_id
        total
        order_tracking {
          id
          tracking_id
          customer_id
          tracking_status
          createdAt
          updatedAt
          orderTrackingOrderId
          createdBy
        }
        order_products {
          nextToken
        }
        createdAt
        updatedAt
        orderOrder_trackingId
        createdBy
      }
      createdAt
      updatedAt
      returnOrder_idId
      createdBy
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      desc
      sku
      model
      price
      qty
      minimum_qty
      seo_keywords
      length
      width
      height
      length_class
      weight
      weight_class
      sort_order
      out_of_stock_status
      active
      stripe_product_id
      order_products {
        items {
          id
          price
          qty
          order_id
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_categories {
        items {
          id
          product_id
          category_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_images {
        items {
          id
          key
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_attributes {
        items {
          id
          product_id
          attribute_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      reviews {
        items {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      desc
      sku
      model
      price
      qty
      minimum_qty
      seo_keywords
      length
      width
      height
      length_class
      weight
      weight_class
      sort_order
      out_of_stock_status
      active
      stripe_product_id
      order_products {
        items {
          id
          price
          qty
          order_id
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_categories {
        items {
          id
          product_id
          category_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_images {
        items {
          id
          key
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_attributes {
        items {
          id
          product_id
          attribute_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      reviews {
        items {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      desc
      sku
      model
      price
      qty
      minimum_qty
      seo_keywords
      length
      width
      height
      length_class
      weight
      weight_class
      sort_order
      out_of_stock_status
      active
      stripe_product_id
      order_products {
        items {
          id
          price
          qty
          order_id
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_categories {
        items {
          id
          product_id
          category_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_images {
        items {
          id
          key
          product_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      product_attributes {
        items {
          id
          product_id
          attribute_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      reviews {
        items {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createAttribute = /* GraphQL */ `
  mutation CreateAttribute(
    $input: CreateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    createAttribute(input: $input, condition: $condition) {
      id
      name
      product_attributes {
        items {
          id
          product_id
          attribute_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateAttribute = /* GraphQL */ `
  mutation UpdateAttribute(
    $input: UpdateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    updateAttribute(input: $input, condition: $condition) {
      id
      name
      product_attributes {
        items {
          id
          product_id
          attribute_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteAttribute = /* GraphQL */ `
  mutation DeleteAttribute(
    $input: DeleteAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    deleteAttribute(input: $input, condition: $condition) {
      id
      name
      product_attributes {
        items {
          id
          product_id
          attribute_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createProductAttribute = /* GraphQL */ `
  mutation CreateProductAttribute(
    $input: CreateProductAttributeInput!
    $condition: ModelProductAttributeConditionInput
  ) {
    createProductAttribute(input: $input, condition: $condition) {
      id
      product_id
      attribute_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateProductAttribute = /* GraphQL */ `
  mutation UpdateProductAttribute(
    $input: UpdateProductAttributeInput!
    $condition: ModelProductAttributeConditionInput
  ) {
    updateProductAttribute(input: $input, condition: $condition) {
      id
      product_id
      attribute_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteProductAttribute = /* GraphQL */ `
  mutation DeleteProductAttribute(
    $input: DeleteProductAttributeInput!
    $condition: ModelProductAttributeConditionInput
  ) {
    deleteProductAttribute(input: $input, condition: $condition) {
      id
      product_id
      attribute_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createProductImage = /* GraphQL */ `
  mutation CreateProductImage(
    $input: CreateProductImageInput!
    $condition: ModelProductImageConditionInput
  ) {
    createProductImage(input: $input, condition: $condition) {
      id
      key
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateProductImage = /* GraphQL */ `
  mutation UpdateProductImage(
    $input: UpdateProductImageInput!
    $condition: ModelProductImageConditionInput
  ) {
    updateProductImage(input: $input, condition: $condition) {
      id
      key
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteProductImage = /* GraphQL */ `
  mutation DeleteProductImage(
    $input: DeleteProductImageInput!
    $condition: ModelProductImageConditionInput
  ) {
    deleteProductImage(input: $input, condition: $condition) {
      id
      key
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      seo_keywords
      sort_order
      active
      product_categories {
        items {
          id
          product_id
          category_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      parent_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      seo_keywords
      sort_order
      active
      product_categories {
        items {
          id
          product_id
          category_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      parent_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      seo_keywords
      sort_order
      active
      product_categories {
        items {
          id
          product_id
          category_id
          createdAt
          updatedAt
          createdBy
        }
        nextToken
      }
      parent_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      desc
      rating
      customer {
        id
        first_name
        last_name
        username
        email
        phone
        stripe_customer_id
        orders {
          nextToken
        }
        customer_addresses {
          nextToken
        }
        customer_payment {
          id
          stripe_payment_id
          createdAt
          updatedAt
          customerPaymentCustomer_idId
          createdBy
        }
        reviews {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        createdAt
        updatedAt
        customerCustomer_paymentId
        customerReviewsId
        createdBy
      }
      active
      product_id
      createdAt
      updatedAt
      reviewCustomerId
      createdBy
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      desc
      rating
      customer {
        id
        first_name
        last_name
        username
        email
        phone
        stripe_customer_id
        orders {
          nextToken
        }
        customer_addresses {
          nextToken
        }
        customer_payment {
          id
          stripe_payment_id
          createdAt
          updatedAt
          customerPaymentCustomer_idId
          createdBy
        }
        reviews {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        createdAt
        updatedAt
        customerCustomer_paymentId
        customerReviewsId
        createdBy
      }
      active
      product_id
      createdAt
      updatedAt
      reviewCustomerId
      createdBy
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      desc
      rating
      customer {
        id
        first_name
        last_name
        username
        email
        phone
        stripe_customer_id
        orders {
          nextToken
        }
        customer_addresses {
          nextToken
        }
        customer_payment {
          id
          stripe_payment_id
          createdAt
          updatedAt
          customerPaymentCustomer_idId
          createdBy
        }
        reviews {
          id
          desc
          rating
          active
          product_id
          createdAt
          updatedAt
          reviewCustomerId
          createdBy
        }
        createdAt
        updatedAt
        customerCustomer_paymentId
        customerReviewsId
        createdBy
      }
      active
      product_id
      createdAt
      updatedAt
      reviewCustomerId
      createdBy
    }
  }
`;
export const createProductCategory = /* GraphQL */ `
  mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    createProductCategory(input: $input, condition: $condition) {
      id
      product_id
      category_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateProductCategory = /* GraphQL */ `
  mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    updateProductCategory(input: $input, condition: $condition) {
      id
      product_id
      category_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteProductCategory = /* GraphQL */ `
  mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
    $condition: ModelProductCategoryConditionInput
  ) {
    deleteProductCategory(input: $input, condition: $condition) {
      id
      product_id
      category_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createCMS = /* GraphQL */ `
  mutation CreateCMS(
    $input: CreateCMSInput!
    $condition: ModelCMSConditionInput
  ) {
    createCMS(input: $input, condition: $condition) {
      id
      title
      seo_url
      content
      active
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const updateCMS = /* GraphQL */ `
  mutation UpdateCMS(
    $input: UpdateCMSInput!
    $condition: ModelCMSConditionInput
  ) {
    updateCMS(input: $input, condition: $condition) {
      id
      title
      seo_url
      content
      active
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const deleteCMS = /* GraphQL */ `
  mutation DeleteCMS(
    $input: DeleteCMSInput!
    $condition: ModelCMSConditionInput
  ) {
    deleteCMS(input: $input, condition: $condition) {
      id
      title
      seo_url
      content
      active
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const createCustomerQueries = /* GraphQL */ `
  mutation CreateCustomerQueries(
    $input: CreateCustomerQueriesInput!
    $condition: ModelCustomerQueriesConditionInput
  ) {
    createCustomerQueries(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomerQueries = /* GraphQL */ `
  mutation UpdateCustomerQueries(
    $input: UpdateCustomerQueriesInput!
    $condition: ModelCustomerQueriesConditionInput
  ) {
    updateCustomerQueries(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomerQueries = /* GraphQL */ `
  mutation DeleteCustomerQueries(
    $input: DeleteCustomerQueriesInput!
    $condition: ModelCustomerQueriesConditionInput
  ) {
    deleteCustomerQueries(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdBy
      createdAt
      updatedAt
    }
  }
`;
