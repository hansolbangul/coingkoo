import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TableSetting from './TableSetting';

const CoinPrice = (status, name) => {
    const [nullPrice, setNullPrice] = useState();
    const [price, setPrice] = useState();
    let count = 0;

    const arr = () => {
        if (status) {
            setNullPrice(
                name.map((_a) => {
                    const foundB = status.find((_b) => _a.market === _b.market);
                    return foundB ? { ..._a, ...foundB } : null;
                })
            );
            count = 1;
        }
    };

    const FillterNull = (nullPrice) => {
        if (nullPrice !== undefined) {
            // console.log('확인');
            setPrice(nullPrice.filter((el) => el != null));
            //
        }
    };

    useEffect(() => {
        arr();
    }, [status]);

    useEffect(() => {
        FillterNull(nullPrice);
    }, [nullPrice]);

    return price;
};

export default CoinPrice;
