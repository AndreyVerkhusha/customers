import { FC } from "react";
import styled, { css } from "styled-components";

type Props = {
    color: string
    label: string
    count: number
    open: boolean
}

const Figure = styled.div<{ color: string }>`
  margin-right: 8px;
  width: 14px;
  min-width: 14px;
  height: 14px;
  border-radius: 50%;

  ${(props) => css`
    background: ${props.color};
  `}
`;
const Label = styled.div`
  width: 100%;
`;
const Count = styled.div`
  color: var(--grey);
`;
const Wrapper = styled.div<{ open: boolean }>`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  width: 100%;

  ${({open}) => !open && css`;
    margin: 0;
    padding: 6px 0;
    justify-content: center;
    width: 34px;

    &:first-child {
      margin-top: 25px;
    }

    ${Figure} {
      margin: 0;
    }

    ${Label}, ${Count} {
      display: none;
    }
  `}
`;
const Tag: FC<Props> = ({count, label, color, open}) => {
    return (
        <Wrapper open={open}>
            <Figure color={color}/>
            <Label>{label}</Label>
            <Count>{count}</Count>
        </Wrapper>
    );
};

export default Tag;