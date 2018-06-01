import { SubmissionError } from "redux-form/immutable"

export default function addTaskValidator(model: any, onSubmit: any) {
  const { name } = model

  const errors: { name?: string } = {}

  if (!name) {
    errors.name = "Task name is required"
  }

  if (errors.name) {
    alert(errors.name)
    throw new SubmissionError({
      _error: "Validate Error"
    })
  } else onSubmit(model)
}
