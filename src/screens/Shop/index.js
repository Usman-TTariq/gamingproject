
import React from 'react'
import UserLayout from '../../components/Layout/userlayout';
import CustomBanner from '../../components/CustomBanner';
import BestProducts from '../../components/Bestproducts';

const Shop = () => {
  return (
    <>
      <UserLayout>

        <CustomBanner text="shop"/>

        <BestProducts className="d-none"/>

      </UserLayout>
  </>
  )
}

export default Shop