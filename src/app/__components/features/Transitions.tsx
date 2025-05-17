"use client";

import ModalPortal from "./ModalPortal";

interface TransitionsProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Transitions({ isOpen, onClose }: TransitionsProps) {
    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div
                className={`fixed bg-[rgba(20, 18, 31, 0.3)] inset-0 flex items-center justify-center z-3 portal-animated ${isOpen ? "active" : ""}`}
                onClick={onClose}
            >
                <div className="portal-transition"></div>
            </div>
        </ModalPortal>
    );
}