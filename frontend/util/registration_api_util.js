export const createRegistration = registration => {
    return $.ajax({
        method: 'POST',
        url: '/api/registrations',
        data: { registration }
    })
}