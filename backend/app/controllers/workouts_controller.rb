class WorkoutsController < ApplicationController
    before_action :find_user
    # before_action :authorized, except: [:create]
   
    def index
       @workouts = @user.workouts
       render json: @workouts
    end

    def show
        @user = User.find_by(id: params[:user_id])
        @workout = @user.workouts.find_by(id: params[:id])
        render json: @workout
    end

    def create
       @workout = @user.workouts.build(workout_params)
       if @user.valid? && @workout.save
        render json: @workout
       else 
        render json: {error: "could't save that workout", status: 400}
       end
    end

    def destroy
        @workout = Workout.find_by(id: params[:id])
        @workout.destroy
        render json: @workout
    end

    private

    def find_user
        @user = User.find_by(id: params[:user_id])
    end

    def workout_params
        params.require(:workout).permit(:name, :weight, :reps, :sets)   
    end

end

