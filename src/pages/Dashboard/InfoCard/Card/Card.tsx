import { FC } from "react";
import styled, {css} from "styled-components";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


const Wrapper = styled.div.attrs<{index: number}>({
    className: "shadow_button-effect"
})`
  margin: 30px 20px 0 0;
  padding: 20px 20px 10px;
  width: 100%;
  border: 1px solid var(--black-alpha-200, rgba(0, 0, 0, 0.08));
  border-radius: 8px;
  
  th {
    padding: 12px 16px;
    border-bottom-color: rgba(0, 0, 0, 0.08);
    line-height: normal;
  }
  ${({index}) => index === 1 && css`
    margin-right: 0;
  ` }
`;
const Title = styled.div`
  margin-bottom: 20px;
  color: var(--text_dark);
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
`;
type Props = {
    data: { country: string, sales: string, total: string}[]
    index: number
}
const Card: FC<Props> = ({data, index}) => {
    return (
        <Wrapper index={index}>
            <Title>
                By country
            </Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Country</TableCell>
                        <TableCell align="right">Sales</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((elem) =>
                        <TableRow key={elem.country + String(index)}>
                            <TableCell>{elem.country}</TableCell>
                            <TableCell align="right">{elem.sales}</TableCell>
                            <TableCell align="right">{elem.total}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Wrapper>
    );
};

export default Card;