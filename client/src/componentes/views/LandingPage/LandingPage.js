import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CoinName from './CoinName';
import CoinStatus from './CoinStatus';
import { Table, Button, Space, Input } from 'antd';
import CoinPrice from './CoinPrice';
import TableSetting from './TableSetting';
import { map, get } from 'lodash';
const Search = Input.Search;

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
    const [searchText, setSearchText] = useState('');
    const [tableSetting, setTableSetting] = useState();
    const [filtered, setFiltered] = useState(false);
    const name = CoinName('https://api.upbit.com/v1/market/all');
    // const [status, setPrice] = useState()
    // const [price, setPrice] = useState()
    // const [tableSetting, setPrice] = useState()

    // console.log(name);
    const status = CoinStatus(name);
    const price = CoinPrice(status, name);
    const temp = TableSetting(price);

    useEffect(() => {
        setTableSetting(temp);
    }, [temp]);
    // if (tableSetting) setTemp(tableSetting);

    const onSearch = (e) => {
        const reg = new RegExp(e.target.value, 'gi');
        const filteredData = map(temp, (record) => {
            const nameMatch = get(record, 'krw_name').match(reg);
            const priceMatch = String(get(record, 'price_sort')).match(reg);
            if (!nameMatch && !priceMatch) {
                return null;
            }
            return record;
        }).filter((record) => !!record);

        setSearchText(e.target.value);
        // setFiltered(!!e.target.value);
        setTableSetting(e.target.value ? filteredData : temp);
    };
    // const [price] = useState(() => {
    //     return CoinStatus(name);
    // });
    // useEffect(() => {
    //     price = RenderName();
    // }, []);
    // const price = CoinStatus(name);

    console.log(tableSetting);

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
            {tableSetting && (
                <div style={{ width: '60%', margin: 'auto' }}>
                    <h2>coin</h2>
                    <Search
                        size="large"
                        // ref={(ele) => setSearchText(ele)}
                        // suffix={suffix}
                        onChange={onSearch}
                        placeholder="Search Records"
                        value={searchText}
                        onPressEnter={onSearch}
                    />
                    <Table
                        // rowKey={(record) => record.price_sort}
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
