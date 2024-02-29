import ProductCategory from '@/components/ProductsCategory'
import { useAppDispatch } from '@/lib/hooks';
import { getProductSuccess } from '@/redux/slices/productSlice';
import axios from 'axios';
import React, { useEffect } from 'react'

const Category = (props:any) => {
  console.log(props, '----->')
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(getProductSuccess(props.data.products))
  },[dispatch])

  return (
    <>
    <ProductCategory/>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const response = (await axios.get('http://localhost:3000/api/products/getAll'))
    
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);

    return {
      props: {
        error: 'Failed to load the data.',
      },
    };
  }
};

export default Category