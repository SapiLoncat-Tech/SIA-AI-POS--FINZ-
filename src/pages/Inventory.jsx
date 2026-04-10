import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Wrench, LayoutDashboard, ShoppingCart,
    Box, Users, History, Settings, Search, Plus, Filter, AlertCircle, Edit, Trash2
} from 'lucide-react';

export default function Inventory() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Mock Inventory Data
    const inventoryData = [
        { id: 'PRD-001', name: 'Oli Mesin Matic 0.8L', category: 'Oli & Cairan', price: 65000, stock: 2, status: 'critical' },
        { id: 'PRD-002', name: 'Kampas Rem Depan', category: 'Sparepart', price: 45000, stock: 45, status: 'good' },
        { id: 'SVC-001', name: 'Service Ringan', category: 'Jasa Servis', price: 80000, stock: '∞', status: 'service' },
        { id: 'PRD-003', name: 'Filter Udara', category: 'Sparepart', price: 35000, stock: 12, status: 'good' },
        { id: 'PRD-004', name: 'Aki Motor 12V', category: 'Sparepart', price: 210000, stock: 5, status: 'warning' },
        { id: 'SVC-002', name: 'Turun Mesin', category: 'Jasa Servis', price: 500000, stock: '∞', status: 'service' },
        { id: 'PRD-005', name: 'Busi Standar', category: 'Sparepart', price: 25000, stock: 100, status: 'good' },
    ];

    const filteredInventory = inventoryData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    <button onClick={() => navigate('/pos')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <ShoppingCart size={20} />
                        Transaksi Baru
                    </button>
                    <button onClick={() => navigate('/inventory')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200">
                        <Box size={20} />
                        Inventori
                    </button>
                    <button onClick={() => navigate('/customers')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <Users size={20} />
                        Pelanggan
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <History size={20} />
                        Riwayat
                    </button>
                </nav>

                <div className="px-4 mt-auto">
                    <div className="border-t border-slate-100 pt-4 pb-2 mb-2">
                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                            <Settings size={20} />
                            Pengaturan
                        </button>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 mt-2 border border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border-2 border-white shadow-sm">
                            K
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm text-slate-800">Kasir</p>
                            <p className="text-xs text-slate-500 font-medium">Admin Bengkel</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-y-auto bg-slate-50">
                <header className="px-8 py-8 bg-white/50 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center border-b border-slate-100">
                    <div>
                        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Manajemen Inventori</h1>
                        <p className="text-slate-500 font-medium mt-1">Kelola stok sparepart, oli, dan daftar jasa servis.</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
                        <Plus size={20} /> Tambah Barang
                    </button>
                </header>

                <div className="px-8 pb-10 pt-6">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Box size={24} />
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium text-sm">Total Jenis Barang</p>
                                <p className="text-2xl font-black text-slate-800">248</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium text-sm">Total Nilai Aset</p>
                                <p className="text-2xl font-black text-slate-800 flex items-center"><span className="text-sm mr-1 mt-1 text-slate-500 font-bold">Rp</span>32,5 Juta</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                                <AlertCircle size={24} />
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium text-sm">Stok Kritis / Habis</p>
                                <p className="text-2xl font-black text-rose-600">12 <span className="text-sm font-medium text-slate-400">Barang</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div className="relative w-80">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Cari nama barang atau kode SKU..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors font-medium text-sm shadow-sm">
                                <Filter size={18} /> Filter Kategori
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50/80 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    <tr>
                                        <th className="py-4 px-8 border-b border-slate-100">Kode / SKU</th>
                                        <th className="py-4 px-4 border-b border-slate-100">Nama Barang & Jasa</th>
                                        <th className="py-4 px-4 border-b border-slate-100 text-center">Kategori</th>
                                        <th className="py-4 px-4 border-b border-slate-100 text-right">Harga Jual</th>
                                        <th className="py-4 px-4 border-b border-slate-100 text-center">Tersisa</th>
                                        <th className="py-4 px-8 border-b border-slate-100 text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredInventory.map((item) => (
                                        <tr key={item.id} className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors text-sm group">
                                            <td className="py-4 px-8 font-bold text-slate-500 tracking-wider text-xs">{item.id}</td>
                                            <td className="py-4 px-4 font-bold text-slate-800">{item.name}</td>
                                            <td className="py-4 px-4 text-center">
                                                <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${item.category === 'Jasa Servis' ? 'bg-orange-50 text-orange-600' :
                                                    item.category === 'Sparepart' ? 'bg-emerald-50 text-emerald-600' :
                                                        'bg-blue-50 text-blue-600'
                                                    }`}>
                                                    {item.category}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 font-black text-slate-700 text-right">{formatRupiah(item.price)}</td>
                                            <td className="py-4 px-4 text-center font-bold">
                                                {item.status === 'service' ? (
                                                    <span className="text-slate-300 text-xl font-normal">∞</span>
                                                ) : (
                                                    <span className={`px-3 py-1.5 rounded-lg text-sm ${item.status === 'critical' ? 'bg-rose-100 text-rose-700 border border-rose-200' :
                                                        item.status === 'warning' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                                                            'text-slate-600 bg-slate-50 border border-slate-100'
                                                        }`}>
                                                        {item.stock}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-4 px-8 text-center">
                                                <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Edit size={16} />
                                                    </button>
                                                    <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredInventory.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="py-12 text-center text-slate-400 font-medium">
                                                Tidak ada barang yang cocok dengan pencarianmu.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
