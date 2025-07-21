import { AnyFieldMeta } from "@tanstack/react-form"
import { ZodError } from "zod";
import "../../../__styles/animation.css"

type FieldErrorsProps = {
    meta: AnyFieldMeta;
}

export const FieldErrors = ({ meta }: FieldErrorsProps) => {
    if (!meta.isTouched) {
        return null;
    }

    const err = meta.errors[0];
    const message =
        typeof err === "string"
            ? err
            : typeof err?.message === "string"
            ? err.message
            : typeof err?.message?.message === "string";

    return (
        <div className="absolute -bottom-6 left-0 overflow-hidden">
            <p className="text-xs xl:text-base textFromLeft font-semibold text-red-500">
                {message}
            </p>
        </div>
    );
}