import React, { useState } from 'react';

const CryptoCalculator = () => {
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [conversionRate, setConversionRate] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!cryptoAmount || !conversionRate) {
      alert('Please enter both the cryptocurrency amount and conversion rate.');
      return;
    }
    const calculatedValue = parseFloat(cryptoAmount) * parseFloat(conversionRate);
    setResult(calculatedValue.toFixed(4));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Crypto Calculator</h2>
      <div style={{ margin: '10px 0' }}>
        <label>
          <strong>Cryptocurrency Amount:</strong>
          <input
            type="number"
            placeholder="Enter amount"
            value={cryptoAmount}
            onChange={(e) => setCryptoAmount(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
          />
        </label>
      </div>
      <div style={{ margin: '10px 0' }}>
        <label>
          <strong>Conversion Rate:</strong>
          <input
            type="number"
            placeholder="Enter rate"
            value={conversionRate}
            onChange={(e) => setConversionRate(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
          />
        </label>
      </div>
      <button onClick={handleCalculate} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Calculate
      </button>
      {result && (
        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          Converted Value: {result}
        </div>
      )}
    </div>
  );
};

export default CryptoCalculator;