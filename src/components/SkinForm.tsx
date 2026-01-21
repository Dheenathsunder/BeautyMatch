import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { getSkinAnalysis, RecommendationResponse } from '../services/ai';

interface SkinFormProps {
    onResults: (data: RecommendationResponse) => void;
    isCompact?: boolean;
}

export function SkinForm({ onResults, isCompact = false }: SkinFormProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        skinType: '',
        skinTone: '',
        concerns: [] as string[]
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.skinType || !formData.skinTone) return;

        setLoading(true);
        try {
            const results = await getSkinAnalysis(
                formData.skinType,
                formData.skinTone,
                formData.concerns
            );
            onResults(results);
        } catch (error) {
            alert("Failed to get recommendations. Please check if backend is running.");
            setLoading(false);
        }
    };

    const handleConcernToggle = (concern: string) => {
        setFormData(prev => ({
            ...prev,
            concerns: prev.concerns.includes(concern)
                ? prev.concerns.filter(c => c !== concern)
                : [...prev.concerns, concern]
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 w-full">
            {/* Skin Type Section */}
            <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block pl-1">Skin Type</label>
                <div className={`grid gap-3 ${isCompact ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'}`}>
                    {[
                        { id: 'oily', label: 'Oily', icon: '✨', desc: 'Shiny, pores' },
                        { id: 'dry', label: 'Dry', icon: '🌵', desc: 'Tight, flaky' },
                        { id: 'combination', label: 'Combo', icon: '🌗', desc: 'Oily T-zone' },
                        { id: 'normal', label: 'Normal', icon: '🌸', desc: 'Balanced' }
                    ].map(type => (
                        <label
                            key={type.id}
                            className={`relative flex flex-col items-center p-3 border rounded-xl cursor-pointer transition-all duration-200 ${formData.skinType === type.id
                                    ? 'border-pink-500 bg-pink-50/80 ring-1 ring-pink-500 shadow-sm'
                                    : 'border-black/5 bg-white/40 hover:bg-white/60 hover:border-pink-300'
                                }`}
                        >
                            <input
                                type="radio"
                                name="skinType"
                                value={type.id}
                                checked={formData.skinType === type.id}
                                onChange={e => setFormData({ ...formData, skinType: e.target.value })}
                                className="absolute opacity-0 w-full h-full cursor-pointer"
                            />
                            <span className="text-xl mb-1">{type.icon}</span>
                            <span className="font-semibold text-gray-800 text-sm">{type.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Skin Tone Section */}
            <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block pl-1">Skin Tone</label>
                <div className={`grid gap-2 ${isCompact ? 'grid-cols-4' : 'grid-cols-4 lg:grid-cols-8'}`}>
                    {[
                        { id: 'fair-cool', color: 'linear-gradient(135deg, #ffeaa7, #fab1a0)', label: 'Fair C' },
                        { id: 'fair-warm', color: 'linear-gradient(135deg, #fdcb6e, #e17055)', label: 'Fair W' },
                        { id: 'light-cool', color: 'linear-gradient(135deg, #f39c12, #d63031)', label: 'Light C' },
                        { id: 'light-warm', color: 'linear-gradient(135deg, #e67e22, #c0392b)', label: 'Light W' },
                        { id: 'medium-cool', color: 'linear-gradient(135deg, #d35400, #8e44ad)', label: 'Med C' },
                        { id: 'medium-warm', color: 'linear-gradient(135deg, #a0522d, #8b4513)', label: 'Med W' },
                        { id: 'deep-cool', color: 'linear-gradient(135deg, #6f4e37, #2c3e50)', label: 'Deep C' },
                        { id: 'deep-warm', color: 'linear-gradient(135deg, #8b4513, #654321)', label: 'Deep W' }
                    ].map(tone => (
                        <label
                            key={tone.id}
                            className="relative group cursor-pointer flex flex-col items-center gap-1.5"
                        >
                            <input
                                type="radio"
                                name="skinTone"
                                value={tone.id}
                                checked={formData.skinTone === tone.id}
                                onChange={e => setFormData({ ...formData, skinTone: e.target.value })}
                                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                            />
                            <div
                                className={`w-10 h-10 rounded-full shadow-sm transition-transform duration-200 border-2 ${formData.skinTone === tone.id ? 'border-pink-500 scale-110 shadow-md' : 'border-white/50 group-hover:scale-105'
                                    }`}
                                style={{ background: tone.color }}
                            />
                        </label>
                    ))}
                </div>
                <div className="text-center text-xs font-medium text-gray-500 min-h-[1.5em] tracking-wide">
                    {formData.skinTone ? formData.skinTone.replace('-', ' ').toUpperCase() : 'SELECT A TONE'}
                </div>
            </div>

            {/* Concerns Section */}
            <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block pl-1">Concerns</label>
                <div className="flex flex-wrap gap-2">
                    {[
                        { id: 'acne', label: 'Acne' },
                        { id: 'dark-circles', label: 'Circles' },
                        { id: 'redness', label: 'Redness' },
                        { id: 'dullness', label: 'Dullness' },
                        { id: 'texture', label: 'Texture' },
                        { id: 'sensitivity', label: 'Sensitive' }
                    ].map(concern => (
                        <label
                            key={concern.id}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm cursor-pointer transition-all duration-200 shadow-sm ${formData.concerns.includes(concern.id)
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white/60 border-transparent text-gray-600 hover:bg-white hover:shadow-md'
                                }`}
                        >
                            <input
                                type="checkbox"
                                value={concern.id}
                                checked={formData.concerns.includes(concern.id)}
                                onChange={() => handleConcernToggle(concern.id)}
                                className="hidden"
                            />
                            <span>{concern.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button
                type="submit"
                disabled={loading || !formData.skinType || !formData.skinTone}
                className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg hover:to-gray-800 transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8 tracking-wide uppercase"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin w-4 h-4" />
                        Analyzing...
                    </>
                ) : (
                    <>
                        Generate Recommendations
                    </>
                )}
            </button>
        </form>
    );
}
