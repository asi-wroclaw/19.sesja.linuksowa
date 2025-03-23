import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import config from '@/config';
import {
  Box,
  Dialog,
  Flex,
  HStack,
  Icon,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  SiBluesky,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiMastodon,
  SiPixelfed,
  SiX,
} from 'react-icons/si';

const SOCIALS = [
  { key: 'bluesky', IconElement: SiBluesky, url: 'https://bsky.app/' },
  {
    key: 'mastodon',
    IconElement: SiMastodon,
    url: 'https://joinmastodon.org/',
  },
  { key: 'twitter', IconElement: SiX, url: 'https://twitter.com/' },
  {
    key: 'linkedin',
    IconElement: SiLinkedin,
    url: 'https://www.linkedin.com/',
  },
  {
    key: 'facebook',
    IconElement: SiFacebook,
    url: 'https://www.facebook.com/',
  },
  {
    key: 'instagram',
    IconElement: SiInstagram,
    url: 'https://www.instagram.com/',
  },
  { key: 'pixelfed', IconElement: SiPixelfed, url: 'https://pixelfed.org/' },
];

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
  const [foregroundImage, setForegroundImage] =
    useState<HTMLImageElement | null>(null);
  const [offsetX, setOffsetX] = useState([0]);
  const [offsetY, setOffsetY] = useState([0]);
  const [zoom, setZoom] = useState([100]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/creator-foreground.png';
    img.onload = () => setForegroundImage(img);
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const img = new Image();
        img.src = e.target.result as string;
        img.onload = () => setUserImage(img);
      }
    };
    reader.readAsDataURL(file);
  };

  const drawCanvas = useCallback(() => {
    if (!canvasRef.current || !foregroundImage) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (userImage) {
      const imgWidth = userImage.width;
      const imgHeight = userImage.height;
      const scale =
        (zoom[0] / 100) *
        Math.min(
          (canvas.width * 0.5) / imgWidth,
          (canvas.height * 0.5) / imgHeight,
        );
      const newWidth = imgWidth * scale;
      const newHeight = imgHeight * scale;
      const x = (canvas.width - newWidth) / 2 + offsetX[0];
      const y = (canvas.height - newHeight) / 2 + offsetY[0] - 3;
      ctx.drawImage(userImage, x, y, newWidth, newHeight);
    }

    ctx.drawImage(foregroundImage, 0, 0, canvas.width, canvas.height);
  }, [userImage, foregroundImage, offsetX, offsetY, zoom]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'bede-na-sesji.png';
    link.href = canvas.toDataURL();
    link.click();
    setIsDialogOpen(true);
  };

  if (!config.ENABLE_CREATOR) return null;

  return (
    <>
      <Flex direction="column" align="center" p={4} height="100vh">
        <Box mb={4}>
          <Input
            pt="0.25rem"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </Box>
        <Box width="300px" mb={2}>
          <Text mb={1}>X Offset</Text>
          <Flex align="center">
            <Slider
              flex={1}
              min={-150}
              max={150}
              value={offsetX}
              onValueChange={(details) => setOffsetX(details.value)}
            />
            <Button ml={2} size="sm" onClick={() => setOffsetX([0])}>
              Reset
            </Button>
          </Flex>
        </Box>
        <Box width="300px" mb={2}>
          <Text mb={1}>Y Offset</Text>
          <Flex align="center">
            <Slider
              flex={1}
              min={-150}
              max={150}
              value={offsetY}
              onValueChange={(details) => setOffsetY(details.value)}
            />
            <Button ml={2} size="sm" onClick={() => setOffsetY([0])}>
              Reset
            </Button>
          </Flex>
        </Box>
        <Box width="300px" mb={2}>
          <Text mb={1}>Zoom</Text>
          <Flex align="center">
            <Slider
              flex={1}
              min={50}
              max={200}
              value={zoom}
              onValueChange={(details) => setZoom(details.value)}
            />
            <Button ml={2} size="sm" onClick={() => setZoom([100])}>
              Reset
            </Button>
          </Flex>
        </Box>
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          style={{
            border: '1px solid black',
            marginBottom: '20px',
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Button colorPalette="blue" onClick={handleDownload}>
          Download
        </Button>
      </Flex>

      <Dialog.Root
        open={isDialogOpen}
        onOpenChange={(e) => setIsDialogOpen(e.open)}
      >
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner>
          <Dialog.Content
            bg="gray.800"
            color="white"
            p={6}
            borderRadius="lg"
            boxShadow="xl"
          >
            <Dialog.Header fontSize="xl" fontWeight="bold" textAlign="center">
              🎉 Udostępnij swój obraz!
            </Dialog.Header>
            <Dialog.Body>
              <Text fontSize="lg" textAlign="center">
                Będę na <b>19. Sesji Linuksowej</b> – dołącz do mnie!
              </Text>
              <HStack mt={6} gap={4} justify="center">
                {SOCIALS.map(({ key, IconElement, url }) => (
                  <Link
                    key={key}
                    href={url}
                    target="_blank"
                    _hover={{ transform: 'scale(1.2)', transition: '0.2s' }}
                  >
                    <Icon as={IconElement} w={8} h={8} color="blue.400" />
                  </Link>
                ))}
              </HStack>
            </Dialog.Body>
            <Dialog.Footer justifyContent="center">
              <Button colorScheme="blue" onClick={() => setIsDialogOpen(false)}>
                Zamknij
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

export default Home;
