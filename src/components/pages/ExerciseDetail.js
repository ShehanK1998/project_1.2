import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import {exerciseOptions, youtubeOptions, fetchData} from '../fetchData';
import Detail from '../Detail';
import ExerciseVideos from '../ExerciseVideos';
import SimilarExercises from '../SimilarExercises';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData (`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData (`${YoutubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

    }

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail ={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name ={exerciseDetail.name}/>
      <SimilarExercises/>
    </Box>
  );
};

export default ExerciseDetail;