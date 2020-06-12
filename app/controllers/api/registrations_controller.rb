class Api::RegistrationsController < ApplicationController

    def create
        @registration = Registration.new(registration_params)
        @registration.user_id = current_user.id

        if @registration.save
            @event = @registration.event
        else
            render json: @registration.errors.full_messages, status: 401
        end
    end

    private

    def registration_params
        params.require(:registration).permit(:user_id, :event_id)
    end
end