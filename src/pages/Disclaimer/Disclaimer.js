import React from 'react';
// Adjust the path if needed
import './Disclaimer.css'; // Import the CSS file
import Header from '../../components/Common/Header';

const Disclaimer = () => {
    return (
        <>
            <Header />
            <div className="disclaimer-container">
                <h1>Disclaimer</h1>
                <p>
                    The information provided on <strong>Crypto Tracker</strong> is for general
                    informational purposes only. While we strive to ensure the information is accurate, 
                    we make no representation or warranty of any kind, express or implied, regarding the 
                    accuracy, adequacy, reliability, or completeness of any information.
                </p>
                <p>
                    Your use of this site and your reliance on any information is solely at your own risk. 
                    <strong>Crypto Tracker</strong> will not be liable for any losses or damages, including 
                    but not limited to financial losses, resulting from your reliance on the site’s content.
                </p>
                <p>
                    Crypto-related investments are inherently volatile, and the values of digital currencies 
                    may fluctuate rapidly. It is crucial to conduct your own research and consult with a 
                    qualified professional before making any financial decisions.
                </p>
                <p>
                    We are not responsible for any third-party links or services accessed through 
                    <strong> Crypto Tracker</strong>. Users are advised to review the terms and conditions 
                    of third-party services independently.
                </p>
                <p>
                    By using this site, you agree to this disclaimer. If you do not agree, please discontinue 
                    use of <strong>Crypto Tracker</strong>.
                </p>
            </div>
        </>
    );
};

export default Disclaimer;
