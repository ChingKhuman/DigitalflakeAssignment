import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function ProductId() {
    const [name, setName] = React.useState('')
    const [pack, setPack] = React.useState('')
    const [categoryID, setCategoryID] = React.useState('')
    const [mrp, setMrp] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [status, setStatus] = React.useState(true)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {id} = useParams();


  useEffect(()=> {
    setLoading(true)
    axios.get(`product/${id}`)
    .then((response)=> {
      setName(response.data.name)
      setPack(response.data.pack)
      setCategoryID(response.data.categoryID)
      setMrp(response.data.mrp)
      setDescription(response.data.description)
      setStatus(response.data.status)
    })
    .catch((error)=> {
      setLoading(false);
      alert('An error, Please check Console')
      console.log(error);
    })
  }, [])

  const handleEditProduct = () => {
    const data = {
      name,pack,categoryID,mrp,description,status
    };
    setLoading(true);
    axios.put(`product/${id}`,data)
    .then(()=> {
      setLoading(false)
      navigate('/product')
    }).catch((error)=> {
      setLoading(false);
      alert('An error, please Check console');
      console.log(error)
    })
  }
  return (
    <div>
    
      <h1 className='text-3xl my-4'> Create Book</h1>
      
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Pack</label>
          <input type='text'
          value={pack}
          onChange={(e) => setPack(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Category</label>
          <input type='text'
          value={categoryID}
          onChange={(e) => setCategoryID(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Mrp</label>
          <input type='text'
          value={mrp}
          onChange={(e) => setMrp(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Desciption</label>
          <input type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Status</label>
          <input type='text'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8'
        onClick={handleEditProduct}>
          Save
        </button>
      </div>
    </div>
  )
}

export default ProductId
