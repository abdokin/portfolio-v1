import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
    const rawPageId='9e564b6385cd4e8cba26c8e76ec74acd'
  try {
    const props = await resolveNotionPage(domain,rawPageId)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function Blog(props) {
  return (
    <div>
        <NotionPage {...props} />
    </div>
  )
}
