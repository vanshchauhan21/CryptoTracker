
import React from 'react';
import './CryptoTrackerManagingTool.css';

const CryptoTrackerManagingTool = ({ data }) => {
    return (
        <>



            <div className="info-wrapper__OsPPP flex flex-col-reverse md:flex-row md:p-[1rem] md:m-[1rem] gap-2 md:gap-[4rem]">

                {/* ........................detail section................ */}
                <div className='p-8 md:p-[3rem]'>

                    {data.map((item, index) => (

                        <div className="info__YW7qy " key={index}>
                            <div className="info-title__CQA5j">
                                <img src={item.icon} alt={`${item.title} icon`} />
                                <h4 className='item_title'>{item.title}</h4>
                            </div>
                            <p className="description__mKln5">{item.description}</p>

                        </div>




                    ))}
                </div>
                {/* ...................image section.............. */}
                <div className='justify-center items-center flex '>
                    <img className='w-[320px] md:w-[600px]'
                        src="https://coinstats.app/static/images/sprites/onboardingAnimation/darkHead.web.svg" />
                </div>
            </div>




        </>

    );
};

export default CryptoTrackerManagingTool;
