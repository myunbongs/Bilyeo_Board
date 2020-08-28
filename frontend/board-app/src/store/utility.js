export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject, //oldobject 복사
    ...updatedProperties,
  };
};
