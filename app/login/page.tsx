'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success('Login successful!');
        router.push('/admin');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-space-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-pink/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glass-effect rounded-2xl p-8 glow-border">
          <div className="text-center mb-8">
            <h1 className="font-orbitron text-3xl font-bold mb-2 glow-text">Admin Portal</h1>
            <p className="text-text-dim">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-white mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full pl-12 pr-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-white mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full pl-12 pr-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg font-semibold text-white shadow-lg shadow-cosmic-purple/50 hover:shadow-cosmic-purple/80 transition-all disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-text-dim">
            <p>Default credentials:</p>
            <p className="text-xs mt-1">admin@cosmicportfolio.com / admin123</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-text-dim hover:text-cosmic-purple transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>
      </motion.div>
    </div>
  );
}
