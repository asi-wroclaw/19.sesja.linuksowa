import DefaultButton from '@/components/DefaultButton';
import {
  Box,
  Collapse,
  Grid,
  GridItem,
  Link,
  Text,
  useDisclosure,
  useTheme,
} from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

export type SpeechItem = {
  start: string;
  end: string;
  title: string;
  author?: string;
  description?: string[];
  lang?: ('en' | 'pl')[];
  recording?: string;
};

const Speech = ({ speech }: { speech: SpeechItem }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation('common');
  const { start, end, title, author, description, lang, recording } = speech;
  const style = description ? { cursor: 'pointer' } : {};
  const theme = useTheme();
  return (
    <Grid
      templateAreas={`"time title b"
                      "space title b"
                      "space author yt"`}
      gridTemplateColumns={[
        '85px 1fr auto',
        '100px 1fr auto',
        '120px 1fr auto',
        '170px 1fr auto',
        '200px 1fr auto',
      ]}
      //bg={isOpen ? 'blackAlpha.900' : 'blackAlpha.700'}
      paddingBottom={3}
      paddingTop={3}
      borderBottom={`0.25rem ${theme.colors.primary} solid`}
    >
      <GridItem area="time" onClick={() => description && onToggle()} textAlign='center'>
        <Text fontSize={['sm', 'md', 'xl', '2xl']} color="whiteAlpha.900">
         {start}-{end} 
        </Text>
      </GridItem>
      <GridItem
        area="title"
        {...style}
        onClick={() => description && onToggle()}
      >
        <Text fontSize={['sm', 'md', 'xl', '2xl']} color="whiteAlpha.900">
          {title}
          {lang && (
            <Text
              fontSize={['xs', 'sm', 'md', 'lg']}
              as="i"
              color="whiteAlpha.700"
            >
              {' '}
              [{lang.join('/')}]
            </Text>
          )}
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}></GridItem>
      <GridItem
        area="author"
        {...style}
        onClick={() => description && onToggle()}
      >
        <Text fontSize={['sm', 'md', 'xl', '2xl']} color="whiteAlpha.900">
          {author}
        </Text>
      </GridItem>
      {description && (
        <GridItem
          onClick={() => description && onToggle()}
          gridArea="b"
          minWidth={['60px', '60px', '74px', '90px']}
          display="flex"
        >
          <DefaultButton
            marginLeft="auto"
            textTransform="uppercase"
            size={['xs', 'xs', 'xs', 'sm']}
            _hover={{ color: 'black' }}
            text={isOpen ? 'less' : 'more'}
            marginBottom="2px"
          />
        </GridItem>
      )}
      {recording && (
        <GridItem
          gridArea="yt"
          minWidth={['60px', '60px', '74px', '90px']}
          display="flex"
        >
          <Link
            isExternal
            href={recording}
            target="_blank"
            margin="auto"
            _hover={{ textDecorationLine: 'none' }}
          >
            <DefaultButton
              marginTop="2px"
              marginLeft="auto"
              bg={theme.colors.red}
              textTransform="uppercase"
              size={['xs', 'xs', 'xs', 'sm']}
              _hover={{ color: 'black' }}
              text="nagranie"
            />
          </Link>
        </GridItem>
      )}
      <Collapse in={isOpen} animateOpacity style={{ gridColumn: '2/span 3' }}>
        <Box
          gridColumn="2"
          p="4px"
          color="white"
          mt="4"
          rounded="md"
          shadow="md"
        >
          {description?.map((descriptionText, index) => (
            <Text
              fontSize={['sm', 'sm', 'lg', 'xl']}
              key={`${descriptionText}-${index}`}
              minH="15px"
            >
              {descriptionText}
            </Text>
          ))}
        </Box>
      </Collapse>
    </Grid>
  );
};

export default Speech;
