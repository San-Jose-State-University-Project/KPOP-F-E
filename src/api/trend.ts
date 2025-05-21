import axiosInstance from "@/lib/axiosInstance.ts";

export const getKPOPChart = async (date : string) => {
    try{
        const res = await axiosInstance.get(`/trend/chart/${date}`);
        return res.data
    }catch (err){
        console.log(err)
    }
}

export const getTrend = async () => {
    try{
        const res = await axiosInstance.get(`/kpop-subgenres`);
        return res.data
    }catch (err){
        console.log(err)
    }
}