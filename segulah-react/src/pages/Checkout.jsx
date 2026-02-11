import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Navbar, Footer } from '../components/layout';

const Checkout = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        paymentMethod: 'card'
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem('segulah-cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 1500; // Example fixed shipping
    const total = cartTotal + shipping;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to process order would go here
        console.log('Order placed:', { cart, formData, total });

        // Show success modal
        setShowSuccessModal(true);

        // Clear cart
        localStorage.removeItem('segulah-cart');
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/product')}
                        className="flex items-center text-slate-500 hover:text-mlm-green-600 transition-colors mb-4"
                    >
                        <Icon icon="lucide:arrow-left" className="w-4 h-4 mr-2" />
                        Back to Shopping
                    </button>
                    <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Forms */}
                    <div className="flex-1 space-y-8">
                        <form onSubmit={handleSubmit} id="checkout-form">
                            {/* Contact & Personal Info */}
                            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-mlm-green-100 text-mlm-green-600 flex items-center justify-center text-sm">1</div>
                                    Contact Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mlm-green-500 focus:ring-2 focus:ring-mlm-green-200 outline-none transition-all"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mlm-green-500 focus:ring-2 focus:ring-mlm-green-200 outline-none transition-all"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mlm-green-500 focus:ring-2 focus:ring-mlm-green-200 outline-none transition-all"
                                            placeholder="e.g. 08012345678"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Delivery Address */}
                            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-6">
                                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-mlm-green-100 text-mlm-green-600 flex items-center justify-center text-sm">2</div>
                                    Delivery Details
                                </h2>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="address" className="text-sm font-medium text-slate-700">Street Address</label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            required
                                            rows="2"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mlm-green-500 focus:ring-2 focus:ring-mlm-green-200 outline-none transition-all resize-none"
                                            placeholder="House number and street name"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="city" className="text-sm font-medium text-slate-700">City</label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mlm-green-500 focus:ring-2 focus:ring-mlm-green-200 outline-none transition-all"
                                                placeholder="Enter city"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="state" className="text-sm font-medium text-slate-700">State</label>
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                required
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mlm-green-500 focus:ring-2 focus:ring-mlm-green-200 outline-none transition-all"
                                                placeholder="Enter state"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Payment Method */}
                            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-6">
                                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-mlm-green-100 text-mlm-green-600 flex items-center justify-center text-sm">3</div>
                                    Payment Method
                                </h2>
                                <div className="space-y-4">
                                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'card' ? 'border-mlm-green-500 bg-mlm-green-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="card"
                                            checked={formData.paymentMethod === 'card'}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-mlm-green-600 focus:ring-mlm-green-500"
                                        />
                                        <div className="ml-4 flex items-center gap-3">
                                            <Icon icon="solar:card-linear" className="w-6 h-6 text-slate-600" />
                                            <span className="font-medium text-slate-900">Credit / Debit Card</span>
                                        </div>
                                    </label>

                                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'transfer' ? 'border-mlm-green-500 bg-mlm-green-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="transfer"
                                            checked={formData.paymentMethod === 'transfer'}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-mlm-green-600 focus:ring-mlm-green-500"
                                        />
                                        <div className="ml-4 flex items-center gap-3">
                                            <Icon icon="solar:bank-linear" className="w-6 h-6 text-slate-600" />
                                            <span className="font-medium text-slate-900">Bank Transfer</span>
                                        </div>
                                    </label>

                                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-mlm-green-500 bg-mlm-green-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={formData.paymentMethod === 'cod'}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-mlm-green-600 focus:ring-mlm-green-500"
                                        />
                                        <div className="ml-4 flex items-center gap-3">
                                            <Icon icon="solar:box-minimalistic-linear" className="w-6 h-6 text-slate-600" />
                                            <span className="font-medium text-slate-900">Pay on Delivery</span>
                                        </div>
                                    </label>
                                </div>
                            </section>
                        </form>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:w-96 shrink-0">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                {cart.length === 0 ? (
                                    <p className="text-slate-500 text-center py-4">Your cart is empty.</p>
                                ) : (
                                    cart.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="w-16 h-16 bg-slate-50 rounded-lg overflow-hidden shrink-0">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-slate-900 truncate">{item.title}</p>
                                                <p className="text-sm text-slate-500">{item.quantity} x ₦{item.price.toLocaleString()}</p>
                                                <p className="text-sm font-semibold text-slate-900 mt-1">₦{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="border-t border-slate-100 mt-6 pt-4 space-y-3">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span>₦{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <span>₦{shipping.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-100">
                                    <span>Total</span>
                                    <span>₦{total.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={cart.length === 0}
                                className="w-full mt-8 py-3.5 bg-mlm-green-500 text-white rounded-xl font-bold hover:bg-mlm-green-600 transition-all shadow-lg shadow-mlm-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Place Order
                            </button>

                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                                <Icon icon="solar:shield-check-linear" className="w-4 h-4" />
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Icon icon="solar:check-circle-bold" className="w-10 h-10 text-mlm-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Order Confirmed!</h3>
                        <p className="text-slate-500 mb-8">
                            Thank you for your purchase. Your order has been placed successfully.
                        </p>
                        <button
                            onClick={() => navigate('/product')}
                            className="w-full py-3.5 bg-mlm-green-500 text-white rounded-xl font-bold hover:bg-mlm-green-600 transition-all shadow-lg shadow-mlm-green-500/20"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
