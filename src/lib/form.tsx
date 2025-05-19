import { createFormHook } from '@tanstack/react-form';
import { lazy } from 'react';
import { fieldContext, formContext, useFormContext } from '../hooks/formContext';

const Input = lazy(() => import('../app/__components/ux/Input'));
const Select = lazy(() => import('../app/__components/ux/Select'));
const Button = lazy(() => import('../app/__components/ux/Button'));

function SubscribeButton({ label }: { label: string }) {
    const form = useFormContext()
    return (
        <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => 
                <button 
                    className="neons-icon"
                    disabled={isSubmitting}
                >
                    {label}
                </button>}
        </form.Subscribe>
    )
    }

export const { useAppForm, withForm } = createFormHook({
    fieldComponents: {
        Input,
        Select
    },
    formComponents: {
        Button
    },
    fieldContext,
    formContext,
})