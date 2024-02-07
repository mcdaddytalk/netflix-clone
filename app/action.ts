"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import prisma from "./utils/db"
import { revalidatePath } from "next/cache"

export async function addToWatchlist(formData: FormData) {
    const session = await getServerSession(authOptions)
    
    const movieId = formData.get("movieId");
    const pathname = formData.get("pathname") as string;

    const data = await prisma.watchList.create({
        data: {
            userId: session?.user?.email as string,
            movieId: Number(movieId)
        }
    })
    
    revalidatePath(pathname)
}

export async function deleteFromWatchlist(formData: FormData) {
    const watchListId = formData.get("watchListId") as string;
    const pathname = formData.get("pathname") as string;

    console.log('Watchlist ID:  ', watchListId)
    const data = await prisma.watchList.delete({
        where: {
            id: watchListId
        }
    })
    
    revalidatePath(pathname)
}