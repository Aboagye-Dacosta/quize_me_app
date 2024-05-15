import styled from "styled-components";

import Heading from "../../ui/Heading";
import ModalSubjectCard from "./ModalSubjectCard";

import { getSubjects } from "../../services/dataApi";

const StyledHeading = styled(Heading)`
  background: var(--bg-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ModalSelectSubject({ closeModal }: { closeModal?: () => void }) {
  const subjects = getSubjects();
  return (
    <div>
      <StyledHeading as="h6"> Select a subject to continue</StyledHeading>
      <StyledList>
        {subjects.map((subject, key: number) => (
          <li key={key}>
            <ModalSubjectCard
              iconUrl={subject.icon}
              subject={subject.title}
              closeModal={closeModal}
            />
          </li>
        ))}
      </StyledList>
    </div>
  );
}

export default ModalSelectSubject;
