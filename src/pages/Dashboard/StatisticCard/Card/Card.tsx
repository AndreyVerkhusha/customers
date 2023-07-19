import styled from "styled-components";
import { FC } from "react";
import arrow from "@/assets/dashboard/arrow.svg";

const Wrapper = styled.div.attrs({
    className: "shadow_button-effect"
})`
  padding: 20px;
  margin-right: 20px;
  max-width: 265px;
  width: 100%;
  color: var(--text_dark);
  border-radius: 8px;
  border: 1px solid var(--black-alpha-200, rgba(0, 0, 0, 0.08));

  &:last-child {
    margin-right: 0;
  }
`;
const Label = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
`;
const Value = styled.div`
  margin: 4px 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`;
const Percent = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 20px;
  opacity: 0.8;

  span {
    margin-left: 10px;
  }
`;


type Props = {
    label: string
    value: string
    percent: string
}
const Card: FC<Props> = ({percent, label, value}) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Value>{value}</Value>
            <Percent>
                <img src={arrow} alt="arrow"/>
                <span>{percent}</span>
            </Percent>
        </Wrapper>
    );
};

export default Card;