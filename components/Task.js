import styled from "styled-components";
import {Text} from "react-native";
import Stack from "./Stack";
import {useMemo, useState} from "react";
import Word from "./Word";
import Button from "./Button";

const Root = styled.View`
    background-color: ${p => {
        console.log(p.status, p.status === 'start' ? 'transparent' : (p.status === 'complete' ? '#78da10' : '#da1010'))
        return p.status === 'start' ? 'transparent' : (p.status === 'complete' ? '#78da10' : '#da1010')
    }};
    padding: 10px;
    border-radius: 10px;
`

const Task = ({
                task, onNext = () => {
  }
              }) => {

  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState('start'); // start complete error


  const onReset = () => {
    setSelected([]);
    setStatus('start')
  }

  const onChangeSelected = value => setSelected(v => [...v, value])

  const deleteByIndex = index => {
    setSelected(v => v.filter(i => i.index !== index))
  }

  const onCheck = () => {
    const isComplete = selected.map(i => i.value).join(' ') === task.sentence.split(' ').map(i => i.trim()).join(' ');

    console.log('isComplete => ', isComplete);
    setStatus(isComplete ? 'complete' : 'error')
  }

  const words = useMemo(() => {
    const data = [...task.fake_words, ...task.sentence.split(' ').map(i => i.trim())]
    return data.sort(() => Math.random() - 0.5)
  }, [task.root_sentence, task.fake_words])

  return <Root status={status}><Stack gap={50}>
    <Text style={{fontSize: 18}}>{task.title}</Text>
    <Text style={{fontSize: 25}}>{task.root_sentence}</Text>

    <Stack type={'block'}>
      <Stack type={'inline'} wrapped gap={5}>
        {
          selected.map(i => <Word backgroundColor={'#62da88'} key={i.index} value={i.value} onPress={() => deleteByIndex(i.index)}/>)
        }
      </Stack>
      {
        status === 'error' && <Text style={{fontSize: 10}}>{task.sentence}</Text>
      }
    </Stack>

    <Stack type={'inline'} wrapped gap={15}>
      {
        words.map((i, index) => {

          const isSelected = !!selected.find(i => i.index === index);

          return <Word
            key={index}
            value={i}
            disabled={isSelected}
            backgroundColor={isSelected ? '#9f9f9f' : '#7dcdf8'}
            onPress={value => {
              onChangeSelected({index, value});
            }}/>
        })
      }
    </Stack>
    <Button title={'Check'} onPress={onCheck}/>
    <Button title={'Reset'} onPress={onReset}/>
    <Button title={'Next'} onPress={() => {
      onReset()
      onNext()
    }}/>
  </Stack>
  </Root>
}

export default Task

