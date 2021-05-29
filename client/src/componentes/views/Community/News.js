import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { writeBoard } from '../../../_actions/board_action';
import { Input, Form, Button } from 'antd';
import { auth } from '../../../_actions/user_action';
import { val } from 'cheerio/lib/api/attributes';

const News = (props) => {
    const dispatch = useDispatch();
    // const [form] = Form.useForm();

    const { TextArea } = Input;
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    useEffect(() => {
        dispatch(auth()).then((response) => {
            console.log(response);
            setName(response.name);
            setEmail(response.email);
        });
    }, []);
    console.log(name);

    const onFinish = (values) => {
        console.log(name);
        console.log(values);
        values.name = name;
        values.email = email;
        dispatch(writeBoard(values)).then((response) => {
            if (response.payload.boardWriteSuccess) {
                props.history.push('/community');
            } else {
                alert('글 저장 실패');
            }
        });
    };

    return (
        <Form onFinish={onFinish}>
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
            <Form.Item
                name="id"
                rules={[
                    {
                        required: true,
                        message: 'please input title',
                    },
                ]}
            >
                <input />
            </Form.Item>
            <Form.Item
                name="content"
                rules={[
                    {
                        required: true,
                        message: 'please input title',
                    },
                ]}
            >
                <TextArea showCount maxLength={100} onChange={onChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    게시
                </Button>
            </Form.Item>
        </Form>
    );
};

export default News;
