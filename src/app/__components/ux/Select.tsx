import { useStore } from '@tanstack/react-form';
import { useFieldContext } from '../../../hooks/formContext';

type IOptions = {
    value: string
    label: string
}

export default function Input({ options }: { options: IOptions[] }) {
  const field = useFieldContext<string>()

  const errors = useStore(field.store, (state) => state.meta.errors)

    return (
        <div>
            <select 
                className="input-class border-b-2 border-b-[var(--accent1)] w-[100%] bg-[rgba(0,0,0,0.1)] p-2 shadow-xl"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
            >
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>{option.label}</option>
                    )
                })}
                
            </select>
            {errors.map((error: string) => (
                <div key={error} style={{ color: 'red' }}>
                    {error}
                </div>
            ))}
        </div>
    )
}