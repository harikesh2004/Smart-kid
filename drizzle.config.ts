import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://smartdb_owner:wPfdU2HXt9sL@ep-young-sun-a5kfqv5n.us-east-2.aws.neon.tech/smartdb?sslmode=require',
  },
  verbose: true,
  strict: true,
})