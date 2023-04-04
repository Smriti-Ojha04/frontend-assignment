// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import { data } from "../Winedata";


function Scatterplot() {
    // Component for rendering scatter chart
    let scatterData = [];
    data.forEach((ele) => {
        scatterData.push([ele["Color intensity"], ele.Hue]);
    });
    const option2 = {
        color: ["#d18492"],
        xAxis: {
            name: 'Color Intensity',
            nameLocation: 'middle',
            nameGap: 50,
            nameTextStyle: {
                fontStyle: 'oblique',
                color: '#000000'
            },
            axisLabel: {
                textStyle: {
                    color: 'brown'
                }
            },
        },
        yAxis: {
            type: 'value',
            name: 'Hue',
            nameLocation: 'middle',
            nameGap: 50,
            nameTextStyle: {
                fontStyle: 'normal',
                color: '#000000'
            },
            axisLabel: {
                textStyle: {
                    color: 'brown'
                }
            },
        },
        tooltip: {
            trigger: "item",
            formatter: '{b0}: {c0}',

        },
        series: [{
            type: "scatter",
            data: scatterData,
        }, ],
    };

    return ( <
        ReactEcharts option = { option2 }
        />
    );
}
export default Scatterplot;