import React, {useEffect, useState} from 'react'
import axios from 'axios';
const ViewModal = ({onClose,id}) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        stock: '',
    });
    const fetchData= async (id)=>{
        try{
            const response=await axios.get(`http://localhost:3000/api/${id}`);
            setFormData(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData(id);
    },[])

    return (
        <div> <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                <form  className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        defaultValue={formData.name}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                        
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        defaultValue={formData.description}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                        
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        defaultValue={formData.category}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                        
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        defaultValue={formData.price}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                    
                    />
                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        defaultValue={formData.stock}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded"
                        
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                       
                    </div>
                </form>
            </div>
        </div></div>
    )
}

export default ViewModal