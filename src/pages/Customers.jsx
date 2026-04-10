import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Wrench, LayoutDashboard, ShoppingCart,
    Box, Users, History, Settings, Search, Plus, Filter, MessageSquare, Phone
} from 'lucide-react';

export default function Customers() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Mock Customer Data
    const customersData = [
        { id: 'CUST-001', name: 'Dimas Aditya', plate: 'B 1234 XYZ', phone: '0812-3456-7890', totalVisits: 5, lastVisit: '10 Okt 2023', status: 'Loyal' },
        { id: 'CUST-002', name: 'Rina Sari', plate: 'D 5678 KKL', phone: '0857-1111-2222', totalVisits: 1, lastVisit: 'Hari Ini', status: 'Baru' },
        { id: 'CUST-003', name: 'Bagus Setiawan', plate: 'F 9012 BBA', phone: '0819-9988-7766', totalVisits: 12, lastVisit: 'Kemarin', status: 'VIP' },
        { id: 'CUST-004', name: 'Joko Anwar', plate: 'B 4433 ZZ', phone: '0821-3333-4444', totalVisits: 3, lastVisit: '15 Sep 2023', status: 'Reguler' },
        { id: 'CUST-005', name: 'Siti Aminah', plate: 'B 8899 OK', phone: '0813-5555-6666', totalVisits: 2, lastVisit: '01 Nov 2023', status: 'Reguler' },
    ];

    const filteredCustomers = customersData.filter(cust =>
        cust.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cust.plate.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    <button onClick={() => navigate('/inventory')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
                        <Box size={20} />
                        Inventori
                    </button>
                    <button onClick={() => navigate('/customers')} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200">
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
                        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Data Pelanggan</h1>
                        <p className="text-slate-500 font-medium mt-1">Kelola data pelanggan, member, dan daftar kendaraan.</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
                        <Plus size={20} /> Tambah Pelanggan
                    </button>
                </header>

                <div className="px-8 pb-10 pt-6">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border-2 border-blue-100">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium text-sm">Total Pelanggan</p>
                                <p className="text-2xl font-black text-slate-800">1,204</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center border-2 border-amber-100">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium text-sm">Pelanggan VIP</p>
                                <p className="text-2xl font-black text-slate-800">85 <span className="text-sm font-medium text-slate-400">Orang</span></p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-100">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium text-sm">Servis Bulan Ini</p>
                                <p className="text-2xl font-black text-slate-800">312 <span className="text-sm font-medium text-slate-400">Kendaraan</span></p>
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
                                    placeholder="Cari nama, No. Polisi..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors font-medium text-sm shadow-sm">
                                <Filter size={18} /> Filter Status
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50/80 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    <tr>
                                        <th className="py-4 px-8 border-b border-slate-100">Nama Pelanggan</th>
                                        <th className="py-4 px-4 border-b border-slate-100">No. Polisi</th>
                                        <th className="py-4 px-4 border-b border-slate-100">No. Handphone</th>
                                        <th className="py-4 px-4 border-b border-slate-100 text-center">Total Servis</th>
                                        <th className="py-4 px-4 border-b border-slate-100">Terakhir Datang</th>
                                        <th className="py-4 px-4 border-b border-slate-100 text-center">Status</th>
                                        <th className="py-4 px-8 border-b border-slate-100 text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCustomers.map((cust) => (
                                        <tr key={cust.id} className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors text-sm group">
                                            <td className="py-4 px-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs shadow-sm">
                                                        {cust.name.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-800">{cust.name}</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{cust.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md font-bold text-xs uppercase tracking-widest block w-max">
                                                    {cust.plate}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-slate-600 font-medium">
                                                {cust.phone}
                                            </td>
                                            <td className="py-4 px-4 text-center font-black text-slate-700">
                                                {cust.totalVisits}x
                                            </td>
                                            <td className="py-4 px-4 text-slate-500 font-medium">
                                                {cust.lastVisit}
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${cust.status === 'VIP' ? 'bg-amber-100 text-amber-700 border border-amber-200 shadow-sm' :
                                                        cust.status === 'Baru' ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm' :
                                                            'bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm'
                                                    }`}>
                                                    {cust.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-8 text-center">
                                                <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button title="Hubungi WhatsApp" className="p-2 text-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                                                        <MessageSquare size={16} />
                                                    </button>
                                                    <button title="Telepon" className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                                                        <Phone size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredCustomers.length === 0 && (
                                        <tr>
                                            <td colSpan="7" className="py-12 text-center text-slate-400 font-medium">
                                                Tidak ada pelanggan yang cocok dengan pencarianmu.
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
