import Header from "@/components/Header/Header";
import styled from "styled-components";
import HeaderContent from "@/pages/Inbox/HeaderContent/HeaderContent";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 47px);
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;
const Messages = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 441px;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
`;
const Inbox = () => {
    const dataMessages = [
        {
            fullName: "Tatiana Avdeenko",
            title: "Issue with account login",
            date: "1"
        }
    ];
    return (
        <Wrapper>
            <Header>
                <HeaderContent/>
            </Header>
            <Content>
                <Messages>

                </Messages>
            </Content>
        </Wrapper>
    );
};

export default Inbox;