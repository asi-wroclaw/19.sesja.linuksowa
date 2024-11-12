import {
  Box,
  Button,
  DarkMode,
  Flex,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';
import Image, { StaticImageData } from 'next/image';
import github from '../assets/socials/github.svg';
import linkedin from '../assets/socials/linkedin.svg';
import twitter from '../assets/socials/twitter.svg';
import website from '../assets/socials/website.svg';

type SocialUrls = {
  website: string;
  twitter: string;
  linkedin: string;
  github: string;
};

export type SpeakerProps = {
  image: string | StaticImageData;
  urls: SocialUrls;
  name: string;
  description: string[];
};

const Socials = ({ name, urls }: { name: string; urls: SocialUrls }) => (
  <HStack width="60%" justifyContent="space-around">
    <a href={urls.website}>
      <Image alt={`${name} website`} src={website} />
    </a>
    <a href={urls.twitter}>
      <Image alt={`${name}t("menu.agenda") twitter`} src={twitter} />
    </a>
    <a href={urls.github}>
      <Image alt={`${name} github`} src={github} />
    </a>
    <a href={urls.linkedin}>
      <Image alt={`${name} linkedin`} src={linkedin} />
    </a>
  </HStack>
);

const getImageSize = (
  sizes: number[],
  maxSizes: number[] = [500, 400],
): number[] => {
  if (sizes.length !== 2) return sizes;
  const [width, height] = sizes;
  const [maxWidth, maxHeight] = maxSizes;
  if (width > height) {
    const imageWidth = width > maxWidth ? maxWidth : width;
    const imageHeight = (height / width) * imageWidth;
    return [imageWidth, imageHeight];
  } else {
    const imageHeight = height > maxHeight ? maxHeight : height;
    const imageWidth = (width / height) * imageHeight;
    return [imageWidth, imageHeight];
  }
};
const SpeakerModal = ({
  isOpen,
  onClose,
  name,
  image,
  description,
}: {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  image: string | StaticImageData;
  description?: string[];
}) => {
  const { t } = useTranslation('common');
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { height, width } = image as { height: number; width: number };
  const isLongDescription = (description ?? []).join('').length > 500;
  const isALotOfContent = isLongDescription && isSmallerThan800;
  const [imageWidth, imageHeight] = getImageSize(
    [width, height],
    isALotOfContent ? [200, 200] : [500, 400],
  );
  return (
    <DarkMode>
      <Modal
        isCentered
        size={{ sm: 'full', md: 'xl' }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="whiteAlpha.900" textAlign="center" fontSize="2xl">{name}</ModalHeader>
          <ModalCloseButton color="whiteAlpha.900" />
          <ModalBody color="whiteAlpha.900">
            <VStack gap='3vh'>
              <Box w={300} h={300} position="relative" >
                <Image
                  fill
                  alt={`${name} image`}
                  sizes="300px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  src={image}
                />
              </Box>
              {(description || [])?.map((descriptionText, index) => (
                <Text textAlign="center" key={`${descriptionText}-${index}`} minH="15px" padding='0vh 0vh 2vh 0vh'>
                  {descriptionText}
                </Text>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </DarkMode>
  );
};

const Speaker = ({ image, urls, name, description }: SpeakerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  const showSocials =
    urls.github || urls.linkedin || urls.twitter || urls.website;
  return (
    <Flex
      zIndex="3"
      cursor="pointer"
      onClick={() => description.length && onOpen()}
    >
      <Box>
        <Box w={300} h={330} position="relative">
          <Image
            alt={`${name} image`}
            fill
            sizes="300px"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            src={image}
          />
        </Box>
        <VStack
          height="90px"
          width="300px"
          padding="2"
          background={theme.colors.primary}
        >
          <Heading
            margin="auto"
            textAlign="center"
            fontSize="2xl"
            as="h3"
            color="whiteAlpha.900"
          >
            {name}
          </Heading>
          {showSocials && <Socials name={name} urls={urls} />}
        </VStack>
      </Box>
      <SpeakerModal
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        image={image}
        description={description}
      />
    </Flex>
  );
};

const Speakers = ({ speakersData }: { speakersData: SpeakerProps[] }) => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  if (!speakersData.length) return null;
  return (
    <Box id="speakers" bg="blackAlpha.900" minH="40vh">
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        minHeight="30vh"
        opacity="100%"
        position="relative"
        zIndex="2"
      >
        <Heading
          margin="auto"
          alignSelf="flex-start"
          as="h2"
          color="whiteAlpha.900"
          fontSize={['3xl', '5xl', '7xl']}
        >
          {t('menu.speakers')}
        </Heading>
      </Box>
      <Flex
        margin="auto"
        maxW="1000px"
        padding="50px 20px 20px 20px"
        flexWrap="wrap"
        justifyContent="center"
        gap="30px 30px"
      >
        {speakersData
          .filter((speaker) => speaker.image && speaker.name)
          .map((speakerData, index) => (
            <Speaker key={index} {...speakerData} />
          ))}
      </Flex>
    </Box>
  );
};
export default Speakers;
