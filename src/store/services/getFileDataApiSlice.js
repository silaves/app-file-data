import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config/config";

export const getFileAPI = createApi({
  reducerPath: "getFileAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.getFileDataHost}`,
  }),
  endpoints: (builder) => ({
    getAllFilesData: builder.query({
      query: () => `${config.getFileDataUrl}`,
    }),
    getContentFile: builder.query({
      query: (fileName) => `${config.getFileListUrl}?fileName=${fileName}`,
    }),
    getListOfFiles: builder.query({
      query: () => `${config.getFileListUrl}`,
    }),
  }),
});

export const {
  useLazyGetAllFilesDataQuery,
  useLazyGetContentFileQuery,
  useLazyGetListOfFilesQuery
} = getFileAPI;
