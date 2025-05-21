import {useQuery} from "@tanstack/react-query";
import * as API from "@/api/trend.ts";

export const useGetKPOPChart = (date: string) => {
    return useQuery({
        queryKey : ["kpopChart", date],
        queryFn : async () => {
            const res = await API.getKPOPChart(date)
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