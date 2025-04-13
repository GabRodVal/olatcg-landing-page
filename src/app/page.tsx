import { Paper } from '@mui/material';
import { Banner } from "./_components/banner";
import { DescriptionBody } from "./_components/description-body";
import { FeaturedTools } from "./_components/featured-tools";
import { Collab } from "./_components/collab";



export default function Home() {
  return (
    <main>
      <Paper sx={{
        backgroundColor:'primary.main'
      }}>
        <Banner/>
        <DescriptionBody/>
        <FeaturedTools/>
        <Collab/>
      </Paper>
    </main>
  );
}
