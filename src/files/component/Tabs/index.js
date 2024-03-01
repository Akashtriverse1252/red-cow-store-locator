import React, { useState } from 'react';

function index() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>Tab 1</button>
        <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Tab 2</button>
        <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Tab 3</button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <p>Content for Tab 1</p>}
        {activeTab === 1 && <p>Content for Tab 2</p>}
        {activeTab === 2 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
}

export default index;
