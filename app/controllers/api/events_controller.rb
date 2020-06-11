class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        # render json: @events
    end

    def show
        # debugger
        @event = Event.find(params[:id])
        # debugger
        # render json: @event
    end

    def create
        @event = Event.new(event_params)

        if @event.save
            render json: @event
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])

        if @event
            @event.destroy
            render json: { id: @event.id }
        else
            render json: ['Could not find event'], status: 404
        end
    end

    private

    def event_params
        params.require(:event).permit(:title, :description, :start_date, :end_date, :price)
    end
end