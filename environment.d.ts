declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      POSTMARK_SERVER_TOKEN: string
      GOOGLE_RECAPTCHA_SECRET_KEY: string,
      NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY: string
      NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY: string
      NEXT_PUBLIC_SANITY_API_VERSION: string
      NEXT_PUBLIC_SANITY_DATASET: string
      NEXT_PUBLIC_SANITY_PROJECT_ID: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
