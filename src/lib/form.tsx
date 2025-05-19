import { createFormHook } from '@tanstack/react-form';
import { lazy } from 'react';
import { fieldContext, formContext } from '../hooks/formContext';

const Input = lazy(() => import('../app/__components/ux/Input'));
const Select = lazy(() => import('../app/__components/ux/Select'));
const Button = lazy(() => import('../app/__components/ux/Button'));

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