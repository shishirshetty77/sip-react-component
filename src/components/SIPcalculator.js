import React, { useState } from 'react';
import './SIP.css'; // import the CSS file

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [rateOfInterest, setRateOfInterest] = useState(0);
  const [timePeriod, setTimePeriod] = useState(1);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculate = () => {
    const principal = 0;
    const rateOfInterestPerYear = rateOfInterest / 100;
    const rateOfInterestPerMonth = rateOfInterestPerYear / 12;
    let totalInvestment = principal;

    for (let year = 1; year <= timePeriod; year++) {
      for (let month = 1; month <= 12; month++) {
        totalInvestment += monthlyInvestment;
        totalInvestment *= 1 + rateOfInterestPerMonth;
      }
    }

    const calculatedMaturityAmount = Math.round(totalInvestment * 100) / 100;
    setMaturityAmount(calculatedMaturityAmount);
  };

  return (
    <div className="container">
      <h1>SIP Calculator</h1>
      <form>
        <div className="form-control">
          <label htmlFor="monthly-investment">Monthly Investment Amount (in Rs.)</label>
          <input
            type="number"
            id="monthly-investment"
            name="monthly-investment"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="rate-of-interest">Rate of Interest (in % per annum)</label>
          <input
            type="number"
            id="rate-of-interest"
            name="rate-of-interest"
            value={rateOfInterest}
            onChange={(e) => setRateOfInterest(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="time-period">Time Period (in years)</label>
          <input
            type="number"
            id="time-period"
            name="time-period"
            min="1"
            value={timePeriod}
            onChange={(e) => setTimePeriod(parseFloat(e.target.value))}
            required
          />
        </div>
        <button type="button" onClick={calculate}>
          Calculate
        </button>
      </form>
      <div id="result">
        {maturityAmount !== 0 && (
          <p>
            The maturity amount after {timePeriod} years is{' '}
            <strong>{maturityAmount} Rs.</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default SIPCalculator;
