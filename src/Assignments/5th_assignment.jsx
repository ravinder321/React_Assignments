import React, { useState } from "react";

function Parentclass() {
    const tabs = [
        { label: "Home", content: "Home Content" },
        { label: "Profile", content: "Profile Content" },
        { label: "Settings", content: "Settings Content" }
      ];

      return (
        <Tabs tabs={tabs}/>
      );

      
}

function Tabs({tabs}) {
    const [active, setActive] = useState(0);
    return (
        <div>
            {tabs.map((tab, index) => {
                return <button key={index} onClick={(e) => setActive(index)}>{tab.label}</button>
            })}
            <h3>tab content:</h3>
            {tabs[active].content}
        </div>
    );
}

export default Parentclass;