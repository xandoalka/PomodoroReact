import { useContext } from "react";
import { StateContext } from "../StateProvider";
import styled, { css } from 'styled-components';

const Tags = () => {
    const {activeTag, setActiveTag} = useContext(StateContext)

    const handleClick = (index) => {
        setActiveTag(index)
    }

    return ( 
        <div className="bg-secondary h-20 w-[40rem] flex gap-4 items-center mx-auto rounded-[5rem]">
            {["Work", "Short Break", "Long Break"].map((tag, index) => (
                <Tag key={index} activeTag={activeTag === index} onClick={() => handleClick(index)} className=" flex-1 text-center h-16 rounded-[5rem] text-3xl">{tag}</Tag>
            ))}
        </div>
     );
}
 
export default Tags;

const Tag = styled.button`

 ${({activeTag}) => activeTag && css`
    background: ${({theme}) => theme.colors.primary};`}
`