import config from '@/config';
import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const drawCanvas = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const backgroundImage = new Image();
    backgroundImage.src = '/creator-background.png';
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      if (image) {
        const userImage = new Image();
        userImage.src = image;
        userImage.onload = () => {
          ctx.drawImage(userImage, 63, 144, 276, 276);
        };
      }
    };
  }, [image]);

  const handleDownload = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'bede-na-sesji.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  if (!config.ENABLE_CREATOR) return null;

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  return (
    <Flex direction="column" align="center" p={4} height="100vh">
      <Box mb={4}>
        <Input
          pt="0.25rem"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </Box>
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        style={{ border: '1px solid black', marginBottom: '20px' }}
      />
      <Button colorScheme="blue" onClick={handleDownload}>
        Download
      </Button>
    </Flex>
  );
};

export default Home;
