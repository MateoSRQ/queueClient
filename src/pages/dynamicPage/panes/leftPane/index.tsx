import React from 'react';
import style from './index.module.css';
import log from 'loglevel';
import {Form, Icon, Input, Layout} from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

interface ItemState {

}

interface ItemProps {
}


class Item extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        log.info('Page.LeftPane.Item:constructor reached');
        super(props);
    }

    render() {
        log.info('Page.LeftPane reached');
        return (
            <div  className={[style.item].join(' ')}  />
        )
    }

}


interface State {
    height: number,
}

interface Props {
}

export default class Component extends React.Component<Props, State> {
    private barRef:  React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        log.info('Page.LeftPane:constructor reached');
        super(props);
        this.barRef = React.createRef();
        this.state = {
            height: 0
        }
    }

    componentDidMount(): void {
        log.info('Page.LeftPane:componentDidMount reached');
        // if (this!.barRef!.current!.offsetHeight > 0) {
        //     this.setState({height: this!.barRef!.current!.offsetHeight});
        // }
    }

    render() {
        log.info('Page.LeftPane reached');

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.header].join(' ')}>
                    <div className={[style.headerTitle].join(' ')}>Roles</div>
                        <Search
                            style={{width: '100%'}}
                            placeholder="Buscar"
                        />
                </div>
                <Scrollbars className={[style.body].join(' ')}>
                    <div className={[style.list].join(' ')}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </Scrollbars>
                <div className={[style.footer].join(' ')}></div>
            </div>
        );
    }
}



