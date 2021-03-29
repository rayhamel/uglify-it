class AddUuidToWebpages < ActiveRecord::Migration[4.2]
  def change
    add_column :webpages, :uuid, :string, null: false
  end
end
