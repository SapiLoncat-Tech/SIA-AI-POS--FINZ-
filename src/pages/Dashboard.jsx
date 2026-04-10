import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Wrench, LayoutDashboard, ShoppingCart,
    Box, Users, History, Settings, TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight, Clock
} from 'lucide-react';

export default function Dashboard() {
    const navigate = useNavigate();

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
                    <button onClick={() => navigate('/dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200">
                        <LayoutDashboard size={20} />
                        Dashboard
                    </button>
                    <button onClick={() => navigate('/pos')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
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
                <header className="px-8 py-8 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Ringkasan Hari Ini</h1>
                    <p className="text-slate-500 font-medium mt-1">Pantau performa bengkel Ocean Race secara real-time.</p>
                </header>

                <div className="px-8 pb-10">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <TrendingUp size={24} />
                                </div>
                                <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                                    <ArrowUpRight size={14} /> 12%
                                </span>
                            </div>
                            <h3 className="text-slate-500 font-medium text-sm mb-1">Total Pendapatan</h3>
                            <p className="text-2xl font-black text-slate-800 tracking-tight">Rp 4.250.000</p>
                            <div className="absolute right-[-20%] bottom-[-20%] text-blue-50 opacity-50 group-hover:scale-110 transition-transform">
                                <TrendingUp size={120} />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                    <Wrench size={24} />
                                </div>
                            </div>
                            <h3 className="text-slate-500 font-medium text-sm mb-1">Kendaraan Servis</h3>
                            <p className="text-2xl font-black text-slate-800 tracking-tight">18 <span className="text-sm font-medium text-slate-400">Motor</span></p>
                            <div className="absolute right-[-20%] bottom-[-20%] text-emerald-50 opacity-50 group-hover:scale-110 transition-transform">
                                <Wrench size={120} />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                                    <Users size={24} />
                                </div>
                                <span className="flex items-center gap-1 text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-md">
                                    <ArrowDownRight size={14} /> 3%
                                </span>
                            </div>
                            <h3 className="text-slate-500 font-medium text-sm mb-1">Pelanggan Baru</h3>
                            <p className="text-2xl font-black text-slate-800 tracking-tight">5 <span className="text-sm font-medium text-slate-400">Orang</span></p>
                            <div className="absolute right-[-20%] bottom-[-20%] text-orange-50 opacity-50 group-hover:scale-110 transition-transform">
                                <Users size={120} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Transactions */}
                        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-slate-800">Transaksi Terbaru</h3>
                                <button className="text-blue-600 text-sm font-semibold hover:underline">Lihat Semua</button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                                            <th className="pb-3 pl-2">Pelanggan</th>
                                            <th className="pb-3">No. Polisi</th>
                                            <th className="pb-3">Waktu</th>
                                            <th className="pb-3">Total</th>
                                            <th className="pb-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 pl-2 font-bold text-slate-700">Dimas Aditya</td>
                                            <td className="py-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold text-xs uppercase tracking-widest">B 1234 XYZ</span></td>
                                            <td className="py-4 text-slate-500 flex items-center gap-1.5"><Clock size={14} /> 10:45</td>
                                            <td className="py-4 text-slate-800 font-bold">Rp 350.000</td>
                                            <td className="py-4"><span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full text-xs font-bold">Selesai</span></td>
                                        </tr>
                                        <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 pl-2 font-bold text-slate-700">Rina Sari</td>
                                            <td className="py-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold text-xs uppercase tracking-widest">D 5678 KKL</span></td>
                                            <td className="py-4 text-slate-500 flex items-center gap-1.5"><Clock size={14} /> 09:20</td>
                                            <td className="py-4 text-slate-800 font-bold">Rp 120.000</td>
                                            <td className="py-4"><span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full text-xs font-bold">Selesai</span></td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 pl-2 font-bold text-slate-700">Bagus Setiawan</td>
                                            <td className="py-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold text-xs uppercase tracking-widest">F 9012 BBA</span></td>
                                            <td className="py-4 text-slate-500 flex items-center gap-1.5"><Clock size={14} /> 08:30</td>
                                            <td className="py-4 text-slate-800 font-bold">Rp 650.000</td>
                                            <td className="py-4"><span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full text-xs font-bold">Selesai</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Low Stock Alerts */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                    Peringatan Stok <span className="bg-rose-100 text-rose-600 w-5 h-5 flex items-center justify-center rounded-full text-xs">2</span>
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="bg-rose-100 p-2 text-rose-600 rounded-lg mt-0.5">
                                        <AlertTriangle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-rose-900 text-sm">Oli Mesin Matic 0.8L</h4>
                                        <p className="text-xs text-rose-600/80 mt-1 font-medium">Tersisa 2 botol di gudang</p>
                                        <button className="mt-3 text-xs font-bold bg-white text-rose-600 px-3 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-600 hover:text-white transition-colors">Order Sekarang</button>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="bg-orange-100 p-2 text-orange-600 rounded-lg mt-0.5">
                                        <AlertTriangle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-orange-900 text-sm">Kampas Rem Depan</h4>
                                        <p className="text-xs text-orange-600/80 mt-1 font-medium">Tersisa 5 pcs di gudang</p>
                                        <button className="mt-3 text-xs font-bold bg-white text-orange-600 px-3 py-1.5 rounded-lg border border-orange-200 hover:bg-orange-600 hover:text-white transition-colors">Order Sekarang</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
