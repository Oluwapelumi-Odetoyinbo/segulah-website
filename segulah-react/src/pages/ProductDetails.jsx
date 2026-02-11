import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Navbar, Footer } from '../components/layout';
import { INITIAL_PRODUCTS } from './Product';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = INITIAL_PRODUCTS.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('segulah-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Description');
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    localStorage.setItem('segulah-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ show: false, message: '' }), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <Link to="/product" className="text-mlm-green-500 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const addToCart = (buyNow = false) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });

    if (buyNow) {
      setIsCartOpen(true);
    } else {
      setToast({ show: true, message: `${product.title} added to cart!` });
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, delta) => {
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

  // Mock thumbnails based on the main image if they don't exist
  const thumbnails = [
    product.image,
  ];

  return (
    <div className="bg-white min-h-screen antialiased">
      <Navbar />

      {/* Toast Notification */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-100 transition-all duration-500 ${toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-2xl shadow-black/10 border border-slate-100">
          <div className="w-9 h-9 bg-mlm-green-50 rounded-full flex items-center justify-center shrink-0">
            <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-mlm-green-500" />
          </div>
          <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">{toast.message}</p>
          <button
            onClick={() => { setToast({ show: false, message: '' }); setIsCartOpen(true); }}
            className="ml-2 px-4 py-1.5 bg-mlm-green-500 text-white text-xs font-bold rounded-full hover:bg-mlm-green-600 transition-colors whitespace-nowrap"
          >
            View Cart
          </button>
          <button onClick={() => setToast({ show: false, message: '' })} className="text-gray-400 hover:text-gray-600">
            <Icon icon="lucide:x" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cart Drawer (Reused from Product.jsx for consistency) */}
      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
                            onClick={() => updateCartQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-50 text-slate-600 transition-colors"
                          >
                            <Icon icon="lucide:minus" className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.id, 1)}
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
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full py-4 bg-mlm-green-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-mlm-green-600 transition-all shadow-xl shadow-mlm-green-500/20 active:scale-[0.98]"
                >
                  <Icon icon="solar:wallet-money-bold" className="w-5 h-5" />
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-mlm-green-500">Home</Link>
          <Icon icon="lucide:chevron-right" className="w-3 h-3" />
          <Link to="/product" className="hover:text-mlm-green-500">Shop</Link>
          <Icon icon="lucide:chevron-right" className="w-3 h-3" />
          <span className="text-gray-900 font-medium">{product.title}</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="relative bg-slate-50 rounded-3xl overflow-hidden aspect-square group shadow-sm">
              <img
                src={activeImage}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-mlm-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                {product.tag}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-mlm-green-500 ring-2 ring-mlm-green-500/20' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`View ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col pt-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-mlm-green-500 text-xs font-semibold uppercase tracking-wider">{product.category}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">{product.title}</h1>
              {product.inStock ? (
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-100 uppercase tracking-tighter">In Stock</span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-100 uppercase tracking-tighter">Out of Stock</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon
                    key={i}
                    icon="solar:star-bold"
                    className={`w-4 h-4 ${i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-xs font-medium mt-0.5">{product.rating} (245 Reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-bold text-mlm-green-600">₦{product.price.toLocaleString()}</span>
              {product.original && (
                <span className="text-base text-gray-400 line-through font-light decoration-red-400/30">₦{product.original.toLocaleString()}</span>
              )}
            </div>

            <p className="text-sm text-gray-500 leading-relaxed font-normal mb-8">
              Transform your daily routine with {product.title}. Specifically formulated for {product.skinType} skin, this premium {product.category} solution delivers visible results while maintaining your skin's natural balance. Hand-crafted with organic ingredients for maximum efficacy.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-gray-100">
              {/* Counter */}
              <div className="flex items-center border border-gray-200 rounded-xl px-2 h-11 bg-slate-50/50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl transition-all"
                >
                  <Icon icon="lucide:minus" className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-10 text-center text-sm text-gray-900 font-bold focus:outline-none bg-transparent"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-white rounded-xl transition-all"
                >
                  <Icon icon="lucide:plus" className="w-4 h-4" />
                </button>
              </div>

              {/* Buttons */}
              <button
                onClick={() => addToCart(false)}
                className="flex-[1.5] bg-slate-900 text-white h-11 whitespace-nowrap px-6 rounded-xl text-sm font-bold hover:bg-black transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Icon icon="solar:cart-plus-bold" className="w-5 h-5" />
                Add To Cart
              </button>
              <button
                onClick={() => addToCart(true)}
                className="flex-1 bg-mlm-green-500 text-white h-11 px-6 rounded-xl text-sm font-bold hover:bg-mlm-green-600 active:scale-[0.98]"
              >
                Buy Now
              </button>


            </div>

            {/* Meta */}
            <div className="space-y-4 text-sm bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-start">
                <span className="w-24 text-gray-900 font-bold uppercase tracking-tighter">SKU:</span>
                <span className="text-gray-500 font-medium">SEG-{product.id.toUpperCase()}-001</span>
              </div>
              <div className="flex items-start">
                <span className="w-24 text-gray-900 font-bold uppercase tracking-tighter">Tags:</span>
                <span className="text-gray-500 font-medium">{product.category}, {product.skinType} Skin, Organic, Segulah</span>
              </div>

            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        {/* <div className="mt-16 border-b border-gray-100">
          <div className="flex justify-center gap-10">
            {['Description', 'Review'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold transition-all relative ${activeTab === tab ? 'text-mlm-green-500' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-mlm-green-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-5xl mx-auto mb-16">
          {activeTab === 'Description' ? (
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Product Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {product.description}
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Icon icon="solar:leaf-bold-duotone" className="w-5 h-5 text-mlm-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Organic Ingredients</h4>
                    <p className="text-xs text-gray-500">Formulated with 100% natural and certified organic components.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Icon icon="solar:shield-check-bold-duotone" className="w-5 h-5 text-mlm-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Safe & Tested</h4>
                    <p className="text-xs text-gray-500">Dermatologically tested and proven safe for all skin types.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row items-center gap-10 mb-14 py-8 border-b border-gray-100">
                <div className="shrink-0 text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-5xl font-bold text-gray-900 tracking-tight">4.8</span>
                    <span className="text-base text-gray-400 font-medium">/ 5.0</span>
                  </div>
                  <div className="flex text-yellow-400 my-4 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} icon="solar:star-bold" className="w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Based on 245 Verified Reviews</p>
                </div>

                <div className="flex-1 w-full space-y-4 max-w-md">
                  {[80, 12, 5, 2, 1].map((pct, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="text-xs font-bold w-12 text-gray-400">{5 - idx} Star</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-mlm-green-500 rounded-full" style={{ width: `${pct}%` }}></div>
                      </div>
                      <span className="text-xs font-bold w-10 text-gray-900 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                {[1, 2].map((review) => (
                  <div key={review} className="transition-colors group">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-48 shrink-0">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                            <Icon icon="solar:user-rounded-linear" className="w-6 h-6 text-slate-300" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">
                              {review === 1 ? 'Kristin Watson' : 'James Wilson'}
                            </h4>
                            <p className="text-xs text-mlm-green-600 font-bold uppercase tracking-widest">Verified</p>
                          </div>
                        </div>
                        <div className="flex text-yellow-400 mb-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Icon key={i} icon="solar:star-bold" className="w-3.5 h-3.5" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 font-medium">12 days ago</p>
                      </div>

                      <div className="flex-1">
                        <h5 className="text-base font-bold text-gray-900 mb-2">Absolutely love this {product.category.toLowerCase()}!</h5>
                        <p className="text-sm text-gray-500 leading-relaxed font-normal mb-6">
                          "I've tried many different brands, but Segulah's approach to {product.category.toLowerCase()} is fundamentally different. This product has completely transformed my skin's texture and radiance in just two weeks. Well worth the price!"
                        </p>

                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-50 relative group/img cursor-pointer border border-slate-100">
                            <img src={product.image} className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 transition-all" alt="Review Image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
