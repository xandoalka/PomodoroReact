import { useContext, useEffect } from "react";
import styled from "styled-components";
import Clock from "./Clock/Clock";
import { StateContext } from "../../StateProvider";

const CircularProgress = () => {
  const { progress, setProgress, time, initTime } = useContext(StateContext);

  useEffect(() => {
    setProgress((time / initTime) * 100);
  }, [progress, time]);

  return (
    <Outer
      progress={progress}
      className="w-[35rem] h-[35rem] rounded-[50%] mx-auto grid place-items-center"
    >
      <Inner className="w-[32rem] h-[32rem] bg-white rounded-[50%] mx-auto grid place-items-center">
        <Clock></Clock>
      </Inner>
    </Outer>
  );
};

export default CircularProgress;

const Outer = styled.div`
  background: conic-gradient(
    ${({ theme }) => theme.colors.primary} ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
`;

const Inner = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
`;
