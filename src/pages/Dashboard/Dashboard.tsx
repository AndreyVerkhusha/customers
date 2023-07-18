import Header from "@/components/Header/Header";
import styled from "styled-components";

import discord_icon from "@/assets/dashboard/discord_icon.svg";
import git_icon from "@/assets/dashboard/git_icon.svg";
import telegram_icon from "@/assets/dashboard/telegram_icon.svg";
import StatisticCard from "@/pages/Dashboard/StatisticCard/StatisticCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.div`
  color: #0E1012;
  font-weight: 500;
  line-height: 20px;
`;
const Social = styled.div`
  display: flex;
`;
const Button = styled.div`
  margin-right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--active);
  transition: var(--linear);
  cursor: pointer;

  img {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: var(--active);
  }
`;
const Content = styled.div`
  padding: 50px 40px;
`;
const Dashboard = () => {
    const socialButtons: { icon: string, link: string }[] = [
        {icon: discord_icon, link: "#"},
        {icon: git_icon, link: "#"},
        {icon: telegram_icon, link: "#"}
    ];
    return (
        <Wrapper>
            <Header>
                <HeaderContent>
                    <Label>
                        Saas UI
                    </Label>
                    <Social>
                        {socialButtons.map((elem) =>
                            <Button
                                key={elem.link}
                                onClick={() => setTimeout(() => window.open(elem.link, "_blank"))}
                            >
                                <img src={elem.icon} alt="icon"/>
                            </Button>
                        )}
                    </Social>
                </HeaderContent>
            </Header>
            <Content>
                <StatisticCard/>
            </Content>
        </Wrapper>
    );
};

export default Dashboard;