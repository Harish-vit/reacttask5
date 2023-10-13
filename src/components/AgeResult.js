import {useState} from "react";
import './style.css';
import PropTypes from 'prop-types';

function AgeResult({age}){
    return <div>
        <h4>Your are {age.years} years old</h4>
    </div>
}

AgeResult.propTypes={
    age: PropTypes.shape({
        years: PropTypes.number.isRequired,
    })
}

export default AgeResult