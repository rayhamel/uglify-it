class AddUuidToWebpages < ActiveRecord::Migration
  def change
    add_column :webpages, :uuid, :string, null: false
  end
end
