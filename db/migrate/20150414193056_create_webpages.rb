class CreateWebpages < ActiveRecord::Migration
  def change
    create_table :webpages do |t|
      t.text :html, null: false
      t.string :url, null: false
      t.string :title
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
