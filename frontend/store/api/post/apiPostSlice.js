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

    //auth
    PostSocietyRegister: builder.mutation({
      query: ({SocietyData, MemberData}) => ({
        url: "/auth/society-resgiter",
        method: "POST",
        body: {SocietyData, MemberData},
      }),
    }),
  
  }),
});

export const {

  usePostSocietyRegisterMutation
 
} = apiPostSlice;
