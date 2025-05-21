import {useQuery} from "@tanstack/react-query";
import * as API from "@/api/artist.ts";

export const useGetArtistInfo = (name : string) =>{
    return useQuery({
        queryKey : ["artistInfo", name],
        queryFn : async () => {
            const res = await API.getArtist(name)
            return res
        }
    })
}

export const useGetArtistEmotion = (name : string) => {
    return useQuery({
        queryKey : ["artistEmotion", name],
        queryFn : async () => {
            const res = await API.getArtistEmotion(name)
            return res
        }
    })
}