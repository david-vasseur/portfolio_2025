"use client";

import ModalPortal from "./ModalPortal";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  	if (!isOpen) return null;

	return (
		<ModalPortal>
		<div
			className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-2"
			onClick={onClose}
		>
			<div
				className="bg-accent-1 rounded-xl p-6 max-w-lg w-full"
				onClick={(e) => e.stopPropagation()}
			>
			{children}
			</div>
		</div>
		</ModalPortal>
	);
}