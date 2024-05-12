import styled from "styled-components";

import SubjectCard from "./SubjectCard";

const StyledSubjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;

function SubjectList() {
  return (
    <StyledSubjectList>
      <li>
        <SubjectCard iconUrl="/assets/images/icon-html.svg" subject="HTMl" />
      </li>
      <li>
        <SubjectCard
          iconUrl="/assets/images/icon-js.svg"
          subject="JavaScript"
        />
      </li>
      <li>
        <SubjectCard
          iconUrl="/assets/images/icon-css.svg"
          subject="Cascading Style Sheet (Css)"
        />
      </li>
      <li>
        <SubjectCard
          iconUrl="/assets/images/icon-accessibility.svg"
          subject="Accessibility"
        />
      </li>
    </StyledSubjectList>
  );
}

export default SubjectList;
