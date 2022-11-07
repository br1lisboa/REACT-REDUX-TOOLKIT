
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({

    /* nombre que tendra nuestro reducer */
    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    })

})

export const { useGetTodosQuery } = todosApi