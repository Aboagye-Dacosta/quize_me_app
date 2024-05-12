import { useQuery } from "@tanstack/react-query"
import { getData } from "../../services/getData"

interface DataItem {
    [key: string]: string
}

export function useLoadSubjects() {

    const { data: subjects, isPending: isLoadingSubjects } = useQuery({
        queryKey: ["subjects"],
        queryFn: getData,
        select: ({ quizzes }) =>
            quizzes.reduce((acc: string[], dataItem: DataItem) => {
              
                if(acc.includes(dataItem.title)) {
                    return acc;
                }

                acc.push(dataItem.title);
                return acc;
            },[])
        
    })

    return {
        subjects, isLoadingSubjects
    }
}