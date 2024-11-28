import { Link, useLocation } from '@remix-run/react';
import { LayoutDashboard, Database } from 'lucide-react';

export default function Sidebar() {
    const location = useLocation();
    const isIndex = !location.pathname.includes('collect-data');

    return (
        <div className="fixed top-0 left-0 w-64 bg-slate-50 text-neutral-800 p-6 h-screen overflow-y-auto">
            <div className="mb-8">
                <h1 className="text-xl font-bold">SensEGrid</h1>
            </div>
            
            <nav className="space-y-2">
                <Link 
                    to="/dashboard"
                    className={`flex items-center justify-between p-3 ${
                        isIndex ? 'bg-purple-200' : 'hover:bg-purple-100'
                    }`}
                >
                    Overview
                    <LayoutDashboard size={18} className="text-purple-500" />
                </Link>
                <Link 
                    to="/dashboard/collect-data"
                    className={`flex items-center justify-between p-3 ${
                        !isIndex ? 'bg-purple-200' : 'hover:bg-purple-100'
                    }`}
                >
                    Collect Data
                    <Database size={18} className="text-purple-500" />
                </Link>
            </nav>
        </div>
    );
}