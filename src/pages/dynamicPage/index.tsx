import React from 'react';
import style from './index.module.css';
import log from 'loglevel';
import SplitPane from 'react-split-pane';

import Loader from '../../components/loader';
import Header from '../header';
import LeftPane from './panes/leftPane';
import RightPane from './panes/rightPane';

import { Scrollbars } from 'react-custom-scrollbars';

import axios from 'axios';


interface State {
    data?: any,
    status: string,
}

interface Props {
}

interface Props {}
export default class Component extends React.Component<Props, State> {
    private barRef:  React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        log.info('Page:constructor reached');
        super(props);
        this.barRef = React.createRef();
        this.state = {
            status: 'loading',
            data: []
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    async handlePageChange (e: number): Promise<void> {
        log.info('Page:handlePageChange reached');
        console.log(e)
        await this.loadData(e);
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

    render() {
        log.info('Page:render reached');
        let leftPanel = null;
        if (this.state.data.length != 0) {
            leftPanel = <LeftPane data={this.state.data} onPageChange={this.handlePageChange}/>
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
                        <Loader size={50} status='loading' duration={3000}>
                            <RightPane />
                        </Loader>
                    </div>
                </SplitPane>
            </div>
        );
    }
}



