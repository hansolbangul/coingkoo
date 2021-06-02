import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../_actions/board_action';
import './Community.css';

const Post = ({ match, history }) => {
    const [temp, setTemp] = useState([]);
    const id = match.params.id;

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteBoard({ id })).then((response) => {
            if (response.payload.boardDeleteSuccess) {
                history.goBack();
            } else {
                alert('Error');
            }
        });
    };

    const Api = async () => {
        const { data } = await axios.post('/api/board/select', { id });
        setTemp(data);
    };

    useEffect(() => {
        Api();
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // width: '100%',
                height: '100vh',
                margin: 'auto',
                alignItems: 'center',
                width: '80%',
            }}
        >
            <div style={{ display: 'flex' }}>
                <div>제목 :</div>
                <div className="post_table">{temp.title}</div>
            </div>

            <div style={{ display: 'flex' }}>
                <div>작성자 :</div>
                <div className="post_table">{temp.user_name}</div>
            </div>

            <div style={{ display: 'flex' }}>
                <div>이메일 :</div>
                <div className="post_table">{temp.user_email}</div>
            </div>

            <div style={{ display: 'flex' }}>
                <div>작성일 :</div>
                <div className="post_table">{temp.write_date}</div>
            </div>

            <div style={{ display: 'flex' }}>
                <div className="post_content">{temp.content}</div>
            </div>

            <div style={{ display: 'flex' }}>
                <Link to="/community" style={{ color: 'black', marginRight: '5px' }}>
                    목록
                </Link>
                <a style={{ color: 'black', marginLeft: '5px' }} onClick={handleClick}>
                    삭제
                </a>
            </div>
        </div>
    );
};

export default withRouter(Post);
