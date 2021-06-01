import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CoinName from './CoinName';
import CoinStatus from './CoinStatus';
import { Table, Button, Space, Input, Modal } from 'antd';
import CoinPrice from './CoinPrice';
import TableSetting from './TableSetting';
import { map, get } from 'lodash';
import axios from 'axios';
import Chart from './Chart';
import './modal.css';

const Search = Input.Search;

function LandingPage(props) {
    const [searchText, setSearchText] = useState('');
    const [tableSetting, setTableSetting] = useState();
    const name = CoinName('https://api.upbit.com/v1/market/all');

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalChart, setModalChart] = useState('');
    const [isInfoModalVisible, setisInfoCoinModalVisible] = useState(false);
    const [modalInfo, setModalInfo] = useState('');

    const showModal = (e) => {
        const [coinEngName, coinMarket] = e.target.innerText.split(' : ');
        setModalChart(coinMarket);
        const values = coinEngName.toLowerCase().replace(' ', '-');
        const tmp = axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${values}?tickers=true&market_data=true&community_data=true`
            )
            .then((response) => {
                setModalInfo(response.data.description.ko);
                return response.data.description.ko;
            })
            .catch(() => {
                setModalInfo('코인 정보 없음');
            });

        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const coinInfo = () => {
        setisInfoCoinModalVisible(true);
        setIsModalVisible(false);
    };

    const infoCancel = () => {
        setisInfoCoinModalVisible(false);
    };
    const infoOk = () => {
        setisInfoCoinModalVisible(false);
    };

    // console.log(name);
    const status = CoinStatus(name);
    const price = CoinPrice(status, name);
    const temp = TableSetting(price);

    useEffect(() => {
        setTableSetting(temp);
    }, [temp]);

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
        setTableSetting(e.target.value ? filteredData : temp);
    };

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
        {
            title: '정보',
            width: '200px',
            dataIndex: 'info_name',
            render: (text, record, index) => {
                return (
                    <>
                        {/* <div>{text}</div> */}
                        <span>
                            <Button type="primary" onClick={showModal}>
                                {text}
                            </Button>
                        </span>
                    </>
                );
            },
        },
    ];
    return (
        // <div>hello</div>
        <div style={{ alignItems: 'center', textAlign: 'center' }}>
            {tableSetting && (
                <div style={{ width: '80%', margin: 'auto' }}>
                    <h2>coin</h2>
                    <Search
                        size="large"
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
                    <Modal
                        title="코잉쿠 차트"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        style={{ width: '100%', resize: 'none' }}
                        // visible ={modalChart}
                        footer={[
                            <Button key="info" type="primary" onClick={coinInfo}>
                                코인 설명
                            </Button>,
                            <Button key="back" onClick={handleCancel}>
                                Cancel
                            </Button>,
                            <Button key="submit" type="primary" onClick={handleOk}>
                                Ok
                            </Button>,
                        ]}
                    >
                        <Chart candle={modalChart} />
                    </Modal>
                    <Modal
                        title="코인 상세정보"
                        visible={isInfoModalVisible}
                        onOk={infoOk}
                        onCancel={infoCancel}
                        style={{ width: '100%', resize: 'none' }}
                        footer={[
                            <Button key="back" onClick={infoCancel}>
                                Cancel
                            </Button>,
                            <Button key="submit" type="primary" onClick={infoOk}>
                                Ok
                            </Button>,
                        ]}
                    >
                        {modalInfo.split('\n').map((e) => {
                            return (
                                <span>
                                    {e}
                                    <br />
                                </span>
                            );
                        })}
                    </Modal>
                </div>
            )}
        </div>
    );
}

export default withRouter(LandingPage);
