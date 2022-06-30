const getMenu = (menu) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children && menu[i].children.length <= 0) {
      delete menu[i].children
    }
    if (menu[i].meta && menu[i].children && menu[i].children.length > 0) {
      getMenu(menu[i].children)
    }
  }
  return menu
}

export const filterMenu = (menu) => {
  const menuList = getMenu(menu)
  return menuList
}
