class Event < ApplicationRecord
    validates :host_id, :category, :start_date, :end_date, :price, presence: true
    
    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User
end