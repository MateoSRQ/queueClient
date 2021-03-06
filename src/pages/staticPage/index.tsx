import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import Menu from '../../components/menu';
import Header from '../header';
import LeftPane from './panes/leftPane';
import RightPane from './panes/rightPane';

import { Scrollbars } from 'react-custom-scrollbars';


interface State {
    height: number,
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
            height: 0
        }
    }

    componentDidMount(): void {
        log.info('Page:componentDidMount reached');
        // if (this!.barRef!.current!.offsetHeight > 0) {
        //     this.setState({height: this!.barRef!.current!.offsetHeight});
        // }
    }

    render() {
        log.info('Page:render reached');

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.titleContainer].join(' ')}>
                    <Header />
                </div>
                <div className={[style.pageContainer].join(' ')}>
                    <div className={[style.leftPanel].join(' ')}>
                        <LeftPane />
                    </div>
                    <div className={[style.rightPanel].join(' ')}>
                        <RightPane />
                    </div>
                </div>
            </div>
        );
    }
}



