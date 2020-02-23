import React from "react";
import { PageWrapper } from "../components";
import { useParams, Link } from "react-router-dom";
import useAxios from "axios-hooks";

const baseUrl = "http://localhost:4000/api";

export const CountryPage = () => {
  const { country } = useParams();

  const [{ data, loading, error }] = useAxios(
    `${baseUrl}/countries/${country}`
  );

  if (loading) return <PageWrapper>Loading...</PageWrapper>;

  if (error)
    return (
      <PageWrapper>
        <p>Oops, there was an error</p>
      </PageWrapper>
    );

  const { country: res } = data;

  const keys = Object.keys(res);
  return (
    <PageWrapper>
      <Link to="/countries">Back to list</Link>
      <h1>{res["Country"]}</h1>
      <ul>
        {keys.map((key, index) => (
          <li key={index}>{`${key}:  ${res[key]}`}</li>
        ))}
      </ul>
    </PageWrapper>
  );
};
