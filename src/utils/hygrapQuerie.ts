export const historySession = `
  historySession {
    id
    title
    description {
      html
      text
    }
    initialDescription
    profileImage {
      url
    }
  }
`;

const contactSession = `
  contactSession {
    contactFields {
      contactValue
      name
      svgIcon
    }
  }
`

const startSession = `
  startSession {
    description {
      html
      text
      markdown
      raw
    }
    subTitle {
      html
      text
    }
    titleStart
    contactFields(orderBy: publishedAt_ASC) {
      name
      contactValue
    }
  }
`
const projectSession = `
  projectSession {
    description
    title
    text {
      html
      text
    }
    myProject(orderBy: publishedAt_ASC) {
      description {
        html
        text
      }
      image {
        url
      }
      title
      url
    }
  }
`

const skillSession = `
  skillSession {
    description
    text {
      html
      text
    }
    title
    knowTechnology(orderBy: publishedAt_ASC) {
      svgIcon
      name
      description {
        html
        text
      }
    }
  }
`

const studySession = `
  studySession {
    title
    description
    knowTechnology(orderBy: publishedAt_ASC) {
      name
      description {
        html
        text
      }
    }
  }
`

export const portfolioQuerie = `
query MyQuery {
  home(where: {slug: "home"}) {
    ${startSession}
    ${historySession}
    ${contactSession}
    ${projectSession}
    ${skillSession}
    ${studySession}
  }
}`;