import { Box, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Banner } from "./_components/banner";
import { DescriptionBody } from "./_components/description-body";
import { FeaturedTools } from "./_components/featured-tools";
import { Collab } from "./_components/collab";
import { Learn } from './_components/learn';
import { Experiment } from './_components/experiment';



export default function Home() {
  return (
    <main>
      <Paper sx={{
        backgroundColor:'primary.main'
      }}>
        <Box sx={{
          '@media (max-width: 768px)' : {
          display:'none'
          }
        }}>
          <Banner/>
        </Box>
        <DescriptionBody/>
        <Learn/>
        <Experiment/>
        <FeaturedTools/>
        <Collab/>
      </Paper>
    </main>
  );
}
