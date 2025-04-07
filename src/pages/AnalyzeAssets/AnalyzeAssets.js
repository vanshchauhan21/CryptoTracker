import React from 'react';
import './AnalyzeAssets.css';

import StartButton from '../../components/Common/StarButton/StartButton';

function AnalyzeAssets() {
  return (
    <div className="tutorialV2__oZoVu min-h-[500px] md:h-[450px] flex-col-reverse  md:mt-8 md:flex-row-reverse md:min-h-lg flex justify-center items-center rounded-lg py-12">
      <div className="tutorialV2Description__CXkQB flex justify-center items-center flex-col">
        <div className="heading-wrapper__PsGv8  headingWrapper__qztHQ">
          <h2 className="title__fU7gu title__UGh1s">Analyze Your Assets</h2>
          <p className="description__e7VeV mt-[0] pt-0 description__iTu36 max-w-xs px-32 md:px-0  md:max-w-lg ">
            Switching between tabs, you can check on your crypto, DeFi & NFT holdings, put them in chart form,
            check the full transaction history, and monitor your open orders.
          </p>
        </div>


        <div className='md:w-full mt-0 pt-0'>
          <StartButton />
        </div>
      </div>

      <div className="tutorialBanner__b9zhX tutorial-banner__U9Scb">
        <img
          alt="Tutorial Banner"
          src="https://coinstats.app/static/images/portfolio/landing/new-portfolio-banner-solana.svg"
          className="tutorial-banner-img h-auto"
        />
      </div>
    </div>
  );
}

export default AnalyzeAssets;
