import React from 'react';
import style from './index.module.css';
import log from 'loglevel';
import {Form, Icon, Input, Layout} from 'antd';
import { Pagination } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;


interface ItemState {

}

interface ItemProps {
    data?: any
    key: string
}


class Item extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        log.info('Page.LeftPane.Item:constructor reached');
        super(props);
    }

    render() {
        log.info('Page.LeftPane reached');
        console.log('YYYY');
        console.log(this.props.data._id)
        return (
            <div  className={[style.item].join(' ')} >
                {this.props.data._id}
            </div>
        )
    }

}


interface State {
    data: any
}

interface Props {
    data: any,
    onPageChange?: any
}

export default class Component extends React.Component<Props, State> {
    private barRef:  React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        log.info('Page.LeftPane:constructor reached');
        super(props);
        this.barRef = React.createRef();
        this.state = {
            data: props.data
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange (e: number): void {
        log.info('Page.LeftPane:handlePageChange reached');
        this.props.onPageChange(e)
    }

    componentDidUpdate(prevProps: Props) {
        // Uso tipico (no olvides de comparar los props):
        log.info('Page.LeftPane:componentDidUpdate reached');
        console.log('888888888888888')
        if (this.props !== prevProps) {
            console.log('9999999999999')
            this.setState( {
                data: this.props.data
            });
        }
    }

    render() {
        log.info('Page.LeftPane reached');
        let data = this.state.data.data;
        console.log('----')
        console.log (this.state.data);
        let items = data.map( (itemData: any) => {
            return <Item data={itemData} key={itemData._id}/>
        })

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
                        { items}
                    </div>
                </Scrollbars>
                <div className={[style.footer].join(' ')}>
                    <Pagination
                        current={this.state.data.page}
                        pageSize={this.state.data.size}
                        total={this.state.data.total}
                        size="small"
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}



