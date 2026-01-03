import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http'
import { drizzle as drizzlePostgres } from 'drizzle-orm/node-postgres'
import { neon } from '@neondatabase/serverless'
import { Pool } from 'pg'

import * as schema from './schema'

const isVercel = !!process.env.VERCEL

export const db = isVercel
  ? drizzleNeon({
      client: neon(process.env.DATABASE_URL!),
      schema,
      casing: 'snake_case',
    })
  : drizzlePostgres(
      new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
      {
        schema,
        casing: 'snake_case',
      }
    )
