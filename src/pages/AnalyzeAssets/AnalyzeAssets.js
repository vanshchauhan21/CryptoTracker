import React from 'react';
import './AnalyzeAssets.css';

import StartButton from '../../components/Common/StarButton/StartButton';

function AnalyzeAssets() {
  return (
    <div className="tutorialV2__oZoVu reverseRow__ohsqd tutorial-v2__w0jq2">
      <div className="tutorialV2Description__CXkQB">
        <div className="heading-wrapper__PsGv8 headingWrapper__qztHQ">
          <h2 className="title__fU7gu title__UGh1s">Analyze Your Assets</h2>
          <p className="description__e7VeV description__iTu36">
            Switching between tabs, you can check on your crypto, DeFi & NFT holdings, put them in chart form,
            check the full transaction history, and monitor your open orders.
            <br />
            You can check:
          </p>
        </div>

     
        
        <StartButton />
      </div>

      <div className="tutorialBanner__b9zhX tutorial-banner__U9Scb">
        <img
          alt="Tutorial Banner"
          src="https://coinstats.app/static/images/portfolio/landing/new-portfolio-banner-solana.svg"
          className="tutorial-banner-img"
        />
      </div>
    </div>
  );
}

export default AnalyzeAssets;
