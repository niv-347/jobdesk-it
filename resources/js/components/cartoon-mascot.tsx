import { cn } from '@/lib/utils';

function CartoonMascot({ className }: { className?: string }) {
    return (
        <div className={cn('relative w-48 h-48 md:w-56 md:h-56', className)}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Shadow */}
                <ellipse cx="100" cy="175" rx="60" ry="10" fill="#00000015" className="animate-pulse" />
                
                {/* Body */}
                <g className="origin-center animate-bounce" style={{ animationDuration: '2s' }}>
                    {/* Main body circle */}
                    <circle cx="100" cy="110" r="55" fill="#6366f1" />
                    <circle cx="100" cy="110" r="55" fill="url(#bodyGradient)" />
                    
                    {/* Belly */}
                    <circle cx="100" cy="120" r="35" fill="#ffffff30" />
                    
                    {/* Face */}
                    <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                        {/* Eyes */}
                        <g className="origin-center" style={{ transformOrigin: '100px 95px' }}>
                            <circle cx="82" cy="95" r="8" fill="white" />
                            <circle cx="118" cy="95" r="8" fill="white" />
                            <circle cx="84" cy="95" r="4" fill="#1e293b" className="animate-ping" style={{ animationDuration: '2s' }} />
                            <circle cx="120" cy="95" r="4" fill="#1e293b" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '0.2s' }} />
                        </g>
                        
                        {/* Blush */}
                        <ellipse cx="70" cy="110" rx="6" ry="4" fill="#f472b640" />
                        <ellipse cx="130" cy="110" rx="6" ry="4" fill="#f472b640" />
                        
                        {/* Smile */}
                        <path d="M 85 115 Q 100 125 115 115" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </g>
                    
                    {/* Antenna */}
                    <g className="animate-ping" style={{ animationDuration: '1.5s' }}>
                        <line x1="100" y1="55" x2="100" y2="35" stroke="#6366f1" strokeWidth="3" />
                        <circle cx="100" cy="30" r="5" fill="#f59e0b" />
                    </g>
                    
                    {/* Arms */}
                    <g className="origin-center" style={{ transformOrigin: '45px 110px', animation: 'wave 2s ease-in-out infinite' }}>
                        <circle cx="45" cy="110" r="12" fill="#6366f1" />
                        <circle cx="45" cy="110" r="12" fill="url(#bodyGradient)" />
                    </g>
                    <g style={{ transformOrigin: '155px 110px', animation: 'wave 2s ease-in-out infinite reverse' }}>
                        <circle cx="155" cy="110" r="12" fill="#6366f1" />
                        <circle cx="155" cy="110" r="12" fill="url(#bodyGradient)" />
                    </g>
                    
                    {/* Feet */}
                    <ellipse cx="80" cy="165" rx="15" ry="8" fill="#4f46e5" />
                    <ellipse cx="120" cy="165" rx="15" ry="8" fill="#4f46e5" />
                </g>
                
                {/* Sparkles around */}
                <g className="animate-ping" style={{ animationDuration: '2s' }}>
                    <circle cx="40" cy="60" r="3" fill="#f59e0b" />
                    <circle cx="160" cy="70" r="2" fill="#06b6d4" />
                    <circle cx="50" cy="150" r="2.5" fill="#10b981" />
                    <circle cx="150" cy="140" r="3" fill="#f59e0b" />
                </g>
                
                {/* Gradients */}
                <defs>
                    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>
            </svg>
            
            {/* Floating badge */}
            <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
                NEW
            </div>
        </div>
    );
}

export default CartoonMascot;
export { CartoonMascot };
