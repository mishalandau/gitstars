import ExitIcon from '@/sharedComponents/Icons/Exit';
import * as React from 'react';
import styled from 'styled-components';

const LogoutView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Title = styled.div`
    margin-left: .7rem;
`

interface LogoutProps {
    title: string;
}

export default class Logout extends React.Component<LogoutProps> {
	render() {
		return (
			<LogoutView>
                <ExitIcon width="24" />
                <Title>
                    {this.props.title}
                </Title>
			</LogoutView>
		);
	}
}
