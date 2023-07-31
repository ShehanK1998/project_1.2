import React from 'react';
import { Typography, Stack, Button } from '@mui/material';


import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';



const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const extraDetail =[
      {
        icon: BodyPartImage,
        name: bodyPart,
      },
      {
        icon: TargetImage,
        name: target,
      },      {
        icon: EquipmentImage,
        name: equipment,
      },
    ];
    
  return (
    
    <Stack  gap ="60px" sx={{flexDirection: {lg:'row'}, p:'20px', alignItems: 'center'}}>
        <img src ={gifUrl} alt={name} loading ="lazy" className="detail-image" />
      <Stack sx = {{gap:{lg:'35px', xs:'20px'}}}>
        
        <Typography variant='h3' textTransform="capitalize" fontWeight={"bold"}>
          {name}
        </Typography>
        
        <Typography variant='h6'>
         Exercise keep you strong. <span style={{textTransform:'capitalize'}}>{name}</span> {``} is the one of the best 
         exercises to target your <span style={{textTransform:'capitalize'}}>{target}</span> {``} . 
         It will help to improve your mood and gain energy.
        </Typography>
        
        {extraDetail.map((item) => (
          
          <Stack key={item.name} direction="row" gap ="24px" alignItems="center">
           
            <Button sx ={{ background:'#fff2bd', borderRadius:'50%', height:'100px', width:'100px' }}>
              <img src ={item.icon} alt={bodyPart} style ={{width:'50px', height:'50px'}}/>
            </Button>
            <Typography textTransform="capitalize" variant='h6'>
              {item.name}
            </Typography>
          
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail