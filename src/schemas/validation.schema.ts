import { z } from 'zod';

import 'zod-openapi/extend';

const idValidationSchema = z.string().uuid({ message: 'Invalid UUID format' });
type IdValidationSchema = z.infer<typeof idValidationSchema>;

export { idValidationSchema, type IdValidationSchema };
