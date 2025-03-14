import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import config from '@/config';
import { Box, Flex, Input } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
  const [foregroundImage, setForegroundImage] =
    useState<HTMLImageElement | null>(null);
  const [offsetX, setOffsetX] = useState([0]);
  const [offsetY, setOffsetY] = useState([0]);

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
      const scale = Math.min(
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
  }, [userImage, foregroundImage, offsetX, offsetY]);

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
  };

  if (!config.ENABLE_CREATOR) return null;

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
      {/* <Box width="300px" mb={2}>
        <Slider
          min={-150}
          max={150}
          value={offsetX}
          onValueChange={(details) => setOffsetX(details.value)}
        >
          X Offset
        </Slider>
        <Slider
          min={-150}
          max={150}
          value={offsetY}
          onValueChange={(details) => setOffsetY(details.value)}
        >
          Y Offset
        </Slider>
      </Box> */}
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
  );
};

export default Home;
