import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { generateHighchartsData } from "./helper";

const FoodConsumption = () => {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch("/api/food-consumption.json")
      .then((res) => res.json())
      .then((res) => {
        setFoodData(res.data.foodConsumption.daily);
      });
  }, []);

  const onCreate = (data) => {
    setFoodData(FoodData.concat(data));
    // console.log(FoodData);
  };

  return (
    <>
      <div>Work in progress</div>
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={generateHighchartsData(FoodData)}
        />
        {/* {console.log(FoodData)} */}
      </div>
    </>
  );
};

export default FoodConsumption;
