import { Card, Grid, Image, Text } from '@nextui-org/react';
import { Ogp } from '@wiscro/common';
import { FC } from 'react';

type Props = {
  ogp: Ogp;
};

const MAX_WORD_COUNT_OF_BODY = 96;

export const OgpCard: FC<Props> = ({ ogp }) => {
  return (
    <Card>
      <Card.Body css={{ p: 0, flex: 'none' }}>
        <a href={ogp.url} target="blank" rel="noopener noreferrer">
          <Image src={ogp.image || ''} autoResize />
        </a>
      </Card.Body>
      <Card.Footer css={{ bgColor: '#202020', p: '$4', display: 'flex', flexDirection: 'column', alignItems: 'start', height: '100%' }}>
        <Grid css={{ width: '100%', display: 'flex', p: '$0', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href={ogp.url} target="blank" rel="noopener noreferrer">
            <Text
              b
              css={{
                color: '$white',
                display: '-webkit-box',
                overflow: 'hidden',
                overflowWrap: 'anywhere',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}
            >
              {ogp.title || ogp.url}
            </Text>
          </a>
        </Grid>
        <Text css={{ mt: '$10', mb: '$4', color: '$white', fontSize: '$xs', overflowWrap: 'anywhere' }}>
          {ogp.description?.length || 0 > MAX_WORD_COUNT_OF_BODY
            ? ogp.description?.slice(0, MAX_WORD_COUNT_OF_BODY) + '...'
            : ogp.description}
        </Text>
        <Grid css={{ width: '100%', mt: 'auto', p: 0, display: 'flex', gap: '$2', alignItems: 'center' }}>
          <Grid css={{ py: 0 }}>
            <Grid css={{ p: 0, display: 'flex', gap: '$2', alignItems: 'center' }}>
              <a href={new URL(ogp.url).origin} target="blank" rel="noopener noreferrer">
                <Text css={{ color: '$accents8', fontWeight: '$bold', fontSize: '$xs' }}>{ogp.siteName}</Text>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Card.Footer>
    </Card>
  );
};
