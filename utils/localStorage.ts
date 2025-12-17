type LocalStorageKey = 'cookiePolicyAccepted';

export const setLocalStorage = (key: LocalStorageKey, value: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: LocalStorageKey) => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(key);
};
