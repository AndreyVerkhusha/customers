import { useState } from "react";
import styled, { css } from "styled-components";

import Collapse from "@mui/material/Collapse";
import Tag from "@/components/Layout/Sidebar/ListTags/Tag/Tag";

import { ReactComponent as Arrow } from "@/assets/sidebar/collapse_arrow.svg";

const Trigger = styled.div<{ openCollapse: boolean }>`
  padding: 2px 8px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;

  span {
    color: var(--grey);
    font-size: 12px;
  }

  svg {
    transition: var(--linear);
  }

  ${({openCollapse}) => openCollapse && css`
    svg {
      transform: rotate(-180deg);
    }
  `}
`;
const Wrapper = styled.div<{ open: boolean }>`
  width: 100%;
  user-select: none;
  
  ${({open}) => !open && css`;

    ${Trigger} {
      display: none;
    }
  `}
`;
const ListTags = ({open}: { open: boolean }) => {

    const [openCollapse, setOpenCollapse] = useState<boolean>(true);
    const tagsList = [
        {color: "#0EA371", label: "Developer", count: 210},
        {color: "#E53E3E", label: "Designer", count: 83},
        {color: "#C37B24", label: "Partner", count: 12},
        {color: "#a30e80", label: "Prospect", count: 23}
    ];
    return (
        <Wrapper open={open}>
            <Trigger
                onClick={() => setOpenCollapse(!openCollapse)}
                openCollapse={openCollapse}
            >
                <span>Tags</span>
                <Arrow/>
            </Trigger>
            <Collapse
                in={openCollapse}
                timeout="auto"
                unmountOnExit
            >
                {tagsList.map((elem) =>
                    <Tag {...elem} key={elem.label} open={open}/>
                )}
            </Collapse>
        </Wrapper>
    );
};

export default ListTags;