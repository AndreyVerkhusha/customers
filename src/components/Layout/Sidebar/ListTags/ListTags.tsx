import { useState } from "react";
import styled, { css } from "styled-components";

import Collapse from "@mui/material/Collapse";
import Tag from "@/components/Layout/Sidebar/ListTags/Tag/Tag";

import { ReactComponent as Arrow } from "@/assets/sidebar/collapse_arrow.svg";

const Wrapper = styled.div`
  width: 100%;
`;
const Trigger = styled.div<{ open: boolean }>`
  padding: 2px 8px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  span {
    color: var(--grey);
    font-size: 12px;
  }

  svg {
    transition: var(--linear);
  }

  ${({open}) => open && css`
    svg {
      transform: rotate(-180deg);
    }
  `}
`;
const ListTags = () => {
    const [open, setOpen] = useState<boolean>(true);
    const tagsList = [
        {color: "#0EA371", label: "Developer", count: 210},
        {color: "#E53E3E", label: "Designer", count: 83},
        {color: "#C37B24", label: "Partner", count: 12},
        {color: "#a30e80", label: "Prospect", count: 23}
    ];
    return (
        <Wrapper>
            <Trigger
                onClick={() => setOpen(!open)}
                open={open}
            >
                <span>Tags</span>
                <Arrow/>
            </Trigger>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
            >
                {tagsList.map((elem) =>
                    <Tag {...elem} key={elem.label} />
                )}
            </Collapse>
        </Wrapper>
    );
};

export default ListTags;