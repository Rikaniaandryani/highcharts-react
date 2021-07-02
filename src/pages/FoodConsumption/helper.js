export const generateHighchartsData = (FoodData = []) => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Food Consumption",
    },
    series: [],
    xAxis: {
      type: "category",
      categories: [],
      min: 0,
      max: 31,
      scrollbar: {
        enabled: true,
      },
      crosshair: true,
    },
    scrollbar: {
      enabled: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Meat Consumptions",
        align: "high",
      },
    },

    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
  };

  let day = [];
  let animals = [];

  if (FoodData.length > 0) {
    FoodData.map((food) => {
      day.push(food.day + "/" + food.month);
      animals.push(food.animal);
    });

    options.series = [
      {
        name: "meat Consumption",
        data: FoodData.map((data) => ({
          name: data.animal,
          y: data.meat,
          stack: data.day + "/" + data.month,
        })),
      },
    ];
  }

  const removeDuplicate = async (arr) => {
    let unique = options.xAxis.categories;
    let tes = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
      }
    }
    let sorting = await unique.sort(function (a, b) {
      if (b < a) {
        return a - b;
      }
    });
    console.log("unique " + sorting);

    return await unique;
  };

  removeDuplicate(day);
  //   console.log(removeDuplicateAnimal(animals));

  console.log(options);
  return options;
};
