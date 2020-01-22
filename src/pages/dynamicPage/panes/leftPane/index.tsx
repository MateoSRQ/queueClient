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
    key: string,
    handleClick?: any
}


class Item extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        log.info('Page.LeftPane.Item:constructor reached');
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: any) {
        log.info('Page.LeftPane.Item:handleClick reached');
        this.props.handleClick(e);
    }

    render() {
        log.info('Page.LeftPane reached');
        return (
            <div className={[style.item].join(' ')} onClick={() => { this.handleClick(this.props.data._id); }}>
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
    onPageChange?: any,
    //[x: string]: any
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
        this.handleItemClick = this.handleItemClick .bind(this);
    }

    handlePageChange (e: number): void {
        log.info('Page.LeftPane:handlePageChange reached');
        this.props.onPageChange(e)
    }

    handleItemClick (e: any) {
        log.info('Page.LeftPane:handleItemClick reached');
        console.log(e);
    }

    componentDidUpdate(prevProps: Props) {
        // Uso tipico (no olvides de comparar los props):
        log.info('Page.LeftPane:componentDidUpdate reached');
        if (this.props !== prevProps) {
            this.setState( {
                data: this.props.data
            });
        }
    }

    render() {
        log.info('Page.LeftPane reached');
        let data = this.state.data.data;
        let items = data.map( (itemData: any) => {
            return <Item data={itemData} key={itemData._id} handleClick={ this.handleItemClick }/>
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



