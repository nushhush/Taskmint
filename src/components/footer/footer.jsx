import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link } from 'react-router-dom'
import startImg from '../../assets/img/star-removebg-preview (3).png'


const MY__ACCOUNT = [
  {
    display: 'Author Profile',
    url: '#'
  },
  {
    display: 'Create Item',
    url: '/create'
  },
  {
    display: 'Collection',
    url: '/market'
  },
  {
    display: 'Edit Profile',
    url: '#'
  },
]


const RESOURCES = [
  {
    display: 'Help Center',
    url: '#'
  },
  {
    display: 'Partner',
    url: '#'
  },

  {
    display: 'Community',
    url: '#'
  },
  {
    display: 'Activity',
    url: '#'
  },
]

const COMPANY = [
  {
    display: 'About',
    url: '#'
  },
  {
    display: 'Careers',
    url: '#'
  },
  {
    display: 'Ranking',
    url: '#'
  },
  {
    display: 'Contact Us',
    url: '#'
  },
 
]



function footer() {
  return (
   <footer>
    <Container>
      <Row>
        <Col lg='3' md='6' sm='6' className='mb-4'>
        <div className="logo">
        <img src={startImg} alt="star" width='70px' className='my-3' />
                </div>
                <p className='lorem__p'>Create and Sell your projects and work as a freelancer. All-in-one social 
                marketplace for creators and consumers.</p>
        </Col>

        <Col lg='2' md='3' sm='6' className='mb-4'>
          <h5>My Account</h5>
          <ListGroup className='list__group'>
            {
              MY__ACCOUNT.map((item, index) =>{
                return(
                  <ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
                )})
            }
          </ListGroup>
        </Col>

        <Col lg='2' md='3' sm='6' className='mb-4'>
        <ListGroup className='list__group'>
          <h5>Resources</h5>
            {
              RESOURCES.map((item,index) =>{
                return(
                  <ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
                )})
            }
          </ListGroup>
        </Col>

        <Col lg='2' md='3' sm='6' className='mb-4'>
        <h5>Company</h5>
        <ListGroup className='list__group'>
            {
              COMPANY.map((item, index) =>{
                return(
                  <ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
                )})
            }
          </ListGroup>
        </Col>

        <Col lg='3' md='6' sm='6' className='mb-4'>
          <h5>Newsletter</h5>
          <input type="text" className="newsletter"  placeholder='Email'/>
          <div className="social__links d-flex align-items-center gap-3">
            <span><Link to='#'><i class="ri-facebook-fill"></i></Link></span>
            <span><Link to='#'><i class="ri-linkedin-fill"></i></Link></span>
            <span><Link to='#'><i class="ri-twitter-fill"></i></Link></span>
            <span><Link to='#'><i class="ri-twitter-fill"></i></Link></span>
          </div>
        </Col>

        <Col lg='12' className='text-center mt-4'>
          <p><em>Developed By Raghuvanshis</em></p>
        </Col>
      </Row>
    </Container>
   </footer>
  )
}

export default footer