import {connect} from 'react-redux';
import {toggleTask} from './../actions/actions';
import TaskList from './../components/task-list/TaskList';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks;
    case 'SHOW_COMPLETED':
      return tasks.filter(task => task.completed);
    case 'SHOW_ACTIVE':
      return tasks.filter(task => !task.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id));
    }
  };
};

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default VisibleTaskList;