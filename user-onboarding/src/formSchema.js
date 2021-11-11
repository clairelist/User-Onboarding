import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string()
                .trim()
                .required('USER is REQUIRED!')
                .min(3,'USER must be 3 CHARACTERS minimum!'),

    email: yup.string()
                .email('Must be a valid EMAIL address!')
                .required('EMAIL is REQUIRED!'),

    password: yup.string()
                .required('PASSWORD is REQUIRED')
                .min(8,'PASSWORD must be 8 characters MINIMUM!'),

    tos: yup.boolean()
                .oneOf([true],'YOU MUST ACCEPT THE TERMS OF SERVICE.')
})

export default formSchema;