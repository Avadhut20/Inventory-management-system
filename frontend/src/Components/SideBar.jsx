import React, { useState } from 'react';
import { MdClose, MdReceipt } from 'react-icons/md';
import { FaHome, FaBox, FaShoppingCart, FaBars, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const [open, setOpen] = useState(true); // State for toggling the sidebar
  const [productsOpen, setProductsOpen] = useState(false); // State for toggling the Products submenu

  const toggleSidebar = () => {
    setOpen(!open); // Toggle sidebar visibility
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen); // Toggle Products submenu
  };

  return (
    <div>
      {open ? (
        <div className="w-64 h-screen bg-gray-800 text-white p-5">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-5 border-b-2 pb-5">
            <h1 className="font-bold text-[24px]">Logo</h1>
            <button onClick={toggleSidebar}>
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Menu */}
          <div className="mt-5 flex flex-col gap-3">
            {/* Dashboard Section */}
            <div className="flex items-center mb-5 gap-2">
              <FaHome className="w-6 h-6 mr-2" />
              <h2>DashBoard</h2>
            </div>

            {/* Products Section */}
            <div className="flex flex-col mb-5 gap-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleProducts} // Toggle Products submenu
              >
                <div className="flex items-center gap-2">
                  <FaBox className="w-6 h-6 mr-2" />
                  <h2>Products</h2>
                </div>
                {productsOpen ? (
                  <FaAngleUp className="w-4 h-4" />
                ) : (
                  <FaAngleDown className="w-4 h-4" />
                )}
              </div>

              {/* Products Submenu (Add/View Products) */}
              {productsOpen && ( // Render submenu when productsOpen is true
                <div className="ml-8 flex flex-col gap-2">
                  <Link
                    to="/view-products"
                    className="cursor-pointer hover:text-gray-400"
                  >
                    View Products
                  </Link>
                  <Link
                    to="/add-products"
                    className="cursor-pointer hover:text-gray-400"
                  >
                    Add Products
                  </Link>
                </div>
              )}
            </div>

            {/* Orders Section */}
            <div className="flex items-center mb-5 gap-2">
              <FaShoppingCart className="w-6 h-6 mr-2" />
              <h2>Orders</h2>
            </div>

            {/* Invoice Section */}
            <div className="flex items-center mb-5 gap-2">
              <MdReceipt className="w-6 h-6 mr-2" />
              <h2>Invoice</h2>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={toggleSidebar}>
          <FaBars className="w-6 h-6 text-gray-800 m-5" />
        </button>
      )}
    </div>
  );
};

export default SideBar;
