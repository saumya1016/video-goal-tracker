import { useReducer, useEffect, useContext, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const { videoSettings, toggleAutoPlay, updateVolume } = useContext(VideoContext);

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <motion.div
        className="glass-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <motion.button
            onClick={toggleAutoPlay}
            style={{
              background: videoSettings.autoPlay
                ? 'linear-gradient(45deg, #00f7ff, #ff4797)'
                : 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: '10px',
            }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ boxShadow: '0 6px 20px rgba(0, 247, 255, 0.5)' }}
            transition={{ duration: 0.2 }}
          >
            AutoPlay: {videoSettings.autoPlay ? 'On' : 'Off'}
          </motion.button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label style={{ color: '#e0e0e0', fontSize: '0.9rem', fontWeight: 500 }}>
              Volume
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={videoSettings.volume}
              onChange={e => updateVolume(parseFloat(e.target.value))}
              style={{
                width: '150px',
                accentColor: '#00f7ff',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      </motion.div>
      <AddGoalForm onAddGoal={addGoal} />
      <motion.button
        onClick={() => setCounter(counter + 1)}
        style={{
          background: 'linear-gradient(45deg, #00f7ff, #ff4797)',
          color: '#fff',
          padding: '10px 24px',
          borderRadius: '10px',
          alignSelf: 'flex-start',
        }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ boxShadow: '0 6px 20px rgba(0, 247, 255, 0.5)' }}
        transition={{ duration: 0.2 }}
      >
        Counter: {counter}
      </motion.button>
      <h2>My Goals</h2>
      <AnimatePresence>
        {goals.map(goal => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <GoalCard
              id={goal.id}
              title={goal.title}
              progress={goal.progress}
              videoUrl={goal.videoUrl}
              onUpdateProgress={updateProgress}
              onDelete={deleteGoal}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default GoalDashboard;