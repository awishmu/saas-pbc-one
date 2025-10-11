"use client"

import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

import { useSignInModal } from "@/components/modals/sign-in-modal";

export const ModalContext = createContext<{
	setShowSignModal: Dispatch<SetStateAction<boolean>>;
}>({
	setShowSignModal: () => {},
});


export default function ModalProvider({ children }: { children: ReactNode }) {
	const { SignInModal, setShowSignInModal } = useSignInModal();
	
	return (
		<ModalContext.Provider
			value={{
				setShowSignModal,
			}}
		>
			<SignInModal />
			{children}
		</ModalContext.Provider>
	)
	
}
