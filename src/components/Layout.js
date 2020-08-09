/* eslint-disable */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Layout = ({ meta, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD HH:mm")
        siteMetadata {
          title
          description
          basePath
        }
      }
    }
  `);
    const { title, description } = data.site.siteMetadata;
    const { buildTime } = data.site;
    return (
        <React.Fragment>
            <header className="hero is-light is-size-6">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{description}</h2>
                <p>Build: {buildTime}</p>
            </header>
            <main className="section  is-size-6" style={{
                maxWidth: "800px",
                margin: "0 auto",
                position: "relative"}}>
                {children}
            </main>
        </React.Fragment>
    );
};

export default Layout;
