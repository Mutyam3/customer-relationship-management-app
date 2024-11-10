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
                
                    url : "",
                    headers :{

                        "authorization" : window.localStorage.getItem("token")

                    }
                
            })
            

         }),

         getLeadById : builder.query({
               query : (id)=>({
                   url : `leaddetails/${id}`,
                   headers : {
                     "authorization" : window.localStorage.getItem("token")
                   }
               })
          })
       ,

         addLead : builder.mutation({
                query : (lead)=>({
                     url : '/addlead',
                     headers :{

                      "authorization" : window.localStorage.getItem("token")

                    },
                     method : 'POST',
                     body : lead
                })
         }),

         addLeadRemarksById : builder.mutation({
                  query : ({remarks,id})=>({
                       url : `/addremark/${id}`,
                       headers : {
                        "authorization" : window.localStorage.getItem("token")

                       },
                       method : 'PUT',
                       body : remarks
                  })
         })

      })

    })
      



export const { useLoginMutation, useSignupMutation, useGetLeadsQuery, useAddLeadMutation, useGetLeadByIdQuery, useAddLeadRemarksByIdMutation } = leadsApi