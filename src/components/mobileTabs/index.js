import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { casinoIcon, cricketIcon, fishingIcon, footballIcon, lobbyicon, SlotIcon } from '../../asserts/images'
import "./style.css";
const MobileTabs = () => {

const navigate = useNavigate();
const location = useLocation();
const [activeTab, setActiveTab] = useState('');

useEffect(() => {
  if (location.pathname === '/cricket') {
    setActiveTab('cricket');
  } else if (location.pathname === '/lobby') {
    setActiveTab('lobby');
    
  } else if (location.pathname === '/casino') {
    setActiveTab('casino');
  }
  else {
    setActiveTab('');
  }
}, [location.pathname]);

const handleTabClick = (tabName, path) => {
  setActiveTab(tabName);
  navigate(path);
};

  return (
    <>
    
    <section className="tabs_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="all_main_tabs">
              <div className="all_tabs">
                <button className={`single_tab ${activeTab === 'cricket' ? 'mobile_tabbing' : ''}`} 
                onClick={() => handleTabClick('cricket', '/cricket')}
                >
                  <img src={cricketIcon} alt="icon"></img>
                  <span className="tab_title">Cricket</span>
                </button>
                <button className={`single_tab ${activeTab === 'lobby' ? 'mobile_tabbing' : ''}`} 
                    onClick={() => handleTabClick('lobby', '/lobby')}
                >
                  <img src={lobbyicon} alt="icon"></img>
                  <span className="tab_title">Lobby</span>
                </button>
                <button className={`single_tab ${activeTab === 'casino' ? 'mobile_tabbing' : ''}`} 
                 onClick={() => handleTabClick('casino', '/casino')}
                >
                  <img src={casinoIcon} alt="icon"></img>
                  <span className="tab_title">Live Casino</span>
                </button>
                <button className="single_tab">
                  <img src={footballIcon} alt="icon"></img>
                  <span className="tab_title">football</span>
                </button>
                <button className="single_tab">
                  <img src={fishingIcon} alt="icon"></img>
                  <span className="tab_title">Fishing</span>
                </button>
                <button className="single_tab">
                  <img src={SlotIcon} alt="icon"></img>
                  <span className="tab_title">Slot</span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default MobileTabs