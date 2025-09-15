import apiSlice from "../apiSlice";

const apiPostSlice = apiSlice.injectEndpoints({
  overrideExisting: true, // Add this line
  endpoints: (builder) => ({
    //account
    // PostGetAccountData: builder.mutation({
    //   query: (data) => ({
    //     url: "/account/get-account-by-info",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  
  }),
});

export const {
 
} = apiPostSlice;
