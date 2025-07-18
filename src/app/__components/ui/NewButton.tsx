"use client"

import '../../__styles/Button.css';
import { ChevronRight } from 'lucide-react';
import { useButtonConfigStore } from '../../../hooks/store/button-config';

type SizeOptions = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
type ResponsiveOptions = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";

type ButtonProps = {
    isMobile: boolean | undefined;
    text1: string;
    text2: string;
    text3: string;
    size: SizeOptions;
    responsive?: ResponsiveOptions;
    initialBackground?: string;
    hoverBackground?: string;
    textColorStart?: string;
    textColorEnd?: string;
    glow1?: string;
    glow2?: string;
    glow3?: string;
    arrow?: boolean;  
    to?: string; 
    type: 'link' | 'external' | 'button';
    cn?: string | null;    
};

type SizeProps = {
    fontSizeClass: string;
    containerHeight: string;
    translateY: string;
    svgWidth: string;
}

type ResponsiveProps = {
    fontSizeClassResponsive: string;
    containerHeightResponsive: string;
    svgWidthResponsive: string;
}

const getSizeConfig = (size: SizeOptions): SizeProps => {
    switch (size) {
        case "xs":
            return { fontSizeClass: "text-xs", containerHeight: "h-4", translateY: "group-hover:-translate-y-4", svgWidth: "w-4" };
        case "sm":
            return { fontSizeClass: "text-sm", containerHeight: "h-5", translateY: "group-hover:-translate-y-5", svgWidth: "w-5" };
        case "base":
            return { fontSizeClass: "text-base", containerHeight: "h-6", translateY: "group-hover:-translate-y-6", svgWidth: "w-6" };
        case "lg":
            return { fontSizeClass: "text-lg", containerHeight: "h-7", translateY: "group-hover:-translate-y-7", svgWidth: "w-7" };
        case "xl":
            return { fontSizeClass: "text-xl", containerHeight: "h-7", translateY: "group-hover:-translate-y-7", svgWidth: "w-7" };
        case "2xl":
            return { fontSizeClass: "text-2xl", containerHeight: "h-8", translateY: "group-hover:-translate-y-8", svgWidth: "w-8" };
        case "3xl":
            return { fontSizeClass: "text-3xl", containerHeight: "h-9", translateY: "group-hover:-translate-y-9", svgWidth: "w-9" };
        default:
            return { fontSizeClass: "text-base", containerHeight: "h-6", translateY: "group-hover:-translate-y-6", svgWidth: "w-6" };
    }
};

const getResponsiveConfig = (responsive: ResponsiveOptions): ResponsiveProps => {
    switch (responsive) {
        case "xs":
            return { fontSizeClassResponsive: "text-xs", containerHeightResponsive: "h-4", svgWidthResponsive: "w-4" };
        case "sm":
            return { fontSizeClassResponsive: "text-sm", containerHeightResponsive: "h-5", svgWidthResponsive: "w-5" };
        case "base":
            return { fontSizeClassResponsive: "text-base", containerHeightResponsive: "h-6", svgWidthResponsive: "w-6" };
        case "lg":
            return { fontSizeClassResponsive: "text-lg", containerHeightResponsive: "h-7", svgWidthResponsive: "w-7" };
        case "xl":
            return { fontSizeClassResponsive: "text-xl", containerHeightResponsive: "h-7", svgWidthResponsive: "w-7" };
        case "2xl":
            return { fontSizeClassResponsive: "text-2xl", containerHeightResponsive: "h-8", svgWidthResponsive: "w-8" };
        case "3xl":
            return { fontSizeClassResponsive: "text-3xl", containerHeightResponsive: "h-9", svgWidthResponsive: "w-9" };
        default:
            return { fontSizeClassResponsive: "text-base", containerHeightResponsive: "h-6", svgWidthResponsive: "w-6" };
    }
};


function Button({ isMobile, text1, text2, text3, initialBackground, hoverBackground, textColorStart, textColorEnd, glow1, glow2, glow3, arrow=false, to="", type="button", cn=null, size="base", responsive="base" }: ButtonProps) {

    const { config } = useButtonConfigStore();

    const bg1 = initialBackground || config.initialBackground;
    const bg2 = hoverBackground || config.hoverBackground;
    const txt1 = textColorStart || config.textColorStart;
    const txt2 = textColorEnd || config.textColorEnd;
    const gl1 = glow1 || config.glow1;
    const gl2 = glow2 || config.glow2;
    const gl3 = glow3 || config.glow3;

    const { fontSizeClass, containerHeight, translateY, svgWidth } = getSizeConfig(size as SizeOptions);
    const { fontSizeClassResponsive, containerHeightResponsive, svgWidthResponsive } = getResponsiveConfig(responsive as ResponsiveOptions);

    const content = (
        <div className="flex items-center gap-2">
            <div className={`button-container-text ${isMobile ? containerHeightResponsive : containerHeight}`}>
                {
                    isMobile ? (
                        <p 
                            className={`button-container-text-1 ${fontSizeClassResponsive} group-hover:text-[color:var(--hover-color)] text-[color:var(--start-color)]`} 
                            style={{
                                '--start-color': `${txt1}`,
                                '--hover-color': `${txt2}`,
                            } as React.CSSProperties}
                        >
                            {text3}
                        </p>
                    ) : (
                        <>
                            <p 
                                className={`button-container-text-1 ${fontSizeClass} ${translateY} transition-all duration-450 ease-in-out group-hover:text-[color:var(--hover-color)] text-[color:var(--start-color)]`} 
                                style={{
                                    '--start-color': `${txt1}`,
                                    '--hover-color': `${txt2}`,
                                } as React.CSSProperties}
                            >
                                {text1}
                            </p>
                            <p 
                                className={`button-container-text-2 ${fontSizeClass} ${translateY} transition-all duration-450 ease-in-out group-hover:text-[color:var(--hover-color)] text-[color:var(--start-color)]`} 
                                style={{
                                    '--start-color': `${txt1}`,
                                    '--hover-color': `${txt2}`,
                                } as React.CSSProperties}
                            >
                                {text2}
                            </p>
                        </>
                    )
                }
            </div>
            {arrow && (
                <ChevronRight 
                    className={`button-chevron ${isMobile ? containerHeightResponsive : containerHeight} ${isMobile ? svgWidthResponsive : svgWidth} transition-all duration-450 ease-in-out group-hover:text-[color:var(--hover-color)] text-[color:var(--start-color)]`} 
                    style={{
                        '--start-color': `${txt1}`,
                        '--hover-color': `${txt2}`, 
                        strokeWidth: 3
                    } as React.CSSProperties} />
            )}
        </div>
    )


    if (type === "button") {
        return (
            <div className="button-wrapper group">
                <button 
                    className={`button-container flex justify-center items-center py-2.5 px-4 cursor-pointer font-bold border-2 border-white border-solid rounded-4xl group-hover:[box-shadow:var(--hover-shadow)] group-hover:bg-[var(--hovered-background-color)] bg-[var(--background-color)]/30 ${cn}`}
                    style={{
                        '--background-color': `${bg1}`,                        
                        '--hovered-background-color': `${bg2}`,
                        '--hover-shadow': `0 0 1px ${gl1}, 0 0 2px ${gl2}, 0 0 15px ${gl3}`,
                    } as React.CSSProperties}
                >
                    {content}
                </button>
            </div>
        )
    }

    if (type === "external") {
        return (
            <div className="button-wrapper group">
                <a 
                    className={`button-container flex justify-center items-center py-2.5 px-4 cursor-pointer font-bold border-2 border-white border-solid rounded-4xl group-hover:[box-shadow:var(--hover-shadow)] group-hover:bg-[var(--hovered-background-color)] bg-[var(--background-color)] ${cn}`} 
                    target="_blank" 
                    href={to}
                    style={{
                        '--background-color': `${bg1}`,                        
                        '--hovered-background-color': `${bg2}`,
                        '--hover-shadow': `0 0 1px ${gl1}, 0 0 2px ${gl2}, 0 0 15px ${gl3}`,
                    } as React.CSSProperties}
                >
                    {content}
                </a>
            </div>
        )
    }

    if (type === "link") {
        return (
            <div className="button-wrapper group">
                <a 
                    className={`button-container flex justify-center items-center py-2.5 px-4 cursor-pointer font-bold border-2 border-white border-solid rounded-4xl group-hover:[box-shadow:var(--hover-shadow)] group-hover:bg-[var(--hovered-background-color)] bg-[var(--background-color)] ${cn}`} 
                    href={to}
                    style={{
                        '--background-color': `${bg1}`,                        
                        '--hovered-background-color': `${bg2}`,
                        '--hover-shadow': `0 0 1px ${gl1}, 0 0 2px ${gl2}, 0 0 15px ${gl3}`,
                    } as React.CSSProperties}
                >
                    {content}
                </a>
            </div>
        )
    }

}

export default Button;