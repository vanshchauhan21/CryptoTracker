import React from 'react';
import './MasterTheMath.css';

const MasterTheMath = () => {
  return (
    <div className="master-the-math-container">
      <h2>Master the Math: Understanding Compound Interest</h2>
      <p>
        Compound interest is the interest on a loan or deposit calculated based on both 
        the initial principal and the accumulated interest from previous periods. This 
        powerful concept can significantly impact your financial growth over time.
      </p>
      <h3>How Does Compound Interest Work?</h3>
      <p>
        Unlike simple interest, which is calculated only on the principal amount, 
        compound interest is calculated on the principal plus any interest that has 
        already been added to it. This means that your money can grow at a faster rate 
        due to the effect of compounding.
      </p>
      <h3>Formula for Compound Interest</h3>
      <p>
        The formula for calculating compound interest is:
      </p>
      <p>
        <strong>A = P (1 + r/n)^(nt)</strong>
      </p>
      <ul>
        <li><strong>A</strong> = the future value of the investment/loan, including interest</li>
        <li><strong>P</strong> = the principal investment amount (initial deposit or loan amount)</li>
        <li><strong>r</strong> = the annual interest rate (decimal)</li>
        <li><strong>n</strong> = the number of times that interest is compounded per year</li>
        <li><strong>t</strong> = the number of years the money is invested or borrowed for</li>
      </ul>
      <h3>Practical Example</h3>
      <p>
        For instance, if you invest $1,000 at an annual interest rate of 5% compounded 
        annually for 10 years, the future value of your investment would be:
      </p>
      <p>
        <strong>A = 1000 (1 + 0.05/1)^(1*10) = $1,628.89</strong>
      </p>
      <h3>Benefits of Compound Interest</h3>
      <ul>
        <li>Accelerated Growth: The more frequently interest is compounded, the more you earn.</li>
        <li>Long-Term Investment Strategy: Compound interest works best over longer time horizons.</li>
        <li>Passive Income: Your money works for you, generating income without additional effort.</li>
      </ul>
      <h3>Additional Resources</h3>
      <p>
        To dive deeper into the topic of compound interest, check out the following resources:
      </p>
      <ul>
        <li><a href="https://www.investopedia.com/terms/c/compoundinterest.asp" target="_blank" rel="noopener noreferrer">Investopedia: Compound Interest</a></li>
        <li><a href="https://www.nerdwallet.com/article/investing/compound-interest" target="_blank" rel="noopener noreferrer">NerdWallet: Compound Interest Explained</a></li>
        <li><a href="https://www.bankrate.com/calculators/savings/compound-interest-calculator.aspx" target="_blank" rel="noopener noreferrer">Bankrate: Compound Interest Calculator</a></li>
      </ul>
    </div>
  );
};

export default MasterTheMath;