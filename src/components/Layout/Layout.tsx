import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

const Wrapper = styled.div`
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Layout = () => {
    return (
        <Wrapper>
            <Sidebar/>
            <Content>
                <Outlet/>
            </Content>
        </Wrapper>
    ); 
};

export default Layout;