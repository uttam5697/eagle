import { useQuery } from "@tanstack/react-query";
import { getAboutData, getHomeData } from "../hook/useHome";


export const useHome = (skip = false) => {
    const query = useQuery({
        queryKey: ["home"],
        queryFn: () => getHomeData(),
        refetchOnWindowFocus: false,
        enabled: !skip,
    });

    return query;
};

export const useAbout = (skip = false) => {
    const query = useQuery({
        queryKey: ["about"],
        queryFn: () => getAboutData(),
        refetchOnWindowFocus: false,
        enabled: !skip,
    });

    return query;
};




