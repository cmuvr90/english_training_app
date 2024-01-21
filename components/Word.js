import styled from "styled-components";
import {Text, TouchableOpacity} from "react-native";

const Root = styled.View`
    font-size: 20px;
    background-color: ${p => p.backgroundColor};
    padding: 10px;
    border-radius: 7px;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Word = ({value = "", backgroundColor = '#12bd85', onPress = null, disabled = false}) => {

  const onPressHandle = () => {
    if (disabled) return;
    if (typeof onPress === 'function') onPress(value)
  }

  return <TouchableOpacity onPress={onPressHandle}>
    <Root backgroundColor={backgroundColor}>
      <Text style={{color: '#fff'}}>{value}</Text>
    </Root>
  </TouchableOpacity>
}

export default Word

