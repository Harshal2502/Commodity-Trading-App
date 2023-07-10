import React, { useState } from 'react';

const ToggleTab = () => {
    const [activeTab, setActiveTab] = useState('market');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tab-buttons">
                <button
                    className={`tab-button ${activeTab === 'market' ? 'active' : ''}`}
                    onClick={() => handleTabClick('market')}
                >
                    Market Order
                </button>
                <button
                    className={`tab-button ${activeTab === 'limit' ? 'active' : ''}`}
                    onClick={() => handleTabClick('limit')}
                >
                    Limit Order
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'market' && (
                    <div className={`fade-in`} style={{ display: "flex", justifyContent: "space-around", color: "#333" }}>
                        <h3>18180.30</h3>
                        <h3>18180.05</h3>
                    </div>
                )}
                {activeTab === 'limit' && (
                    <div className={`fade-in`} style={{ textAlign: "center" }}>
                        <input type='number' placeholder='Limit' className='modal-input-2' min="0" />
                    </div>
                )}
                <div style={{ display: "flex" }}>
                    <button className='buy-btn'>Buy</button>
                    <button className='sell-btn'>Sell</button>
                </div>
            </div>
        </div>

    );
};

export default ToggleTab;
