import { Button } from '@/components/ui/button';
import config from '@/config';
import { Box, Flex, Input } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUserImage(e.target.result as string);
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

    const foregroundImage = new Image();
    foregroundImage.src = '/creator-foreground.png';
    foregroundImage.onload = () => {
      if (userImage) {
        const img = new Image();
        img.src = userImage;
        img.onload = () => {
          const imgWidth = img.width;
          const imgHeight = img.height;
          
          const scale = Math.min(canvas.width * 0.5 / imgWidth, canvas.height * 0.5 / imgHeight);
          const newWidth = imgWidth * scale;
          const newHeight = imgHeight * scale;
          
          const x = (canvas.width - newWidth) / 2;
          const y = (canvas.height - newHeight) / 2 - 3;
          
          ctx.drawImage(img, x, y, newWidth, newHeight);
          ctx.drawImage(foregroundImage, 0, 0, canvas.width, canvas.height);
        };
      } else {
        ctx.drawImage(foregroundImage, 0, 0, canvas.width, canvas.height);
      }
    };
  }, [userImage]);

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
      <Button colorPalette="blue" onClick={handleDownload}>
        Download
      </Button>
    </Flex>
  );
};

export default Home;
