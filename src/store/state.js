let defaultCity = '上海'
// 避免没有历史记录、无痕 报错
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
}

export default {
  city: defaultCity
}
