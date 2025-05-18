import axiosInstance from "@/lib/axiosInstance.ts";

export const getArtist = async (id: string) => {
    try{
        const response = await axiosInstance.get(`/artist/${id}`);
        return response.data;
    }catch (err){
        console.log(err)
    }
}