import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CategoriesCards = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category === 'All Products') {
      setProducts(data);
    }
    else if (category) {
      const filteredByCategory = data.filter(
        (products) => products.category === category
      );
      setProducts(filteredByCategory);
    }

    else {
      setProducts(data);
    }
  }, [data, category]);

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-6 sm:px-0 px-1'>
        {
          products.map((cards) => <Card key={cards.id} cards={cards}></Card>)
        }
      </div>
    </>
  );
};

export default CategoriesCards;