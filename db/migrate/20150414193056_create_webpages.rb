class CreateWebpages < ActiveRecord::Migration[4.2]
  def change
    create_table :webpages do |t|
      t.text :html, null: false
      t.string :url, null: false
      t.string :title

      t.timestamps null: false
    end
  end
end
