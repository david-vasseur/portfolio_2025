import { createFormHook } from '@tanstack/react-form';
import { lazy } from 'react';
import { fieldContext, formContext } from '../hooks/formContext';

const Input = lazy(() => import('../app/__components/ui/Input'));
const TextArea = lazy(() => import('../app/__components/ui/TextArea'));
const Select = lazy(() => import('../app/__components/ui/Select'));
const Button = lazy(() => import('../app/__components/ui/Button'));
const Button2 = lazy(() => import('../app/__components/ui/NewButton'));

export const { useAppForm, withForm } = createFormHook({
    fieldComponents: {
        Input,
        Select,
        TextArea
    },
    formComponents: {
        Button,
        Button2
    },
    fieldContext,
    formContext,
})