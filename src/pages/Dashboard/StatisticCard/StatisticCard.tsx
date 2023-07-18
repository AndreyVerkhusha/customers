import styled from "styled-components";
import Card from "@/pages/Dashboard/StatisticCard/Card/Card";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const StatisticCard = () => {
    const listCards: { label: string, value: string, percent: string }[] = [
        {label: "Revenue", value: "€43.400", percent: "23.36%"},
        {label: "New customers", value: "130", percent: "23.36%"},
        {label: "Active users", value: "1337", percent: "23.36%"},
        {label: "Churned customers", value: "5", percent: "23.36%"}
    ];
    return (
        <Wrapper>
            {listCards.map((elem) =>
                <Card
                    {...elem}
                    key={elem.value}
                />
            )}
        </Wrapper>
    );
};

export default StatisticCard;