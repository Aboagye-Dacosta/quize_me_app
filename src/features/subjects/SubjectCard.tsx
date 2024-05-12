import styled from "styled-components";

const StyledSubjectCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;

  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  background: var(--bg-brand);
  color: #fff;

  & p {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1.2px;
  }
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    background-color: #fff;
    border-radius: var(--border-radius-sm);
`

function SubjectCard({
  iconUrl,
  subject,
}: {
  iconUrl: string;
  subject: string;
}) {
  return (
    <StyledSubjectCard>
      <StyledLogo>
        <img src={iconUrl} alt={subject} />
      </StyledLogo>
      <p>{subject} </p>
    </StyledSubjectCard>
  );
}

export default SubjectCard;
