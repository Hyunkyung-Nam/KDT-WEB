import React from 'react';
import styled from 'styled-components';

//CSS in JS : js안에 css를 작성함
//styled-components, emotion, styled-jsx등이 있음
//각각의 컴포넌트마다 격리된 스타일 적용 가능 // module.css 와 동일

const StyledContainer = styled.div`
    display: flex;
`;
const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) =>
        //props는 매개변수로 받은값이라 다른거 써도 된다!
        props.bgColor || 'blue'}; //bgColor가 없는경우 기본값넣어주기

    &:hover {
        transform: translateY(-20px);
    }
`;

export default function StyledComponent() {
    return (
        <div>
            <StyledContainer>
                <StyledBox bgColor="red"></StyledBox>
                <StyledBox bgColor="orange"></StyledBox>
                <StyledBox bgColor="yellow"></StyledBox>
                <StyledBox></StyledBox>
            </StyledContainer>
        </div>
    );
}
