declare module '*.gql' {
  const content: any
  export default content
}

declare module '*.graphql' {
  const content: any
  export default content
}

declare module '*.json' {
  const content: any
  export default content
}

interface Window {
  __APOLLO_SCHEMA__: any
  __APOLLO_STATE__: any
  __REDUX_STATE__: any
}
