import { Box, Image, SimpleGrid,Heading } from '@chakra-ui/react'
import React from 'react'
import fse from '../Images/fse.jpg'
import Carousel from './Carousel'

const Mid = () => {
  return (
    <Box>
         <Box >
            
              <Image src='https://www.crocs.in/media/wysiwyg/479287021-jibbitz-top-banner-pc.png?auto=webp&format=png&quality=85'></Image>
            </Box>
            <Box>
              {/* <Image src='https://www.crocs.in/crocs-classic-collection.html'></Image> */}
            </Box>
            <SimpleGrid columns={2}>
              <Box><Image src='https://www.crocs.in/media/wysiwyg/477125959-kid-s-upsell-3-pc.png?auto=webp&format=png&quality=85'></Image></Box>
              <Box><Image src='https://www.crocs.in/media/wysiwyg/477125974-literide-upsell-4-pc.png?auto=webp&format=png&quality=85'></Image></Box>
            </SimpleGrid>

            <Box>
              <Image src='https://www.crocs.in/media/wysiwyg/477125950-jibbitz-upsell-6-pc.png?auto=webp&format=png&quality=85'></Image>
            </Box>

            <SimpleGrid columns={4} spacing='0.5' mt={'0.5'}> 
              <Box><Image src='https://www.crocs.in/media/wysiwyg/4_Pillar_Classic_PC.png?auto=webp&format=png&quality=85'></Image></Box>
              <Box><Image src='https://www.crocs.in/media/wysiwyg/4_Pillar_Jibbitz_PC.png?auto=webp&format=png&quality=85'></Image></Box>
              <Box><Image src='https://www.crocs.in/media/wysiwyg/4_Pillar_LiteRide_PC.png?auto=webp&format=png&quality=85'></Image></Box>
              <Box><Image src='https://www.crocs.in/media/wysiwyg/4_Pillar_Sandal_PC.png?auto=webp&format=png&quality=85'></Image></Box>
            </SimpleGrid>
            <Box m='auto'mt='3' w='300px' ><Heading border='2px' borderColor={'green.300'} textAlign={'center'}>SHOP BY STYLE</Heading></Box>

          <SimpleGrid columns='3' padding={3}>
            <Box boxShadow='lg' m='1' p='6' rounded='md' bg='white'><Image src='https://www.crocs.in/media/wysiwyg/469899006-shopbystyle-clogs_1.png?auto=webp&format=png&quality=85'></Image></Box>
            <Box boxShadow='lg' p='6' m='1' rounded='md' bg='white'><Image src='https://www.crocs.in/media/wysiwyg/469899029-shopbystyle-flips_1.png?auto=webp&format=png&quality=85'></Image></Box>
            <Box boxShadow='lg' p='6' m='1' rounded='md' bg='white'><Image src='https://www.crocs.in/media/wysiwyg/469899047-shopbystyle-slides_2.png?auto=webp&format=png&quality=85'></Image></Box>
            <Box boxShadow='lg' p='6' m='1' rounded='md' bg='white'><Image src='https://www.crocs.in/media/wysiwyg/469899042-shopbystyle-sandals_1.png?auto=webp&format=png&quality=85'></Image></Box>
            <Box boxShadow='lg' p='6' m='1' rounded='md' bg='white'><Image src='https://www.crocs.in/media/wysiwyg/469899037-shopbystyle-heels-wedges_1.png?auto=webp&format=png&quality=85'></Image></Box>
            <Box boxShadow='lg' p='6' m='1' rounded='md' bg='white'><Image src='https://www.crocs.in/media/wysiwyg/469899022-shopbystyle-flats_1.png?auto=webp&format=png&quality=85'></Image></Box>
          </SimpleGrid>
          <Box>
            <Image src={fse}></Image>
          </Box>
         <Carousel/>
    </Box>
  )
}

export default Mid