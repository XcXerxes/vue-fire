export function resolveSidebarItems(site, _) {
  const { pages } = site
  const { sidebar } = site.themeConfig
  const items = sidebar.map((item) => {
    const arr = []
    item.children.forEach((child) => {
      const obj = {}
      pages.forEach((page, index) => {
        const path = page.path.indexOf('.') > -1 ? page.path.substr(0, page.path.indexOf('.')) : page.path
        if(path === child) {
          obj.path = page.path
          obj.title = page.title
          obj.key = page.key
          arr.push(obj)
        }
      })
    })
    return {...item, children: arr}
  })
  // const items = sidebar.map(item => {
  //   const children = item.children.map(child => {
  //     const arr = pages.map((page, index) => {
  //       // 获取路径值
  //       const path = page.path.indexOf('.') > -1 ? page.path.substr(0, page.path.indexOf('.')) : page.path
  //       if (path === child) {
  //         return {
  //           path: page.path,
  //           title: page.title,
  //           key: page.key
  //         }  
  //       }
  //       return {}
  //     })
  //     console.log(arr)
  //     return [...arr]
  //   })
  //   return {...item, children}
  // })
  // console.log(items)
  return items
}