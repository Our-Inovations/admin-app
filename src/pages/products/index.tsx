import { PRODUCTS_URL } from 'routes';
import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AppButton, Layout, List } from 'components';
import { ListProduct } from 'service/product.service';
import { IProducts } from 'interfaces/products';
import Link from 'next/link';

function Page() {
  const [products, setProducts] = useState<IProducts>([]);
  useEffect(() => {
    async function getProductList() {
      const { data } = await ListProduct();
      const listData = data?.listProducts?.items as IProducts;
      setProducts(listData);
    }

    getProductList();
  }, []);

  const COLUMNS = [
    { name: 'title', title: 'title' },
    { name: 'price', title: 'price' },
    { name: 'sku', title: 'sku' },
    { name: 'out_of_stock_status', title: 'out_of_stock_status' },
  ];

  return (
    <div>
      <Box>
        <Container maxWidth={false}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>
              Product Details
            </h2>

            <Link href={`${PRODUCTS_URL}/add`}>
              <AppButton
                fullWidth={false}
                sx={{ my: 2 }}
                title={'ADD PRODUCT'}
              />
            </Link>
          </div>

          <List
            columns={COLUMNS}
            content={products}
            customURL={url => `${PRODUCTS_URL}/update?product=${url}`}
          />
        </Container>
      </Box>
    </div>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'PRODUCTS'}>{page}</Layout>
);

export default Page;
