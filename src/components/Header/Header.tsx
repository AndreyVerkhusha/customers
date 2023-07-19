import styled from "styled-components";
import { ReactNode } from "react";

const Wrapper = styled.div`
  padding: 7px 16px;
  width: 100%;
  transition: var(--linear);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: sticky;
`;
const Header = ({children}: { children: ReactNode }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default Header;