import React, { useEffect, useState } from "react";

const API_KEY = "BHD64DC9QCj07MV7uKoox2JgZJhewxpvLv7BXr_EAEs";

function PlantComponent() {
  const [plants, setPlants] = useState([]);

  const getPlants = async () => {
    try {
      const response = await fetch(
        `https://trefle.io/api/v1/plants?token=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setPlants(data.data);
    } catch (error) {
      console.error("Error fetching plant data:", error);
    }
  };
  console.log(plants);
  useEffect(() => {
    getPlants();
  }, []);

  return (
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default PlantComponent;
