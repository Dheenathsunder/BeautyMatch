import React from 'react';

interface ProductOption {
    brand: string;
    productName: string;
    shade: string;
}

interface RecommendationCardProps {
    category: string;
    options: ProductOption[];
    reason: string;
    icon: string;
    color: string;
}

export function RecommendationCard({ category, options, reason, icon, color }: RecommendationCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className={`px-4 py-3 flex items-center gap-3 border-b border-gray-50`} style={{ background: color + '15' }}> {/* 15 is for low opacity */}
                <div className="text-xl bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                    {icon}
                </div>
                <h3 className="font-semibold text-gray-800 tracking-wide uppercase text-sm">{category}</h3>
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <div className="space-y-3 mb-4 flex-1">
                    {options.map((opt, idx) => (
                        <div key={idx} className="group flex flex-col pb-2 last:pb-0 last:border-0 border-b border-gray-50">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{opt.brand}</span>
                                    <p className="text-sm font-medium text-gray-900 leading-snug group-hover:text-pink-600 transition-colors">{opt.productName}</p>
                                </div>
                            </div>
                            <div className="mt-1">
                                <span className="inline-block px-2 py-0.5 bg-gray-50 text-gray-600 text-[10px] font-medium rounded-md border border-gray-100">
                                    {opt.shade}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-3 border-t border-gray-50">
                    <p className="text-xs text-gray-500 leading-relaxed italic">
                        "{reason}"
                    </p>
                </div>
            </div>
        </div>
    );
}
