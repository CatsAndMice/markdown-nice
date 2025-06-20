export const getDbItem = (key) => {
  let value = null;
  if (window.utools) {
    value = window.utools.dbStorage.getItem(key);
    return value;
  }
  value = localStorage.getItem(key);
  return value;
};

export const setDbItem = (key, defaultValue = "") => {
  if (window.utools) {
    window.utools.dbStorage.setItem(key, defaultValue);
    return;
  }
  localStorage.setItem(key, defaultValue);
};
