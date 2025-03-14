import { useState } from 'react';
import goalsImg from './assets/goals.jpg'
import CourseGoal from "./components/CourseGoal";
import CourseGoalList from './components/CourseGoalList';
import Header from "./components/Header";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
      setGoals((prevGoals) => {
        const newGoal: CourseGoal = {
          id: Math.random(),
          title: 'Learn TypeScript',
          description: 'Learn it in depth'
        }
        return [...prevGoals, newGoal]
      })
    }

    function handleDeleteGoal(id: number) {
      setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
    }
  
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'A list of goals'}}>
          <h1>Your course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>

      
    </main>
  )
}
