import { Outlet, useLocation } from '@remix-run/react';
import Sidebar from '~/components/custom-ui/SideBar';
import type { MetaFunction } from '@remix-run/node';


export const meta: MetaFunction = () => {
    return [
        { title: 'Dashboard Overview | SensEGrid' },
        { name: 'description', content: 'Dashboard for SensEGrid' },
    ];
};

export default function Dashboard() {
    const location = useLocation();
    const isIndex = !location.pathname.includes('collect-data');

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 17) return 'Good Afternoon';
        return 'Good Evening';
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-8 ml-64">
                {isIndex ? (
                    <div>
                        <h1 className="text-3xl font-bold mb-2"><span className="text-purple-500 font-light">{getGreeting()},</span> User</h1>
                        <p className="text-neutral-600 text-lg">This is your SenseGrid Overview.</p>
                    </div>
                ) : (
                    <Outlet />
                )}
            </div>
        </div>
    )
}
