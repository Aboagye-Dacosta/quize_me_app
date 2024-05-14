import styled from "styled-components";

import { getSubjects } from "../../services/dataApi";
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
  const subjects = getSubjects();

  return (
    <StyledSubjectList>
      {subjects.map((subject, key: number) => (
        <li key={key}>
          <SubjectCard iconUrl={subject.icon} subject={subject.title} />
        </li>
      ))}
    </StyledSubjectList>
  );
}

export default SubjectList;
