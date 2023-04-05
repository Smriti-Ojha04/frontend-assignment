// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import { data } from "../Winedata";


function Barchart() {
    //Component for rendering bar chart
    let alcoholData = [];
    let cnt = [];
    let malicAcid = [];
    data.forEach((ele) => {
        if (!alcoholData.includes(ele.Alcohol)) {
            alcoholData.push(ele.Alcohol);
            cnt.push(1);
            malicAcid.push(ele["Malic Acid"])
        } else {
            var ind = alcoholData.indexOf(ele.Alcohol);
            cnt[ind] = cnt[ind] + 1;
            malicAcid[ind] += ele["Malic Acid"]
        }
    });
    var malicAcidAvg = [];
    for (var i in malicAcid) {
        malicAcidAvg.push(Number((malicAcid[i] / cnt[i]).toFixed(2)))
    }
    // let barData = [alcoholData, Number((malicData / data.length).toFixed(2))];
    // let barCategories = ["Alcohol", "Malic Acid"];
    const option1 = {
        color: ["#d18492"],
        xAxis: {
            type: "category",
            data: alcoholData,
            name: 'Alcohol',
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
            name: 'Average of Malic Acid',
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
            data: malicAcidAvg,
            type: "bar",

        }, ],
    };

    return ( <
        ReactEcharts option = { option1 }
        />
    );
}
export default Barchart;