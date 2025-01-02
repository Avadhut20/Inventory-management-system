import React, { useState } from 'react';
import { MdClose, MdReceipt } from 'react-icons/md';
import { FaHome, FaBox, FaShoppingCart, FaBars } from 'react-icons/fa';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  
  const openSidebar = () => {
    setOpen(!open); 
  };

  return (
    <div>
      {open ? (
        <div className="w-64 h-screen bg-gray-800 text-white p-5">
          <div className="flex justify-between items-center mb-5 border-b-2 pb-5">
            <h1 className="font-bold text-[24px]">Logo</h1>
            <button onClick={openSidebar}>
              <MdClose className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center mb-5 gap-2">
              <FaHome className="w-6 h-6 mr-2" />
              <h2>DashBoard</h2>
            </div>
            <div className="flex items-center mb-5 gap-2">
              <FaBox className="w-6 h-6 mr-2" />
              <h2>Products</h2>
            </div>
            <div className="flex items-center mb-5 gap-2">
              <FaShoppingCart className="w-6 h-6 mr-2" />
              <h2>Orders</h2>
            </div>
            <div className="flex items-center mb-5 gap-2">
              <MdReceipt className="w-6 h-6 mr-2" />
              <h2>Invoice</h2>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={openSidebar}>
          <FaBars className="w-6 h-6 text-gray-800 m-5" />
        </button>
      )}
    </div>
  );
};

export default SideBar;
