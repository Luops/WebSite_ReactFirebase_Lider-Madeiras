import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery(){
    const {search} = useLocation();


    //função será executado quando o search for alterado.
    return useMemo(() => new URLSearchParams(search), [search]);
}