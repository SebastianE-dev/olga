import { graphql, useStaticQuery } from "gatsby";
const usePage = () => {
  const data = useStaticQuery(graphql`
    {
      page: wordpressPage(title: { eq: "Home" }) {
        hero: childWordPressAcfHero {
          color
          title: page_title
          image {
            alt_text
            localFile {
              id
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        features: childWordPressAcfFeatures {
          id
          feature {
            title
            description
            icon {
              alt_text
              id
              localFile {
                sharp: childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        extraInfo: childWordPressAcfExtraInfo {
          id
          color
          title
          paragraphs {
            paragraph
          }
          image {
            alt_text
            localFile {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return [
    { ...data.page.hero, sectionName: "hero" },
    { ...data.page.features, sectionName: "faetures" },
    { ...data.page.extraInfo, sectionName: "extra" },
  ];
};

export default usePage;
