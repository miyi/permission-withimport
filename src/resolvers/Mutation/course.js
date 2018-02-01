const {getUserId, Context} = require('../../utils')

const course = {
	async createCourse(parent, {code, title, subject, university, description }, ctx, info) {
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

module.exports = { course }