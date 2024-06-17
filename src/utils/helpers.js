
export const formatNumber = (number, prefix = '') => {
  let result = number
  if (999 < number && number < 1000000) {
    const sortNum = (number / 1000).toString()

    result = `${prefix}${sortNum}k`
  }
  if (number > 999999) {
    const sortNum = (number / 1000000).toString()
    result = `${prefix}${sortNum}m`
  }
  return result
}

export const formatNumberBasic = (number, prefix = '') => {
  return `${prefix} ${new Intl.NumberFormat().format(number).toString()}`
}

export const sortSellers = (sellers, sort) => {
  switch (sort) {
    case 'bs':
      return sellers?.sort((a, b) => b.sales - a.sales)
    case 'a-z':
      return sellers?.sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1
        }
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        }
        return 0
      })
    case 'z-a':
      return sellers?.sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return -1
        }
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return 1
        }
        return 0
      })
    case 'lth':
      return sellers?.sort((a, b) => a.rating - b.rating)
    case 'htl':
      return sellers?.sort((a, b) => b.rating - a.rating)
    default:
      return sellers
  }
}