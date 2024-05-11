const SearchFilter = () => {
  return (
    <div className="flex justify-evenly items-center">
      <div>
        <input type="text" defaultValue={"LHR"} className="input input-bordered w-44 text-gray-500 text-lg font-medium" />
      </div>
      <div>
        <input type="text" defaultValue={"CDG"} className="input input-bordered w-44 text-lg font-medium bg-base-200" />
      </div>
      <div>
        <input type="date" className="input input-bordered w-44 text-lg font-medium bg-base-200" />
      </div>
      <div>
        <select className="select text-lg font-semibold text-gray-500 select-bordered">
          <option selected className="">Day -</option>
        </select>
      </div>
      <div>
        <select className="select text-lg font-semibold text-gray-500 w-full select-bordered">
          <option selected className="">Day +</option>
        </select>
      </div>
      <div>
        <select className="select text-lg font-semibold text-gray-500 w-44 select-bordered">
          <option selected className="">Any time</option>
        </select>
      </div>
      <div>
        <h1 className="text-2xl font-bold">+</h1>
      </div>
      <div>
        <select className="select text-lg font-semibold w-32 select-bordered">
          <option selected className="">ADT</option>
        </select>
      </div>
      <div>
        <select className="select text-lg font-semibold text-gray-500 w-32 select-bordered">
          <option selected className="">1</option>
        </select>
      </div>
      <div>
        <h1 className="text-2xl font-bold">+</h1>
      </div>
    </div>
  );
};

export default SearchFilter;
