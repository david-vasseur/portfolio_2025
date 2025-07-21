"use client";

import { X } from "lucide-react";
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
					className="relative bg-accent-2 cursor-pointer text-base xl:text-xl text-text-1 font-black rounded-3xl py-20 px-10 border-2 border-text-1 max-w-lg w-2/3"
					onClick={(e) => e.stopPropagation()}
				>
					<X className="absolute right-2 top-2 stroke-3 text-text-1 hover:scale-110 hover:text-red-400 transition-all duration-400" onClick={onClose} />
					{children}
				</div>
			</div>
		</ModalPortal>
	);
}