import React, {  useState } from 'react'
// import axios from 'axios';
import './ApiCalling.css';
import { Col, Container, Row } from 'react-bootstrap';

function ApiCalling(props) {
let [input,setInput] = useState('');
function searchData(){
    let newData = props.details.filter((ele)=>{
        return(
            ele.name == input
        )
    })
    props.setdata(newData);

}
function GetData(){
    props.setdata(props.reStrat)    
}
    return (
        <div>
            <></>
            <h1 style={{ fontSize: '60px', fontWeight: '800', margin: '50px' }}>The Rick And Morty API</h1>
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={()=>{searchData()}}>Search</button>
            <button onClick={()=>{GetData()}}>Back</button>
            <div className='cover py-5'>
                <Container fluid>
                    <Row className='justify-content-center '>
                        {
                            props.details.map((item) => {
                                return (
                                    <Col lg={5} >
                                        <div className="d-flex justify-content-center align-items-center itemCover rounded-1 ">
                                            <div className='ImgCover'>
                                                <img src={item.image} className='rouded-1' />
                                            </div>
                                            <div className="itemInfo ms-3">
                                                <div className='itemName'>
                                                    <h5 className='my-1'>{item.name}</h5>
                                                    <div className='ItemStatus'>
                                                        <span style={{
                                                            backgroundColor: item.status === 'Alive' ? 'green' : item.status === 'Dead' ? 'red' : 'grey'
                                                        }}>
                                                        </span>
                                                        <>{item.status} - {item.species}</>
                                                    </div>
                                                </div>
                                                <div className="itemDtl ">
                                                    <div className='my-3'>
                                                        <p className='ItemLable text-start my-1'> Last Known Location : </p>
                                                        <p className='text-start textItem'>{item.location.name}</p>
                                                    </div>
                                                    <div>
                                                        <p className='ItemLable text-start my-1'>First Seen In :</p>
                                                        <p className='text-start textItem'>{item.origin.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ApiCalling