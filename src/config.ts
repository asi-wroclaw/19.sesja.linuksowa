import getConfig from 'next/config';
import { z } from 'zod';

const appConfig = z.object({
  SHOW_AGENDA: z.preprocess(
    (value) => value === 'true',
    z.boolean().default(false),
  ),
  SHOW_TICKETS: z.preprocess(
    (value) => value === 'true',
    z.boolean().default(false),
  ),
  SHOW_SPEAKERS: z.preprocess(
    (value) => value === 'true',
    z.boolean().default(false),
  ),
  SHOW_CALL_FOR_PAPERS: z.preprocess((value) => value === 'true', z.boolean()),
  ENABLE_CREATOR: z.preprocess(
    (value) => value === 'true',
    z.boolean().default(false),
  ),
});

const config = appConfig.parse(getConfig().publicRuntimeConfig || {});

export default config;
