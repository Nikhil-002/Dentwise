"use client"

import { geteDoctors } from "@/lib/actions/doctors"
import { useQuery } from "@tanstack/react-query"

export function useGetDoctors () {
    const result = useQuery({
        queryKey : ["getDoctors"],
        queryFn : geteDoctors
    })

    return result
}