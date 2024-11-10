import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Stats.css';

const Stats = () => {
    const [viewed, setViewed] = useState({
        realTimePrices: false,
        portfoliosManaged: false,
        customAlerts: false,
        userSatisfaction: false,
    });

    return (
        <div className='stats-section'>
            <StatItem 
                title="Real-Time Price Updates" 
                end={1000} 
                viewed={viewed.realTimePrices} 
                setViewed={() => setViewed(prev => ({ ...prev, realTimePrices: true }))} 
            />
            <StatItem 
                title="Portfolios Managed" 
                end={300} 
                viewed={viewed.portfoliosManaged} 
                setViewed={() => setViewed(prev => ({ ...prev, portfoliosManaged: true }))} 
            />
            <StatItem 
                title="Learning Resources" 
                end={75} 
                viewed={viewed.customAlerts} 
                setViewed={() => setViewed(prev => ({ ...prev, customAlerts: true }))} 
            />
            <StatItem 
                title="User Rating" 
                end={4.7} 
                viewed={viewed.userSatisfaction} 
                setViewed={() => setViewed(prev => ({ ...prev, userSatisfaction: true }))} 
            />
        </div>
    );
};

const StatItem = ({ title, end, viewed, setViewed }) => (
    <div className='stat-item card'>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }} onChange={isVisible => isVisible && setViewed()}>
            {({ isVisible }) => (
                <div className='stat-number'>
                    {viewed || isVisible ? (
                        <CountUp 
                            start={0} 
                            end={typeof end === 'number' && end % 1 !== 0 ? end : Math.floor(end)} 
                            duration={2.5} 
                            decimals={typeof end === 'number' && end % 1 !== 0 ? 1 : 0} 
                            suffix={typeof end === 'number' && end % 1 !== 0 ? "" : "+"} 
                        />
                    ) : (
                        end
                    )}
                </div>
            )}
        </VisibilitySensor>
        <div className='stat-title'>{title}</div>
    </div>
);

export default Stats;
