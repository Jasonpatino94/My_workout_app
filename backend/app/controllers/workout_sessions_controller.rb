class WorkoutSessionsController < ApplicationController
    # before_action :authorized

    def index
        @ws = WorkoutSession.all
        render json: @ws
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end
end
