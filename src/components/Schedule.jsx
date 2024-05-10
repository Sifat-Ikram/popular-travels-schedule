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
          {/* body */}
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.itineraries.map((itinerary, index) => (
                      <div key={index}>
                        {itinerary.segments.map((segment, index) => (
                          <div
                            key={index}
                            className="flex justify-center items-center gap-2"
                          >
                            <h1>{segment.carrierCode}</h1>
                            <h1>{segment.aircraft}</h1>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  <td>
                    {item.itineraries.map((itinerary, index) => (
                      <div key={index}>
                        {itinerary.segments.map((segment, index) => (
                          <div
                            key={index}
                            className="flex justify-center items-center gap-2"
                          >
                            <h1>{segment.flightNumber}</h1>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  <td className="flex flex-col justify-center items-center">
                    {item.class.map((item, index) => (
                      <div key={index}>
                        <h1>{item[0]}</h1>
                        <h1>{item[1]}</h1>
                      </div>
                    ))}
                  </td>
                  <td>
                    {item.fareBasis.map((item, index) => (
                      <div key={index}>
                        <h1>{item[0]}</h1>
                        <h1>{item[1]}</h1>
                      </div>
                    ))}
                  </td>
                  <td className="flex flex-col justify-center items-center">
                    {item.itineraries.map((itinerary, index) => (
                      <div key={index}>
                        {itinerary.segments.map((segment, index) => (
                          <div
                            key={index}
                            className="flex flex-col justify-center items-center"
                          >
                            <div className="flex justify-center items-center gap-1">
                              <h1>{segment.departure.iataCode}</h1>
                              <h1>{segment.arrival.iataCode}</h1>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td>
                  {/* <td className="flex justify-center items-center">
                    {item.itineraries.map((itinerary, index) => (
                      <div key={index}>
                        {itinerary.segments.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col justify-center items-center"
                          >
                            <div className="flex justify-center items-center gap-1">
                              <h1>{item.departure.at}</h1>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
