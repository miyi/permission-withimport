const { getUserId, Context } = require('../utils')

const Query = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(parent, { id }, ctx, info) {
    const requestingUserIsAuthor = await ctx.db.exists.Post{
      id,
      author: {
        id: userId,
      },
    })
    const requestingUserIsAdmin = await ctx.db.exists.User({
      id: userId,
      role: 'ADMIN'
    })
    if ( requestingUserIsAdmin || requestingUserIsAuthor ) {
      return ctx.db.query.post({ where: { id } }, info)
    }
    throw new Error(
      'invalid permission, you must be an ADMIN or the Author to retrieve this post'
    )
    
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }
