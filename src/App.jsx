import GoalDashboard from './GoalDashboard';
import './App.css';
function App() {
  return (
    <div style={{ padding: '20px' }} className='main-cn'>
      <h1
      style={{
        marginBottom: "80px",

      }}
      >Video Goal Tracker</h1>
      <GoalDashboard />
    </div>
  );
}
export default App;