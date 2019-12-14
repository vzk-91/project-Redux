export const registrationAction  = (event, data) => {
    const { target: { name, value } } = event;
    return {
        type: 'Registration',
         payload: { ...data, [name]: value }
    }
}