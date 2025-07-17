import { useFormContext } from "@/hooks/formContext"
import { MdArrowForwardIos } from "react-icons/md"

export default function SubscribeButton({ inner1, inner2, arrow = false }: { inner1: string, inner2: string, arrow: boolean }) {
    const form = useFormContext()
    return (
        <form.Subscribe selector={(state) => state.isSubmitting}>
            {/* {(isSubmitting) => 
                <button 
                    className="inline-block neon-icons font-black px-4 py-2 rounded-lg bg-[var(--accent1)] w-fit shadow-lg"
                    disabled={isSubmitting}
                >
                    {label}
                </button>} */}

                {(isSubmitting) => 
                    <button
                            className="card-button p-2 2xl:p-4 rounded-3xl font-black flex gap-2 justify-center items-center bg-gray-800/40 border-3 border-text-1 neon-icons duration-300 transition-all"
                            disabled={isSubmitting}
                        >
                            <div className='card-button-contener inline-flex flex-col'>
                                <span className="card-button-span font-black text-text-1">{inner1}</span>
                                <span className="card-button-span font-black text-text-2">{inner2}</span>
                            </div>
                            {
                                arrow && (
                                    <MdArrowForwardIos className="card-button-arrow hidden 2xl:block" />
                                )
                            }	
                    </button>
                }
        </form.Subscribe>
    )
    }