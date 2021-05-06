class WorkoutsController < ApplicationController
    before_action :find_workout_session
    # before_action :authorized, except: [:create]
   
    def index
       workouts = @ws.workouts
       render json: workouts
    end

    def show
        workout = @ws.workouts.find_by(id: params[:id])
        render json: workout
    end

    def create
       workout = @ws.workouts.build(workout_params)
       if @ws.valid? && workout.save
        render json: workout
       else 
        render json: {error: "couldn't save that workout", status: 400}
       end
    end

    def destroy
        workout = Workout.find_by(id: params[:id])
        workout.destroy
        render json: workout
    end

    private

    def find_workout_session
         @ws = WorkoutSession.find_by(id: params[:workout_session_id])
    end

    def workout_params
        params.require(:workout).permit(:name, :weight, :reps, :sets)   
    end

end

