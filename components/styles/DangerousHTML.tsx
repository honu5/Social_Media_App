import styled from "styled-components";

const DangerousHTML = ({ html }: any): any => (
  <Root
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
);

const Root = styled.span`
  img {
    width: 100%;
    height: 99%;
    border-radius: 20px;
  }
`;

// eslint-disable-next-line import/no-default-export
export default DangerousHTML;
