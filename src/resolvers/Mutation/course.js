const {getUserId, Context} = require('../../utils')

const course = {
	async createCourse(parent, {title, code, subject, university, description}, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createCourse(
      {
        data: {
					title,
					code,
					subject,
					university,
					description
				},
      },
      info
    )
	},
}

export course