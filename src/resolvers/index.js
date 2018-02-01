const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { course } = require('./Mutation/course')
const { AuthPayload } = require('./AuthPayload')


module.exports = {
  // Query,
  Mutation: {
    ...auth,
    ...post,
    ...course,
  },
  AuthPayload,
}
