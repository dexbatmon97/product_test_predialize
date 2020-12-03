export interface Post{
    id: String,
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      deadline: {
        type: Date,
        required: true,
      },

}