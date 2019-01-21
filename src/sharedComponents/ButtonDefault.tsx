import * as React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
	width: 100%;
    padding: 15px;
    font-size: 1rem;
	border-radius: 4px;
	box-sizing: border-box;
	outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
    color: #636363;
    background-color: #FFFFFF;

    ${props => props.type === 'active' && css`
        box-shadow: 0 3px 7px rgba(25, 91, 245, 0.2);
        color: #FFFFFF;
        background-color: #195BF5;
    `}

    &:active {
        top: 1px;
        position: relative;
    }
`;

type StatusType = 'default' | 'active'
interface IButton {
    onClick?: (e?: React.MouseEvent) => void;
    title: string;
    type: StatusType;
}

export default class ButtonDefault extends React.Component<IButton> {
    static defaultProps: IButton = {
        onClick: () => null,
        title: 'Submit',
        type: 'default'
    }

	render() {
		return (
            <Button onClick={this.props.onClick} type={this.props.type}>{this.props.title}</Button>
		);
	}
}
