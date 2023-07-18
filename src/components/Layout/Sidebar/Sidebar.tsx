import { useDispatch, useSelector } from "react-redux";
import { setValue } from "@/store/reducers/reducer";
import styled, { css } from "styled-components";
import { RootState } from "@/store/store";

import ListNav from "@/components/Layout/Sidebar/ListNav/ListNav";
import ListTags from "@/components/Layout/Sidebar/ListTags/ListTags";

import { ReactComponent as Collapse } from "@/assets/sidebar/collapse.svg";
import react_icon from "@/assets/sidebar/react_icon.svg";
import profile from "@/assets/sidebar/profile.png";

const CollapseIcon = styled.div<{ open: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: -15px;
  width: 30px;
  height: 30px;
  transform: translateY(-50%);
  cursor: pointer;
  border-radius: 50%;
  background: rgba(231, 231, 232, .4);
  box-shadow: 0 15px 40px 0 rgba(0, 0, 0, 0.40), 0 5px 10px 0 rgba(0, 0, 0, 0.20), 0 0 0 1px rgba(0, 0, 0, 0.10);
  transition: var(--linear);

  svg {
    transition: var(--linear);
    transform: rotate(180deg);
  }

  &:hover {
    background: rgba(231, 231, 232, 1);
    transform: translateY(-50%) scale(1.1);
  }

  ${({open}) => open && css`
    svg {
      transform: rotate(0deg);
    }
  `}
`;
const Profile = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
`;
const Logo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  transition: var(--linear);

  img {
    margin-right: 8px;
  }

  span {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }
`;
const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Wrapper = styled.div<{ open: boolean }>`
  padding: 10px;
  position: relative;
  max-width: 225px;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0 15px 40px 0 rgba(0, 0, 0, 0.40), 0 5px 10px 0 rgba(0, 0, 0, 0.20);
  transition: var(--linear);

  ${({open}) => !open && css`
    max-width: 52px;

    ${Header} {
      justify-content: center;

      ${Logo} {
        display: none;
      }
    }
  `}
`;
const Sidebar = () => {
    const dispatch = useDispatch();
    const {open} = useSelector((state: RootState) => state.sidebarReducer);

    return (
        <Wrapper open={open}>
            <Header>
                <Logo>
                    <img src={react_icon} alt="react_icon"/>
                    <span>Saas UI</span>
                </Logo>
                <Profile>
                    <img src={profile} alt="profile"/>
                </Profile>
            </Header>
            <ListNav open={open}/>
            <ListTags open={open}/>
            <CollapseIcon
                open={open}
                onClick={() => dispatch(setValue(!open))}
            >
                <Collapse/>
            </CollapseIcon>
        </Wrapper>
    );
};

export default Sidebar;