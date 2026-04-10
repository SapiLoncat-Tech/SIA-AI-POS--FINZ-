import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Wrench,
    Mail,
    Lock,
    ArrowRight,
    Loader2,
    ShieldCheck,
    AlertCircle,
    User,
    ArrowLeft
} from 'lucide-react';

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [namaBengkel, setNamaBengkel] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Kata sandi dan konfirmasi tidak cocok.');
            return;
        }

        setLoading(true);

        try {
            // TODO: Implementasi logika register Firebase di sini kelak
            // await createUserWithEmailAndPassword(auth, email, password);

            // Simulasi loading pendaftaran
            await new Promise(resolve => setTimeout(resolve, 1500));

            navigate('/login');
        } catch (err) {
            setError('Pendaftaran gagal. Silakan periksa kembali data Anda.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F0F8FF] flex items-center justify-center p-4 font-sans">
            {/* Ornamen Latar Belakang */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[10%] left-[80%] w-[30%] h-[30%] bg-[#0077B6] opacity-5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-[#03045E] opacity-10 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse border border-white">

                {/* Sisi Kanan: Visual/Branding */}
                <div className="md:w-1/2 bg-[#003049] p-12 text-white flex flex-col justify-between relative">
                    <div className="relative z-10">
                        <div className="flex items-center justify-end gap-3 mb-12">
                            <span className="text-2xl font-black italic tracking-tighter uppercase text-right">Ocean Race</span>
                            <div className="p-3 bg-gradient-to-br from-[#00B4D8] to-[#0077B6] rounded-2xl shadow-lg">
                                <Wrench size={28} className="text-white" />
                            </div>
                        </div>

                        <h2 className="text-4xl font-black leading-tight mb-6 italic tracking-tighter text-right">
                            GABUNG <br />
                            <span className="text-[#90E0EF]">BERSAMA</span> <br />
                            KAMI.
                        </h2>

                        <p className="text-blue-100/60 leading-relaxed font-medium text-right">
                            Daftarkan bengkel Anda dan mulai kelola transaksi pelanggan dengan lebih cerdas dan efisien.
                        </p>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Sisi Kiri: Form Register */}
                <div className="md:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center relative">

                    <button
                        onClick={() => navigate('/login')}
                        className="absolute top-8 left-8 text-slate-400 hover:text-[#0077B6] transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Kembali</span>
                    </button>

                    <div className="mb-8 mt-8">
                        <h3 className="text-3xl font-black text-slate-800 tracking-tighter italic uppercase">Buat Akun</h3>
                        <p className="text-slate-400 font-medium text-sm">Lengkapi data bengkel di bawah ini.</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-3 text-rose-600 animate-in fade-in slide-in-from-top-2">
                            <AlertCircle size={20} className="shrink-0" />
                            <p className="text-xs font-bold uppercase tracking-tight">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Bengkel</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0077B6] transition-colors" size={20} />
                                <input
                                    type="text"
                                    value={namaBengkel}
                                    onChange={(e) => setNamaBengkel(e.target.value)}
                                    placeholder="Ocean Motor"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-[#0077B6] focus:bg-white transition-all text-sm font-semibold"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Alamat Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0077B6] transition-colors" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@bengkel.com"
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-[#0077B6] focus:bg-white transition-all text-sm font-semibold"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kata Sandi</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0077B6] transition-colors" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-[#0077B6] focus:bg-white transition-all text-sm font-semibold"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                                >
                                    <ShieldCheck size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Konfirmasi Sandi</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0077B6] transition-colors" size={20} />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-3 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-[#0077B6] focus:bg-white transition-all text-sm font-semibold"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                                >
                                    <ShieldCheck size={20} />
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-4 bg-[#0077B6] hover:bg-[#023E8A] disabled:bg-slate-300 text-white py-4 rounded-2xl font-black uppercase tracking-[0.1em] text-sm shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>DAFTAR SEKARANG <ArrowRight size={20} /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Info */}
            <p className="fixed bottom-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                Ocean Race &copy; 2026 - Pendaftaran
            </p>
        </div>
    );
}
