import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import Menu from '../../components/menu';
import { Scrollbars } from 'react-custom-scrollbars';
import DynamicPage from '../dynamicPage';
import Id from '../id';

interface State {
    height: number,
}

interface Props {
}

interface Props {}
export default class Component extends React.Component<Props, State> {
    private sidebarRef:  React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        log.info('Main:constructor reached');
        super(props);
        this.sidebarRef = React.createRef();
        this.state = {
            height: 0
        }
    }

    componentDidMount(): void {
        log.info('Main:componentDidMount reached');
        if (this!.sidebarRef!.current!.offsetHeight > 0) {
            this.setState({height: this!.sidebarRef!.current!.offsetHeight});
        }
    }

    render() {
        log.info('Main:render reached');
        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.sidebarContainer].join(' ')} ref={this.sidebarRef}>
                    <div className={[style.idContainer].join(' ')}>
                        <Id />
                    </div>
                    <div className={[style.menuContainer].join(' ')}>
                        <Scrollbars
                            style={{width: 320, height: this.state.height - 320}}
                        >
                            <Menu />
                        </Scrollbars>
                    </div>
                </div>
                <div className={[style.bodyContainer].join(' ')}>
                    <DynamicPage />
                </div>
            </div>
        );
    }
}



