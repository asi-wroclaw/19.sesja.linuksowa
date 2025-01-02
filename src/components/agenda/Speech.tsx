import DefaultButton from '@/components/common/DefaultButton';
import type { SpeechItem } from '@/data/agenda';
import {
  Box,
  Collapsible,
  Em,
  Grid,
  GridItem,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const Speech = ({ speech }: { speech: SpeechItem }) => {
  const { open, onToggle } = useDisclosure();
  const { start, end, title, author, description, lang, recording } = speech;
  const style = description ? { cursor: 'pointer' } : {};
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
      //bg={open ? 'blackAlpha.900' : 'blackAlpha.700'}
      paddingBottom={3}
      paddingTop={3}
      borderBottom={'0.25rem solid'}
      borderColor={'primary'}
    >
      <GridItem
        area="time"
        onClick={() => description && onToggle()}
        textAlign="center"
      >
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
            <Em fontSize={['xs', 'sm', 'md', 'lg']} color="whiteAlpha.700">
              {' '}
              [{lang.join('/')}]
            </Em>
          )}
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} />
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
            text={open ? 'less' : 'more'}
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
            href={recording}
            target="_blank"
            rel="noopener noreferrer"
            margin="auto"
            _hover={{ textDecorationLine: 'none' }}
          >
            <DefaultButton
              marginTop="2px"
              marginLeft="auto"
              bg={'red'}
              textTransform="uppercase"
              size={['xs', 'xs', 'xs', 'sm']}
              _hover={{ color: 'black' }}
              text="nagranie"
            />
          </Link>
        </GridItem>
      )}
      <Collapsible.Root
        open={open}
        // animateOpacity
        style={{ gridColumn: '2/span 3' }}
      >
        <Collapsible.Content>
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
                key={`${descriptionText}-${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  index
                }`}
                minH="15px"
              >
                {descriptionText}
              </Text>
            ))}
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Grid>
  );
};

export default Speech;
