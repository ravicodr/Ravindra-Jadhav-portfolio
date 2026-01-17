'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { LogOut, Save, TrendingUp } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface Stats {
  experience: number;
  dau: number;
  apiRequests: number;
  projectsCompleted: number;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({
    experience: 4,
    dau: 10,
    apiRequests: 100,
    projectsCompleted: 25,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/stats', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stats),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Stats updated successfully! 🎉');
      } else {
        toast.error(data.error || 'Failed to update stats');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cosmic-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-dim">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen px-4 py-12 relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-space-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-pink/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="font-orbitron text-4xl font-bold glow-text mb-2">
              Admin Dashboard
            </h1>
            <p className="text-text-dim">Welcome back, {session.user?.name || 'Admin'}</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 glass-effect rounded-lg hover:glow-border transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </motion.button>
        </div>

        {/* Stats Editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 glow-border"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-cosmic-purple" />
            <h2 className="font-orbitron text-2xl font-bold">Update Stats</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-white mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                value={stats.experience}
                onChange={(e) =>
                  setStats({ ...stats, experience: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-white mb-2">
                Daily Active Users (K)
              </label>
              <input
                type="number"
                value={stats.dau}
                onChange={(e) => setStats({ ...stats, dau: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-white mb-2">
                API Requests Daily (K)
              </label>
              <input
                type="number"
                value={stats.apiRequests}
                onChange={(e) =>
                  setStats({ ...stats, apiRequests: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-white mb-2">
                Projects Completed
              </label>
              <input
                type="number"
                value={stats.projectsCompleted}
                onChange={(e) =>
                  setStats({ ...stats, projectsCompleted: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white"
              />
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <motion.button
              onClick={handleSave}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg font-semibold text-white shadow-lg shadow-cosmic-purple/50 hover:shadow-cosmic-purple/80 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </motion.button>

            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.02 }}
              className="px-6 py-3 glass-effect rounded-lg hover:glow-border transition-all"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 glass-effect rounded-2xl p-6"
        >
          <h3 className="font-orbitron text-xl font-bold mb-4 text-cosmic-purple">
            Quick Guide
          </h3>
          <ul className="space-y-2 text-text-dim text-sm">
            <li>• Update your portfolio stats in real-time without redeploying</li>
            <li>• Changes are immediately reflected on the public portfolio</li>
            <li>• All data is stored securely in MongoDB</li>
            <li>• Contact form submissions are saved and sent via email</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
