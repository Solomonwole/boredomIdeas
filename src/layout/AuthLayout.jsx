import styled from "styled-components";

export const StyledAuthLayout = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media screen and (min-width: 500px){
    height: 100vh;
  }
  @media screen and (max-width: 500px){
    overflow-y: scroll;
    overflow-x: hidden;

    flex-direction: column;
    flex-direction: column-reverse;
  }
`;