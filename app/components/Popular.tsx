'use client';

import Header from '@/components/Header';
import SliderCard from '@/components/SliderCard';
import SliderCardLoading from '@/components/SliderCardLoading';
import SlideWrapper from '@/components/SlideWrapper';
import { getPopular } from '@/query/query';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { headers } from 'next/headers';
import React from 'react'
import {SwiperSlide } from 'swiper/react';



const Popular = () => {
  const {data,isError,isLoading} = useQuery({queryKey : ['Popular'] , queryFn :() => getPopular()})

  
    
    
  return (
    <div className='space-y-4 h-full px-2 lg:px-0' >
            <Header label={'Popular'} />
      
            <SlideWrapper>
                {isLoading ? (
                   
                    <SliderCardLoading />
                ) : (
                    <>
                       {data?.data?.map((anime : any) => (
                  <SwiperSlide key={anime.id}>
                    <SliderCard key={anime.id}  date={anime.startDate} id={anime.id} 
                    poster={anime.attributes.posterImage.original} title={anime.attributes.titles.en|| anime.attributes.titles.en_jp}  />
                  </SwiperSlide>
                    ))}
                    </>
                )}
           
            </SlideWrapper>
    </div>
  )
}

export default Popular