import React from 'react'

const Nft = ({owner, creator, price, profile}) => {
  return (
    <div className='main'>
        <div className="header">
            <h1>Rare NFT</h1>
            <div className="notif"><h2>...</h2></div>
        </div>
        <div className="body">
            <div className="card-head">

                <div className="card-head-details">
                <div className="owned">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&s" alt="Profile1" />

                    <div className="name-tag">
                        Owned By
                        <b>{owner}</b>
                    </div>              
                </div>
                <div className="created">
                    <div className="name-tag">
                        Created By
                        <b>{creator}</b>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2F1sRrmj0rFgZyVmC8yBgXxyccFRJf7LPQ&s" alt="Profile2" />
                </div>
                </div>
                
                <div className="card-head-image">
                    <img src={profile} alt="Profile3" />
                </div>
            </div>
            <div className="card-body">
                <p><b>price: </b>ETH 5.65 -X1 = (${price})</p>
            </div>
            <div className="card-footer">
                View History
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Nft
