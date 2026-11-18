/** High-intent Daily in KSA merchants. Codes must match production `/shops`. */
export const FEATURED_SHOP_IDS = [
  'namshi',
  'temu',
  'trendyol',
  'amazon-sa',
  'nice-one',
  'shawarma-house',
]

/** Snapshot from GET https://api.lumrah.co/shops on 18 Nov 2026. Live fetch replaces this. */
export const featuredFallback = [
  {
    id: 'namshi',
    name: 'Namshi',
    blurb: 'نمشي. Beauty retailer in KSA.',
    website: 'https://www.namshi.com/saudi-en',
    coupons: [
      {
        id: 'sahseh-72375',
        title: '20% · نمشي - موقع فقط',
        detail:
          'Namshi store credit applies to all products (with some exceptions) for new users, and offers a 5% discount for existing users, up to a maximum discount of 50 SAR.',
        code: 'SH151',
        url: 'https://ar-sa.namshi.com/',
      },
      {
        id: 'sahseh-72378',
        title: '20% · نمشي - موقع فقط',
        detail:
          'Namshi store credit applies to all products (with some exceptions) for new users, and offers a 5% discount for existing users, up to a maximum discount of 50 SAR.',
        code: 'DWW',
        url: 'https://ar-sa.namshi.com/',
      },
      {
        id: 'sahseh-64195',
        title: 'Cashback 5% · نمشي',
        detail: 'Includes all products with some exceptions for new users, with a maximum discount of 10 riyals.',
        code: 'GBT',
        url: 'https://ar-sa.namshi.com/',
      },
    ],
  },
  {
    id: 'temu',
    name: 'Temu',
    blurb: 'تيمو. Marketplace for fashion, home, and everyday orders in KSA.',
    website: 'https://www.temu.com',
    coupons: [
      {
        id: 'sahseh-71942',
        title: 'Up to 30% · تيمو - الموقع',
        detail:
          'For new users up to 90 riyals (within the first 24 hours of downloading the application), and a 5% discount with a maximum of 30 riyals for the current user (limited use).',
        code: 'TEX01',
        url: '',
      },
      {
        id: 'sahseh-62686',
        title: 'Up to 30% · تيمو2',
        detail:
          'A discount of up to 30%, for new users, up to 90 riyals (within the first 24 hours of downloading the application), and a 5% discount, up to a maximum of 30 riyals, for the current user (limited use).',
        code: 'TEM18',
        url: '',
      },
    ],
  },
  {
    id: 'trendyol',
    name: 'Trendyol',
    blurb: 'ترينديول. Fashion and marketplace app with KSA delivery.',
    website: 'https://www.trendyol.com',
    coupons: [
      {
        id: 'sahseh-69441',
        title: 'Up to 40% · ترينديول - الموقع',
        detail:
          'Up to 40% Discount Includes all products with some exceptions for the new user and 10% for the current user with a minimum basket of 75 riyals and a maximum discount of 200 riyals (application only)',
        code: 'AZIZ',
        url: '',
      },
      {
        id: 'sahseh-64258',
        title: '20% · ترينديول',
        detail:
          'Includes all products with some exceptions for the new user with minimum basket 40 riyals and 1riyal discount for the current user with a minimum basket of 150 riyals (application only)',
        code: 'NMR',
        url: '',
      },
    ],
  },
  {
    id: 'amazon-sa',
    name: 'Amazon.sa',
    blurb: 'أمازون. Marketplace for groceries and everyday orders.',
    website: 'https://www.amazon.sa',
    coupons: [
      {
        id: 'sahseh-72885',
        title: '20% · امازون - الموقع',
        detail: 'Applies to all products, with a maximum discount of 30 SAR.',
        code: 'NEW20',
        url: 'https://www.amazon.sa',
      },
      {
        id: 'sahseh-72323',
        title: '20% · املزون - موقع',
        detail: 'On Riyad Bank credit cards, the maximum discount is 100 riyals.',
        code: 'RB20',
        url: 'https://www.amazon.sa',
      },
      {
        id: 'sahseh-72310',
        title: '15% · امازون الموقع',
        detail: 'On Mada cards from Riyad Bank, with a maximum limit of 75 riyals.',
        code: 'RB15',
        url: 'https://www.amazon.sa',
      },
      {
        id: 'sahseh-72898',
        title: 'Up to 30% · امازون - الموقع',
        detail: 'Exclusive to Prime members only: a discount of up to 150 SAR',
        code: 'RB30',
        url: 'https://www.amazon.sa',
      },
      {
        id: 'sahseh-72324',
        title: '25% · املزون - موقع',
        detail: 'On Riyad Bank credit cards, the maximum discount is 150 riyals.',
        code: 'RB25',
        url: 'https://www.amazon.sa',
      },
    ],
  },
  {
    id: 'nice-one',
    name: 'Nice One',
    blurb: 'نايس ون. Beauty retailer in KSA.',
    website: 'https://niceonesa.com',
    coupons: [
      {
        id: 'nice-one-nl1gk',
        title: '10–20%',
        detail: 'Gives 10–20% in the Nice One app.',
        code: 'NL1GK',
        url: 'https://niceonesa.com',
      },
    ],
  },
  {
    id: 'shawarma-house',
    name: 'Shawarma House',
    blurb: 'بيت الشاورما. Our dishes are always gives unique experience',
    website: 'https://order.shawarmahouse.com.sa/menu/breakfast-box-137358/location/deliver',
    coupons: [
      {
        id: 'shawarma-house-5',
        title: '5',
        detail: 'Shawarma House coupon code 5.',
        code: '5',
        url: '',
      },
      {
        id: 'sahseh-66210',
        title: '7% · بيت الشاورما',
        detail: 'Includes all products except offers (for collection from the branch only) - Riyadh only',
        code: 'SSS',
        url: '',
      },
    ],
  },
]
