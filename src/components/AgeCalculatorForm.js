import { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';

function AgeCalculatorForm({ calculateAge }) {
  const [birthDate, setBirthdate] = useState('');

  const handleChangeDate = (e) => {
    setBirthdate(e.target.value);
  };

  const handleCalculateAge = () => {
    if (birthDate) {
      calculateAge(birthDate);
    }
  };

  return (
    <div>
      <form>
        <h2>Enter your Date of Birth</h2>
        <input value={birthDate} type="date" onChange={handleChangeDate} />
      </form>
      <button onClick={handleCalculateAge}>Calculate Age</button>
    </div>
  );
}

AgeCalculatorForm.propTypes = {
  calculateAge: PropTypes.func.isRequired,
}

export default AgeCalculatorForm;
