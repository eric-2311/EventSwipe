class FixUsersColumnagain < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :exists, :boolean, default: true
  end
end
