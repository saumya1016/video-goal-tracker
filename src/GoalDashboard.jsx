import { useReducer, useEffect, useCallback, useState, useContext } from 'react';
import GoalCard from './GoalCard';
import AddGoalForm from './AddGoalForm';
import { VideoContext } from './VideoContext';

const initialGoals = [
  {
    id: 1,
    title: 'Master React',
    progress: 60,
    videoUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
  },
  {
    id: 2,
    title: 'Run Marathon',
    progress: 30,
    videoUrl: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
  },
];

function goalReducer(state, action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return [...state, action.payload];
    case 'UPDATE_PROGRESS':
      return state.map(goal =>
        goal.id === action.payload.id
          ? { ...goal, progress: action.payload.progress }
          : goal
      );
    case 'DELETE_GOAL':
      return state.filter(goal => goal.id !== action.payload.id);
    default:
      return state;
  }
}

function GoalDashboard() {
  const [goals, dispatch] = useReducer(goalReducer, initialGoals, () => {
    const saved = localStorage.getItem('goals');
    return saved ? JSON.parse(saved) : initialGoals;
  });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = useCallback(
    newGoal => {
      dispatch({ type: 'ADD_GOAL', payload: newGoal });
    },
    []
  );

  const updateProgress = useCallback(
    (id, progress) => {
      dispatch({ type: 'UPDATE_PROGRESS', payload: { id, progress } });
    },
    []
  );

  const deleteGoal = useCallback(
    id => {
      dispatch({ type: 'DELETE_GOAL', payload: { id } });
    },
    []
  );

  const { videoSettings, toggleAutoPlay, updateVolume } = useContext(VideoContext);

  return (
    <div>
      <div>
        <button onClick={toggleAutoPlay}>
          AutoPlay: {videoSettings.autoPlay ? 'On' : 'Off'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={videoSettings.volume}
          onChange={e => updateVolume(parseFloat(e.target.value))}
        />
      </div>

      <AddGoalForm onAddGoal={addGoal} />

      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>

      <h2>My Goals</h2>
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          id={goal.id}
          title={goal.title}
          progress={goal.progress}
          videoUrl={goal.videoUrl}
          onUpdateProgress={updateProgress}
          onDelete={deleteGoal}
        />
      ))}
    </div>
  );
}

export default GoalDashboard;
