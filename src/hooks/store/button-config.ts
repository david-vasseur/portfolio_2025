import { create } from 'zustand';

type ButtonConfig = {
    initialBackground: string;
    hoverBackground: string;
    textColorStart: string;
    textColorEnd: string;
    glow1: string;
    glow2: string;
    glow3: string;
    arrow?: boolean;  
    to?: string; 
    type: 'link' | 'external' | 'button';
};

const defaultConfig: ButtonConfig = {
    initialBackground: '#1F293766',
    hoverBackground: '#FFC9FF',
    textColorStart: '#FFC9FF',
    textColorEnd: '#F7F',
    glow1: '#FFC9FF',
    glow2: '#FFC9FF',
    glow3: '#FFC9FF',
    type: 'button'
};

export const useButtonConfigStore = create<{
    config: ButtonConfig;
    setConfig: (config: Partial<ButtonConfig>) => void;
}>((set) => ({
    config: defaultConfig,
    setConfig: (newConfig) =>
        set((state) => ({
        config: { ...state.config, ...newConfig },
        })),
}));

export const setButtonUIConfig = (config: Partial<ButtonConfig>) => {
    useButtonConfigStore.getState().setConfig(config);
};