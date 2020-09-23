## filter
// 找 filter/filter. js
import * as filters from '. /filter/filter. js'
//遍历所有导出的过滤器并添加到全局过滤器
Object. keys(filters). forEach((key) => {
  Vue. filter(key, filters[key]); 
})
