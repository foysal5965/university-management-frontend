'use client'
import { getErrorMassagesByPropertyName } from "@/utils/schemaValidators";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
}


const FormInput = ({
    name,
    type,
    size,
    value,
    id,
    placeholder,
    validation,
    label,
}: IInput) => {
    const { control, formState:{errors} } = useFormContext();
    const errorMassages = getErrorMassagesByPropertyName( errors,name)
    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    type === 'password' ?
                        <Input.Password type={type} size={size} placeholder={placeholder} {...field} value={value ? value : field.value} /> : <Input type={type} size={size} placeholder={placeholder} {...field} value={value ? value : field.value} />
                )}
            />
             <small style={{ color: "red" }}>{errorMassages}</small>
        </>


    )
};

export default FormInput;
