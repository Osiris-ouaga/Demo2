import React from 'react';
import { View } from 'react-native';
import Header from './component/header';
import TaskList from './component/task-List/';

const taskList = [
  {
    id: 0,
    content: 'aller voir Sylvie',
    statut: 'encours'

  },

  {
    id: 1,
    content: 'se brosser les dents',
    statut: 'encours'

  },
  {
    id: 2,
    content: 'faire du menage',
    statut: 'Terminé'

  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList };
  }
  
  render() {
  return (
    <View>
      <Header content='Liste de tâches' />
      <TaskList taskList={this.state.taskList} /> 
    </View>
    
  );
}
}

