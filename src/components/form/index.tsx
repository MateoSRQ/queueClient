import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import 'antd/dist/antd.css';
import {any} from "prop-types";

//log.setDefaultLevel('info')

interface _InputProps {
    form?: any,
    label?: string
}
interface _InputState {}

class _Input extends React.Component<_InputProps, _InputState> {
    constructor(props: _InputProps) {
        log.info('Form.Input:constructor reached');
        super(props);
    }

    render() {
        log.info('Form.Input:constructor reached');
        const { getFieldDecorator } = this.props.form;
        return (
            <Form.Item
                label={this.props.label?this.props.label:null}
            >
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
        )
    }
}



interface Props {
    form: any
    children: any
}

interface State {
}

class _Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Form:constructor reached');
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        log.info('Form:componentDidMount reached');

    }

    componentDidUpdate(prevProps: any) {
        log.info('Form:componentDidUpdate reached');

    }

    handleSubmit(e: any)  {
        e.preventDefault();
        this.props.form.validateFields((err:any, values:any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        log.debug('Form:render reached');
        const { getFieldDecorator } = this.props.form;

        let children = null;
        if (this.props.children) {
            children = this.props.children.map((child: any) => {
                let elem = React.cloneElement(child, { form: this.props.form })
                console.log('elem');
                console.log(elem);
                return elem;
            })
        }
        console.log('CHILDREN');
        console.log(this.props.children);
        console.log(children);


        return (
            <div className={[style.component].join(' ')}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    {children}
                    <Form.Item
                        label="Field B"
                    >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}

const DerivedComponent = Form.create({ name: 'form' })(_Component);

const Component = {
    Form: DerivedComponent,
    Input: _Input
};

export default Component;
