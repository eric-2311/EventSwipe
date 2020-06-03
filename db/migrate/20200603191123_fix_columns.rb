class FixColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :exists, :boolean
  end
end
