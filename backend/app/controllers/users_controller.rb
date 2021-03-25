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
        puts "stuffs"
    end

    def update
        puts "Stuffs"
    end

    def destroy
        puts "Stuffs"
    end
    
end
