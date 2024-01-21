import styled from "styled-components";

const Root = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${p => p.gap}px;
    flex-direction: ${p => p.type === 'block' ? 'column' : 'row'};
    flex-wrap: ${p => p.wrapped === false ? 'no-wrap' : 'wrap'};
`

const Stack = ({children, type = 'block', wrapped = false, gap = 10}) => {

  return <Root type={type} wrapped={wrapped} gap={gap}>
    {children}
  </Root>
}

export default Stack

// type => 'block', 'inline'
// wrapped => true/false
