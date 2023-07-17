import { FC } from "react";
import styled, { css } from "styled-components";

type Props = {
    color: string
    label: string
    count: number
}

const Wrapper = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  width: 100%;
`;
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
const Tag: FC<Props> = ({count, label, color}) => {
    return (
        <Wrapper>
            <Figure color={color}/>
            <Label>{label}</Label>
            <Count>{count}</Count>
        </Wrapper>
    );
};

export default Tag;