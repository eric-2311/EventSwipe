class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save!
            login(@user)
            redirect_to root_url
        else
            render json: @user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end