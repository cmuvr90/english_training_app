import styled from "styled-components";

const Root = styled.View`
    width: 100%;
    height: 100%;
    padding: 60px 10px;
    background-color: ${props => props.backgroundColor}
`

const Page = ({children, backgroundColor = 'transparent'}) => {
  return <Root backgroundColor={backgroundColor}>
    {children}
  </Root>
}

export default Page

