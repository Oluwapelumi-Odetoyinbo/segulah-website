import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Navbar, Footer } from '../components/layout';

export const INITIAL_PRODUCTS = [
  {
    id: 'p1',
    tag: 'New',
    category: 'Skin Care',
    rating: 5,
    title: 'Segulah Bloom',
    price: 35000,
    original: 45000,
    image: '/product1.png',
    skinType: 'Dry',
    promotion: 'New Arrivals',
    inStock: true,
    description: 'Segulah Bloom is a revolutionary hydrating serum designed to rejuvenate dry skin. Infused with natural botanicals and hyaluronic acid, it locks in moisture for 24 hours, leaving your skin with a radiant, youthful glow. Perfect for those seeking deep hydration and a silky-smooth texture.'
  },
  {
    id: 'p2',
    tag: 'Hot',
    category: 'Wellness',
    rating: 4.9,
    title: 'Segulah Vitality',
    price: 28000,
    original: 35000,
    image: '/product2.png',
    skinType: 'Normal',
    promotion: 'Best Sellers',
    inStock: true,
    description: 'Boost your daily energy with Segulah Vitality. This potent wellness supplement is crafted with organic adaptogens and essential vitamins to support immune function and mental clarity. It’s the ultimate companion for a fast-paced lifestyle, ensuring you feel energized throughout the day.'
  },
  {
    id: 'p3',
    tag: 'Organic',
    category: 'Wellness',
    rating: 5,
    title: 'Segulah Essence',
    price: 15000,
    original: 20000,
    image: '/product3.png',
    skinType: 'Sensitive',
    promotion: 'Best Sellers',
    inStock: true,
    description: 'Nourish your body with the pure power of Segulah Essence. This multi-purpose organic oil is distilled from the finest essential seeds, making it ideal for sensitive skin and aromatic relaxation. Use it as a moisturizer or as a calming addition to your evening wellness routine.'
  },
  {
    id: 'p4',
    tag: 'Popular',
    category: 'Skin Care',
    rating: 4.8,
    title: 'Segulah Radiance',
    price: 42000,
    original: 55000,
    image: '/product4.png',
    skinType: 'Oily',
    promotion: 'New Arrivals',
    inStock: true,
    description: 'Target oiliness and uneven texture with Segulah Radiance. This advanced formula uses salicylic acid and citrus extracts to gently exfoliate and brighten the complexion. It remarkably balances sebum production while providing a matte yet luminous finish that lasts all day.'
  },
  {
    id: 'p5',
    tag: 'Detox',
    category: 'Wellness',
    rating: 4.7,
    title: 'Segulah Pure',
    price: 12500,
    original: 18000,
    image: '/product5.png',
    skinType: 'Combination',
    promotion: 'On Sale',
    inStock: true,
    description: 'Segulah Pure is your go-to detox solution for revitalizing from within. This blend of premium green tea extracts and cleansing herbs helps flush out toxins and supports digestive health. Light and refreshing, it’s the perfect addition to your morning ritual for a clean, renewed feeling.'
  },
  {
    id: 'p6',
    tag: 'Luxury',
    category: 'Skin Care',
    rating: 5,
    title: 'Segulah Glow',
    price: 55000,
    original: 70000,
    image: '/product6.png',
    skinType: 'Dry',
    promotion: 'New Arrivals',
    inStock: true,
    description: 'Experience the height of luxury with Segulah Glow. This premium anti-aging cream is rich in peptides and 24k gold flakes, designed to lift, firm, and restore. Its decadent texture melts into dry skin, delivering intense nourishment and a diamond-like radiance to your face and neck.'
  },
  {
    id: 'p7',
    tag: 'Immune',
    category: 'Wellness',
    rating: 4.9,
    title: 'Segulah Shield',
    price: 32000,
    original: 45000,
    image: '/product7.png',
    skinType: 'Normal',
    promotion: 'Best Sellers',
    inStock: true,
    description: 'Fortify your health with Segulah Shield. A master-blend of antioxidants, zinc, and Vitamin C, this supplement is designed to strengthen your natural defenses. It provides a robust protective barrier against environmental stressors, helping you stay resilient and healthy in any season.'
  },
  {
    id: 'p8',
    tag: '50% off',
    category: 'Skin Care',
    rating: 4.9,
    title: 'SilkSculpt Serum',
    price: 25000,
    original: 50000,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop',
    skinType: 'Normal',
    promotion: 'On Sale',
    inStock: true,
    description: 'SilkSculpt Serum defines and contours your facial features with clinical precision. Formulated for normal skin, it utilizes revolutionary sculpting technology to visible reduce the appearance of fine lines and sagginess, delivering a firm, lifted, and silk-smooth complexion.'
  },
  {
    id: 'p9',
    tag: '20% off',
    category: 'Skin Care',
    rating: 4.8,
    title: 'SilkSkin Serum',
    price: 28000,
    original: 35000,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop',
    skinType: 'Combination',
    promotion: 'Best Sellers',
    inStock: true,
    description: 'Unlock the secret to flawless texture with SilkSkin Serum. Designed for combination skin, it expertly balances dry and oily patches while infusing the skin with essential vitamins. Its lightweight formula absorbs instantly, leaving your face feeling incredibly soft, just like pure silk.'
  },
  {
    id: 'p10',
    tag: '30% off',
    category: 'Hair Care',
    rating: 5,
    title: 'Argan Glow',
    price: 45000,
    original: 64000,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
    skinType: 'Dry',
    promotion: 'Best Sellers',
    inStock: true,
    description: 'Argan Glow is a luxurious hair treatment that restores shine and strength to dry, damaged locks. Rich in Moroccan Argan oil and Vitamin E, it deeply penetrates the hair shaft to tame frizz and protect against heat styling. Your hair will be transformed from dull to dazzlingly radiant.'
  },
  {
    id: 'p11',
    tag: '10% off',
    category: 'Body Care',
    rating: 5,
    title: 'Nephrolepis exaltata',
    price: 18000,
    original: 20000,
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1887&auto=format&fit=crop',
    skinType: 'Sensitive',
    promotion: 'New Arrivals',
    inStock: true,
    description: 'Inspired by the resilience of the Boston Fern, our Nephrolepis exaltata extract is a soothing body balm for sensitive skin. It provides a cooling effect that immediately calms inflammation and redness, deeply hydrating the body with long-lasting moisture and botanical goodness.'
  },
  {
    id: 'p12',
    tag: '50% off',
    category: 'Makeup',
    rating: 5,
    title: 'Smooth Foundation',
    price: 9500,
    original: 19000,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
    skinType: 'Normal',
    promotion: 'On Sale',
    inStock: false,
    description: 'Achieve a professional finish with Segulah’s Smooth Foundation. This full-coverage, long-wear formula effortlessly hides imperfections while nourishing the skin with antioxidants. It’s lightweight and breathable, ensuring your makeup stays fresh and smooth from morning until midnight.'
  },
  {
    id: 'p13',
    tag: '50% off',
    category: 'Body Care',
    rating: 5,
    title: 'Smooth Body Cream',
    price: 12000,
    original: 24000,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
    skinType: 'Dry',
    promotion: 'On Sale',
    inStock: true,
    description: 'Our Smooth Body Cream is a rich, buttery moisturizer specifically formulated for very dry skin. Using a blend of Shea butter and cocoa extracts, it forms a protective layer that keeps moisture in and dryness out. Your skin will feel soft, supple, and delicately scented for hours.'
  }
];

const Product = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPromotions, setSelectedPromotions] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  
  // Cart State
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('segulah-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('segulah-cart', JSON.stringify(cart));
  }, [cart]);

  const toggleFilter = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSkinTypes([]);
    setMaxPrice(100000);
    setSelectedRating(null);
    setSelectedPromotions([]);
    setSelectedAvailability([]);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const skinTypeMatch = selectedSkinTypes.length === 0 || selectedSkinTypes.includes(product.skinType);
      const priceMatch = product.price <= maxPrice;
      const ratingMatch = selectedRating === null || Math.floor(product.rating) >= selectedRating;
      const promotionMatch = selectedPromotions.length === 0 || selectedPromotions.includes(product.promotion);
      
      let availabilityMatch = true;
      if (selectedAvailability.length > 0) {
        if (selectedAvailability.includes('In Stock') && selectedAvailability.includes('Out of Stocks')) {
          availabilityMatch = true;
        } else if (selectedAvailability.includes('In Stock')) {
          availabilityMatch = product.inStock;
        } else if (selectedAvailability.includes('Out of Stocks')) {
          availabilityMatch = !product.inStock;
        }
      }

      return categoryMatch && skinTypeMatch && priceMatch && ratingMatch && promotionMatch && availabilityMatch;
    });
  }, [selectedCategories, selectedSkinTypes, maxPrice, selectedRating, selectedPromotions, selectedAvailability]);

  const activeFilters = useMemo(() => {
    const filters = [];
    selectedCategories.forEach(c => filters.push({ label: c, type: 'category' }));
    selectedSkinTypes.forEach(s => filters.push({ label: s, type: 'skinType' }));
    if (maxPrice < 100000) filters.push({ label: `Price: Up to ₦${maxPrice.toLocaleString()}`, type: 'price' });
    if (selectedRating !== null) filters.push({ label: `${selectedRating}+ Stars`, type: 'rating' });
    selectedPromotions.forEach(p => filters.push({ label: p, type: 'promotion' }));
    selectedAvailability.forEach(a => filters.push({ label: a, type: 'availability' }));
    return filters;
  }, [selectedCategories, selectedSkinTypes, maxPrice, selectedRating, selectedPromotions, selectedAvailability]);

  const removeFilter = (filter) => {
    switch (filter.type) {
      case 'category': setSelectedCategories(selectedCategories.filter(c => c !== filter.label)); break;
      case 'skinType': setSelectedSkinTypes(selectedSkinTypes.filter(s => s !== filter.label)); break;
      case 'price': setMaxPrice(100000); break;
      case 'rating': setSelectedRating(null); break;
      case 'promotion': setSelectedPromotions(selectedPromotions.filter(p => p !== filter.label)); break;
      case 'availability': setSelectedAvailability(selectedAvailability.filter(a => a !== filter.label)); break;
      default: break;
    }
  };

  return (
    <div className="bg-white text-[#1f2937] antialiased">
      <Navbar />

      {/* Cart Drawer */}
      <div 
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Icon icon="solar:cart-large-linear" className="w-6 h-6 text-mlm-green-500" />
                <h2 className="text-xl font-bold text-slate-900">Your Cart ({cartCount})</h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                <Icon icon="solar:close-circle-linear" className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <Icon icon="solar:cart-cross-linear" className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Your cart is empty</h3>
                  <p className="text-slate-500 text-sm mb-6">Looks like you haven't added anything yet.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2 bg-mlm-green-500 text-white rounded-full text-sm font-medium hover:bg-mlm-green-600 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 bg-slate-50 rounded-xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-slate-900 truncate pr-4">{item.title}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                          <Icon icon="solar:trash-bin-minimalistic-linear" className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-slate-500 mb-3">₦{item.price.toLocaleString()}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-slate-200 rounded-full p-1 bg-white">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-600 transition-colors"
                          >
                            <Icon icon="lucide:minus" className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-600 transition-colors"
                          >
                            <Icon icon="lucide:plus" className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="font-bold text-slate-900">₦{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-slate-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500 font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-slate-900">₦{cartTotal.toLocaleString()}</span>
                </div>
                <button className="w-full py-4 bg-mlm-green-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-mlm-green-600 transition-all shadow-xl shadow-mlm-green-500/20 active:scale-[0.98]">
                  <Icon icon="solar:wallet-money-bold" className="w-5 h-5" />
                  Proceed to Checkout
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">Taxes and shipping calculated at checkout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <header className="relative h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://media.istockphoto.com/id/1418267688/photo/aerial-top-down-view-of-a-large-container-cargo-ship-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=yXzWMw68-mvyR5Nz82hXKZBlgRbuNwN1uuN5r7whL8E=" 
            alt="Shop Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Cart Trigger */}
        <button 
          onClick={() => setIsCartOpen(true)}
          className="absolute right-6 top-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20 flex items-center justify-center text-slate-900 hover:text-mlm-green-500 transition-all hover:scale-110 z-20 group"
        >
          <Icon icon="solar:cart-large-minimalistic-linear" className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
              {cartCount}
            </span>
          )}
        </button>

        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-3 drop-shadow-md">Products catalog</h1>
          <nav className="flex justify-center items-center gap-3 text-sm font-medium text-white/90">
            <span className="hover:text-mlm-green-400 cursor-pointer transition-colors" onClick={() => window.location.href='/'}>Home</span>
            <Icon icon="lucide:chevron-right" className="w-4 h-4 text-white/60" />
            <span className="text-white">Products catalog</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-72 shrink-0 space-y-10">
            <h2 className="text-base font-semibold tracking-tight text-[#111827]">Filter Options</h2>

            <div>
              <h3 className="text-sm font-semibold text-[#111827] mb-4">By Categories</h3>
              <ul className="space-y-3">
                {['Skin Care', 'Makeup', 'Hair Care', 'Fragrances', 'Nail Care', 'Body Care', 'Wellness'].map((item) => (
                  <li 
                    key={item} 
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => toggleFilter(item, selectedCategories, setSelectedCategories)}
                  >
                    <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedCategories.includes(item) ? 'bg-mlm-green-500 border-mlm-green-500 text-white' : 'border-gray-300 text-transparent group-hover:border-mlm-green-500'}`}>
                      <Icon icon="lucide:check" className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-sm transition-colors ${selectedCategories.includes(item) ? 'text-mlm-green-500 font-medium' : 'text-gray-600 group-hover:text-mlm-green-500'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-[#111827] mb-4">Price (Up to ₦{maxPrice.toLocaleString()})</h3>
              <div className="px-1">
                <input 
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-mlm-green-500 accent-brand-green"
                />
                <div className="flex items-center justify-between text-sm font-medium text-[#111827] mt-3">
                  <span>₦5,000</span>
                  <span>₦100k+</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-[#111827] mb-4">Review</h3>
              <ul className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <li 
                    key={stars} 
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => setSelectedRating(selectedRating === stars ? null : stars)}
                  >
                    <div className={`w-5 h-5 border rounded transition-colors ${selectedRating === stars ? 'bg-mlm-green-500 border-mlm-green-500' : 'border-gray-300 group-hover:border-mlm-green-500'}`} />
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <Icon
                          key={index}
                          icon="lucide:star"
                          className={`w-4 h-4 ${index <= stars ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className={`text-sm transition-colors ${selectedRating === stars ? 'text-mlm-green-500 font-medium' : 'text-gray-600 group-hover:text-mlm-green-500'}`}>{stars} Star{stars > 1 && 's'}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-[#111827] mb-4">By Promotions</h3>
              <ul className="space-y-3">
                {['New Arrivals', 'Best Sellers', 'On Sale'].map((promo) => (
                  <li 
                    key={promo} 
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => toggleFilter(promo, selectedPromotions, setSelectedPromotions)}
                  >
                    <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedPromotions.includes(promo) ? 'bg-mlm-green-500 border-mlm-green-500 text-white' : 'border-gray-300 text-transparent group-hover:border-mlm-green-500'}`}>
                      <Icon icon="lucide:check" className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-sm transition-colors ${selectedPromotions.includes(promo) ? 'text-mlm-green-500 font-medium' : 'text-gray-600 group-hover:text-mlm-green-500'}`}>{promo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-[#111827] mb-4">Availability</h3>
              <ul className="space-y-3">
                {['In Stock', 'Out of Stocks'].map((status) => (
                  <li 
                    key={status} 
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => toggleFilter(status, selectedAvailability, setSelectedAvailability)}
                  >
                    <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedAvailability.includes(status) ? 'bg-mlm-green-500 border-mlm-green-500 text-white' : 'border-gray-300 text-transparent group-hover:border-mlm-green-500'}`}>
                      <Icon icon="lucide:check" className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-sm transition-colors ${selectedAvailability.includes(status) ? 'text-mlm-green-500 font-medium' : 'text-gray-600 group-hover:text-mlm-green-500'}`}>{status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <p className="text-sm text-gray-500">Showing {filteredProducts.length} results</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by :</span>
                <div className="flex items-center gap-2 cursor-pointer bg-white">
                  <span className="text-sm font-medium text-[#111827]">Default Sorting</span>
                  <Icon icon="lucide:chevron-down" className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span className="text-sm text-gray-500 mr-2">Active Filter</span>
                {activeFilters.map((filter, index) => (
                  <div key={`${filter.type}-${index}`} className="flex items-center gap-2 px-3 py-1.5 bg-mlm-green-500 text-white rounded-full text-sm font-medium">
                    <span>{filter.label}</span>
                    <Icon 
                      icon="lucide:x" 
                      className="w-3 h-3 cursor-pointer hover:scale-120 transition-transform" 
                      onClick={() => removeFilter(filter)}
                    />
                  </div>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-sm font-medium text-yellow-600 underline decoration-1 underline-offset-4 ml-2 hover:text-yellow-700"
                >
                  Clear All
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-5">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => navigate(`/product/${product.id}`)}
                    />
                    <div className="absolute top-4 left-4 bg-mlm-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      {product.tag}
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[{ icon: 'lucide:heart' }, { icon: 'lucide:maximize-2' }].map((action) => (
                        <button
                          key={action.icon}
                          type="button"
                          className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#111827] shadow-sm hover:bg-mlm-green-500 hover:text-white transition-colors"
                        >
                          <Icon icon={action.icon} className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                    {/* Add to Cart Overlay Button */}
                    {product.inStock && (
                      <div className="absolute inset-x-4 bottom-4 transition-all duration-300">
                        <button 
                          onClick={() => addToCart(product)}
                          className="w-full py-2.5 bg-white/90 backdrop-blur-sm text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-mlm-green-500 hover:text-white transition-colors shadow-lg active:scale-95"
                        >
                          <Icon icon="solar:cart-plus-bold" className="w-5 h-5" />
                          Buy Now
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <span className="text-sm text-gray-500">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Icon icon="lucide:star" className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-[#111827]">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-[#111827] hover:text-mlm-green-500 cursor-pointer transition-colors" onClick={() => navigate(`/product/${product.id}`)}>{product.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-base font-semibold text-mlm-green-600">₦{product.price.toLocaleString()}</span>
                      {product.original && (
                        <span className="text-sm text-gray-400 line-through">₦{product.original.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon icon="solar:filters-linear" className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                  <button 
                    onClick={clearAllFilters}
                    className="mt-6 px-6 py-2 bg-mlm-green-500 text-white rounded-full text-sm font-medium hover:bg-mlm-green-600 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

            {filteredProducts.length > 0 && (
              <div className="flex justify-center items-center gap-4 mt-20">
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#111827]">
                  <Icon icon="lucide:chevron-left" className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 rounded-full bg-mlm-green-500 text-white text-sm font-medium flex items-center justify-center shadow-md">1</button>
                <button className="w-8 h-8 rounded-full text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-100">2</button>
                <button className="w-8 h-8 rounded-full text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-100">3</button>
                <span className="text-gray-400 text-sm pb-2">...</span>
                <button className="w-8 h-8 rounded-full text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-100">10</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#111827]">
                  <Icon icon="lucide:chevron-right" className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
