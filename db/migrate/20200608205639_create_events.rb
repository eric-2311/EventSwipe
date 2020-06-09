class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false, unique: true
      t.integer :host_id, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :location, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.timestamps
    end

    add_index :events, :host_id
  end
end
