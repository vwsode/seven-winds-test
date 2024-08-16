import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RowType, RowNode } from "../components/Table/Table.types";

const API_URI = "http://185.244.172.108:8081";

const api = createApi({
  reducerPath: "outlayRowsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URI}/v1/outlay-rows/entity` }),
  endpoints: (builder) => ({
    createEntity: builder.mutation<{ eID: number }, void>({
      query: () => ({
        url: "/create",
        method: "POST",
      }),
    }),

    getRows: builder.query<RowType[], number>({
      query: (eID: number) => `/${eID}/row/list`,
    }),

    createRow: builder.mutation<
      RowType,
      { eID: number; parentId: number | null }
    >({
      query: ({ eID, parentId }) => ({
        url: `/${eID}/row/create`,
        method: "POST",
        body: {
          parentId: parentId ?? null,
          rowName: "",
          total: 0,
          salary: 0,
          mimExploitation: 0,
          machineOperatorSalary: 0,
          materials: 0,
          mainCosts: 0,
          supportCosts: 0,
          equipmentCosts: 0,
          overheads: 0,
          estimatedProfit: 0,
        },
      }),
    }),

    updateRow: builder.mutation<
      void,
      { eID: number; rID: number; updatedRow: Partial<RowNode> }
    >({
      query: ({ eID, rID, updatedRow }) => ({
        url: `/${eID}/row/${rID}/update`,
        method: "POST",
        body: {
          ...updatedRow,
          total: updatedRow.total ?? 0,
          salary: updatedRow.salary ?? 0,
          mimExploitation: updatedRow.mimExploitation ?? 0,
          machineOperatorSalary: updatedRow.machineOperatorSalary ?? 0,
          materials: updatedRow.materials ?? 0,
          mainCosts: updatedRow.mainCosts ?? 0,
          supportCosts: updatedRow.supportCosts ?? 0,
          equipmentCosts: updatedRow.equipmentCosts ?? 0,
          overheads: updatedRow.overheads ?? 0,
          estimatedProfit: updatedRow.estimatedProfit ?? 0,
        },
      }),
    }),

    deleteRow: builder.mutation<void, { eID: number; rID: number }>({
      query: ({ eID, rID }) => ({
        url: `/${eID}/row/${rID}/delete`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateEntityMutation,
  useGetRowsQuery,
  useCreateRowMutation,
  useUpdateRowMutation,
  useDeleteRowMutation,
} = api;

export default api;
