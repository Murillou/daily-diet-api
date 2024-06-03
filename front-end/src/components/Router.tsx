import { Routes, Route } from 'react-router-dom';
import { DefaultHeader } from '../layout/DefaultHeader';
import { Meal } from './Meal/Meal';
import { NewMeal } from './NewMeal/NewMeal';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultHeader />}>
        <Route path="/" element={<Meal />} />
      </Route>
      <Route path="/NewMeal" element={<NewMeal />} />
    </Routes>
  );
}
