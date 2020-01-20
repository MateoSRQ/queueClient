import React from 'react';
import style from './index.module.css';
import log from 'loglevel';


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
        log.info('Page.RightPane:constructor reached');
        super(props);
        this.barRef = React.createRef();
        this.state = {
            height: 0
        }
    }

    componentDidMount(): void {
        log.info('Page.RightPane:componentDidMount reached');
        // if (this!.barRef!.current!.offsetHeight > 0) {
        //     this.setState({height: this!.barRef!.current!.offsetHeight});
        // }
    }

    render() {
        log.info('Page.RightPane reached');

        return (
            <div className={[style.component].join(' ')}>

            </div>
        );
    }
}



