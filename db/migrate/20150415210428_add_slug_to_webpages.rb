class AddSlugToWebpages < ActiveRecord::Migration
  def change
    add_column :webpages, :slug, :string, unique: true
  end
end
