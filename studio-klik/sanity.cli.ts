import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ilu5dvrl',
    dataset: 'production'
  },
  studioHost: 'klik',
  project: {
    basePath: '/sanity.studio',
  },
})
