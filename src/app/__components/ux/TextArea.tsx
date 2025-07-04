import { useStore } from '@tanstack/react-form';
import { useFieldContext } from '../../../hooks/formContext';

export default function Input({ placeholder }: { placeholder: string }) {
  const field = useFieldContext<string>()

  const errors = useStore(field.store, (state) => state.meta.errors)

    return (
        <div className="w-[90%] input-container1">
            <textarea
                className="border-b-2 border-b-[var(--accent1)] h-32 max-h-64 w-[100%] bg-[rgba(0,0,0,0.1)] p-2 shadow-lg"
                placeholder={placeholder}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
            />
            {errors.map((error: string) => (
                <div key={error} style={{ color: 'red' }}>
                    {error}
                </div>
            ))}
        </div>
    )
}