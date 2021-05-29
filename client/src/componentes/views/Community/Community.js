import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Table, Button, Space } from 'antd';
import axios from 'axios';

function Community(props) {
    const [temp, setTemp] = useState([]);

    const Api = async () => {
        const { data } = await axios.post('/api/board/selectlist');
        setTemp(data);
    };

    useEffect(() => {
        Api();
    }, []);

    console.log(temp);

    //     const name = CoinName('https://api.upbit.com/v1/market/all');

    //     const status = CoinStatus(name);
    //     const price = CoinPrice(status, name);
    //     const tableSetting = TableSetting(price);
    //     console.log(tableSetting);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            ellipsis: true,
            width: '130px',
        },
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            ellipsis: true,
            width: '130px',
        },
        {
            title: 'email',
            dataIndex: 'user_email',
            key: 'user_email',
            ellipsis: true,
            width: '130px',
        },
        {
            title: '작성자',
            dataIndex: 'user_name',
            key: 'user_name',
            ellipsis: true,
            width: '130px',
        },
        {
            title: '내용',
            dataIndex: 'content',
            key: 'content',
            ellipsis: true,
            width: '130px',
        },
        {
            title: 'date',
            dataIndex: 'write_date',
            key: 'write_date',
            ellipsis: true,
            width: '130px',
        },
    ];
    return (
        // <div>hello</div>
        <div>
            {temp && (
                <div>
                    <div style={{ display: 'flex' }}>
                        <h3>커뮤니티</h3>
                        <button url="/clclcl">글쓰기</button>
                    </div>
                    <Table
                        style={{ width: '100%', margin: 'auto' }}
                        pagination={false}
                        columns={columns}
                        dataSource={temp}
                    />
                </div>
            )}
        </div>
    );
    // return <div>{temp ? temp.map((e) => <tr>{e.title}</tr>) : <div>No</div>}</div>;
}

export default withRouter(Community);
