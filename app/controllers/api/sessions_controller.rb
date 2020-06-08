class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        # debugger
        if @user
            login(@user)
            render '/api/users/show'
        else
            render json: ['Invalid credentials'], status: 422
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

    # def user_exists
    #     @user = User.find_by(email: params[:email])

    #     if @user.nil?
    #         render json: @user
    #     else
    #         render json: 
    #     end
    # end
end