class Webpage < ActiveRecord::Base
  extend FriendlyId
  include HTTParty
  include HTMLGettable
  validates :title, length: { in: 3..255 }, allow_blank: true
  validates :url, presence: true, length: { in: 4..511 }
  friendly_id :slug_candidates, use: :slugged

  belongs_to :user
  before_save :set_uuid, :save_html

  def set_uuid
    self.uuid = SecureRandom.uuid if self.uuid.nil?
  end

  def slug_candidates
    %i(title uuid)
  end
end
