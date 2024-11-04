import React from 'react';
import helpCenterData from './HelpCenter.json';
import './HelpCenter.css';
import Header from '../../components/Common/Header';

const HelpCenter = () => {
    return (
        <>
            <Header />
            <div className="help-center">
                <h1>Help Center</h1>
                {helpCenterData.helpCenter.map((category, index) => (
                    <div key={index} className="help-category">
                        <h2>{category.category}</h2>
                        <ul>
                            {category.topics.map((topic, idx) => (
                                <li key={idx} className="help-topic">
                                    <h3>{topic.title}</h3>
                                    <p>{topic.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>

    );
};

export default HelpCenter;
