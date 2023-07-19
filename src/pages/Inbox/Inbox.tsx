import Header from "@/components/Header/Header";
import styled from "styled-components";
import HeaderContent from "@/pages/Inbox/HeaderContent/HeaderContent";


const Wrapper = styled.div`
  width: 100%;
`;

const Inbox = () => {
    return (
        <Wrapper>
            <Header>
                <HeaderContent/>
            </Header>

        </Wrapper>
    );
};

export default Inbox;