import {  Box} from '@mui/material';

import HeroCALF from '@/components/HeroCalf';
import MissionCALF from '@/components/MissionCALF';
import PortfolioComponent from '@/components/PortfolioComponent';

export default function AboutUs() {
  return (
    <Box>
   <Box>
<HeroCALF></HeroCALF>
   </Box>
   <Box>
    <MissionCALF></MissionCALF>
   </Box>
   <Box>
    <PortfolioComponent></PortfolioComponent>
   </Box>
   </Box>
  );
}
