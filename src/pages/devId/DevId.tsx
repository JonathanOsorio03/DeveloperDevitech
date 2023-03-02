import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import data from '../../data/data'
import { Welcome } from '../../interfaces/interfaces'
import * as SC from './DevId.styles';

export const DevId = () => {
    const {id} = useParams()
    const [userId, setUserId] = useState<Welcome>()

    useEffect(() => {
        const newData = data.find((item:Welcome)=>item.id === id)
        setUserId(newData )
    }, [id])
    
    return (
    <SC.container>
        <SC.Card>
            
        </SC.Card>
    </SC.container>
    )
}
