import React from 'react'
import {useStyle} from './utils'

const BVHPresentional = ({w, h, scale, i, onClick}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    return <div onClick = {onClick} style = {getBlockStyle(i)}>
    </div>
}

export default BVHPresentional
