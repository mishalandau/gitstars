import * as React from 'react';
interface IMargin {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
}

export default ({ top, right, bottom, left }: IMargin) => {
    return <div style={{
        display: 'block',
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right,
        marginTop: top
    }}/>;
}