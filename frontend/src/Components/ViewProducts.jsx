import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
// import AddproductModal from './AddproductModal';
import ViewModal from './ViewModal';
import UpdateModal from './UpdateModal';
const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [showViewModal,setshowViewModal]=useState(false);
  const [showUpdateModal,setshowUpdateModal]=useState(false);
  const [updateId,setupdateId]=useState(null);
  
  const [selectedProductId, setSelectedProductId] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/');
      setProducts(response.data);
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/${id}`);
      console.log(response);
      fetchData(); // Refresh the product list after deletion
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post('http://localhost:3000/api/', newProduct);
      console.log(response.data);
      
      fetchData(); // Refresh the product list after adding
      setShowModal(false); // Close the modal after successful submission
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="overflow-x-auto p-4">
      <div className='flex justify-between items-center mb-3'>

        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button onClick={()=>{setShowModal(true)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Add New</button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Category</th>
            <th className="px-4 py-2 border border-gray-300">Price</th>
            <th className="px-4 py-2 border border-gray-300">Stock</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-gray-100 odd:bg-white even:bg-gray-50"
            >
              <td className="px-4 py-2 border border-gray-300">{product.name}</td>
              <td className="px-4 py-2 border border-gray-300">{product.description}</td>
              <td className="px-4 py-2 border border-gray-300">{product.category}</td>
              <td className="px-4 py-2 border border-gray-300">{product.price}</td>
              <td className="px-4 py-2 border border-gray-300">{product.stock}</td>
              <td className="px-4 py-2 border border-gray-300 flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700"
                onClick={() => {
                  setupdateId(product.id);
                  setshowUpdateModal(true);
                }}
                >
                  <FaEdit />
                </button>
                <button className="text-green-500 hover:text-green-700"  onClick={() => {
                    setSelectedProductId(product.id);
                    setshowViewModal(true);
                  }}>
                  <FaEye />
                </button>
                <button className="text-red-500 hover:text-red-700" onClick={()=>handleDelete(product.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {
        showViewModal && (
          <ViewModal onClose={()=>{setshowViewModal(false)}} id={selectedProductId}/>
        )
      }
      {
        showUpdateModal && (
          <UpdateModal
            onClose={() => setshowUpdateModal(false)}
            id={updateId}
          />
        )
      }
    </div>
  )
}

export default ViewProducts