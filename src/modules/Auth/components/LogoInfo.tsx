import LogoIcon from '@/sharedComponents/Icons/Logo';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className: "flex-hor-start-or-s-between",
})`
    align-items: center;
`;

const Title = styled.h1`
    font-size: 3.7rem;
`;

const LogoWrapper = styled.div`
    max-width: 120px;
    max-height: 120px;
`;


export default class LogoInfo extends React.Component {
    render() {
        return(
            <Container>
                <LogoWrapper>
                    <LogoIcon
                        width="100%"
                        height="100%"
                        color="#105CFA" />
                </LogoWrapper>
                <Title>Gitstars</Title>
            </Container>
        );
    }
}
