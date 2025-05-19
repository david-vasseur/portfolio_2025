import { useFormContext } from "@/hooks/formContext"

export default function SubscribeButton({ label }: { label: string }) {
    const form = useFormContext()
    return (
        <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => 
                <button 
                    className="inline-block neon-icons font-black px-4 py-2 rounded-lg bg-[var(--accent1)] w-fit shadow-lg"
                    disabled={isSubmitting}
                >
                    {label}
                </button>}
        </form.Subscribe>
    )
    }