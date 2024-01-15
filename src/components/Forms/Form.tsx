'use client'
import React, { ReactElement, ReactNode } from "react"
import { useForm, FormProvider, useFormContext, SubmitHandler } from "react-hook-form"
type FormConfig = {
    defaultValues?: Record<string, any>;
    resolver?:any
}
type formProps = {
    children?: ReactElement | ReactNode;
    submitHandler: SubmitHandler<any>

} & FormConfig
const Form = ({ children, submitHandler, defaultValues, resolver }: formProps) => {
    const formConfig: FormConfig = {};

    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
    if (!!resolver) formConfig["resolver"] = resolver;

    const methods = useForm<formProps>(formConfig);
    const { handleSubmit, reset } = methods;

    const onSubmit = (data: any) => {
        submitHandler(data);

    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    )
};

export default Form;
