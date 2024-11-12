import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useTheme,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export type OrganizerProps = {
  image: string | StaticImageData;
  name: string;
  role: string;
};

const Organizer = ({ image, name, role }: OrganizerProps) => {
  const theme = useTheme();
  const { t } = useTranslation('common');
  return (
    <Flex zIndex="3">
      <Box margin="auto">
        <VStack
          //height="300px"
          //width="300px"
          padding="2"
          minH="60vh"
          //background={theme.colors.primary}
        >
          <Box w={300} h={330} position="relative">
            <Image
              alt={`${name} image`}
              // sizes="300px"
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '50%',
                overflow: 'hidden',
                width: 300,
                height: 300,
                border: '10px solid white',
              }}
              src={image}
              //fill
            />
          </Box>
          <Heading
            margin="auto"
            textAlign="center"
            fontSize="3xl"
            as="h3"
            color="whiteAlpha.900"
          >
            {name}
          </Heading>
          <Heading
            margin="auto"
            textAlign="center"
            fontSize="3xl"
            as="h3"
            color={theme.colors.primary}
          >
            {t(role)}
          </Heading>
        </VStack>
      </Box>
    </Flex>
  );
};

const Organizers = ({
  organizersData,
}: {
  organizersData: OrganizerProps[];
}) => {
  var settings = {
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
  const theme = useTheme();
  const { t } = useTranslation('common');

  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '90%', md: '10px' });

  if (!organizersData.length) return null;
  return (
    <Box
      id="organizers"
      bg="blackAlpha.900"
      minH="40vh"
      overflow="hidden"
    >
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
          fontSize='40px'
          size='lg'
          aria-label="left-arrow"
          background={theme.colors.primary}
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
        >
          {t('team')}
        </Heading> 
        <IconButton
          fontSize='40px'
          size='lg'
          aria-label="right-arrow"
          background={theme.colors.primary}
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
            {organizersData
              .filter(
                (organizer) =>
                  organizer.image && organizer.name && organizer.role,
              )
              .map((organizerData, index) => (
                <Organizer key={index} {...organizerData} />
              ))}
          </Slider>
        </Box>
       
      </Box>
    </Box>
  );
};
export default Organizers;
