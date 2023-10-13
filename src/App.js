import AgeCalculatorForm from './components/AgeCalculatorForm';
import AgeResult from './components/AgeResult';
import './App.css';
import { useState } from 'react';
import { differenceInYears } from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    console.log(ageYears);

    setAge({
      years: ageYears,
    });
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <AgeCalculatorForm calculateAge={calculateAge} />
      {age && <AgeResult age={age} />}
    </div>
  );
}

export default App;
