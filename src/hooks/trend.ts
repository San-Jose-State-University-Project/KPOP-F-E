import {useQuery} from "@tanstack/react-query";
import * as API from "@/api/trend.ts";

export const useGetKPOPChart = () => {
    return useQuery({
        queryKey : ["kpopChart"],
        queryFn : async () => {
            const res = await API.getKPOPChart()
            return res
        }
    })
}

export const useGetTrend = () =>{
    return useQuery({
        queryKey : ["trend"],
        queryFn : async () => {
            const res = await API.getTrend()
            return res
        }
    })
}