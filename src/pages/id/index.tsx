import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import { Avatar, Icon, Badge } from 'antd';

interface State {
}

interface Props {
}

interface Props {}
export default class Component extends React.Component<Props, State> {

    constructor(props: Props) {
        log.info('Id:constructor reached');
        super(props);
        this.state = {
            height: 0
        }
    }

    componentDidMount(): void {
        log.info('Id:componentDidMount reached');
    }

    render() {
        log.info('Id:render reached');

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.logo].join(' ')}>
                    <img src="images/logo.png" style={{width: '100%'}}/>
                </div>
                <div className={[style.avatar].join(' ')}>
                    <Badge dot>
                        <Avatar style={{ backgroundColor: '#2d7ed0' }} icon="user" size={96}/>
                    </Badge>
                </div>
                <div className={[style.userName].join(' ')}>
                    John Davelouis Jr.
                </div>
                <div className={[style.userPosition].join(' ')}>
                    Administrador
                </div>
            </div>
        );
    }
}



