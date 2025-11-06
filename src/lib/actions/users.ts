"use server"

import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "../prisma"

export async function syncUser() {
    
    try {
        const user = await currentUser()  // checking if the user logged in or exist in clerk // exist only if they signed up before else no
        if(!user) return // if not signed up before return 
        
        // else check in the user table where the ClerkId match
        const existingUser = await prisma.user.findUnique({
            where : {
                clerkId: user.id
            }
        })
        //if matched then return users Details 
        if(existingUser)
            return existingUser;

        // else create a new user into the User database
        const dbUser = await prisma.user.create({
            data: {
                clerkId : user.id,
                firstName:  user.firstName,
                lastName : user.lastName,
                email : user.emailAddresses[0].emailAddress,
                phone : user.phoneNumbers[0]?.phoneNumber
            }
        })
        // return that user
        return dbUser
    } catch (error) {
        console.error("Error in syncUser server action", error);        
    }
}