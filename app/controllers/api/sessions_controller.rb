class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render '/api/users/show'
        else
            render json: ['Invalid credentials']
            # redirect_to root_url
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

    def user_exists
        @user = User.find_by(email: params[:email])

        if @user.nil?
            render json: { email: email, exists: false }
        else
            render json: { email: email, exists: true }
        end
    end
end