export const historySession = `
  historySession {
    id
    title
    description {
      html
      text
      raw
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
      raw
    }
    myProject(orderBy: publishedAt_ASC) {
      description {
        html
        text
        raw
      }
      image {
        url
      }
      title
      url
      knowTechnology(first: 10) {
        name
      }
    }
  }
`

const skillSession = `
  skillSession {
    description
    text {
      html
      text
      raw
    }
    title
    knowTechnology(orderBy: publishedAt_ASC) {
      svgIcon
      name
      description {
        html
        text
        raw
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
        raw
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