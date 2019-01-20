import * as React from 'react';
import styled from 'styled-components';

const ErrorView = styled.div`
    width: 100%;
    height: 3rem;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    color: #FFFFFF;
    background-color: #E15858;
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
            <ErrorView>{this.props.children}</ErrorView>
		);
	}
}
