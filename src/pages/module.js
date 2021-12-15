import { gql, useQuery } from "@apollo/client";
import React from "react";
import { ModuleDetail, QueryResult } from "../components";

export const GET_TRACK_AND_MODULES = gql`
  query getTracksWithModules($trackId: ID!) {
    track(id: $trackId) {
      modules {
        videoUrl
        content
        authorId
        trackId
        topic
        length
        title
        id
      }
    }
  }
`;

export const Module = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK_AND_MODULES, {
    variables: { trackId },
  });

  return (
    <QueryResult loading={loading} error={error} data={data}>
      <ModuleDetail track={data?.track} module={data?.track?.modules[0]} />
    </QueryResult>
  );
};
