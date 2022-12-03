/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomerAddress = /* GraphQL */ `
  query GetCustomerAddress($id: ID!) {
    getCustomerAddress(id: $id) {
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
export const listCustomerAddresses = /* GraphQL */ `
  query ListCustomerAddresses(
    $filter: ModelCustomerAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        orders {
          nextToken
        }
        customer_id
        createdAt
        updatedAt
        createdBy
      }
      nextToken
    }
  }
`;
export const getCustomerPayment = /* GraphQL */ `
  query GetCustomerPayment($id: ID!) {
    getCustomerPayment(id: $id) {
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
export const listCustomerPayments = /* GraphQL */ `
  query ListCustomerPayments(
    $filter: ModelCustomerPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderTracking = /* GraphQL */ `
  query GetOrderTracking($id: ID!) {
    getOrderTracking(id: $id) {
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
export const listOrderTrackings = /* GraphQL */ `
  query ListOrderTrackings(
    $filter: ModelOrderTrackingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderTrackings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
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
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getOrderHistory = /* GraphQL */ `
  query GetOrderHistory($id: ID!) {
    getOrderHistory(id: $id) {
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
export const listOrderHistories = /* GraphQL */ `
  query ListOrderHistories(
    $filter: ModelOrderHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        order_id {
          id
          customer_id
          customer_address_id
          total
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
      nextToken
    }
  }
`;
export const getReturn = /* GraphQL */ `
  query GetReturn($id: ID!) {
    getReturn(id: $id) {
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
export const listReturns = /* GraphQL */ `
  query ListReturns(
    $filter: ModelReturnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReturns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reason
        date
        customer_id
        order_id {
          id
          customer_id
          customer_address_id
          total
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
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
        product_categories {
          nextToken
        }
        product_images {
          nextToken
        }
        product_attributes {
          nextToken
        }
        reviews {
          nextToken
        }
        createdAt
        updatedAt
        createdBy
      }
      nextToken
    }
  }
`;
export const getAttribute = /* GraphQL */ `
  query GetAttribute($id: ID!) {
    getAttribute(id: $id) {
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
export const listAttributes = /* GraphQL */ `
  query ListAttributes(
    $filter: ModelAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        product_attributes {
          nextToken
        }
        createdAt
        updatedAt
        createdBy
      }
      nextToken
    }
  }
`;
export const getProductAttribute = /* GraphQL */ `
  query GetProductAttribute($id: ID!) {
    getProductAttribute(id: $id) {
      id
      product_id
      attribute_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const listProductAttributes = /* GraphQL */ `
  query ListProductAttributes(
    $filter: ModelProductAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getProductImage = /* GraphQL */ `
  query GetProductImage($id: ID!) {
    getProductImage(id: $id) {
      id
      key
      product_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const listProductImages = /* GraphQL */ `
  query ListProductImages(
    $filter: ModelProductImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        seo_keywords
        sort_order
        active
        product_categories {
          nextToken
        }
        parent_id
        createdAt
        updatedAt
        createdBy
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProductCategory = /* GraphQL */ `
  query GetProductCategory($id: ID!) {
    getProductCategory(id: $id) {
      id
      product_id
      category_id
      createdAt
      updatedAt
      createdBy
    }
  }
`;
export const listProductCategories = /* GraphQL */ `
  query ListProductCategories(
    $filter: ModelProductCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCMS = /* GraphQL */ `
  query GetCMS($id: ID!) {
    getCMS(id: $id) {
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
export const listCMS = /* GraphQL */ `
  query ListCMS($filter: ModelCMSFilterInput, $limit: Int, $nextToken: String) {
    listCMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        seo_url
        content
        active
        createdAt
        updatedAt
        createdBy
      }
      nextToken
    }
  }
`;
export const getCustomerQueries = /* GraphQL */ `
  query GetCustomerQueries($id: ID!) {
    getCustomerQueries(id: $id) {
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
export const listCustomerQueries = /* GraphQL */ `
  query ListCustomerQueries(
    $filter: ModelCustomerQueriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerQueries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        message
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
