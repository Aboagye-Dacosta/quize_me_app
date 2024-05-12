import styled from "styled-components";

const StyledSubjectsLayout = styled.div`
  @media screen and (min-width: 56.25em) {
    padding: 2rem 10rem;
  }
`;

function SubjectsLayout() {
  return <StyledSubjectsLayout>Heading</StyledSubjectsLayout>;
}

export default SubjectsLayout;
