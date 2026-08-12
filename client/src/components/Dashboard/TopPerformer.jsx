const TopPerformer = () => {
  return (
   <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 h-80">

<h2 className="text-xl font-bold mb-2">
Top Performer
</h2>

<div className="flex flex-col items-center">

<img
src="https://i.pravatar.cc/120?img=12"
className="w-24 h-24 rounded-full object-cover"
/>

<h1 className=" text-2xl font-bold">
Ahmed Raza
</h1>

<p className="text-gray-500">
Tailor
</p>

<h1 className="text-5xl font-bold text-green">
95
</h1>

<p className="text-gray-500">
Completed Orders
</p>

<div className="flex gap-1 text-yellow-400 text-xl">

<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>

</div>

</div>

</div>
  );
};

export default TopPerformer;