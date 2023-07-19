import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import dashboard_icon from "@/assets/sidebar/dashboard_icon.svg";
import inbox_icon from "@/assets/sidebar/inbox_icon.svg";
import contacts_icon from "@/assets/sidebar/contacts_icon.svg";

const Li = styled.li<{ active: boolean }>`
  padding: 6px 12px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: var(--linear);
  cursor: pointer;
  user-select: none;

  img {
    margin-right: 8px;
  }

  &:hover {
    background: var(--active);
  }

  ${({active}) => active && css`;
    background: var(--active);
  `}`;
const Wrapper = styled.ul<{ open: boolean }>`
  margin-bottom: 10px;
  width: 100%;

  ${({open}) => !open && css`
    max-width: 52px;

    ${Li} {
      display: flex;
      justify-content: center;
      width: 31px;

      img {
        margin: 0 0 0 1px;
      }

      span {
        display: none;
      }
    }
  `}
`;
const ListNav = ({open}: { open: boolean }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const listNavigation: { icon: string, label: string, url: string }[] = [
        {icon: inbox_icon, label: "Inbox", url: "/inbox"},
        {icon: contacts_icon, label: "Contacts", url: "/contacts"},
        {icon: dashboard_icon, label: "Dashboard", url: "/dashboard"}
    ];
    return (
        <Wrapper open={open}>
            {listNavigation.map((elem) =>
                <Li
                    onClick={() => navigate(elem.url)}
                    active={location.pathname === elem.url}
                    key={elem.url}
                >
                    <img src={elem.icon} alt={elem.label}/>
                    <span>{elem.label}</span>
                </Li>
            )}
        </Wrapper>
    );
};

export default ListNav;