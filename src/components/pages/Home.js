import React, {useState} from 'react';
import {Box} from '@mui/material';

import Exercises from '../Exercises';
import HeroBanner from '../HeroBanner';
import SearchExercises from '../SearchExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}/>
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}/>
    </Box>
  )
}

export default Home