import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IFakePosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const fakePostsApi = createApi({
  reducerPath: "fakePostsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    getFakePosts: build.query<IFakePosts[], string>({
      query: (limit) => `posts?${limit && `_limit=${limit}`}`,
    })
  })
})

export const { useGetFakePostsQuery } = fakePostsApi;