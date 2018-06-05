export const addTaskValidator = (model: any): any => {
  
  const name = model.get("name")
  const errors: { name?: string } = {}

  if (!name) {
    errors.name = "Task name is required"
  }

  return errors
}
