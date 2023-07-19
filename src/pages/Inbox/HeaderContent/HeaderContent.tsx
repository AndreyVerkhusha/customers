import styled from "styled-components";
import filter from "@/assets/inbox/filter.svg";
import collapse from "@/assets/inbox/collapse.svg";

const Wrapper = styled.div`
  display: flex;
`;
const FilterRow = styled.div`
  padding-right: 16px;
  position: relative;
  max-width: 425px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    height: 145%;
    width: 1px;
    background: rgba(0, 0, 0, 0.08);
  }
`;
const InfoRow = styled.div`
  padding-left: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const Label = styled.div`
  color: #0E1012;
  font-weight: 500;
  line-height: 20px;
`;
const Filter = styled.div`
  width: 38px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: #F1F1F2;
  cursor: pointer;
  transition: var(--linear);

  &:hover {
    background: var(--active);
  }
`;
const Buttons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const Button = styled.div`
  margin-right: 5px;
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid var(--active);
  cursor: pointer;
  transition: var(--linear);

  span {
    color: #1D2025;
    font-weight: 600;
    line-height: 20px;
  }

  &:nth-child(2) {
    background: rgba(255, 0, 0, 0.38);
    color: white;

    &:hover {
      background: red;
    }
  }

  &:hover {
    background: var(--active);
  }
`;
const HeaderContent = () => {
    return (
        <Wrapper>
            <FilterRow>
                <Label>
                    Inbox
                </Label>
                <Filter>
                    <img src={filter} alt="filter"/>
                </Filter>
            </FilterRow>
            <InfoRow>
                <Label>
                    John Smith
                </Label>
                <Buttons>
                    <Button>
                        <span>Mark as read</span>
                    </Button>
                    <Button>
                        <span>Remove</span>
                    </Button>
                    <Filter>
                        <img src={collapse} alt="collapse"/>
                    </Filter>
                </Buttons>
            </InfoRow>
        </Wrapper>
    );
};

export default HeaderContent;