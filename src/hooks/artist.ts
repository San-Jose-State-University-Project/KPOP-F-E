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