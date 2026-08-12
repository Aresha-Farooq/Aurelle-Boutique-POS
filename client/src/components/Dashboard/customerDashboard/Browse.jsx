import React from 'react'
import { catalogData } from './browseData'
import CatalogCard from './catalogeCard'
const Browse = () => {
  return (
    <div className="mt-4">
        <div className="ml-2" >
            <h1 className="text-2xl font-bold"> Browse Cataloge</h1>
            <h1>Filter,sort and save new arrivals</h1>
        </div>
<div>
<div className="grid grid-cols-4 gap-6 mt-6">
  {catalogData.map((item) => (
    <CatalogCard
      key={item.id}
      item={item}
    />
  ))}
</div>
</div>
    </div>
  )
}

export default Browse
