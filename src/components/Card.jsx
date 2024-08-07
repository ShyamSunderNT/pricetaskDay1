import React from 'react';

function Card({ type, fee, user, transparency, singleTransparency, check, lastPoint }) {
  return (
    <div className="card">
      <div className="header">
        <p>{type}</p>
        <h1>${fee}/month</h1>
      </div>
      <hr />
      <div className="subject">
        <p>√ {user} User</p>
        <p>√ 50GB Storage</p>
        <p>√ Unlimited Public Projects</p>
        <p>√ Community Access</p>
        <p className={transparency}>{check} Unlimited Private Projects</p>
        <p className={transparency}>{check} Dedicated Phone Support</p>
        <p className={transparency}>{check} Free Subdomain</p>
        <p className={transparency} id={singleTransparency}>{lastPoint}</p>
      </div>
    
        <button>BUTTON</button>
     
    </div>
  );
}

export default Card;