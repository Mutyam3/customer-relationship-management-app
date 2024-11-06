import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const leadsApi = createApi({

      reducerPath:'leadsApi',
      baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:7777'
      }),
      endpoints : (builder)=>({
         login : builder.mutation({
          query : (user) =>({

            url : '/login',
            method : 'POST',
            body : user

          })   

         }),

         signup : builder.mutation({
               query : (user)=>({
                  url : '/signup',
                  method : 'POST',
                  body : user
               })
         }),

         getLeads : builder.query({
            query : ()=>({
                query:()=>({
                    url : "",
                    headers :{

                        "authorization" : window.localStorage.getItem("token")

                    }
                })
            })
            

         })
      })
      
})


export const { useLoginMutation, useSignupMutation, useGetLeadsQuery } = leadsApi