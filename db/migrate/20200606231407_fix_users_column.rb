class FixUsersColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :exists, :boolean, default: false
  end
end
