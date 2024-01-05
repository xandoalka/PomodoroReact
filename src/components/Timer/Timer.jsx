import CircularProgress from "./CircularProgress/CircularProgress";
import styled from "styled-components";

const Timer = () => {
    return ( 
        <TimerContainer className="w-[45rem] h-[45rem] mt-16 py-8 rounded-[50%] mx-auto grid place-items-center shadow-[-50px_-50px_150px_rgba(158,158,158,0.2),_50px_-10px_100px_rgba(0,0,0,0.5)]">
            <CircularProgress></CircularProgress>
        </TimerContainer>
     );
}
 
export default Timer;

const TimerContainer = styled.div`
    background: conic-gradient(
        ${({theme}) => theme.colors.secondary},
        ${({theme}) => theme.colors.bg} 150deg,
        ${({theme}) => theme.colors.secondary}
    );
`