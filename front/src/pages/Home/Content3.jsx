import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Content3 = (props) => {
  const onFinish = values => {
    console.log('Success:', values);
    location.href ="mailto:1416287214@qq.com ? &bcc= &subject=客户咨询&body=咨询详情:   姓名: "+values.name+"   联系方式: "+values.phone+"   所属公司名称: "+values.company+"   咨询内容: "+values.content
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
        <Col span={12} offset={6}>
          <div {...props} >
          <h1 align='center'
            style={
              {
                fontSize: 32,
                marginBottom: 32,
                color: 'rgba(0, 0, 0, 0.65)',
              }
            }
          >联系我们</h1>
          <Form  
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[
                {
                  required: true,
                  message: '请输入您的名字!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="联系方式"
              name="phone"
              rules={[
                {
                  required: true,
                  message: '请输入您的联系方式!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="所在公司名称"
              name="company"
              rules={[
                {
                  required: true,
                  message: '请输入您所在的公司名称!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="咨询内容"
              name="content"
              rules={[
                {
                  required: true,
                  message: '请输入您的咨询内容!',
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>是否保存用户信息</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div></Col>
    </div>
  );
};

export default Content3;
