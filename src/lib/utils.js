/**
 * Vue的插件，用来获取和设置localStorage存储
 **/
let local = {
  save (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    return JSON.parse(localStorage.getItem(key)) || null
  },
  clear(){
    localStorage.clear()
  }
}
/**
 * Vue的插件，用来获取和设置sessionStorage存储
 **/
let session = {
  save (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    return JSON.parse(sessionStorage.getItem(key)) || null
  },
  clear(){
    sessionStorage.clear()
  }
}
let objFunc = {
  isEmpty(obj){
    for(let key in obj){
      return false
    }
    return true
  }
}
export default {
  install: function (vm) {
    vm.prototype.$local = local
    vm.prototype.$session = session
    vm.prototype.$objFunc = objFunc
  }
}
