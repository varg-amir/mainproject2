import React from 'react'
import { Card } from 'react-bootstrap';
import Single1 from '../../assets/singleProduct/single1.webp'


function SingleCard(props) {
    return (
        <div>
            <Card className="border-0">
                    <div className=" w-100 h-100">
                      <Card.Img variant="top" src={props.image } />
                    </div>
                  </Card>
        </div>
    )
}

export default SingleCard
