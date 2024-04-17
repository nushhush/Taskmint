import React, {useState} from 'react'
import { Container, Col, Row } from 'reactstrap'
import CommonSection from '../components/Ui/Common-section/CommonSection'

import '../styles/Market.css'

import  {NFT__DATA} from '../assets/data/data'

import NftCard from '../components/Ui/Nft__cards/NftCard'


function Market() {
const [data, setData] = useState(NFT__DATA)



const handleCategory = () =>{}


const handleItems = () =>{}





// SORTING DATA BY HIGH MID, AND LOW RATE
const handleSort = (e) =>{



  const filterValue = e.target.value

if(filterValue === 'high'){
  const filterData = NFT__DATA.filter((item) => item.currentBid > 6)
  setData(filterData)
}

if(filterValue === 'mid'){
  const filterData = NFT__DATA.filter((item) => item.currentBid >= 5.50 && item.currentBid < 6)
  setData(filterData)
}

if(filterValue === 'low'){
  const filterData = NFT__DATA.filter((item) => item.currentBid >= 3.89 && item.currentBid < 5.50)
  setData(filterData)
}


}

  return (
    <>
    <CommonSection  title={'Market Place'}/>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="market__product__filter d-flex justify-content-between align-items-cente mb-5">
              <div className="filter__left d-flex align-items-center gap-5">
                <div className="all__category__filter">
                  <select >
                    <option>All Categories</option>
                    <option value='art'>Art</option>
                    <option value='music'>Music</option>
                    <option value='domain-name'>Domain name</option>
                    <option value='Virtual-world'>Virtual World</option>
                    <option value='trending-card'>Trending Cards</option>
                    <option value=''></option>
                  </select>
                </div>
                <div className="all__items__filter">
                  <select onChange={handleItems}>
                    <option>All Items</option>
                    <option value='single-item'>Single Item</option>
                    <option value='bundle'>Bundle</option>
                  </select>
                </div>
              </div>
              <div className="filter__right">
              <select onChange={handleSort}   >
                    <option> Sort By</option>
                    <option value='high'>High Rate</option>
                    <option value='mid'>Mid Rate</option>
                    <option value='low'>Low Rate</option>
                  </select>
              </div>
            </div>
          </Col>
          {
            data?.map((item) =>{
              return(
                <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                  <NftCard  item={item}/>
                  </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Market