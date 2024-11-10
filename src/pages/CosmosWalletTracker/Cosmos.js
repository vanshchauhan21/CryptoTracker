import React from 'react'
import Header from '../../components/Common/Header'
import AnalyzeAssets from '../AnalyzeAssets/AnalyzeAssets'

function CosmosWalletTracker() {
  return (
    <>
      <Header />
      <div>

        <h1>Cosmos Explorer & Wallet Tracker
          Connect your wallet for detailed analytics and its ranking.</h1>
      </div>
      <AnalyzeAssets/>
    </>
  )
}

export default CosmosWalletTracker
