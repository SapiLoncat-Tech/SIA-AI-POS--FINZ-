import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Wrench, Search, LayoutDashboard, ShoppingCart,
    Box, Users, History, Settings, Trash2, CheckCircle2,
    X, CreditCard, Banknote, Receipt, QrCode, Bell
} from 'lucide-react';

export default function POSInput() {
    const navigate = useNavigate();

    // State
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [cart, setCart] = useState([]);

    // Form state
    const [customerName, setCustomerName] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [mechanic, setMechanic] = useState('');
    const [sedekah, setSedekah] = useState(0);

    // Payment state
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const [isSuccessMenuOpen, setIsSuccessMenuOpen] = useState(false);

    // Mock Categories
    const categories = ['Semua', 'Jasa Servis', 'Sparepart', 'Oli & Cairan'];

    // Mock Products
    const products = [
        { id: 1, name: 'Service Ringan', price: 150000, category: 'Jasa Servis', type: 'service' },
        { id: 2, name: 'Tune Up Mesin', price: 250000, category: 'Jasa Servis', type: 'service' },
        { id: 3, name: 'Ganti Kampas Rem', price: 50000, category: 'Jasa Servis', type: 'service' },
        { id: 4, name: 'Oli Mesin Matic', price: 85000, category: 'Oli & Cairan', type: 'product' },
        { id: 5, name: 'Kampas Rem Depan', price: 120000, category: 'Sparepart', type: 'product' },
        { id: 6, name: 'Filter Udara', price: 65000, category: 'Sparepart', type: 'product' },
        { id: 7, name: 'Aki Motor', price: 250000, category: 'Sparepart', type: 'product' },
        { id: 8, name: 'Service Berat', price: 500000, category: 'Jasa Servis', type: 'service' }
    ];

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'Semua' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + sedekah;

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
            {/* Left Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col pt-6 pb-6 shadow-sm z-10 transition-all duration-300">
                <div className="flex items-center gap-3 px-6 mb-10">
                    <div className="bg-blue-600 p-2 text-white rounded-xl shadow-md">
                        <Wrench size={24} />
                    </div>
                    <span className="font-black text-xl text-slate-800 tracking-tight">Ocean Race</span>
                </div>

                <nav className="flex-1 px-4 space-y-1.5">
                    <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <LayoutDashboard size={20} />
                        Dashboard
                    </button>
                    <button onClick={() => navigate('/pos')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200">
                        <ShoppingCart size={20} />
                        Transaksi Baru
                    </button>
                    <button onClick={() => navigate('/inventory')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <Box size={20} />
                        Inventori
                    </button>
                    <button onClick={() => navigate('/customers')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <Users size={20} />
                        Pelanggan
                    </button>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <History size={20} />
                        Riwayat
                    </a>
                </nav>

                <div className="px-4 mt-auto">
                    <div className="border-t border-slate-100 pt-4 pb-2 mb-2">
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                            <Settings size={20} />
                            Pengaturan
                        </a>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 mt-2 border border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border-2 border-white shadow-sm">
                            K
                        </div>
                        <div>
                            <p className="font-bold text-sm text-slate-800">Kasir</p>
                            <p className="text-xs text-slate-500 font-medium">Admin Bengkel</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-slate-50">
                <header className="flex items-center justify-between px-8 py-6 bg-white/50 backdrop-blur-sm border-b border-transparent">
                    <div className="flex items-center gap-6">
                        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Transaksi POS</h1>

                        {/* Waktu Shalat Reminder */}
                        <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl flex items-center gap-3 animate-pulse shadow-sm">
                            <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-md">
                                <Bell size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-tight">Pengingat Shalat</p>
                                <p className="text-sm font-black text-emerald-700 leading-tight">Dzuhur 11:58 WIB (Segera)</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 relative">
                        <input
                            type="text"
                            placeholder="Cari sparepart atau jasa ser..."
                            className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500 bg-white shadow-sm transition-all text-sm font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    </div>
                </header>

                <div className="px-8 pb-4 pt-6 flex-1 overflow-hidden flex flex-col">
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full whitespace-nowrap font-bold transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-blue-100 text-blue-700 shadow-inner'
                                    : 'bg-white border-2 border-slate-100 text-slate-500 hover:border-slate-300 hover:text-slate-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 overflow-hidden flex flex-col">
                        <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 shrink-0">{activeCategory}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-y-auto pb-8 pr-2">
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    onClick={() => addToCart(product)}
                                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-200 flex flex-col justify-between h-40 relative group hover:-translate-y-1"
                                >
                                    <div className={`flex justify-center items-center w-12 h-12 rounded-xl mb-3 mx-auto transition-colors ${product.type === 'service' ? 'bg-orange-50 text-orange-500 group-hover:bg-orange-100' : 'bg-emerald-50 text-emerald-500 group-hover:bg-emerald-100'}`}>
                                        {product.type === 'service' ? <Wrench size={24} /> : <Box size={24} />}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-slate-700 text-sm mb-1">{product.name}</h3>
                                        <p className="text-blue-600 font-extrabold">{formatRupiah(product.price)}</p>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                    <div className="absolute top-3 right-3 bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                                        +
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Right Sidebar (Cart) */}
            <aside className="w-96 bg-white border-l border-slate-200 flex flex-col shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)] z-20">
                <div className="p-6 pb-4 border-b border-slate-100">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-xl text-slate-800">Ringkasan Pesanan</h2>
                        {(cart.length > 0 || customerName || licensePlate || mechanic) && (
                            <button
                                className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-colors"
                                onClick={() => {
                                    setCart([]);
                                    setCustomerName('');
                                    setLicensePlate('');
                                    setMechanic('');
                                    setSedekah(0);
                                }}
                            >
                                <Trash2 size={20} />
                            </button>
                        )}
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <div className="relative">
                        <Users className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Nama Pelanggan"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 text-sm font-medium transition-all"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute left-3.5 top-3.5 flex items-center justify-center border border-slate-400 rounded w-5 h-5">
                            <span className="text-[10px] font-black text-slate-500">ID</span>
                        </div>
                        <input
                            type="text"
                            placeholder="NO. POLISI (B 1234 ABC)"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 text-sm uppercase font-medium transition-all"
                            value={licensePlate}
                            onChange={(e) => setLicensePlate(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <Wrench className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                        <select
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 text-sm appearance-none bg-white font-medium transition-all text-slate-700"
                            value={mechanic}
                            onChange={(e) => setMechanic(e.target.value)}
                        >
                            <option value="" disabled className="text-slate-400">Pilih Mekanik</option>
                            <option value="budi">Budi (Senior Mechanic)</option>
                            <option value="anto">Anto (Mechanic)</option>
                            <option value="joko">Joko (Junior Mechanic)</option>
                        </select>
                        <div className="absolute right-4 top-4 text-slate-400 pointer-events-none">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 border-t border-slate-100 pt-4 pb-4">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-80">
                            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                                <ShoppingCart size={40} className="text-slate-300" />
                            </div>
                            <p className="font-medium text-slate-500">Keranjang masih kosong</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center group">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                                        <p className="text-slate-500 font-semibold text-xs mt-0.5">{formatRupiah(item.price)}</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1 border border-slate-100">
                                        <button
                                            className="w-7 h-7 flex items-center justify-center rounded-md text-slate-500 hover:bg-white hover:text-slate-800 hover:shadow-sm transition-all"
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >
                                            -
                                        </button>
                                        <span className="text-sm font-bold w-5 text-center text-slate-700">{item.quantity}</span>
                                        <button
                                            className="w-7 h-7 flex items-center justify-center rounded-md text-blue-600 hover:bg-white hover:shadow-sm transition-all font-medium"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-200 mt-auto rounded-tl-3xl rounded-tr-3xl">
                    <div className="space-y-3 mb-5">
                        <div className="flex justify-between text-sm text-slate-500 font-semibold items-center">
                            <span>Subtotal</span>
                            <span className="text-slate-700">{formatRupiah(subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500 font-semibold items-center">
                            <span>Infaq / Sedekah</span>
                            <div className="relative w-28">
                                <span className="absolute left-2 top-1.5 text-xs text-slate-400">Rp</span>
                                <input
                                    type="number"
                                    className="w-full pl-7 pr-2 py-1 bg-slate-100 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-right text-xs font-bold text-slate-700"
                                    value={sedekah || ''}
                                    onChange={(e) => setSedekah(Number(e.target.value) || 0)}
                                    placeholder="0"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between text-xl font-black text-slate-800 pt-3 border-t border-slate-200/60">
                            <span>Total</span>
                            <span className="text-blue-600">{formatRupiah(total)}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsPaymentModalOpen(true)}
                        className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-lg transition-all duration-300 ${cart.length > 0
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:-translate-y-1'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                            }`}
                        disabled={cart.length === 0}
                    >
                        <CheckCircle2 size={24} />
                        Proses Bayar
                    </button>
                </div>
            </aside>
            {/* Payment Modal */}
            {isPaymentModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
                        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h2 className="text-xl font-black text-slate-800">Akad Pembayaran (Jual Beli)</h2>
                            <button onClick={() => setIsPaymentModalOpen(false)} className="p-2 bg-white rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors shadow-sm border border-slate-100">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8 pb-6 flex-1 overflow-y-auto">
                            <div className="text-center mb-8">
                                <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Total Nilai Akad</p>
                                <p className="text-4xl font-black text-blue-600">{formatRupiah(total)}</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Metode Pembayaran</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setPaymentMethod('Cash')}
                                            className={`py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all border-2 ${paymentMethod === 'Cash' ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300'}`}
                                        >
                                            <Banknote size={18} /> Tunai
                                        </button>
                                        <button
                                            onClick={() => setPaymentMethod('Transfer')}
                                            className={`py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all border-2 ${paymentMethod === 'Transfer' ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300'}`}
                                        >
                                            <CreditCard size={18} /> QRIS / Trf
                                        </button>
                                    </div>
                                </div>

                                {paymentMethod === 'Transfer' && (
                                    <div className="animate-in slide-in-from-top-2 text-center flex flex-col items-center pb-2">
                                        <div className="bg-white border-2 border-dashed border-blue-200 rounded-3xl p-6 mb-4 relative overflow-hidden group shadow-sm">
                                            <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <QrCode size={140} className="text-slate-800" strokeWidth={1} />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-sm">
                                                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white p-1.5">
                                                    <Wrench size={16} />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm font-black text-slate-800 mb-1.5">Scan QRIS untuk Membayar</p>
                                        <p className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">BCA 1234 5678 90 (Ocean Race)</p>
                                    </div>
                                )}

                                {paymentMethod === 'Cash' && (
                                    <div className="animate-in slide-in-from-top-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Uang Diterima</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">Rp</span>
                                            <input
                                                type="number"
                                                placeholder="Contoh: 100000"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 text-lg font-bold transition-all text-slate-800"
                                                value={paymentAmount}
                                                onChange={(e) => setPaymentAmount(e.target.value)}
                                            />
                                        </div>

                                        {Number(paymentAmount) >= total && (
                                            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex justify-between items-center">
                                                <span className="text-sm font-bold text-emerald-700">Kembalian:</span>
                                                <span className="text-xl font-black text-emerald-600">{formatRupiah(Number(paymentAmount) - total)}</span>
                                            </div>
                                        )}
                                        {Number(paymentAmount) > 0 && Number(paymentAmount) < total && (
                                            <div className="mt-4 p-3 bg-rose-50 border border-rose-100 rounded-xl text-center">
                                                <span className="text-sm font-bold text-rose-600">Uang kurang {formatRupiah(total - Number(paymentAmount))}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-slate-100">
                            <button
                                onClick={() => {
                                    setIsPaymentModalOpen(false);
                                    setIsSuccessMenuOpen(true);
                                }}
                                disabled={paymentMethod === 'Cash' && Number(paymentAmount) < total}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all disabled:bg-slate-300 disabled:shadow-none flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 size={24} />
                                Konfirmasi Pembayaran
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal (Struk) */}
            {isSuccessMenuOpen && (
                <div className="fixed inset-0 bg-emerald-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95">
                    <div className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl p-8 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Alhamdulillah, Sukses!</h2>
                        <p className="text-slate-500 font-medium mb-8">Akad dengan pelanggan <strong className="text-slate-700">{customerName || 'Hamba Allah'}</strong> telah diselesaikan. Semoga berkah.</p>

                        <div className="w-full space-y-3">
                            <button
                                onClick={() => {
                                    setIsSuccessMenuOpen(false);
                                    setCart([]);
                                    setCustomerName('');
                                    setLicensePlate('');
                                    setMechanic('');
                                    setPaymentAmount('');
                                }}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
                            >
                                <Receipt size={20} />
                                Cetak Struk
                            </button>
                            <button
                                onClick={() => {
                                    setIsSuccessMenuOpen(false);
                                    setCart([]);
                                    setCustomerName('');
                                    setLicensePlate('');
                                    setMechanic('');
                                    setPaymentAmount('');
                                }}
                                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-3.5 rounded-xl font-bold text-base transition-all"
                            >
                                Transaksi Baru
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
