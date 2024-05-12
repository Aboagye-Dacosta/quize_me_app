import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getData } from "../../services/getData";
import { DataItem } from "../subjects/useLoadSubjects";



export function useQuizQuestions() {
    const { subject  } = useParams();
    const queryClient = useQueryClient()

    const { data: quiz,isPending: isLoadingQuiz } = useQuery({
        queryKey: [subject],
        queryFn: getData,
        select: ({ quizzes }) => quizzes.filter((quiz: DataItem) => quiz.title.toLowerCase() === subject!.toLowerCase()).at(0),
        initialData: () => queryClient.getQueryData(["quiz"]),
        initialDataUpdatedAt: queryClient.getQueryState(["quiz"])?.dataUpdatedAt
    })

    return {
        quiz,
        isLoadingQuiz
    }
}