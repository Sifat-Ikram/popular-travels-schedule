const Schedule = () => {
  return (
    <div className="mt-2">
      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200 rounded-sm">
            <tr>
              <th>FLIGHT</th>
              <th>AIRCRAFT</th>
              <th>CLASS</th>
              <th>FARE</th>
              <th>ROUTE</th>
              <th>DEPARTURE</th>
              <th>ARRIVAL</th>
              <th>DURATION</th>
              <th>PRICE</th>
            </tr>
          </thead>
          {/* <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>{item.email}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>{item.price}</div>
                  </div>
                </td>
                <td>
                  <MdDelete
                    onClick={() => handleDelete(item)}
                    className="text-4xl cursor-pointer bg-red-700 text-white p-2 rounded-md"
                  ></MdDelete>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default Schedule;
