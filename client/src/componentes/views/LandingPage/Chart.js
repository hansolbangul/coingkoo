import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';

function CandleUrl(url) {
    // 1번째 api 호출하기.
    const [isCandle, setIsCandle] = useState(null);

    // 비동기 처리하기.
    const callUrl = async () => {
        try {
            const { data } = await axios.get(url);
            setIsCandle(data);
        } finally {
            // setLoading1(false);
        }
    };

    useEffect(() => {
        callUrl();
    }, [url]);

    return { isCandle };
}

const Test = (isCandle) => {
    // if(isCandle){
    //     console.log(isCandle);
    // }
    const [coinCandle, setCoinCandle] = useState(null);

    const personValue = () => {
        if (isCandle) {
            setCoinCandle(
                isCandle.reduce(
                    (result, item) => [
                        ...result,
                        {
                            data: [
                                {
                                    x: new Date(item.timestamp),
                                    y: [
                                        item.opening_price,
                                        item.high_price,
                                        item.low_price,
                                        item.trade_price,
                                    ],
                                },
                            ],
                        },
                    ],
                    []
                )
            );
        }
    };

    useEffect(() => {
        personValue();
    }, [isCandle]);

    // for (let x of coinCandle) console.log(x.data);
    // if (coinCandle !== null) coinCandle.map((e) => arr.push(Object.entries(e.data)));

    // coinCandle.map((e) => console.log(e.data));
    // console.log(arr[0]);
    // console.log(coinCandle.map((e) => typeof e.data));

    return { coinCandle };
};

const Chart = ({ candle }) => {
    const [options, setOptions] = useState({
        options: {
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#DF7D46',
                        downward: '#3C90EB',
                    },
                },
            },
            chart: {
                type: 'candlestick',
                height: 100,
                brush: {
                    enabled: false,
                    target: undefined,
                    autoScaleYaxis: false,
                },
            },
            title: {
                text: '30분 봉 30개',
                align: 'left',
            },
            xaxis: {
                labels: {
                    datetimeUTC: false,
                },
                type: 'datetime',
            },
            yaxis: {
                tooltip: {
                    enabled: true,
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                colors: undefined,
                width: 3,
                dashArray: 0,
            },

            legend: {
                show: false,
            },
        },
    });

    const { isCandle } = CandleUrl(
        `https://api.upbit.com/v1/candles/minutes/30?market=${candle}&count=30`
    );
    const { coinCandle } = Test(isCandle);

    return (
        <div>
            {coinCandle && (
                <div className="chart">
                    <h2>{candle.split('-')[1]} 차트</h2>
                    <ReactApexChart
                        options={options.options}
                        series={coinCandle}
                        type="candlestick"
                        height={350}
                    />
                </div>
            )}
        </div>
    );
};

export default Chart;
