class Webpage < ActiveRecord::Base
  extend FriendlyId
  include HTMLGettable
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
