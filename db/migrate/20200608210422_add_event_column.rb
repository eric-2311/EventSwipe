class AddEventColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :category, :string, null: false
  end
end
