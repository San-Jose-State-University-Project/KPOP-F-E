import axiosInstance from "@/lib/axiosInstance.ts";

export const getArtist = async (name: string) => {
    try{
        const response = await axiosInstance.get(`/artist/info/${name}`);
        return response.data;
    }catch (err){
        console.log(err)
    }
}
export const getSearch = async (name : string) => {
    try{
        const response = await axiosInstance.get(`/artist/search/${name}`);
        return response.data;
    }catch (err){
        console.log(err)
    }
}