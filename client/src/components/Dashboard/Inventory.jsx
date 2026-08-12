import React from 'react'
import { useState } from 'react'
const Inventory = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="mt-2 ml-6">
      <h1 className="text-2xl text-green font-bold">Inventory Management</h1>
      <h1 className="font-medium text-green">Manage your products and stock</h1>
      <div className="flex gap-6 mt-4">
        <div className="border-2 border-green shadow-xl rounded-xl bg-gray-100  p-4 flex gap-4 w-75">
        <div className=" flex justify-center items-center ">
          <button className="w-16 h-16 bg-green rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
          <i className="fa-solid fa-boxes-stacked text-3xl text-[#FFF5F5]"></i>
          </button>
          </div>
        <div className="text-black"> 
          <h1 className="text-xl font-medium">Total Products</h1>
          <h1 className="text-2xl font-bold">125</h1>
          <h1 className=" font-medium">All products in store</h1>
        </div>
        </div>
        <div className="border-2 border-yellow-400 shadow-xl rounded-xl bg-[#FFFEF8]  p-4 flex gap-4 w-75">
      <div className=" flex justify-center items-center">
  <button className="w-16 h-16 bg-yellow-400 rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
    <i className="fa-solid fa-triangle-exclamation text-3xl text-[#FFFEF8]"></i>
  </button>
</div>
        <div className="text-black"> 
          <h1 className="text-xl font-medium">Low Stock</h1>
          <h1 className="text-2xl font-bold">125</h1>
          <h1 className=" font-medium">Products running low</h1>
        </div>
        </div>
        <div className="border-2 border-red-400 shadow-xl rounded-xl bg-[#FFF5F5]  p-4 flex gap-4 w-75">
        <div className=" flex justify-center items-center ">
          <button className="w-16 h-16 bg-red-500 rounded-full flex justify-center items-center hover:bg-dark-green duration-300">
          <i className="fa-solid fa-circle-xmark text-4xl text-[#FFF5F5] "></i>
          </button>
          </div>
        <div className="text-black"> 
          <h1 className="text-xl font-medium">Out of Stock</h1>
          <h1 className="text-2xl font-bold">125</h1>
          <h1 className="font-medium">Products out of stock</h1>
        </div>
        </div>
      </div>
      <div className="flex gap-6 justify-between border-2 border-green shadow-xl rounded-xl p-2 mt-3 ">
      <button className="flex gap-2 items-center border-2 text-gray-600 border-green shadow-xl rounded-xl bg-gray-100  p-2 w-96  duration-300 hover:cursor-pointer ">
        <i className="fa-solid fa-magnifying-glass "></i>
        <input type="text " placeholder="Search Products..." className="bg-transparent   outline-none"></input>
      </button>
      <button onClick={() => { setShowModal(true) }} className="flex gap-2 items-center border-2 text-skin border-green shadow-xl rounded-xl bg-green  p-2 w-40  duration-300 hover:cursor-pointer >">
       <i className="fa-solid fa-plus text-white ml-2"></i>
       <input
  type="text"
  placeholder="Add Product"
  className="bg-transparent text-white placeholder:text-white outline-none"
/>
      </button>
    {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40  rounded-2xl shadow-2xl border-2 border-green overflow-hidden">

    <div className="bg-white w-[700px] max-h-[90vh] overflow-y-auto  p-6">

      <div className="flex justify-between items-center border-b pb-2">

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-box-open text-2xl text-green"></i>

          <div>
            <h1 className="text-xl font-bold">Add New Product</h1>
            <p className="text-sm text-gray-500">
              Fill in the product details below
            </p>
         </div>
      </div>
      <button onClick={() => setShowModal(false)}>
      <i className="fa-regular fa-circle-xmark text-2xl"></i>
       </button>

      </div>
 <div className="grid grid-cols-2 gap-8 mt-4">

  {/* Left Side */}
  <div className="flex flex-col gap-4">

    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">Product Name</label>
      <input
        type="text"
        placeholder="Enter product name"
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">SKU</label>
      <input
        type="text"
        placeholder="Enter SKU (e.g. SKU001)"
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">Size</label>

      <div className="flex gap-2 flex-wrap">
        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
          <label
            key={size}
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:border-green hover:bg-green/10"
          >
            <input
              type="checkbox"
              className="accent-green w-4 h-4"
            />
            {size}
          </label>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">Color</label>
      <input
        type="text"
        placeholder="Enter color"
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>

   <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">
        Purchase Price (Rs.)
      </label>
      <input
        type="number"
        placeholder="Enter purchase price"
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>


   

  </div>

  {/* Right Side */}
  <div className="flex flex-col gap-4">
 
 <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">
        Minimum Stock
      </label>
      <input
        type="number"
        placeholder="Enter minimum stock level"
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">
        Sale Price (Rs.)
      </label>
      <input
        type="number"
        placeholder="Enter sale price"
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">Category</label>

      <select className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green">

        <option value="" disabled selected>
          Select Category
        </option>

        <option>Women's Wear</option>
        <option>Men's Wear</option>
        <option>Kids Wear</option>
        <option>Accessories</option>

      </select>

    </div>

    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">
        Stock Quantity
      </label>
      <input
        type="number"
        placeholder="Enter stock quantity"
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>

   

    <div className="flex flex-col gap-1">
      <label className="font-semibold text-green">Description</label>

      <textarea
        rows="3"
        placeholder="Enter product description..."
        className="border border-gray-300 rounded-lg p-3 bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-green"
      ></textarea>

    </div>

  </div>

</div>
<div className="flex justify-end gap-4 mt-2 pt-4 border-t">

  <button
    onClick={() => setShowModal(false)}
    className="px-4 py-2 rounded-lg border-2 border-green text-green font-semibold hover:bg-green hover:text-white duration-300"
  >
    Cancel
  </button>

  <button
    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green text-white font-semibold hover:bg-dark-green duration-300 shadow-md"
  >
    <i className="fa-solid fa-floppy-disk"></i>
    Save Product
  </button>

</div>
    </div>

  </div>
)} 
      </div>
    <div className="mt-4 bg-white rounded-xl shadow-xl border-2 border-green overflow-hidden">

  <table className="w-full table-auto border-collapse">

    <thead className="bg-green text-white">
      <tr>
        <th className="px-3 py-3 text-left">Product Name</th>
        <th className="px-3 py-3 text-left">Category</th>
        <th className="px-3 py-3 text-left">SKU</th>
        <th className="px-3 py-3 text-left">Size</th>
        <th className="px-3 py-3 text-left">Color</th>
        <th className="px-3 py-3 text-center">Stock</th>
        <th className="px-3 py-3 text-center whitespace-nowrap">Price (Rs.)</th>
        <th className="px-3 py-3 text-center">Status</th>
        <th className="px-3 py-3 text-center">Actions</th>
      </tr>
    </thead>

    <tbody>

      <tr className="border-b hover:bg-gray-50">
        <td className="border border-gray-400 px-3 py-3 font-medium">Embroidered Lawn Suit</td>
        <td className="border border-gray-400 px-3 py-3">Women's Wear</td>
        <td className="border border-gray-400 px-3 py-3">SKU001</td>
        <td className="border border-gray-400 px-3 py-3">M</td>
        <td className="border border-gray-400 px-3 py-3">Black</td>
        <td className="border border-gray-400 px-3 py-3 text-center">25</td>
        <td className="border border-gray-400   px-3 py-3 text-center">4500</td>
        <td className="px-3 py-3 text-center border border-gray-400">
          <span className="bg-green-100 text-green-700 pxSKU001-2 py-1 rounded-full text-xs whitespace-nowrap">
            In Stock
          </span>
        </td>

        <td className="px-3 py-3">
          <div className="flex justify-center gap-2">
            <button className="text-blue-600 hover:text-blue-800">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button className="text-red-600 hover:text-red-800">
              <i className="fa-solid fa-trash"></i>
            </button>

            <button className="text-green hover:text-dark-green">
              <i className="fa-solid fa-eye"></i>
            </button>
          </div>
        </td>
      </tr>

      <tr className="border-b hover:bg-gray-50">
        <td className="border border-gray-400 px-3 py-3 font-medium">Silk Maxi</td>
        <td className="border border-gray-400 px-3 py-3">Party Wear</td>
        <td className="border border-gray-400 px-3 py-3">SKU002</td>
        <td className="border border-gray-400 px-3 py-3">L</td>
        <td className="border border-gray-400 px-3 py-3">Maroon</td>
        <td className="border border-gray-400 px-3 py-3 text-center">4</td>
        <td className="border border-gray-400 px-3 py-3 text-center">7200</td>
        <td className="px-3 py-3 text-center border border-gray-400">
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs whitespace-nowrap">
            Low Stock
          </span>
        </td>
        <td className="px-3 py-3">
          <div className="flex justify-center gap-2">
            <button className="text-blue-600 hover:text-blue-800">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button className="text-red-600 hover:text-red-800">
              <i className="fa-solid fa-trash"></i>
            </button>

            <button className="text-green hover:text-dark-green">
              <i className="fa-solid fa-eye"></i>
            </button>
          </div>
        </td>
      </tr>

      <tr className="hover:bg-gray-50">
        <td className="border border-gray-400 px-3 py-3 font-medium">Cotton Kurti</td>
        <td className="border border-gray-400 px-3 py-3">Casual Wear</td>
        <td className="border border-gray-400 px-3 py-3">SKU003</td>
        <td className="border border-gray-400 px-3 py-3">S</td>
        <td className="border border-gray-400 px-3 py-3">Blue</td>
        <td className="border border-gray-400 px-3 py-3 text-center">0</td>
        <td className="border border-gray-400 px-3 py-3 text-center">2500</td>

        <td className="px-3 py-3 text-center border border-gray-400">
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs whitespace-nowrap">
            Out of Stock
          </span>
        </td>

        <td className="px-3 py-3">
          <div className="flex justify-center gap-2">
            <button className="text-blue-600 hover:text-blue-800">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button className="text-red-600 hover:text-red-800">
              <i className="fa-solid fa-trash"></i>
            </button>

            
          </div>
        </td>
      </tr>

    </tbody>

  </table>

</div>
    </div>
  )
}

export default Inventory
