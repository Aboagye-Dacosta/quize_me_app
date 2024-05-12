import styled from "styled-components";

import { useLoadSubjects } from "./useLoadSubjects";

import Spinner from "../../ui/Spinner";
import SubjectCard from "./SubjectCard";

const StyledSubjectList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;

  & li {
    width: 100%;
  }
`;

function SubjectList() {
  const { isLoadingSubjects, subjects} = useLoadSubjects();

  console.log(subjects);

  return (
    <StyledSubjectList>
      {isLoadingSubjects ? (
        <Spinner />
      ) : (
        subjects!.map((subject, key: number) => (
          <li key={key}>
            <SubjectCard iconUrl={subject!.icon} subject={subject!.title} />
          </li>
        ))
      )}
    </StyledSubjectList>
  );
}

export default SubjectList;
