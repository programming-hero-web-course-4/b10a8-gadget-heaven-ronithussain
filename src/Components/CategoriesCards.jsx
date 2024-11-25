import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import Heading from './Heading';

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
      setProducts(data.slice(0, 3));
    }
  }, [data, category]);
  // console.log(data)
  console.log(category)

  // useEffect(()=>{
  //     const filteredByCategory =data.filter(product => product.category === category)
  //     setProducts(filteredByCategory)
  //     console.log(filteredByCategory)
  // } ,[data,category])
  // console.log(data)

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