"use server"

import { auth } from "@clerk/nextjs/server";
import { prisma } from "../prisma"


function transformAppointments(appointment: any) {
    return {
        ...appointment,
        patientName: `${appointment.user.firstName || ""} ${appointment.user.lastName || ""}` .trim(),
        patientEmail: appointment.user.email,
        doctorName: appointment.doctor.name,
        doctorImageUrl: appointment.doctor.imageUrl,
        date: appointment.date.toISOString().split("T")[0]
    }
}


export async function getAppointments() {
    try {
        const appointments = await prisma.appointment.findMany({
            include : {
                user : {
                    select : {
                        firstName : true,
                        lastName : true,
                        email : true,                   
                    }
                },
                doctor : {
                    select : {
                        name : true,
                        imageUrl : true
                    }
                }
            },
            orderBy : {createdAt : "desc"}
        })

        return appointments

    } catch (error) {
        console.log("Error fetching appointments", error);
        throw new Error("Failed to fetch appointments")               
    }
}


export async function getUserAppointmentStats() {
    try {
        const {userId} = await auth();
        if(!userId) 
            throw new Error("You must be authenticated")

        const user = await prisma.user.findUnique({
            where : {
                clerkId : userId
            }
        });

        if(!user) throw new Error("User not found")

        //These calls will run in parallel instead of waiting for each other
        const[totalCount, completedCount] = await Promise.all([
            prisma.appointment.count({
                where : {
                    userId : user.id
                }

            }),
            prisma.appointment.count({
                where : {
                    userId : user.id,
                    status : "COMPLETED",
                }
            })
        ])

        return {
            totalAppointments : totalCount,
            completedAppointments : completedCount
        }
        
    } catch (error) {
        console.error("Error fetching user appointment stats:", error)
        return {totalAppointment:0, completedAppointments: 0}
    }
}

export async function getUserAppointments() {
    try {
        const {userId} = await auth();
        if(!userId)
            throw new Error("You are not authenticated")
        
        const user = await prisma.user.findUnique({
            where : {
                clerkId : userId
            }
        });

        const appointments = await prisma.appointment.findMany({
            where : {
                userId : user?.id,
            },
            include : {
                user : {
                    select : {
                        firstName : true,
                        lastName : true,
                        email : true
                    }
                },
                doctor : {
                    select : {
                        name : true,
                        imageUrl : true
                    }
                }
            },
            orderBy : [
                {
                    date : "asc"
                },
                {
                    time : "asc"
                }
            ]
        })

        return appointments.map(transformAppointments)


    } catch (error) {
        console.error("Error fetching user appointments:", error)
        throw new Error("Failed to fetch user appointments")
    }
}

export default getAppointments
