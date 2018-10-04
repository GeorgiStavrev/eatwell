export const types = {
  FIELD_CHANGED: "FIELD_CHANGED",
  FORM_RESET: "FORM_RESET"
};

const changeFieldValue = (form, name, value) => {
  return { type: types.FIELD_CHANGED, payload: { form, name, value } };
};

const resetForm = (form, initialState) => {
  return { type: types.FORM_RESET, payload: { form, initialState } };
};

export const actions = {
  changeFieldValue,
  resetForm
};
