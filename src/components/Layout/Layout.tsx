import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

const Wrapper = styled.div`
  display: flex;
`;
const Layout = () => {
    return (
        <Wrapper>
            <Sidebar/>
            <Outlet/>
        </Wrapper>
    );
};

export default Layout;