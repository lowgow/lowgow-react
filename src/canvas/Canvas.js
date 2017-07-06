import React from 'react';
import example from './example.svg';
import './Canvas.css';

class Canvas extends React.Component {
    render() {
        return (
            <div>
                <img src={example} className="Product-logo" alt="logo" />
            </div>
        );
    }
}

export default Canvas;