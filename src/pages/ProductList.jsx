import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from 'components/ProductItem';
import Layout from 'components/Layout';

import { getProductList } from 'actions/products';

import * as Styled from './styles';

export const ProductList = () => {
  const { content: productList, error: errorMessage } = useSelector(
    (state) => state.products.products,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <Layout>
      <Styled.ProductListWrapper>
        {errorMessage && <h1>{errorMessage}</h1>}
        {productList &&
          productList.map(({ id, name, goodsPrice, listImage }) => (
            <ProductItem key={id} id={id} image={listImage} name={name} price={goodsPrice} />
          ))}
      </Styled.ProductListWrapper>
    </Layout>
  );
};
export default ProductList;
