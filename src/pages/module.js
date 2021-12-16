import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Layout, ModuleDetail, QueryResult } from "../components";

export const GET_TRACK_AND_MODULES = gql`
  query getTracksWithModules($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      id
      title
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      length
      topic
      trackId
      authorId
      content
      videoUrl
    }
  }
`;

export const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_TRACK_AND_MODULES, {
    variables: { trackId, moduleId },
  });

  return (
    <Layout fullWidth={true}>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail id={moduleId} track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};
