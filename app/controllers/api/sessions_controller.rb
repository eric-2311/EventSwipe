class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            redirect_to root_url
        else
            render json: 'Invalid credentials'
            redirect_to root_url
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: '404 EventSwipe Error'
        end
    end
end