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

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    useEffect(() => {
        Api();
    }, []);

    const columns = [
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
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ marginLeft: '10px' }}>커뮤니티</h1>
                        <div style={{ margin: '10px' }}>
                            <input onChange={onChange} />
                            <Link
                                to="/community/news"
                                style={{ color: 'black', marginLeft: '10px' }}
                            >
                                <button>글쓰기</button>
                            </Link>
                        </div>
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
