"use client"

import { createDoctor, geteDoctors, updateDoctor } from "@/lib/actions/doctors"
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function useGetDoctors () {
    const result = useQuery({
        queryKey : ["getDoctors"],
        queryFn : geteDoctors
    })

    return result
}


export function useCreateDoctor() {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn : createDoctor,
        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey : ["getDoctors"]
            })
        },
        onError : (error) => console.log("Error while creating a doctor")        
    })

    return result
}



export function useUpdateDoctor() {
    const queryClient = useQueryClient();

    const result = useMutation({
        mutationFn : updateDoctor,
        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey : ["getDoctors"]
            })
        },
        onError : (error) => console.error("Failed to update doctor: ",error)        
    })

    return result
}

