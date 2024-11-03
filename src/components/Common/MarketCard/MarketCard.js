import React from "react";



import "./MarketCard.css"

const MarketCard = () => {
    return (
        <div className="card-container">



            {/* ....................mian image and info both............. */}
            <div className="card-frame">
                {/* ................image side ................. */}    
        
                <div className="imag-contain">
                    <img
                        src="https://contenthub-static.crypto.com/wp_media/2022/11/Template_Weekly-Newsletters-02.png"

                        alt="Crypto.com NFT GameFi Weekly"
                        srcSet="
                  https://contenthub-static.crypto.com/cdn-cgi/image/width=400,quality=75/wp_media/2022/11/Template_Weekly-Newsletters-02.png 400w,
                  https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2022/11/Template_Weekly-Newsletters-02.png 600w,
                  https://contenthub-static.crypto.com/cdn-cgi/image/width=800,quality=75/wp_media/2022/11/Template_Weekly-Newsletters-02.png 800w
                "
                        loading="lazy"
                        referrerPolicy="no-referrer"

                    />

                </div>
                {/* .............................................info side............. */}
                <div className="card-content">
                    {/* .......update and date..... */}
                    <div className="Desc-detail">

                        <p className="card-more">
                            <a
                                href="/market-updates/nft-gaming-weekly-01-11-2024"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Market Update - Nov 01, 2024
                            </a>
                        </p>
                    </div>

                    {/* .........heding content....... */}
                    <div className="Desc-detail">

                        <h2 className="card-title">
                            NFT & Blockchain Gaming Weekly – 📈 NFT market sees first
                            positive monthly growth since March 2024; Pudgy Penguins is
                            developing a mobile game
                        </h2>
                    </div>


                    {/* .........Para content....... */}
                    <div className="Desc-detail">

                        <p>
                            📈 NFT market sees positive monthly growth in Oct
                            <br />
                            🚀 Yuga Labs launches Layer-3 chain ApeChain on Arbitrium
                            <br />
                            🐧 Pudgy Penguins is developing a mobile game and launched its
                            toy line in Walgreens
                        </p>
                    </div>

                    {/* ..................time and readmore......... */}
                    <div className="Desc-detail">

                        <p className="card-more">
                            <a
                                href="/market-updates/nft-gaming-weekly-01-11-2024"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read more - 1.5 minutes
                            </a>
                        </p>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default MarketCard;
