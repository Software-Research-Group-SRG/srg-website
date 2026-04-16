import React, { useEffect } from 'react';

const BaseModal = ({ isOpen, onClose, title, children }) => {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Freeze background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content container to match theme base styling */}
            <div className="
                relative w-full max-w-5xl
                flex flex-col
                p-6
                backdrop-blur-md
                border-4 border-[var(--border-color)]
                rounded-[20px_0px_20px_0px]
                shadow-[0_0_30px_rgba(49,133,255,0.3)]
                bg-[linear-gradient(135deg,rgba(3,7,18,0.96),rgba(15,23,42,0.92)_55%,rgba(30,64,175,0.55))]
                animate-in fade-in zoom-in-95 duration-200
                text-[var(--text-title1)]
                max-h-[90vh]
            ">
                {/* Header */}
                <div className="flex justify-between items-start mb-4 border-b border-[var(--border-color)] border-opacity-30 pb-3">
                    <h2 className="text-xl font-bold text-[var(--text-main)] tracking-wider">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="relative overflow-y-auto pr-2 show-scrollbar flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseModal;
