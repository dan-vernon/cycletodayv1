import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import LocationSearch from "../components/locationsearch"
import ForecastBox from "../components/forecastbox"
import AnalysisBox from "../components/analysisbox"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`cycle`, `cycle commute`, `weather`]} />
    <LocationSearch />
    <ForecastBox />
    <AnalysisBox />
  </Layout>
)

export default IndexPage
