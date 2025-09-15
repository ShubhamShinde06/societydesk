import apiSlice from "../apiSlice";

const apiPutSlice = apiSlice.injectEndpoints({
  overrideExisting: true, // Add this line
  endpoints: (builder) => ({
    // accountPut: builder.mutation({
    //   query: (data) => ({
    //     url: "/account/",
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),

   
  }),
});

export const {
 
} = apiPutSlice;
