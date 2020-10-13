import React, {FunctionComponent} from 'react'
import Link from 'next/link'
import {NextSeo} from 'next-seo'
import Footer from '../components/footer'

type LayoutProps = {
  frontMatter: any
}

const DefaultLayout: FunctionComponent<LayoutProps> = ({
  children,
  frontMatter,
}) => {
  const {
    title,
    description,
    titleAppendSiteName = false,
    url,
    ogImage,
  } = frontMatter
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? undefined : '%s'}
        openGraph={{
          title,
          description,
          url,
          images: ogImage ? [ogImage] : undefined,
        }}
        canonical={url}
      />
      <div className="min-h-screen min-w-screen bg-gray-100 px-4 md:px-6">
        <div className="max-w-3xl w-full pt-8 prose prose-2xl pb-32">
          <div>
            <Link href="/">
              <a className="text-sm font-light">Home</a>
            </Link>
          </div>
          <h1 className="m-0 p-0 mt-4">{title}</h1>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout