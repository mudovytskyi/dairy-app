import { SubmissionError } from "redux-form/immutable"

export default function addCommentValidator(model: any, onSubmit: any) {
  const { comment } = model

  const errors: { comment: string } = { comment: "" }

  if (!comment) {
    errors.comment = "Comment is required"
  }

  if (errors.comment) {
    alert(errors.comment)
    throw new SubmissionError({
      _error: "Validate Error"
    })
  } else onSubmit(model)
}
