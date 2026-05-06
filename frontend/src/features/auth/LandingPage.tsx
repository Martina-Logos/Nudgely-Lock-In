import { useNavigate } from 'react-router-dom'

const pillars = [
  { icon: '✦', title: 'Know Yourself',    desc: 'Understand your temperament, IQ, and emotional patterns' },
  { icon: '✦', title: 'Train Your Brain', desc: 'Ambient audio, meditation, and cognitive games' },
  { icon: '✦', title: 'Do the Work',      desc: 'AI-powered task management and adaptive focus modes' },
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F0EADF] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-14 pb-8">

        {/* Logo */}
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] px-8 py-6 mb-6 flex flex-col items-center animate-fade-in">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-2xl font-bold" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>
              Nudgely
            </span>
            <span className="text-sm font-semibold" style={{ color: '#23BBB7' }}>Lock-In</span>
          </div>
          <p className="text-[#9B8EA5] text-xs tracking-wide">Your focus, aligned.</p>
        </div>

        {/* Tagline */}
        <p className="text-xl text-[#2D1F35] font-medium text-center mb-10 animate-slide-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          Your focus, aligned.
        </p>

        {/* Pillars */}
        <div className="w-full flex flex-col gap-3 mb-10">
          {pillars.map((p, i) => (
            <div key={p.title} className="bg-white rounded-xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] p-5 flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${0.15 + i * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
              <span className="text-2xl mb-2" style={{ color: '#23BBB7' }}>{p.icon}</span>
              <h3 className="text-base font-semibold text-[#2D1F35] mb-1">{p.title}</h3>
              <p className="text-sm text-[#9B8EA5] leading-snug">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-10 flex flex-col items-center gap-3 animate-slide-up"
        style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}>
        <button className="btn-primary" onClick={() => navigate('/signup')}>
          Get Started
        </button>
        <p className="text-[#9B8EA5] text-xs">Takes less than a minute</p>
      </div>
    </div>
  )
}