import React from 'react';
import { List, ListItem } from 'react-native-elements';


export const TaskList = ({ taskList }) => (
    <List>
        {taskList.map(task => <ListItem key={task.id} title={task.content} />
        )}
    </List>
);
export default TaskList;

