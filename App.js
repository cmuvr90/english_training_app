import {StyleSheet} from 'react-native';
import data from './data/index.json';
import Page from "./components/Page";
import Task from "./components/Task";
import {useState} from "react";

export default function App() {

  const [index, setIndex] = useState(0)

  const onNext = () => {
    setIndex(v => v + 1 > data.tasks.length ? 0 : v + 1);
  }

  return <Page backgroundColor={'#e5b3f5'}>
    <Task task={data.tasks[index]} onNext={onNext}/>
  </Page>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
