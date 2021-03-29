class AddSlugToWebpages < ActiveRecord::Migration[4.2]
  def change
    add_column :webpages, :slug, :string, unique: true
  end
end
