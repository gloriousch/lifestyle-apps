let defaultCity = '哈尔滨'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (ex) {}

export default {
  city: defaultCity
}
