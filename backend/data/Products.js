const products = [
    {
        name: 'پیراهن مردانه کیکی رایکی',
        image: '/images/jacket-men.webp',
        description: 'با ماشین لباسشویی و در دمای حداکثر 30 درجه سانتی گراد شستشو شود',
        brand: 'ال سی وایکیکی',
        category: 'مردانه',
        subCategory: 'لباس',
        price: 120000,
        countInStock: 3,
        rating: 4.5,
        numReview: 4
    },
    {
        name: 'تی شرت آستین کوتاه زنانه',
        image: '/images/cloth-woman-1.webp',
        description: '- چاپ مستقیم روی پارچه با تکنیک Plutsub',
        brand: 'ال سی وایکیکی',
        category: 'زنانه',
        subCategory: 'لباس',
        price: 80000,
        countInStock: 2,
        rating: 4,
        numReview: 2
    },
    {
        name: 'تیشرت زنانه 27 طرح دختر',
        image: '/images/cloth-woman-2.webp',
        description: '- چاپ مستقیم روی پارچه با تکنیک Plutsub',
        brand: 'آرمانی',
        category: 'زنانه',
        subCategory: 'لباس',
        price: 90000,
        countInStock: 5,
        rating: 3.5,
        numReview: 3
    },
    {
        name: 'تی شرت زنانه افراتین طرح دختر و سگ',
        image: '/images/cloth-women-3.webp',
        description: 'با پارچه لطیف، سبک و با کیفیت',
        brand: 'زارا',
        category: 'زنانه',
        subCategory: 'لباس',
        price: 55000,
        countInStock: 2,
        rating: 4.5,
        numReview: 1
    },
    
    {
        name: 'کیف رودوشی چرم جانتا',
        image: '/images/bag-women-1.webp',
        description: 'نگهدارنده بند دوشی جهت ایستادگی کامل بر روی دوش',
        brand: 'زارا',
        category: 'زنانه',
        subCategory: 'کیف',
        price: 140000,
        countInStock: 6,
        rating: 4.5,
        numReview: 1
    },
    {
        name: 'کیف رودوشی مردانه',
        image: '/images/bag-men-1.webp',
        description: 'نگهدارنده بند دوشی جهت ایستادگی کامل بر روی دوش',
        brand: 'گوچی',
        category: 'مردانه',
        subCategory: 'کیف',
        price: 165000,
        countInStock: 6,
        rating: 4.5,
        numReview: 1
    },
    {
        name: 'کفش زرد',
        image: '/images/shoe-1.webp',
        description: 'دارای بند اضافه',
        brand: 'گوچی',
        category: 'مردانه',
        subCategory: 'کفش',
        price: 28000,
        countInStock: 6,
        rating: 4.5,
        numReview: 1
    },
    {
        name: 'بادگیر مردانه',
        image: '/images/jacket-men-2.webp',
        description: 'بادگیر مردانه سبز',
        brand: 'زارا',
        category: 'مردانه',
        subCategory: 'لباس',
        price: 65000,
        countInStock: 6,
        rating: 4.5,
        numReview: 1
    },
    {
        name: 'ژاکت سبز',
        image: '/images/jacket-men-3.webp',
        description: 'ژاکت مردانه سبز',
        brand: 'زارا',
        category: 'مردانه',
        subCategory: 'لباس',
        price: 77000,
        countInStock: 6,
        rating: 4.5,
        numReview: 1
    },

]
export default products