import * as RegistrationApiUtil from '../util/registration_api_util';

export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';

const receievRegistration = registration => ({
    type: RECEIVE_REGISTRATION,
    registration
})

export const createRegistration = registration => dispatch => (
    RegistrationApiUtil.createRegistration(registration)
        .then(registration => dispatch(receievRegistration(registration)))
)