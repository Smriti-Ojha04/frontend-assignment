// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import { data } from "../Winedata";


function Barchart() {
    /// Component for rendering bar chart
    let malicData = 0;
    let alcoholData = 0;
    data.forEach((ele) => {
        alcoholData += ele.Alcohol;
        malicData += ele["Malic Acid"];
    });
    let barData = [alcoholData, Number((malicData / data.length).toFixed(2))];
    let barCategories = ["Alcohol", "Malic Acid"];
    const option1 = {
        color: ["#d18492"],
        xAxis: {
            type: "category",
            data: barCategories,
            name: 'Beverages',
            nameLocation: 'middle',
            nameGap: 50,
            nameTextStyle: {
                fontStyle: 'oblique',
                color: '#000000'
            },
            color: 'red',
            axisLabel: {
                textStyle: {
                    color: 'brown'
                }
            },

        },
        yAxis: {
            type: 'value',
            name: 'Consumption',
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
            trigger: "axis",
            formatter: '{b0}: {c0}',

        },
        series: [{
            data: barData,
            type: "bar",

        }, ],
    };

    return ( <
        ReactEcharts option = { option1 }
        />
    );
}
export default Barchart;