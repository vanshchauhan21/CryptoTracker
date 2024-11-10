
import React from 'react';
import './CryptoTrackerManagingTool.css';

const CryptoTrackerManagingTool = ({ data }) => {
    return (
        <>
=        


            <div className="info-wrapper__OsPPP">

                {/* ........................detail section................ */}
                <div className='detail-sec'>

                    {data.map((item, index) => (

                        <div className="info__YW7qy" key={index}>
                            <div className="info-title__CQA5j">
                                <img src={item.icon} alt={`${item.title} icon`} />
                                <h4>{item.title}</h4>
                            </div>
                            <p className="description__mKln5">{item.description}</p>

                        </div>




                    ))}
                </div>
                {/* ...................image section.............. */}
                <div className='image-sec'>
                    <img src="https://coinstats.app/static/images/sprites/onboardingAnimation/darkHead.web.svg" />
                </div>
            </div>




        </>

    );
};

export default CryptoTrackerManagingTool;
