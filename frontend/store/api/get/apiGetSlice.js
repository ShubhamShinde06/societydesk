import apiSlice from "../apiSlice";

const apiGetSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //account
    GetAccountAllData: builder.query({
      query: (DbID) => `/account/get/${DbID}`,
    }),
   
  })
})

export const {
 

} = apiGetSlice;

export default apiGetSlice;
