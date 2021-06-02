import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Table, Button, Space, Input } from 'antd';
import axios from 'axios';
import { map, get } from 'lodash';
import './Community.css';
const Search = Input.Search;

function Community(props) {
    const [temp, setTemp] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [clone, setClone] = useState();

    const Api = async () => {
        const { data } = await axios.post('/api/board/selectlist');
        setTemp(data);
        setClone(data);
    };
    console.log(clone);

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    const onSearch = (e) => {
        const reg = new RegExp(e.target.value, 'gi');
        const filteredData = map(clone, (record) => {
            const username = get(record, 'user_name').match(reg);
            const usertitle = String(get(record, 'title')).match(reg);
            if (!username && !usertitle) {
                return null;
            }
            return record;
        }).filter((record) => !!record);

        setSearchText(e.target.value);
        // setFiltered(!!e.target.value);
        setTemp(e.target.value ? filteredData : clone);
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
        },
        {
            title: '작성자',
            dataIndex: 'user_name',
            key: 'user_name',
            ellipsis: true,
        },
        {
            title: '내용',
            dataIndex: 'content',
            key: 'content',
            ellipsis: true,
            render: (text, record, index) => {
                return (
                    <>
                        <Link to={`/community/${record.id}`} style={{ color: 'black' }}>
                            {text}
                        </Link>
                    </>
                );
            },
        },
        {
            title: 'date',
            dataIndex: 'write_date',
            key: 'write_date',
            ellipsis: true,
        },
    ];
    return (
        // <div>hello</div>
        <div>
            {temp && (
                <div className="form">
                    <div className="sub">
                        <br />
                        <div className="subject">
                            <h1 style={{ marginLeft: '10px' }}>커뮤니티</h1>
                            <div style={{ margin: '10px' }}>
                                <Link
                                    to="/community/writepost"
                                    style={{ color: 'black', marginLeft: '10px' }}
                                >
                                    <button>글쓰기</button>
                                </Link>
                            </div>
                        </div>
                        <Search
                            size="large"
                            onChange={onSearch}
                            placeholder="Search Records"
                            value={searchText}
                            onPressEnter={onSearch}
                        />
                        <Table
                            style={{ width: '100%', margin: 'auto' }}
                            pagination={false}
                            columns={columns}
                            dataSource={temp}
                        />
                    </div>
                </div>
            )}
        </div>
    );
    // return <div>{temp ? temp.map((e) => <tr>{e.title}</tr>) : <div>No</div>}</div>;
}

export default withRouter(Community);
