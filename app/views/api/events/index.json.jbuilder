@events.each do |event|
    json.set! event.id do 
        json.partial! 'api/events/event', event: event
    end
end

#set is setting key to event object