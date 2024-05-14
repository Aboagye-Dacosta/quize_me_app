import data from "../assets/data.json";

type Question = {
    question: string;
    options: string[];
    answer: string;
}

type Quiz = {
    title: string;
    icon: string;
    questions: Question[];
}

type Subject = {
    title: string;
    icon: string;
}


const quizzes: Quiz[] = data["quizzes"];

function checkSubjectExists (subject: string) : void{
    const subjects: string[] = getSubjects().map(subject => subject.title.toLowerCase())
    if (!subjects.includes(subject.toLowerCase())) throw new Error("the page you looking for does not  exit");
}

export function getSubjects(): Subject[] {
    return quizzes.map((quiz) => {
        return {
            title: quiz.title,
            icon: quiz.icon
        }
    }) 
}

export function getSingleSubject(subject: string): Subject {
    checkSubjectExists(subject)
    return getSubjects().filter((sub) => sub.title.toLowerCase() === subject.toLowerCase())[0];
}

export function getSubjectQuestions(subject: string): Question[] {
    checkSubjectExists(subject)
    return quizzes.filter((sub) => sub.title.toLowerCase() === subject.toLowerCase())[0].questions;
}


export function getSubjectQuestionsLen(subject: string): number { 
    return getSubjectQuestions(subject).length;
}