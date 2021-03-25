class WorkoutsController < ApplicationController
    before_action :find_workout_session
    before_action :authorized, except: [:create]
   
    def index
        if params[:workout_session_id]
            @workouts = @ws.workouts
        else
            @workouts = Workout.all
        end
        render json: @workouts
    end

    def show
        @workout = Workout.find_by(id: params[:id])
        render json: @workout
    end

    def create
        puts "stuffs"
    end

    def update
        puts "stuffs"
    end

    def destroy
        puts "stuffs"
    end

    private

    def find_workout_session
        @ws = WorkoutSession.find_by(id: params[:workout_session_id])
    end

end

