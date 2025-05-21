import axiosInstance from "@/lib/axiosInstance.ts";

export const getKPOPChart = async () => {
    try{
        const res = await axiosInstance.get(`/trend/kpop/top`);
        return res.data
    }catch (err){
        console.log(err)
    }
}

export const getTrend = async () => {
    try{
        const res = await axiosInstance.get(`/trend`);
        return res.data
    }catch (err){
        console.log(err)
    }
}