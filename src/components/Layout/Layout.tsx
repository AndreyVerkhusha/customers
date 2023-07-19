import { Navigate, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

const Wrapper = styled.div`
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100vh;
`;
const Layout = () => {
    const {pathname} = useLocation();
    return (
        <Wrapper>
            {pathname === "/" && <Navigate to="/dashboard"/>}
            <Sidebar/>
            <Content>
                <Outlet/>
            </Content>
        </Wrapper>
    ); 
};

export default Layout;