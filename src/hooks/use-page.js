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
        extraFeatures: childWordPressAcfExtraFeatures {
          id
          title
          feature {
            description
            title
          }
        }
        question: childWordPressAcfQa {
          id
          color
          title
        }
        testimonials: childWordPressAcfTestimonials {
          color
          id
          title
          testimonial {
            description
            name
            images {
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
        clients: childWordPressAcfClients {
          title
          id
          company {
            logo {
              id
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

        packs: childWordPressAcfPacks {
          color
          title
          id
          pack {
            title
            price
            service {
              title
              description {
                text
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
    { ...data.page.extraFeatures, sectionName: "extraFeatures" },
    { ...data.page.question, sectionName: "qna" },
    { ...data.page.testimonials, sectionName: "testimonials" },
    { ...data.page.clients, sectionName: "clients" },
    { ...data.page.packs, sectionName: "packs" },
  ];
};

export default usePage;
