import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: 100%;
    padding: 15px;
    font-size: 1rem;
	border-radius: 4px;
	box-sizing: border-box;
	outline: none;
    border: none;
    cursor: pointer;
    background-color: #195BF5;
    color: #FFFFFF;

    &:active {
        top: 1px;
        position: relative;
    }
`;
interface IButton {
    onClick?: (e?: React.MouseEvent) => void;
    title: string;
}

export default class ButtonDefault extends React.Component<IButton> {
    static defaultProps: IButton = {
        onClick: () => null,
        title: 'Submit'
    }

	render() {
		return (
            <Button onClick={this.props.onClick}>{this.props.title}</Button>
		);
	}
}
