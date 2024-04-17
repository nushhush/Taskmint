 import React,{useEffect} from 'react'
import {Link } from 'react-router-dom'
 import {Container, Row, Col} from 'reactstrap'

 import  Aos  from 'aos';
import 'aos/dist/aos.css'


 import './step-section.css'
 const STEP__DATA = [
{
   title: 'Setup your Wallet',
   desc: 'set up your Tezos Wallet, connect it to Taskmint by clicking the wallet icon in the top right corner.',
   icon: 'ri-wallet-line'
   
},
{
   title: 'Create your Collection',
   desc: ' Create and set up your collection. Add social links, a description, profile and set a secondary sales fee',
   icon: "ri-layout-2-line"
   
},
{
   title: 'Add your Projects',
   desc: 'Upload your work, add a title and description, and customize your projects with properties, stats, and unlockable content.',
   icon: "ri-gallery-upload-line"
   
},
{
   title: 'List them for sale',
   desc: 'Do you own a bunch of projects you want to sell ? feel free to list them we help you sell them quick!',
   icon: "ri-list-check"
   
},
 ]

 function StepSection() {

    useEffect(() =>{
        Aos.init({duration:3000})
      },[])
   return (
    <section className='step-section'>
   <Container>
    <Row>
        <Col lg='12' className='mb-4'>
            <h3 className='step__title'>Create and Sell your Projects</h3>
        </Col>

        {
            STEP__DATA.map((item,index) =>{
            return(
                < Col lg='3' md='4' sm='6' key={index}>
            <div className="single__step__item overflow-hidden" data-aos='fade-right'data-aos-delay="50">
                <span className='w-icon'><i class={item.icon}></i></span>
                <div className="step__item__content"> 
                        <h3 className='titles'>{item.title}</h3>
                    <p className='text-light'>{item.desc}</p>
                </div>
            </div>
        </Col>
            )
            })
        }

        
    </Row>
   </Container>
   </section>
   )
 }
 
 export default StepSection