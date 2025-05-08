import { Box, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Banner } from "./_components/banner";
import { DescriptionBody } from "./_components/description-body";
import { FeaturedTools } from "./_components/featured-tools";
import { Collab } from "./_components/collab";
import { Learn } from './_components/learn';
import { Experiment } from './_components/experiment';
import { OurTools } from './_components/our-tools';
import { TeamSection } from './_components/team-section';


export default function Home() {
  return (
    <main>
      <Paper sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'primary.dark',
        backgroundImage: 'linear-gradient(to top right,rgb(47, 212, 102) 0%,rgb(32, 226, 191) 100%)'
        //backgroundImage: 'linear-gradient(to top left, #20E2D7 0%, #F9FEA5 100%)'
      }}>
        <Box sx={{
          '@media (max-width: 768px)' : {
          display:'none'
          }
        }}>
          <Banner/>
        </Box>
        <Paper sx={{backgroundColor:'primary.light', width:'88%'}}>
          <DescriptionBody/>
          <Experiment/>
          <Learn/>
          <OurTools/>
          <TeamSection/>
          <FeaturedTools/>
        </Paper>
        <Collab/>
      </Paper>
    </main>
  );
}
