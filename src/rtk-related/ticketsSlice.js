import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const searchId = 'cf10dc51a4b401ddd9a3bfa5a2efbf8e'

export const ticketsApi = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://aviasales-test-api.kata.academy/', // https://aviasales-test-api.kata.academy/
  }),
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: () => `tickets?searchId=${searchId}`,
    }),
  }),
})

export const { useGetTicketsQuery } = ticketsApi
