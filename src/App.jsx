import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col px-4">
        <div className="shadow">
          <h1 className="text-3xl font-bold">Master Price</h1>
        </div>
        <div className="my-6">
          <ul className="flex justify-center items-center">
            <h1 className="px-5 py-1 border border-solid border-black text-black text-xs font-bold">
              Round Trip
            </h1>
            <h1 className="px-5 py-1 border border-solid border-black text-white bg-blue-950 text-xs font-bold">
              One Way
            </h1>
            <h1 className="px-5 py-1 border border-solid border-black text-black text-xs font-bold">
              Multi city
            </h1>
          </ul>
        </div>
        <div className="border-t border-b py-2 border-blue-950 border-solid">
          <h1>search filters</h1>
        </div>
        <div className="py-3 flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" className="border-2 border-solid w-4 h-4" />
            <h1 className="text-lg font-bold">Extra Options</h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-lg font-bold">Environment</h1>
            <div className="flex justify-center items-center gap-3">
              <input type="checkbox" className="checkbox checkbox-xs" />
              <h1 className="text-lg font-bold">Dummy</h1>
            </div>
            <div className="flex justify-center items-center gap-3">
              <input type="checkbox" className="checkbox checkbox-xs" />
              <h1 className="text-lg font-bold">PDT</h1>
            </div>
          </div>
          <button className="px-5 py-2 text-sm font-semibold rounded-md bg-blue-950 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
