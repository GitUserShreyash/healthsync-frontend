export function readStorage(key, fallbackValue = null) {
  const storedValue = window.localStorage.getItem(key)
  return storedValue ? JSON.parse(storedValue) : fallbackValue
}

export function writeStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function removeStorage(key) {
  window.localStorage.removeItem(key)
}
