import imageUrlBuilder from '@sanity/image-url'
import sanityClient, { SanityClient } from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { CompanyService, CompanyServiceMinimal } from 'types/company-service'
import { Customer } from 'types/customer'
import { DownloadCategory } from 'types/download'
import { Employee } from 'types/employee'
import { EnvironmentPage } from 'types/environment-page'
import { NewsArticle } from 'types/news-article'
import { SanityPath, SanityQuery } from 'types/sanity'
import { WhatWeDo } from 'types/what-we-do'
import { getSanityQuery } from 'lib/sanity'

class Sanity {
  client: SanityClient

  constructor(client: SanityClient) {
    this.client = client
  }

  buildImageUrl(source: SanityImageSource): string {
    const builder = imageUrlBuilder(this.client)
    return builder.image(source).url() ?? ''
  }

  async getCompanyServiceDetail(slug: string | undefined): Promise<CompanyService> {
    const query = getSanityQuery(SanityQuery.COMPANY_SERVICE_DETAIL)
    return await this.client.fetch(query, { slug })
  }

  async getCompanyServicePaths(): Promise<SanityPath<CompanyService>[]> {
    const query = getSanityQuery(SanityQuery.COMPANY_SERVICE_PATHS)
    return await this.client.fetch(query)
  }

  async getCompanyServicesList(): Promise<CompanyService[]> {
    const query = getSanityQuery(SanityQuery.COMPANY_SERVICES_LIST)
    return await this.client.fetch(query)
  }

  async getCompanyServicesMinimalList(): Promise<CompanyServiceMinimal[]> {
    const query = getSanityQuery(SanityQuery.COMPANY_SERVICES_MINIMAL_LIST)
    return await this.client.fetch(query)
  }

  async getCustomersList(): Promise<Customer[]> {
    const query = getSanityQuery(SanityQuery.CUSTOMERS_LIST)
    return await this.client.fetch(query)
  }

  async getDownloadsList(): Promise<DownloadCategory[]> {
    const query = getSanityQuery(SanityQuery.DOWNLOADS_LIST)
    return await this.client.fetch(query)
  }

  async getEmployeesList(): Promise<Employee[]> {
    const query = getSanityQuery(SanityQuery.EMPLOYEES_LIST)
    return await this.client.fetch(query)
  }

  async getEnvironmentPageData(): Promise<EnvironmentPage> {
    const query = getSanityQuery(SanityQuery.ENVIRONMENT_PAGE)
    return await this.client.fetch(query)
  }

  async getNewsArticleDetail(slug: string | undefined): Promise<NewsArticle> {
    const query = getSanityQuery(SanityQuery.NEWS_ARTICLE_DETAIL)
    return await this.client.fetch(query, { slug })
  }

  async getNewsArticlePaths(): Promise<SanityPath<NewsArticle>[]> {
    const query = getSanityQuery(SanityQuery.NEWS_ARTICLE_PATHS)
    return await this.client.fetch(query)
  }

  async getNewsArticlesList(): Promise<NewsArticle[]> {
    const query = getSanityQuery(SanityQuery.NEWS_ARTICLES_LIST)
    return await this.client.fetch(query)
  }

  async getWhatWeDoList(): Promise<WhatWeDo[]> {
    const query = getSanityQuery(SanityQuery.WHAT_TO_DO_LIST)
    return await this.client.fetch(query)
  }
}

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
})

export default new Sanity(client)
