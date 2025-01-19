import React from 'react'
import axios from 'axios' 
const AddProducts = () => {

  const [formData, setFormData] = React.useState({
    name:'',
    description:'',
    category:'',
    price:'',

  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
        ...formData,
        price: parseFloat(formData.price), // Convert price to a float
        stock: parseInt(formData.stock, 10), // Ensure stock is an integer
    };
    try {
        const data = await axios.post(
            "http://localhost:3000/api/products",
            formattedData,
            { headers: { 'Content-Type': 'application/json' } }
        );
        if (data.status === 200) {
            alert("Product added successfully");
        } else {
            alert("Product not added");
        }
        setFormData({
            name: '',
            description: '',
            category: '',
            price: '',
            stock: '',
        })
    } catch (err) {
        console.error(err);
        alert("An error occurred while adding the product.");
    }
};
  return (
    <div>
        <form action="">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name='name'
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter product name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name='description'
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter product description"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    name='category'
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter product category"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Price
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    name='price'
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter product price"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Stock
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="stock"
                    name="stock"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter product price"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                >
                    Add Product
                </button>
            </div>
        </form>

    </div>
  )
}

export default AddProducts