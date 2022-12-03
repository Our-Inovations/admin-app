/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($createdBy: String) {
    onCreateCustomer(createdBy: $createdBy) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($createdBy: String) {
    onUpdateCustomer(createdBy: $createdBy) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($createdBy: String) {
    onDeleteCustomer(createdBy: $createdBy) {
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
export const onCreateCustomerAddress = /* GraphQL */ `
  subscription OnCreateCustomerAddress($createdBy: String) {
    onCreateCustomerAddress(createdBy: $createdBy) {
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
export const onUpdateCustomerAddress = /* GraphQL */ `
  subscription OnUpdateCustomerAddress($createdBy: String) {
    onUpdateCustomerAddress(createdBy: $createdBy) {
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
export const onDeleteCustomerAddress = /* GraphQL */ `
  subscription OnDeleteCustomerAddress($createdBy: String) {
    onDeleteCustomerAddress(createdBy: $createdBy) {
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
export const onCreateCustomerPayment = /* GraphQL */ `
  subscription OnCreateCustomerPayment($createdBy: String) {
    onCreateCustomerPayment(createdBy: $createdBy) {
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
export const onUpdateCustomerPayment = /* GraphQL */ `
  subscription OnUpdateCustomerPayment($createdBy: String) {
    onUpdateCustomerPayment(createdBy: $createdBy) {
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
export const onDeleteCustomerPayment = /* GraphQL */ `
  subscription OnDeleteCustomerPayment($createdBy: String) {
    onDeleteCustomerPayment(createdBy: $createdBy) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($createdBy: String) {
    onCreateOrder(createdBy: $createdBy) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($createdBy: String) {
    onUpdateOrder(createdBy: $createdBy) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($createdBy: String) {
    onDeleteOrder(createdBy: $createdBy) {
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
export const onCreateOrderTracking = /* GraphQL */ `
  subscription OnCreateOrderTracking($createdBy: String) {
    onCreateOrderTracking(createdBy: $createdBy) {
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
export const onUpdateOrderTracking = /* GraphQL */ `
  subscription OnUpdateOrderTracking($createdBy: String) {
    onUpdateOrderTracking(createdBy: $createdBy) {
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
export const onDeleteOrderTracking = /* GraphQL */ `
  subscription OnDeleteOrderTracking($createdBy: String) {
    onDeleteOrderTracking(createdBy: $createdBy) {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct($createdBy: String) {
    onCreateOrderProduct(createdBy: $createdBy) {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct($createdBy: String) {
    onUpdateOrderProduct(createdBy: $createdBy) {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct($createdBy: String) {
    onDeleteOrderProduct(createdBy: $createdBy) {
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
export const onCreateOrderHistory = /* GraphQL */ `
  subscription OnCreateOrderHistory($createdBy: String) {
    onCreateOrderHistory(createdBy: $createdBy) {
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
export const onUpdateOrderHistory = /* GraphQL */ `
  subscription OnUpdateOrderHistory($createdBy: String) {
    onUpdateOrderHistory(createdBy: $createdBy) {
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
export const onDeleteOrderHistory = /* GraphQL */ `
  subscription OnDeleteOrderHistory($createdBy: String) {
    onDeleteOrderHistory(createdBy: $createdBy) {
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
export const onCreateReturn = /* GraphQL */ `
  subscription OnCreateReturn($createdBy: String) {
    onCreateReturn(createdBy: $createdBy) {
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
export const onUpdateReturn = /* GraphQL */ `
  subscription OnUpdateReturn($createdBy: String) {
    onUpdateReturn(createdBy: $createdBy) {
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
export const onDeleteReturn = /* GraphQL */ `
  subscription OnDeleteReturn($createdBy: String) {
    onDeleteReturn(createdBy: $createdBy) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($createdBy: String) {
    onCreateProduct(createdBy: $createdBy) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($createdBy: String) {
    onUpdateProduct(createdBy: $createdBy) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($createdBy: String) {
    onDeleteProduct(createdBy: $createdBy) {
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
export const onCreateAttribute = /* GraphQL */ `
  subscription OnCreateAttribute($createdBy: String) {
    onCreateAttribute(createdBy: $createdBy) {
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
export const onUpdateAttribute = /* GraphQL */ `
  subscription OnUpdateAttribute($createdBy: String) {
    onUpdateAttribute(createdBy: $createdBy) {
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
export const onDeleteAttribute = /* GraphQL */ `
  subscription OnDeleteAttribute($createdBy: String) {
    onDeleteAttribute(createdBy: $createdBy) {
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
export const onCreateProductAttribute = /* GraphQL */ `
  subscription OnCreateProductAttribute($createdBy: String) {
    onCreateProductAttribute(createdBy: $createdBy) {
      id
      product_id
      attribute_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onUpdateProductAttribute = /* GraphQL */ `
  subscription OnUpdateProductAttribute($createdBy: String) {
    onUpdateProductAttribute(createdBy: $createdBy) {
      id
      product_id
      attribute_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onDeleteProductAttribute = /* GraphQL */ `
  subscription OnDeleteProductAttribute($createdBy: String) {
    onDeleteProductAttribute(createdBy: $createdBy) {
      id
      product_id
      attribute_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onCreateProductImage = /* GraphQL */ `
  subscription OnCreateProductImage($createdBy: String) {
    onCreateProductImage(createdBy: $createdBy) {
      id
      key
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onUpdateProductImage = /* GraphQL */ `
  subscription OnUpdateProductImage($createdBy: String) {
    onUpdateProductImage(createdBy: $createdBy) {
      id
      key
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onDeleteProductImage = /* GraphQL */ `
  subscription OnDeleteProductImage($createdBy: String) {
    onDeleteProductImage(createdBy: $createdBy) {
      id
      key
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($createdBy: String) {
    onCreateCategory(createdBy: $createdBy) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($createdBy: String) {
    onUpdateCategory(createdBy: $createdBy) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($createdBy: String) {
    onDeleteCategory(createdBy: $createdBy) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($createdBy: String) {
    onCreateReview(createdBy: $createdBy) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($createdBy: String) {
    onUpdateReview(createdBy: $createdBy) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($createdBy: String) {
    onDeleteReview(createdBy: $createdBy) {
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
export const onCreateProductCategory = /* GraphQL */ `
  subscription OnCreateProductCategory($createdBy: String) {
    onCreateProductCategory(createdBy: $createdBy) {
      id
      product_id
      category_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onUpdateProductCategory = /* GraphQL */ `
  subscription OnUpdateProductCategory($createdBy: String) {
    onUpdateProductCategory(createdBy: $createdBy) {
      id
      product_id
      category_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onDeleteProductCategory = /* GraphQL */ `
  subscription OnDeleteProductCategory($createdBy: String) {
    onDeleteProductCategory(createdBy: $createdBy) {
      id
      product_id
      category_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const onCreateCMS = /* GraphQL */ `
  subscription OnCreateCMS($createdBy: String) {
    onCreateCMS(createdBy: $createdBy) {
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
export const onUpdateCMS = /* GraphQL */ `
  subscription OnUpdateCMS($createdBy: String) {
    onUpdateCMS(createdBy: $createdBy) {
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
export const onDeleteCMS = /* GraphQL */ `
  subscription OnDeleteCMS($createdBy: String) {
    onDeleteCMS(createdBy: $createdBy) {
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
export const onCreateCustomerQueries = /* GraphQL */ `
  subscription OnCreateCustomerQueries($createdBy: String) {
    onCreateCustomerQueries(createdBy: $createdBy) {
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
export const onUpdateCustomerQueries = /* GraphQL */ `
  subscription OnUpdateCustomerQueries($createdBy: String) {
    onUpdateCustomerQueries(createdBy: $createdBy) {
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
export const onDeleteCustomerQueries = /* GraphQL */ `
  subscription OnDeleteCustomerQueries($createdBy: String) {
    onDeleteCustomerQueries(createdBy: $createdBy) {
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
