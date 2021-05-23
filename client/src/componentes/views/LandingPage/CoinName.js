import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CoinName(url) {
    const [name, setName] = useState(null);

    const callUrl = async () => {
        try {
            const { data } = await axios.get(url);
            setName(data);
            // console.log(data);
        } catch {
            console.log('err');
        } finally {
            // console.log('final');
        }
    };

    useEffect(() => {
        callUrl();
    }, []);

    // console.log(name);
    return name;
}
export default CoinName;
