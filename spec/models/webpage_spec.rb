require 'rails_helper'

RSpec.describe Webpage, type: :model do
  it { should validate_length_of :title }
  it { should validate_length_of :url }
  it { should validate_presence_of :url }

  it { should have_valid(:title).when('A Website') }
  it { should have_valid(:url).when('example.com') }

  it { should_not have_valid(:title).when('aa') }
  it { should_not have_valid(:title).when('a' * 256) }
  it { should_not have_valid(:url).when('') }
  it { should_not have_valid(:url).when('www') }
  it { should_not have_valid(:url).when('w' * 512) }
end
