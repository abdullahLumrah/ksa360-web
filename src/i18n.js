import { computed, ref } from 'vue'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('ksa360.lang') : null
export const lang = ref(stored === 'ar' ? 'ar' : 'en')

export function setLang(next) {
  lang.value = next
  if (typeof localStorage !== 'undefined') localStorage.setItem('ksa360.lang', next)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = next
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'
  }
}

const copy = {
  en: {
    navCoupons: 'Coupons',
    navBlog: 'Guides',
    navGet: 'Get the app',
    heroKicker: 'All in one · for expats',
    heroTitleA: 'Your KSA',
    heroTitleB: 'cheat code.',
    heroLead:
      'Marketplace, coupons, community, food, jobs, and prayer times — the stuff that used to live in ten WhatsApp groups.',
    wantCoupon: 'Want a coupon?',
    couponLead: 'Daily in KSA unlocks shops, brands, and offers near you. Download the app — the deals live inside.',
    openApp: 'Open in the app',
    onPlay: 'Get it on Google Play',
    onStore: 'Download on the App Store',
    storeSoon: 'App Store — in review',
    cities: 'Riyadh · Jeddah · Dammam · Khobar · Makkah · Madinah · Neom',
    featuresKicker: 'One app. Daily Kingdom life.',
    featuresTitle: 'Built for people who just moved here — and people who already know the shortcuts.',
    howKicker: 'Three taps',
    howTitle: 'From Home Screen to a deal, a listing, or Fajr.',
    step1: 'Download KSA 360',
    step1b: 'Free on Android now. iPhone is in App Review.',
    step2: 'Browse as a guest',
    step2b: 'Home, coupons, marketplace, play, and prayer work before you sign in.',
    step3: 'Unlock posting',
    step3b: 'Email or Google when you want to list, chat, or join a page.',
    ctaTitle: 'Stop hunting chats. Open KSA 360.',
    ctaLead: 'English by default. Arabic from Profile. Made by Lumrah.',
    footerTag: 'All-in-one living for expats in Saudi Arabia.',
    privacy: 'Privacy',
    delete: 'Delete account',
    blogTitle: 'Guides for life in the Kingdom',
    blogLead: 'Short reads that match what KSA 360 actually helps you do.',
    downloadTitle: 'Download KSA 360',
    downloadLead: 'Android is live. iPhone is with Apple Review — this button is ready for the store link.',
    couponsTitle: 'Coupons & brands in Daily in KSA',
    couponsLead: 'Perfume houses, groceries, car wash, fashion, electronics — then tap through to the shop. The coupon drawer lives in the app, not on the web.',
    notFound: 'This page wandered off into the dunes.',
    backHome: 'Back to KSA 360',
  },
  ar: {
    navCoupons: 'كوبونات',
    navBlog: 'أدلة',
    navGet: 'حمّل التطبيق',
    heroKicker: 'كل شيء في تطبيق · للمقيمين',
    heroTitleA: 'شفرة',
    heroTitleB: 'السعودية.',
    heroLead:
      'سوق، كوبونات، مجتمع، طعام، وظائف، ومواقيت الصلاة — بدل عشر مجموعات واتساب.',
    wantCoupon: 'تبغى كوبون؟',
    couponLead: 'يومي في السعودية يفتح المتاجر والعروض حولك. حمّل التطبيق — العروض داخله.',
    openApp: 'افتح في التطبيق',
    onPlay: 'Google Play',
    onStore: 'App Store',
    storeSoon: 'آب ستور — قيد المراجعة',
    cities: 'الرياض · جدة · الدمام · الخبر · مكة · المدينة · نيوم',
    featuresKicker: 'تطبيق واحد. يومك في المملكة.',
    featuresTitle: 'للوافد الجديد، وللي يعرف الطرق المختصرة من زمان.',
    howKicker: 'ثلاث نقرات',
    howTitle: 'من الشاشة الرئيسية إلى عرض، إعلان، أو الفجر.',
    step1: 'حمّل KSA 360',
    step1b: 'مجاني على أندرويد. آيفون لدى مراجعة آبل.',
    step2: 'تصفح كضيف',
    step2b: 'الرئيسية والكوبونات والسوق والترفيه والصلاة قبل تسجيل الدخول.',
    step3: 'انشر متى تبي',
    step3b: 'بريد أو جوجل لما تبي تعلن أو ترد في المجتمع.',
    ctaTitle: 'وقف البحث في الشات. افتح KSA 360.',
    ctaLead: 'الإنجليزية افتراضي. العربية من الملف الشخصي. من Lumrah.',
    footerTag: 'دليل المقيمين في السعودية في تطبيق واحد.',
    privacy: 'الخصوصية',
    delete: 'حذف الحساب',
    blogTitle: 'أدلة للعيش في المملكة',
    blogLead: 'مقالات قصيرة بنفس ما يساعدك فيه التطبيق.',
    downloadTitle: 'حمّل KSA 360',
    downloadLead: 'أندرويد متاح. آيفون لدى آبل — الزر جاهز لرابط المتجر.',
    couponsTitle: 'كوبونات وعلامات في يومي في السعودية',
    couponsLead: 'عطور، بقالة، غسيل سيارات، أزياء، إلكترونيات. الدرج داخل التطبيق.',
    notFound: 'هذه الصفحة ضاعت في النفود.',
    backHome: 'العودة إلى KSA 360',
  },
}

export const t = computed(() => copy[lang.value] || copy.en)
