import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const { movie } = useStaticQuery(
    graphql`
    query MyQuery {
      movie {
        movieList { 
          id     
          rate
          title
          year
        }
      }
    }    
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {movie.movieList.map(mov => (
          <li key={mov.id}>
            <div>{mov.title}({mov.year})</div>
            <div className="rate-row">
              <span className="rate-text">{mov.rate}</span>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage