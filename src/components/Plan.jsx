import React from 'react'

const plan = (props) => {
    return (
        <div>
         
                <li>{props.value}</li>
                <button className='btn' onClick={()=> props.sendData(props.id)}>delete</button>
                {console.log('plan')}
        
        </div>
    )
}

export default plan
