import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'

export default function useFav() {
    const{user}=useAuth()

      const { refetch, data: favourites = [] } = useQuery({
          queryKey: ['favourites',user?.email],
          queryFn: async () => {
            const res = await fetch(`https://car-rental-server-ashy.vercel.app/favourites?email=${user?.email}`
             )
            return res.json()
          },
        })
    return [refetch,favourites]
}
