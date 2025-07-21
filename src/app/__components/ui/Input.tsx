import { useFieldContext } from '../../../hooks/formContext';
import { FieldErrors } from '../features/form/field-errors';

export default function Input({ placeholder, type, cl }: { placeholder: string, type: string, cl: string }) {
  
    const field = useFieldContext<string>()

    return (
        <>
            <div className="w-[90%] input-container">
                <input
                    className={`${cl} relative  border-b-2 border-b-[var(--accent1)] w-[100%] bg-[rgba(0,0,0,0.1)] p-2 shadow-lg`}
                    placeholder={placeholder}
                    type={type}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldErrors meta={field.state.meta} />
            </div>            
        </>
    )
}
