import React from "react";
import { PageWrapper } from "../components";
import styled, { css } from "styled-components";
import { Link as OriginalLink } from "react-router-dom";
import useAxios from "axios-hooks";

const Link = styled(OriginalLink)`
  color: dodgerblue;
`;

const baseUrl = "http://localhost:4000/api";

const table = css`
  background-color: lightgrey;
`;

const row = css`
  background-color: white;
  border-bottom: 1px solid black;
  th,
  td {
    padding: 5px;
    min-width: 100px;
  }
`;

const headerRow = css`
  ${row}
`;

const error = css`
  color: red;
`;

const TableHeadings = () => (
  <tr css={headerRow}>
    <th>Country</th>
    <th>Region</th>
    <th>Population</th>
    <th>Area (sq. mi.)</th>
    <th>GDP</th>
    <th>Link</th>
  </tr>
);

const Row = ({ name, region, area, population, gdp }) => (
  <tr css={row}>
    <td>{name}</td>
    <td>{region}</td>
    <td>{area}</td>
    <td>{population}</td>
    <td>{gdp}</td>
    <td>
      <Link to={`/countries/${name}`}>More info</Link>
    </td>
  </tr>
);

export const CountryList = () => {
  const [{ data, loading, error }] = useAxios(`${baseUrl}/country`);

  if (loading) return <PageWrapper>Loading...</PageWrapper>;

  if (error)
    return (
      <PageWrapper>
        <p>Oops, there was an error</p>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <h1>List of Countries</h1>
      <table css={table}>
        <tbody>
          <TableHeadings />
          {data.countries.map(
            ({ name, region, area, population, gdp }, index) => (
              <Row
                key={index}
                name={name}
                region={region}
                area={area}
                population={population}
                gdp={gdp}
              />
            )
          )}
        </tbody>
      </table>
    </PageWrapper>
  );
};
