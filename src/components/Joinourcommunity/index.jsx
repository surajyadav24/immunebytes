import React from 'react'
import "./style.css"
import telegram from '../../assets/images/twitter.svg'
import twitter from '../../assets/images/telegram.svg'
const Community = () => {
  return (
  <>
  <div className="container">
    <div className="row">
        <div className="join-wrapper">
            <h2>Join Our Community</h2>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   
            </p>
<div className="btn-section">
    <div className="telegram-btn">
<button className='telegram'>
<img src={twitter} alt="" />
    <a href="#">
Join Telegram</a></button>
    </div>

    <div className="x-btn">
    <button className='twit-x'>
        <img src={telegram} alt="" />
        <a href="#">
    Join X</a></button>
    </div>
</div>
<div className="secure-audit">
<h2>
Secure through audits.
</h2>
</div>


        </div>



    </div>
  </div>
  </>
  )
}

export default Community