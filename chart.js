bb.generate({
    bindto: "#chart",
    data: {
        columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 130, 100, 140, 35, 110, 150]
        ],
        types: {
          data1: "spline",
          data2: "area-spline"
        },
        colors: {
          data1: "red",
          data2: "green"
        }
    }
});
