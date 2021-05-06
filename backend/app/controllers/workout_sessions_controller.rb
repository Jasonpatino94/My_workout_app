class WorkoutSessionsController < ApplicationController
    # before_action :authorized 
    before_action :find_user

    def index
        ws = WorkoutSession.all
        render json: ws
    end

    def show
        ws = @user.workout_sessions.find_by(id: params[:id])
        render json: ws    
    end

    def create
        ws = @user.workout_sessions.build(workout_session_params)
        if @user.valid? && ws.save
            render json: ws
        else 
            render json: {error: "couldn't save that session!", status: 400}
        end
    end

    def destroy
        ws = WorkoutSession.find_by(id: params[:id])
        ws.destroy
        render json: ws
    end

    private

    def find_user
        @user = User.find_by(id: params[:user_id])
    end

    def workout_session_params
        params.require(:workout_session).permit(:name)
    end
end
