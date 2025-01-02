export const getImageSize = (
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
  }

  const imageHeight = height > maxHeight ? maxHeight : height;
  const imageWidth = (width / height) * imageHeight;
  return [imageWidth, imageHeight];
};
