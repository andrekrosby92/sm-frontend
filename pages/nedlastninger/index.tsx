import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import Icon from 'components/Icons/Icon'
import Sanity from 'services/Sanity'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import { DownloadCategory } from 'types/download'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'

export default function Downloads({ downloads }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
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
              <DownloadItem fileUrl={fileUrl} key={_id} title={title} />
            ))}
          </div>
        </div>
      ))}
    </SectionWrapperPrimary>
  )
}

function DownloadItem({ fileUrl, title }: { fileUrl: string; title: string }): JSX.Element {
  return (
    <a className="block" href={fileUrl} rel="noreferrer" target="_blank">
      <Icon className="w-6 h-6 mr-1 inline-block align-top" name="pdf-red" />
      {title}
    </a>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ downloads: DownloadCategory[] }>> {
  return {
    props: {
      downloads: await Sanity.getDownloadsList(),
    },
  }
}
