import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import { Tabs, Button } from 'antd';
import { Form, Icon, Input } from 'antd';

const { TabPane } = Tabs;


interface State {
    current: string
}

interface Props {
}

interface Props {
}

export default class Component extends React.Component<Props, State> {

    constructor(props: Props) {
        log.info('Header:constructor reached');
        super(props);
        this.state = {
            current: 'mail'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: any): void {
        log.info('Header:handleClick reached');
    }

    componentDidMount(): void {
        log.info('Header:componentDidMount reached');
    }

    render() {
        log.info('Header:render reached');
        const operations = (
            <Form layout="inline">
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />
                </Form.Item>
            </Form>
        );
        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.header].join(' ')}>
                    <Tabs
                        tabBarExtraContent={operations}
                        tabBarGutter={15}
                    >
                        <TabPane tab="Tab 1" key="1">
                            Content of tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of tab 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}



