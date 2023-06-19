import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import Icon from 'components/Icons/Icon'
import SEO from 'components/SEO/SEO'
import Sanity from 'services/Sanity'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { DownloadCategory } from 'types/download'

export default function Downloads({ downloads }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <SEO
        canonicalUrl="https://www.skiltmakeren.no/nedlastninger"
        description="Få tilgang til omfattende dokumentsjon for nedlasting. Lett, raskt og brukervennlig - alltid oppdatert."
        descriptionFacebook="Få tilgang til omfattende dokumentsjon for nedlasting."
        descriptionTwitter="Få tilgang til omfattende dokumentsjon for nedlasting. Lett, raskt og brukervennlig."
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Nedlastninger og dokumentasjon · Skiltmakeren AS"
      />

      <SectionWrapperPrimary className="space-y-4">
        <div className="space-y-2">
          <SectionHeaderPrimary>Nedlastninger</SectionHeaderPrimary>
          <p className="font-light text-gray-700">Her kan du laste ned dokumenter fra Skiltmakeren</p>
        </div>
        {downloads.map((elem) => (
          <div className="space-y-1" key={elem._id}>
            <h3 className="text-xl font-medium">{elem.name}</h3>
            <div className="space-y-1">
              {elem.downloads.map(({ _id, fileUrl, title }) => (
                <a className="block" href={fileUrl} key={_id} rel="noreferrer" target="_blank">
                  <Icon className="w-6 h-6 mr-1 inline-block align-top" name="pdf-red" />
                  {title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </SectionWrapperPrimary>
    </div>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ downloads: DownloadCategory[] }>> {
  return {
    props: {
      downloads: await Sanity.getDownloadsList(),
    },
    revalidate: 30,
  }
}
