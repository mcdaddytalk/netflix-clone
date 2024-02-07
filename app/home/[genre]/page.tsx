import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import MovieCard from "@/app/components/MovieCard";

async function getData(category: string, userId: string) {
    let categoryFilter = '';
    switch(category) {
        case 'shows': {
            categoryFilter = 'show'
            break;
        }
        case 'movies': {
            categoryFilter = 'movie'
            break;
        }
        case 'recently': {
            categoryFilter = 'recent'
            break;
        }
        default: {
            throw new Error('No category found')
        }
    }

    return await prisma.movie.findMany({
        where: {
            category: categoryFilter
        },
        select: {
            id: true,
            title: true,
            age: true,
            duration: true,
            overview: true,
            imageString: true,
            release: true,
            youtubeString: true,
            WatchLists: {
                where: {
                    userId: userId
                },
                select: {
                    id: true    
                }
            }
        }
    })
}

type CategoryPageProps = {
    params: {
        genre: string
    }
}

export default async function CategoryPage({
    params
}: Readonly<CategoryPageProps>) {
    const session = await getServerSession(authOptions)
    const data = await getData(params.genre, session?.user?.email as string);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-60">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              <MovieCard
                key={movie.id}
                age={movie.age}
                movieId={movie.id}
                overview={movie.overview}
                time={movie.duration}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                watchList={movie.WatchLists.length > 0}
                year={movie.release}
                youtubeUrl={movie.youtubeString}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    )
}