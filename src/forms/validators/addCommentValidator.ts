export default function addCommentValidator(model:any):any {
  const comment = model.get('comment')

  const errors: { comment: string } = { comment: "" }

  if (!comment) {
    errors.comment = "Comment is required"
  }

  return errors
}
