import groq from 'groq'

import { SanityQuery } from 'types/sanity'

export function getSanityQuery(type: SanityQuery): string {
  switch (type) {
    case SanityQuery.ARBEIDSKLAER:
      return groq`
        *[_type == "arbeidsklaer" && slug.current == $slug][0]
      `

    case SanityQuery.ARBEIDSKLAER_PATHS:
      return groq`
        *[_type == "arbeidsklaer"] | order(order asc) {
          slug,
        }
      `

    case SanityQuery.ARBEIDSKLAER_LIST:
      return groq`
        *[_type == "arbeidsklaer"] | order(order asc) {
          slug,
          title,
          images,
          tags
        }
      `

    case SanityQuery.COMPANY_SERVICE_DETAIL:
      return groq`
        *[_type == "company-service" && slug.current == $slug][0]
      `

    case SanityQuery.COMPANY_SERVICE_PATHS:
      return groq`
        *[_type == "company-service"] | order(order asc) {
          slug,
        }
      `

    case SanityQuery.COMPANY_SERVICES_LIST:
      return groq`
        *[_type == "company-service"] | order(order asc)
      `

    case SanityQuery.COMPANY_SERVICES_MINIMAL_LIST:
      return groq`
        *[_type == "company-service"] | order(order asc) {
          icon,
          shortDescription,
          slug,
          title,
        }
      `

    case SanityQuery.CUSTOMERS_LIST:
      return groq`
        *[_type == "customer"]
      `

    case SanityQuery.DOWNLOADS_LIST:
      return groq`
        *[_type == "download-category"] {
          ...,
          "downloads": *[_type == "download" && category._ref == ^._id ] {
            ...,
            "fileUrl": file.asset->url
          }
        }
      `

    case SanityQuery.EMPLOYEES_LIST:
      return groq`
        *[_type == "employee"] | order(order asc)
      `

    case SanityQuery.ENVIRONMENT_PAGE:
      return groq`
        *[_type == "environment-page"][0]
      `

    case SanityQuery.NEWS_ARTICLE_DETAIL:
      return groq`
        *[_type == "news-article" && slug.current == $slug][0]
      `

    case SanityQuery.NEWS_ARTICLE_PATHS:
      return groq`
        *[_type == "news-article"] {
            slug,
        }
      `

    case SanityQuery.NEWS_ARTICLES_LIST:
      return groq`
        *[_type == "news-article"]
      `

    case SanityQuery.WHAT_TO_DO_LIST:
      return groq`
        *[_type == "what-we-do"] | order(order asc)
      `

    default:
      throw new Error(`No such query-type. Provided: ${type}`)
  }
}
