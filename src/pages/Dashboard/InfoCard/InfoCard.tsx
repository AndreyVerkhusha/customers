import styled from "styled-components";
import Card from "@/pages/Dashboard/InfoCard/Card/Card";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const InfoCard = () => {
    const data: { country: string, sales: string, total: string }[] = [
        {country: "US", sales: "70", total: "21 700 €"},
        {country: "Canada", sales: "40", total: "13 020 €"},
        {country: "Neteherlands", sales: "15", total: "4990 €"},
        {country: "Germany", sales: "5", total: "1500 €"}
    ];
    return (
        <Wrapper>
            {Array(2).fill(0).map((_, index) =>
                <Card
                    data={data}
                    index={index}
                    key={index}
                />
            )}
        </Wrapper>
    );
};

export default InfoCard;