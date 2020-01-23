import React from 'react';
import style from './index.module.css';
import log from 'loglevel';
import SplitPane from 'react-split-pane';

import Loader from '../../components/loader';
import Header from '../header';
import LeftPane from './panes/leftPane';
import RightPane from './panes/rightPane';

import { Scrollbars } from 'react-custom-scrollbars';
import { Icon as KitIcon } from 'react-icons-kit';
import {inbox} from 'react-icons-kit/fa/inbox';

import axios from 'axios';

interface State {
    data?: any,
    status: string,
    detailStatus: string,
    detailData?: any
};

interface Props {
};

interface Props {}
export default class Component extends React.Component<Props, State> {
    private barRef:  React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        log.info('Page:constructor reached');
        super(props);
        this.barRef = React.createRef();
        this.state = {
            status: 'loading',
            detailStatus: 'no_data',
            data: [],
            detailData: []
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    async handlePageChange (e: number): Promise<void> {
        log.info('Page:handlePageChange reached');
        await this.loadData(e);
    }

    async handleItemClick (e: number): Promise<void> {
        log.info('Page:handleItemClick reached');
        console.log(e);
        await this.loadDetail(e);
    }

    async componentDidMount(): Promise<void> {
        log.info('Page:componentDidMount reached');
        await this.loadData();
    }

    async loadData(page = 1): Promise<void> {
        log.info('Page:loadData reached');
        this.setState({
            status: 'loading'
        });

        let {data} = await axios.get(' http://127.0.0.1:3333/api/nodos?page=' + page);
        this.setState({
            data: data,
            status: 'loaded'
        })
    }

    async loadDetail(id = 1): Promise<void> {
        log.info('Page:loadDetail reached');
        this.setState({
            detailStatus: 'loading'
        });

        let {data} = await axios.get(' http://127.0.0.1:3333/api/nodos/' + id);
        this.setState({
            detailData: data,
            detailStatus: 'loaded'
        })
    }


    render() {
        log.info('Page:render reached');
        let leftPanel = null;
        if (this.state.data.length != 0) {
            leftPanel = <LeftPane
                data={this.state.data}
                onPageChange={this.handlePageChange}
                onItemClick={this.handleItemClick}
            />
        }
        let r = (
            <Loader size={50} status='loading' duration={3000}>

            </Loader>
        );

        let rightPanel = (
            <div className={[style.center].join(' ')}>
                <div style={{width: 48, height: 48}}>
                    <KitIcon size={'100%'} icon={inbox}/>
                </div>
            </div>
        );

        switch (this.state.detailStatus) {
            case 'loading':
                rightPanel = (
                    <div className={[style.center].join(' ')}>
                        LOADING
                    </div>
                );
                break;
            case 'loaded':
                rightPanel = (
                    <div className={[style.center].join(' ')}>
                        LOADED
                    </div>
                );
                break;
        }

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.titleContainer].join(' ')}>
                    <Header />
                </div>
                <SplitPane split="vertical" minSize={320} maxSize={480} className={[style.pageContainer].join(' ')}>
                    <div className={[style.leftPanel].join(' ')}>
                        <Loader size={50} status={this.state.status} duration={3000}>
                            {leftPanel}
                        </Loader>
                    </div>

                    <div className={[style.rightPanel].join(' ')}>
                        {rightPanel}
                    </div>
                </SplitPane>
            </div>
        );
    }
}



