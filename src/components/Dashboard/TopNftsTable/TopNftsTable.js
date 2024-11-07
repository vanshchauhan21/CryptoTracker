import React from "react";
import './styles.css'; // Import the CSS file

function TopNftsTable({ nfts }) {
  return (
    <div className="table-container">
      <div className="top-nfts-table">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change (%)</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {nfts.map((nft, index) => (
              <tr key={index}>
                <td className="nft-name">{nft.name}</td>
                <td className="nft-price">{nft.price ? `$${nft.price}` : "N/A"}</td>
                <td className="nft-change-percent">{nft.changePercent ? `${nft.changePercent}%` : "N/A"}</td>
                <td className="nft-volume">{nft.volume ? nft.volume : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopNftsTable;
