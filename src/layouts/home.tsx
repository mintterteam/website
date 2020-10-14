import Link from 'next/link'
import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'
import Footer from '../components/footer'

type LayoutProps = {
  frontMatter: any
}

const Home: FunctionComponent<LayoutProps> = ({children, frontMatter}) => {
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
      <div className="min-h-screen min-w-screen bg-gray-100 px-8 md:px-12 pt-12">
        <div className="max-w-custom w-full pt-8 prose xs:prose-lg lg:prose-xl 2xl:prose-2xl pb-16">
          <h1 className="m-0 p-0">{title}</h1>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
