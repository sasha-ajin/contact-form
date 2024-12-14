export function convertObjectToFormData<T extends Record<string, any>>(value: T): FormData {
    const formData = new FormData()

    Object.keys(value).forEach((propertyName) => {
        formData.append(propertyName, value[propertyName])
    });

    return formData
}
