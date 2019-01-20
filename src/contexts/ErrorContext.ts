import * as React from 'react'

export default React.createContext({
    onChangeValue: (_: string): any => null,
    value: ''
});
