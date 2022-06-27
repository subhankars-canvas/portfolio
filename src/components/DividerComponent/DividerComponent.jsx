import React from 'react'
import Divider from '@mui/material/Divider';

const DividerComponent = props => {
    return (
        <Divider variant="middle" color={props.color} height="50" className="h-[1px] mx-[450px] my-12"/>
    )
}
export default DividerComponent;