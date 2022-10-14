export interface SanityElement {
  _id: string
  _createdAt: string
  _updatedAt: string
}

export interface SanityBlock {
  _key: string
  _type: string
  children: Array<{
    _key: string
    _type: string
    marks: unknown[]
    text: string
  }>
}

export interface SanityImage {
  _type: 'image'
  alt?: string
  asset: {
    _ref: string
    _type: string
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export type SanityPath<T extends { slug: SanitySlug }> = Pick<T, 'slug'>

export enum SanityQuery {
  COMPANY_SERVICES_LIST = 'company-services-list',
  COMPANY_SERVICES_MINIMAL_LIST = 'company-services-minimal-list',
  COMPANY_SERVICE_DETAIL = 'company-service-detail',
  COMPANY_SERVICE_PATHS = 'company-service-paths',
  CUSTOMERS_LIST = 'customers-list',
  DOWNLOADS_LIST = 'downloads-list',
  EMPLOYEES_LIST = 'employees-list',
  ENVIRONMENT_PAGE = 'environment-page',
  NEWS_ARTICLES_LIST = 'news-articles-list',
  NEWS_ARTICLE_DETAIL = 'news-article-detail',
  NEWS_ARTICLE_PATHS = 'news-article-paths',
  WHAT_TO_DO_LIST = 'what-to-do-list',
}
