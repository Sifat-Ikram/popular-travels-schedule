import { useEffect, useState } from "react";

const Schedule = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data using relative path
        const response = await fetch("data.json");
        // Assuming the data is in JSON format
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="my-2">
      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300 rounded-sm">
            <tr>
              <th><h1 className="flex justify-center">FLIGHT</h1></th>
              <th><h1 className="flex justify-center">AIRCRAFT</h1></th>
              <th><h1 className="flex justify-center">CLASS</h1></th>
              <th><h1 className="flex justify-center">FARE</h1></th>
              <th><h1 className="flex justify-center">ROUTE</h1></th>
              <th><h1 className="flex justify-center">DEPARTURE</h1></th>
              <th><h1 className="flex justify-center">ARRIVAL</h1></th>
              <th><h1 className="flex justify-center">DURATION</h1></th>
              <th><h1 className="flex justify-center">PRICE</h1></th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index} className={`border-b border-red-400 ${index % 2 === 0 ? "" : "bg-base-200 border-t border-red-400"}`}>
                  {/* flight part */}
                  <td>
                    {item.itineraries.map((itinerary, i) => (
                      <div key={i}>
                        {itinerary.segments.map((segment, j) => (
                          <div key={j} className="flex justify-center items-center gap-2">
                            <h1>{segment.carrierCode}</h1>
                            <h1>{segment.aircraft}</h1>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  {/* aircraft part */}
                  <td>
                    {item.itineraries.map((itinerary, i) => (
                      <div key={i}>
                        {itinerary.segments.map((segment, j) => (
                          <div key={j} className="flex justify-center items-center gap-2">
                            <h1>{segment.flightNumber}</h1>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  {/* class part */}
                  <td className="flex flex-col items-center">
                    {item.class.map((cls, i) => (
                      <div key={i}>
                        <h1>{cls[0]}</h1>
                        <h1>{cls[1]}</h1>
                      </div>
                    ))}
                  </td>
                  {/* fare basis part */}
                  <td>
                    {item.fareBasis.map((fare, i) => (
                      <div key={i} className="flex flex-col justify-center items-center">
                        <h1>{fare[0]}</h1>
                        <h1>{fare[1]}</h1>
                      </div>
                    ))}
                  </td>
                  {/* route part */}
                  <td className="flex flex-col items-center">
                    {item.itineraries.map((itinerary, i) => (
                      <div key={i}>
                        {itinerary.segments.map((segment, j) => (
                          <div key={j} className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <h1>{segment.departure.iataCode}</h1>
                              <h1>{segment.arrival.iataCode}</h1>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  {/* departure part */}
                  <td>
                    {item.itineraries.map((itinerary, i) => (
                      <div key={i}>
                        {itinerary.segments.map((segment, j) => (
                          <div key={j} className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <h1>{segment.departure.at}</h1>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  {/* arrival part */}
                  <td>
                    {item.itineraries.map((itinerary, i) => (
                      <div key={i}>
                        {itinerary.segments.map((segment, j) => (
                          <div key={j} className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <h1>{segment.arrival.at}</h1><h1 className="ml-10">----</h1>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  {/* duration part */}
                  <td>
                    {item.itineraries.map((itinerary, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                          <h1>{itinerary.duration}</h1>
                        </div>
                      </div>
                    ))}
                  </td>
                  {/* price part */}
                  <td className="flex flex-col items-center">
                    <h1>{item.price}</h1>
                    <button className="px-3 py-2 text-xs font-semibold rounded-md bg-blue-950 text-white">
                      Search
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
