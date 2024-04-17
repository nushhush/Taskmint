import React from 'react'
import LiveAuction from '../components/Ui/Live-Auction/LiveAuction'
import HeroSection from '../components/Ui/HeroSection'
import SellerSection from '../components/Ui/Seller_section/sellerSection'
import Trending from '../components/Ui/Trending-action/Trending'
import StepSection from '../components/Ui/Step-section/StepSection'


function Home() {
  return (
    <>
    <HeroSection />
    <LiveAuction />
    <SellerSection />
    <Trending />
    <StepSection />
    </>
  )
}

export default Home