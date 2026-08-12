import React from 'react'
import WishlistCard from './wishlistCard'
import { wishlistItems } from './wishlistData'
const CustomerWishlist = () => {
  return (
   <div className="flex gap-4 flex-col mt-2">
        <div className="ml-2">
            <h1 className="text-2xl font-bold">Wishlist</h1>
            <h1>Items you've saved for later</h1>
        </div>
        <div className="flex gap-4">
           {wishlistItems.map((item) => (
  <WishlistCard key={item.id} item={item} />
))}
        </div>
    </div>
  )
}

export default CustomerWishlist
