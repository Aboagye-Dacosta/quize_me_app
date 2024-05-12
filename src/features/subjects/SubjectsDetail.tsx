import styled from "styled-components";
import Welcome from "./Welcome";
import SubjectList from "./SubjectList";

const StyledSubjectsLayout = styled.div`
  @media screen and (min-width: 56.25em) {
    padding: 2rem 10rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
`;



function SubjectsDetail() {
  return <StyledSubjectsLayout>
    <Welcome />
    <SubjectList/>
  </StyledSubjectsLayout>;
}

export default SubjectsDetail;
