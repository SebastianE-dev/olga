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
      }
    }
  `);

  return [{ ...data.page.hero, sectionName: "hero" }];
};

export default usePage;
