import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getData } from "../../services/getData";

export interface DataItem {
    [key: string]: string
}

interface AccInterface {
    [key: string]: object
}

type Data = {
    title: string,
    icon: string
}

export function useLoadSubjects() {
    const queryClient = useQueryClient();

    const { data: subjects, isPending: isLoadingSubjects } = useQuery<Data[]>({
        queryKey: ["subjects"],
        queryFn: getData,
        select: ({ quizzes }) => Object.values(quizzes.reduce((acc: AccInterface, dataItem: DataItem) => {

            if (dataItem.title in acc) {
                return acc;
            }

            acc[dataItem.title] = {
                title: dataItem.title,
                icon: dataItem.icon
            }

            return acc;
        }, {})),
        initialData: () => queryClient.getQueryData(['quiz']),
        initialDataUpdatedAt: queryClient.getQueryState(["quiz"])?.dataUpdatedAt

    })

    return {
        subjects, isLoadingSubjects
    }
}