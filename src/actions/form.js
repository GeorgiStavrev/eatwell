export const types = {
  FIELD_CHANGED: "FIELD_CHANGED"
};

const changeFieldValue = (form, name, value) => {
  return { type: types.FIELD_CHANGED, payload: { form, name, value } };
};

export const actions = {
  changeFieldValue
};
