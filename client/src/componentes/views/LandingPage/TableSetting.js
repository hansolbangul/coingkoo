import React, { useState, useEffect } from 'react';

const comma = (number) => {
    // 가격에 , 붙이기.
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const TableSetting = (price) => {
    const [tableCoin, setTableCoin] = useState([]);

    const personValue = () => {
        if (price) {
            setTableCoin(
                price.reduce(
                    (result, item) => [
                        ...result,
                        {
                            krw_name: `${item.korean_name} (${item.market.split('-')[1]})`,
                            price: `${comma(item.trade_price)}원`,
                            chage_price: `${(item.signed_change_rate * 100).toFixed(2)}%  (${comma(
                                item.signed_change_price
                            )}원)`,
                            acc_trade_price_24h: `${comma(item.acc_trade_price_24h.toFixed(0))}원`,
                            highest_52_week_price:
                                item.trade_price >= item.highest_52_week_price
                                    ? `${(
                                          100 -
                                          (Math.round(
                                              (item.trade_price / item.highest_52_week_price) * 1000
                                          ) /
                                              1000) *
                                              100
                                      ).toFixed(2)}%`
                                    : `-${(
                                          100 -
                                          (Math.round(
                                              (item.trade_price / item.highest_52_week_price) * 1000
                                          ) /
                                              1000) *
                                              100
                                      ).toFixed(2)}%`,
                            lowest_52_week_price:
                                item.trade_price <= item.lowest_52_week_price
                                    ? `-${(
                                          (Math.round(
                                              (item.trade_price / item.lowest_52_week_price) * 1000
                                          ) /
                                              1000) *
                                          100
                                      ).toFixed(2)}%`
                                    : `${(
                                          (Math.round(
                                              (item.trade_price / item.lowest_52_week_price) * 1000
                                          ) /
                                              1000) *
                                          100
                                      ).toFixed(2)}%`,
                            highest_52_week_date: item.highest_52_week_date,
                            lowest_52_week_date: item.lowest_52_week_date,
                            trade_date: item.trade_date.replace(
                                /(\d{4})(\d{2})(\d{2})/g,
                                '$1-$2-$3'
                            ),
                            market: item.market,
                            high_price: item.high_price,
                            low_price: item.low_price,
                            krw_name_sort: item.korean_name,
                            price_sort: item.trade_price,
                            highest_52_week_price_sort:
                                (Math.round(
                                    (item.trade_price / item.highest_52_week_price) * 1000
                                ) /
                                    1000) *
                                100,
                            lowest_52_week_price_sort:
                                (Math.round((item.trade_price / item.lowest_52_week_price) * 1000) /
                                    1000) *
                                100,
                            chage_price_sort: item.signed_change_rate * 100,
                            acc_trade_price_24h_sort: item.acc_trade_price_24h,
                            hight: item.highest_52_week_price,
                        },
                    ],
                    []
                )
            );
        }
    };

    useEffect(() => {
        personValue();
    }, [price]);

    // console.log('TableSetting');
    // console.log(tableCoin);

    return tableCoin;
};

export default TableSetting;
