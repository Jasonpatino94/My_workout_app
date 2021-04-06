class UsersController < ApplicationController
    # before_action :authorized, except: [:create]   
    
    def index
        @user = User.all
        render json: @user
        
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user
    end

    def create
       @user = User.create(user_params)
       if @user.save
        token = encode_token({user_id: @user.id})
        render json: {:user => @user, :jwt => token}
       else
        render json: {error: 'couldnt make that user', status: 400}
       end
    end

    private

    def user_params
        params.require(:user).permit(:name, :password)
    end
    
end
