import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSubjectCard = styled.button`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  width: 100%;
  border: none;

  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  background: var(--bg-brand);
  color: #fff;
  cursor: pointer;
  user-select: none;
  transition: transform 200ms ease-in-out;

  & p {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1.2px;
  }

  &:hover {
    transform: translateX(-10px);
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  background-color: #fff;
  border-radius: var(--border-radius-sm);
`;

function SubjectCard({
  iconUrl,
  subject,
}: {
  iconUrl: string;
  subject: string;
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${subject.toLowerCase()}`);
  };

  return (
    <StyledSubjectCard onClick={handleClick}>
      <StyledLogo>
        <img src={iconUrl} alt={subject} />
      </StyledLogo>
      <p>{subject} </p>
    </StyledSubjectCard>
  );
}

export default SubjectCard;
