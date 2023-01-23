import * as React from "react"
import { SEO } from "../components/seo"

const IndexPage = () => {
  return (
    <main className="container-fluid">
      {/* If we have to use react helmet */}
      {/* <SEO title="Home 2" /> */}
      <h1>
        Prueba SEO Gatsby + Contentful
      </h1>
      <h2>By Jouler Talaigua</h2>
    </main>
  )
}

export default IndexPage

export const Head = () => <SEO title="Home" />
