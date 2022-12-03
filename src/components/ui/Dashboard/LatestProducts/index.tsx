import { memo } from 'react';
import Image from 'next/image';
import { AppButton, Card } from 'components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

const products = [
  {
    name: 'Dropbox',
    imageUrl: '/images/products/product_1.png',
  },
  {
    name: 'Medium Corporation',
    imageUrl: '/images/products/product_2.png',
  },
  {
    name: 'Slack',
    imageUrl: '/images/products/product_3.png',
  },
  {
    name: 'Lyft',
    imageUrl: '/images/products/product_4.png',
  },
  {
    name: 'GitHub',
    imageUrl: '/images/products/product_5.png',
  },
];

const AppLatestProductsComponent = () => {
  return (
    <Card>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={i}>
            <ListItemAvatar>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={48}
                height={48}
              />
            </ListItemAvatar>
            <ListItemText primary={product.name} />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <AppButton
          size="small"
          variant="text"
          onClick={() => {}}
          title={'VIEW_ALL'}
          endIcon={<ArrowRightIcon fontSize="small" />}
        />
      </Box>
    </Card>
  );
};

export const AppLatestProducts = memo(AppLatestProductsComponent);
