import styled from "styled-components";

import { useLoadSubjects } from "./useLoadSubjects";

import SubjectCard from "./SubjectCard";
import Spinner from "../../ui/Spinner";

const StyledSubjectList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 1.7rem;
  
  & li {
    width: 100%;
  }
`;

function SubjectList() {
  const { isLoadingSubjects, subjects } = useLoadSubjects();

  return (
    <StyledSubjectList>
      {isLoadingSubjects ? (
        <Spinner />
      ) : (
        subjects.map((subject: string, key: number) => (
          <li key={key}>
            <SubjectCard
              iconUrl={`/assets/images/icon-${subject.toLowerCase()}.svg`}
              subject={subject}
            />
          </li>
        ))
      )}
    </StyledSubjectList>
  );
}

export default SubjectList;
