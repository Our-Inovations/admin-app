import { Box } from '@mui/material';
import { PageProps } from 'interfaces/pages';
import { Layout, ProductDetails } from 'components';
import { AddProduct, GetProduct } from 'service/product.service';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PRODUCTS_URL } from 'routes';
import { IProduct } from 'interfaces/products';
import { useFormik } from 'formik';
import { PRODUCT_FORM_SCHEMA } from 'config/schema-validators';
import { LengthType, OutOfStockStatus, WeightType } from 'API';
// import { AddImage, UpdateImages } from 'service/productImages.service';
import { AddImage } from 'service/productImages.service';
import { createFileObjectURL, UploadAsset } from 'service/storage.service';
import { CreateProductImagesPath } from 'utils/paths';

interface ProductsWithImage extends IProduct {
  fileName: string[];
  document: string[];
}

const Page = ({ showToast }: PageProps) => {
  const router = useRouter();
  const type = router.query.type as string;
  const id = router.query.product as string;

  const { setFieldValue, ...formik } = useFormik<ProductsWithImage>({
    initialValues: {
      active: null,
      id: id,
      title: '',
      desc: '',
      model: '',
      price: 0,
      qty: 0,
      minimum_qty: 0,
      seo_keywords: '',
      length: 0,
      width: 0,
      height: 0,
      sku: '',
      weight: 0,
      length_class: LengthType.CENTIMETER,
      weight_class: WeightType.GRAM,
      sort_order: null,
      out_of_stock_status: OutOfStockStatus.IN_STOCK,
      fileName: [],
      document: [],
    },
    validationSchema: PRODUCT_FORM_SCHEMA(),

    onSubmit: handleSubmit,
  });

  const handleFormikFileUpload = (files: File[]) => {
    setFieldValue('fileName', files);
    const blobs = [];

    for (let index = 0; index < files.length; index++) {
      const items = files[index];
      const imgNames = files[index].name;
      const imgUrls = createFileObjectURL(items);
      blobs.push({ imgNames, imgUrls });
    }
    setFieldValue('document', blobs);
  };

  async function handleSubmit(values: ProductsWithImage) {
    const { document, ...rest } = values;
    if (type === 'update' && rest.id && document) {
      const documents = document;

      documents.map(async (item: any) => {
        const path = CreateProductImagesPath(item.imgNames ?? '');
        const images = await UploadAsset(path, 'public', item.imgUrls);

        await AddImage({
          key: images.key,
          product_id: rest.id ?? '',
        });
      });

      // if ("") {
      // await UpdateProduct({
      //   id: rest.id,
      //   title: rest.title,
      //   desc: rest.desc,
      //   model: rest.model,
      //   price: rest.price,
      //   qty: rest.qty,
      //   minimum_qty: rest.minimum_qty,
      //   seo_keywords: rest.seo_keywords,
      //   length: rest.length,
      //   width: rest.width,
      //   height: rest.height,
      //   sku: rest.sku,
      //   weight: rest.weight,
      //   length_class: rest.length_class,
      //   weight_class: rest.weight_class,
      //   sort_order: rest.sort_order,
      //   out_of_stock_status: rest.out_of_stock_status,
      // });
      return alert('successfully updated');
      // }
    }

    if (rest.title) {
      // const { imageData } =  await AddImage({
      //   images: rest.image,
      //   product_id:""
      //  })

      const { data } = await AddProduct(rest);

      if (data.createProduct) {
        setFieldValue('id', data.createProduct.id);
        router.push(
          `${PRODUCTS_URL}/update?cms=${data.createProduct.id}`,
          undefined,
          {
            shallow: true,
          },
        );
        return alert('successfully added');
      }
    }
    return alert('Invalid fields');
  }

  useEffect(() => {
    async function getProductDetail() {
      if (type === 'update') {
        if (id) {
          const { data } = await GetProduct(id);
          if (data.getProduct) {
            const { id } = data.getProduct;
            setFieldValue('id', id);
            setFieldValue('title', data.getProduct.title);
            setFieldValue('desc', data.getProduct.desc);
            setFieldValue('model', data.getProduct.model);
            setFieldValue('price', data.getProduct.price);
            setFieldValue('qty', data.getProduct.qty);
            setFieldValue('minimum_qty', data.getProduct.minimum_qty);
            setFieldValue('seo_keywords', data.getProduct.seo_keywords);
            setFieldValue('length', data.getProduct.length);
            setFieldValue('width', data.getProduct.width);
            setFieldValue('height', data.getProduct.height);
            setFieldValue('sku', data.getProduct.sku);
            setFieldValue('weight', data.getProduct.weight);
            setFieldValue('length_class', data.getProduct.length_class);
            setFieldValue('weight_class', data.getProduct.weight_class);
            setFieldValue('sort_order', data.getProduct.sort_order);
            setFieldValue(
              'out_of_stock_status',
              data.getProduct.out_of_stock_status,
            );
          }
        }
      }
    }

    getProductDetail();
  }, [id, type]);

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 6 }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <ProductDetails
          data={formik.values}
          errors={formik.errors}
          handleSubmit={formik.handleSubmit}
          setFieldValue={setFieldValue}
          onChange={formik.handleChange}
          handleFormikFileUpload={handleFormikFileUpload}
        />
      </Box>
    </Box>
  );
};

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'PRODUCTS'}>{page}</Layout>
);

export default Page;
