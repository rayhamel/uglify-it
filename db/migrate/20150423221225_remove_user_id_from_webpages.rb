class RemoveUserIdFromWebpages < ActiveRecord::Migration
  def change
    remove_column :webpages, :user_id, :integer
  end
end
