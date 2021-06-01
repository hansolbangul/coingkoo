import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoinPrice from './CoinPrice';

function CoinStatus(props) {
    const [status, setStatus] = useState(null);
    // const status = {};
    let coinName = [];

    const callUrl = async () => {
        try {
            props.map((e) => {
                if (e.market.includes('KRW')) coinName.push(e.market);
            });
            const { data } = await axios.get(
                `https://api.upbit.com/v1/ticker?markets=${coinName.toString()}`
            );
            setStatus(data);

            // console.log(data);
        } catch {
            // console.log('err');
        } finally {
            // console.log('final');
        }
    };

    useEffect(() => {
        callUrl();
    }, [props]);

    // console.log(status);

    // const price = CoinPrice(status, props);
    // console.log("CoinStatus")

    return status;
}
export default CoinStatus;
