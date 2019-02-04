export function resolveSidebarItems(site, _) {
  const { pages } = site
  const { sidebar } = site.themeConfig
  const items = sidebar.map((item) => {
    const arr = []
    item.children.forEach((child) => {
      console.log(child)
      const obj = {}
      pages.forEach((page, index) => {
        debugger
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
  console.log(items)
  return items
}