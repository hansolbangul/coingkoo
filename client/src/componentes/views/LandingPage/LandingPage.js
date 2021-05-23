import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CoinName from './CoinName';
import CoinStatus from './CoinStatus';
import { Table, Button, Space } from 'antd';
import CoinPrice from './CoinPrice';
import TableSetting from './TableSetting';

// const RenderName = () => {
//     const name = CoinName('https://api.upbit.com/v1/market/all');
//     console.log(name);
//     let price = CoinStatus(name);

//     return price;
// };

// const RenderPrice = (name) => {
//     let price
//     useEffect(() => {
//         price = CoinStatus(name);
//     }, [])

//     return price
// }

function LandingPage(props) {
    const name = CoinName('https://api.upbit.com/v1/market/all');
    // const [status, setPrice] = useState()
    // const [price, setPrice] = useState()
    // const [tableSetting, setPrice] = useState()

    // console.log(name);
    const status = CoinStatus(name);
    const price = CoinPrice(status, name);
    const tableSetting = TableSetting(price);
    console.log(tableSetting);
    // const [price] = useState(() => {
    //     return CoinStatus(name);
    // });
    // useEffect(() => {
    //     price = RenderName();
    // }, []);
    // const price = CoinStatus(name);

    // console.log(1);

    const columns = [
        {
            title: '이름',
            dataIndex: 'krw_name',
            key: 'krw_name',
            sorter: (a, b) => a.krw_name_sort.localeCompare(b.krw_name_sort),
            ellipsis: true,
            width: '200px',
        },
        {
            title: '현재가',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price_sort - b.price_sort, // 맞는 식
            ellipsis: true,
            width: '130px',
        },
        {
            title: '전일대비',
            dataIndex: 'chage_price',
            key: 'chage_price',
            sorter: (a, b) => a.chage_price_sort - b.chage_price_sort,
            ellipsis: true,
            width: '200px',
        },
        {
            title: '고가대비',
            dataIndex: 'highest_52_week_price',
            key: 'highest_52_week_price',
            sorter: (a, b) => a.highest_52_week_price_sort - b.highest_52_week_price_sort,
            ellipsis: true,
            width: '110px',
        },
        {
            title: '저가대비',
            dataIndex: 'lowest_52_week_price',
            key: 'lowest_52_week_price',
            sorter: (a, b) => a.lowest_52_week_price_sort - b.lowest_52_week_price_sort,
            ellipsis: true,
            width: '110px',
        },
        {
            title: '거래대금',
            dataIndex: 'acc_trade_price_24h',
            key: 'acc_trade_price_24h',
            sorter: (a, b) => a.acc_trade_price_24h_sort - b.acc_trade_price_24h_sort,
            ellipsis: true,
            width: '200px',
        },
    ];
    return (
        // <div>hello</div>
        <div style={{ alignItems: 'center', textAlign: 'center' }}>
            {price && (
                <div>
                    <h2>coin</h2>
                    <Table
                        style={{ width: '60%', margin: 'auto' }}
                        pagination={false}
                        columns={columns}
                        dataSource={tableSetting}
                    />
                </div>
            )}
        </div>
    );
}

export default withRouter(LandingPage);
