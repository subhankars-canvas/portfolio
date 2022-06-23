import React from 'react'
import Divider from '@mui/material/Divider';

const DividerComponent = props => {
    return (
        <Divider variant="middle" color={props.color} height="50" className="h-1 mx-20 my-4"/>
    )
}
export default DividerComponent;