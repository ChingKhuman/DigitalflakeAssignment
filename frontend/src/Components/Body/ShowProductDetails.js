import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function ShowProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    axios.get(`/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false)
      }).catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])
  return (
    <div className='p-4'>
   
      <h1 className='text-3xl my-4'>Show Product</h1>
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
             <span> {product._id}
            </span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Description</span>
            <span>  {product.description}
            </span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
             Mrp</span>
              
              <span>
              {product.mrp}
            </span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Category
              </span>
             <span> {product.categoryID}</span>
            
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Create Time
              </span>
            
            
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Last Update Time
              </span>
            
            
          </div>
        </div>
      

    </div>
  )
}

export default ShowProductDetails
