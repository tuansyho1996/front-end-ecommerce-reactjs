
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

export const sortProducts = (products, typeSort) => {
  switch (typeSort) {
    case 'Best Selling':
      return products.sort((a, b) => {
        if (a.sold > b.sold) {
          return -1
        }
        if (a.sold < b.sold) {
          return 1
        }
        return 0
      })
    case 'Available':
      return products.sort((a, b) => {
        if (a.in_stock > b.in_stock) {
          return -1
        }
        if (a.in_stock < b.in_stock) {
          return 1
        }
        return 0
      })
    case 'Price: High to Low':
      return products.sort((a, b) => {
        if (a.sale_price > b.sale_price) {
          return -1
        }
        if (a.sale_price < b.sale_price) {
          return 1
        }
        return 0
      })
    case 'Price: Low to High':
      return products.sort((a, b) => {
        if (a.sale_price > b.sale_price) {
          return 1
        }
        if (a.sale_price < b.sale_price) {
          return -1
        }
        return 0
      })
    default:
      return products
  }
}