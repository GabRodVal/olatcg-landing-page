'use client';

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { ArrowBackIos, ArrowForwardIos, Calculate} from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { ToolCard } from './tool-card';
import scAlign from '../../../public/sc_align.png'
import scHomol from '../../../public/sc_homol.png'
import scPhylo from '../../../public/sc_phylotree.png'


const slides = [
    {
        title: 'Alinhamento',
        description: 'Alinhe duas sequências local ou globalmente. Ambos os alinhamentos são mostrados em uma tabela interativa onde você pode comparar as correspondências entre estes.',
        redirect:'https://spica.eic.cefet-rj.br/olatcg/tool/alignment',
        imgSrc: scAlign,
    },
    {
        title: 'Busca Homóloga',
        description: 'Submeta uma lista de sequências contra um banco de dados filogeneticamente anotado e receba uma análise comparativa das combinações com maior percentual de identidade.',
        redirect:'https://spica.eic.cefet-rj.br/olatcg/tool/homology',
        imgSrc: scHomol,
    },
    {
        title: 'Árvore Filogenética',
        description: 'Visualize os resultados de sua busca homóloga como uma árvore filogenética.',
        redirect:'https://spica.eic.cefet-rj.br/olatcg/analysis/phylogeneticTree',
        imgSrc: scPhylo,
    },
]

export function Carousel(){
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        axis: 'x',
        align:'center',
        startIndex: 0,
        duration:20,
        slidesToScroll: 1,
        inViewThreshold:1,
        watchFocus: true,
        breakpoints:{
            "(max-width): 768px": { slidesToScroll: 1 }
        }
    })

    const [slideFocus, setSlideFocus] = useState([true, false, false])

    const adaptSlideFocus = useCallback((emblaApi:EmblaCarouselType) => {
        console.log("YES IN VIEW ->",emblaApi.slidesInView())
        console.log("NOT IN VIEW ->",emblaApi.slidesNotInView())


        let offSlides = emblaApi.slidesNotInView()

        setTimeout(function(){
            setSlideFocus([!offSlides.includes(0), !offSlides.includes(1), !offSlides.includes(2)]);
        }, 200)

        console.log("slidefocus", slideFocus)
    }, [])

    useEffect(() =>{
        if (emblaApi) emblaApi.on('slidesInView', adaptSlideFocus)
    }, [emblaApi, adaptSlideFocus])



    return(
        <div
            className='embla' 
            style={{
                overflow:'hidden',
                position:'relative',
                //height:'80vh',
            }} 
            ref={emblaRef}
        >
            <div
                className='embla__container'
                style={{
                    display:'flex',
                    flexDirection:'row',
                    position:'relative',
                    alignItems:'center'
                }}
            >
                {slides.map((item, index) => (
                    <ToolCard key={index} focus={slideFocus[index]} cardImage={item.imgSrc} title={item.title} description={item.description} buttonRedirect={item.redirect}/>
                ))}
            </div>
            <Box sx={{
                position:'absolute',
                display:'flex',
                flexDirection:'row',
                height:0,
                top:'30vh',
                zIndex:2
            }}>
                <Button
                    startIcon={<ArrowBackIos sx={{width:'3rem', height:'3rem'}}/>}
                    onClick={function(){
                        emblaApi?.scrollPrev()
                    }}
                    sx={{
                        backgroundColor:'primary.dark',
                        color:'primary.contrastText',
                        height:'4rem',
                        width:'4rem',
                        borderRadius:'100%',
                        textAlign:'center',
                        pl:4,
                        left:'7.5vw'
                    }}>
                </Button> 
            <Button
                    startIcon={<ArrowForwardIos sx={{width:'3rem', height:'3rem'}}/>}
                    onClick={function(){
                        emblaApi?.scrollNext()
                    }}
                    sx={{
                        backgroundColor:'primary.dark', 
                        color:'primary.contrastText',
                        height:'4rem',
                        width:'4rem',
                        borderRadius:'100%',
                        textAlign:'center',
                        pl:3,
                        left:'calc(90vw - 8rem)'
                    }}>
                </Button> 
            </Box>
            
        </div>
    )

}