const ROUTES = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    links: [
      { name: 'Sales Analytics', path: '/' },
      { name: 'Sellers List', path: '/sellers-list' },
      { name: 'Sellers Table', path: '/sellers-table' },
      { name: 'Sellers Grid', path: '/sellers-grid' },
      { name: 'Seller Profile', path: '/seller-profile' },
      { name: 'Revenue by Period', path: '/revenue-by-period' },
    ]
  },
  {
    name: 'Products',
    icon: 'pricetags',
    links: [
      { name: 'Top Products', path: '/top-products' },
      { name: 'Products Grid', path: '/products-grid' },
      { name: 'Products Management', path: '/products-management' },
      { name: 'Product Editor', path: '/product-editor' },
      { name: 'Banners', path: '/banners' },
    ]
  },
  {
    name: 'Orders',
    icon: 'cart',
    path: '/orders'
  },
  {
    name: 'Statistics',
    icon: 'stats-bars2',
    path: '/statistics'
  },
  {
    name: 'Reviews',
    icon: 'star-half',
    path: '/reviews'
  },
  {
    name: 'Customers',
    icon: 'group',
    path: '/customers'
  },
  {
    name: 'Transactions',
    icon: 'money',
    path: '/transactions',
    qty: 279
  },
  {
    name: 'Pages',
    icon: 'profile1',
    links: [
      { name: 'Login', path: '/login' },
      { name: 'Page 404', path: '/404' },
    ]
  },
  {
    name: 'Settings',
    icon: 'cog',
    links: [
      { name: 'General Settings', path: '/general-settings' },
      { name: 'Connected Apps', path: '/connected-apps' }
    ]
  }
]

export default ROUTES