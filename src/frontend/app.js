"use strict";

import React from 'react';
import { Layout } from 'antd';
import { Input, Select } from 'antd';

const { Content, Sider } = Layout;
const Option = Select.Option;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Preview here
            </Content>
          </Layout>
          <Sider width={500} style={{ background: '#fff', padding: '25px' }}>
            Properties panel here
            <Input placeholder="Test" />
            <Select defaultValue="px" style={{ width: 80 }}>
              <Option value="px">px</Option>
              <Option value="em">em</Option>
              <Option value="rem">rem</Option>
            </Select>
          </Sider>
        </Layout>
      </div>
    );
  }
}