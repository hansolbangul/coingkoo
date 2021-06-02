import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { writeBoard } from '../../../_actions/board_action';
import { Link, withRouter } from 'react-router-dom';
import { Input, Form, Button } from 'antd';
import { auth } from '../../../_actions/user_action';
import { val } from 'cheerio/lib/api/attributes';
import './Community.css';

const News = (props) => {
    const dispatch = useDispatch();
    // const [form] = Form.useForm();

    const { TextArea } = Input;
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        dispatch(auth()).then((response) => {
            console.log(response);
            if (response.payload.error) {
                alert('로그인 후 이용해주세요 :D');
                props.history.push('/community');
            }
            setName(response.payload.name);
            setEmail(response.payload.email);
        });
    }, []);

    const onFinish = (values) => {
        values.user_name = name;
        values.user_email = email;
        console.log(values);
        dispatch(writeBoard(values)).then((response) => {
            if (response.payload.boardWriteSuccess) {
                props.history.push('/community');
            } else {
                alert('글 저장 실패');
            }
        });
    };

    return (
        <Form
            onFinish={onFinish}
            style={{
                textAlign: 'center',
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
            <div>
                <p style={{ marginRight: '5px' }}>제목: </p>
                <Form.Item
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'please input title',
                        },
                    ]}
                >
                    <input />
                </Form.Item>
            </div>

            <Form.Item
                name="content"
                rules={[
                    {
                        required: true,
                        message: 'please input title',
                    },
                ]}
            >
                <TextArea showCount maxLength={200} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    게시
                </Button>
            </Form.Item>
        </Form>
    );
};

export default withRouter(News);
