import styled from "styled-components";
import {Text, TouchableOpacity} from "react-native";

const Root = styled.View`
    font-size: 20px;
    background-color: ${p => p.type = 'primary' ? '#1a52b7' : '#ccc'};
    padding: 10px 50px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = ({title = "", type='primary', onPress = null}) => {

  return <TouchableOpacity onPress={onPress}>
    <Root>
      <Text style={{color: type === 'primary' ? '#fff' : '#000'}}>{title}</Text>
    </Root>
  </TouchableOpacity>
}

export default Button

