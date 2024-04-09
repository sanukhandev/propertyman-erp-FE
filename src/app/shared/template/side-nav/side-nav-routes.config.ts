import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
  {
    path: '',
    title: 'User',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    submenu: [
      {
        path: '/user',
        title: 'User List',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user',
        submenu: []
      },
      {
        path: '/user/add',
        title: 'Add User',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user-add',
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Product',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'shopping-cart',
    submenu: [
      {
        path: '/product',
        title: 'Product List',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'shopping-cart',
        submenu: []
      },
      {
        path: '/product/add',
        title: 'Add Product',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'plus',
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Category',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'appstore',
    submenu: [
      {
        path: '/category',
        title: 'Category List',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: []
      },
      {
        path: '/category/add',
        title: 'Add Category',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'plus',
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Order',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'shopping-cart',
    submenu: [
      {
        path: '/order',
        title: 'Order List',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'shopping-cart',
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Report',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'bar-chart',
    submenu: [
      {
        path: '/report',
        title: 'Report List',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'bar-chart',
        submenu: []
      }
    ],
  }
    // {
    //     path: '',
    //     title: 'Multi Level Menu',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     icon: 'appstore',
    //     submenu: [
    //         {
    //             path: '',
    //             title: 'Level 1',
    //             iconType: '',
    //             icon: '',
    //             iconTheme: '',
    //             submenu: [
    //                 {
    //                     path: '',
    //                     title: 'Level 2',
    //                     iconType: 'nzIcon',
    //                     iconTheme: 'outline',
    //                     icon: '',
    //                     submenu: []
    //                 }
    //             ]
    //         }
    //     ]
    // }
];
