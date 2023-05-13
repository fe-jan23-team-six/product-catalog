/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

import { getPhones, getDetailedById } from '../../utils/api/phones';
import { PhoneMain, PhoneDetailed } from '../../types/phone/phone';

const getAllPhones = async() => {
  return getPhones();
};

export const ProductList: React.FC = () => {
  const [phones, setPhones] = useState<PhoneMain[]>([]);
  const [phonesDetailes, setPhonesDetailes] = useState<PhoneDetailed[]>([]);

  // function to get briefly info about all products
  // to get them with detailed info by id
  useEffect(() => {
    getAllPhones().then(allPhones => {
      setPhones(allPhones);
    });
  }, []);

  // getting detailed information about all products
  useEffect(() => {
    phones.map(
      ({ id }) => getDetailedById(id)
        .then(phoneWithDetailes => setPhonesDetailes(
          (prevState) => ([...prevState, phoneWithDetailes]),
        )),
    );
  }, [phones]);

  return (
    <div className='product_list catalog'>
      {phonesDetailes.map(
        (phoneDetails: PhoneDetailed) => {
          return <ProductCard
            key={phoneDetails.id}
            phoneDetails={phoneDetails}
          />;
        },
      )}
    </div>
  );
};
