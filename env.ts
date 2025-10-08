
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  // NEXTAUTH_SECRET: z.string(),
})

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    // MONGODB_URI="mongodb://localhost:27017/pbc-saas"
    
  },
  client: {

  },
  runtimeEnv: {
    // Stripe
  },
});
