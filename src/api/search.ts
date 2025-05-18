import axiosInstance from "@/lib/axiosInstance.ts";

export const getSearch = async (query: string) => {
    try{
        const response = await axiosInstance.get(`/search?query=${query}`);
        return response.data;
    }catch (err){
        console.log(err)
    }
}