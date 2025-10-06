"use client"

import getAppointments from "@/lib/actions/appointments"
import { useQuery } from "@tanstack/react-query"

export function useGetAppointments () {
    const result = useQuery({
        queryKey : ["useAppointment"],
        queryFn : getAppointments
    })
    return result
}