import { ORGANIZERS } from '@/data/organizers';
import { Box, Heading, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Organizer } from './Organizer';

const Organizers = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { t } = useTranslation('common');

  const [slider, setSlider] = React.useState<Slider | null>(null);

  if (!ORGANIZERS.length) return null;
  return (
    <Box id="organizers" bg="blackAlpha.900" minH="40vh" overflow="hidden">
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        //minHeight="30vh"
        opacity="100%"
        position="relative"
        zIndex="2"
        alignItems="center"
        overflow="hidden"
        padding="5vh 0vh 0vh 0vh"
      >
        <IconButton
          fontSize="40px"
          size="lg"
          aria-label="left-arrow"
          background={'primary'}
          color="white"
          borderRadius="full"
          position="relative"
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        <Heading
          padding="0vh 5vh 0vh 5vh"
          //margin="auto"
          as="h2"
          color="whiteAlpha.900"
          fontSize={['3xl', '5xl', '7xl']}
          lineHeight={1.2}
        >
          {t('our-team')}
        </Heading>
        <IconButton
          fontSize="40px"
          size="lg"
          aria-label="right-arrow"
          background={'primary'}
          color="white"
          borderRadius="full"
          position="relative"
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
      </Box>
      <Box
        //  display="flex"
        justifyContent="center"
        width="100%"
        //minHeight="30vh"
        opacity="100%"
        position="relative"
        zIndex="2"
        alignItems="center"
        overflow="hidden"
      >
        <Box
          margin="auto"
          maxW="1000px"
          padding="10vh 0vh 10vh 0vh"
          flexWrap="wrap"
          justifyContent="center"
          gap="30px 30px"
          alignItems="center"
        >
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {ORGANIZERS.filter(
              (organizer) => organizer.name && organizer.role,
            ).map((organizer) => (
              <Organizer key={organizer.name} {...organizer} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
export default Organizers;
