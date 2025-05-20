import { z } from 'zod';

import 'zod-openapi/extend';

const errorResponseSchema = z.object({
  error: z.string(),
});
type ErrorResponseSchema = z.infer<typeof errorResponseSchema>;

export { errorResponseSchema, type ErrorResponseSchema };
