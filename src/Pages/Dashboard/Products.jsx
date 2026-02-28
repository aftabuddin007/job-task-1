import React, { useEffect, useState } from 'react';
import ProductCard from '../../Component/ProductCard';
import Loading from '../../Component/Loading';

const Products = () => {

      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://task-api-eight-flax.vercel.app/api/products ");
      const result = await res.json();
      setData(result);
    //   console.log(data)
    setLoading(false)
    };
    fetchData();
  }, []);


if(loading){
  return <Loading></Loading>
}

    return (

        <div>

           <h2 className="text-2xl font-bold">Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3'>
           {/* /api/products  */}
        
{
    data?.map(product=><ProductCard product={product} key={product.id}></ProductCard>)
}

           
        </div></div>
    );
};

export default Products;