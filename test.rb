require 'httparty'
require 'nokogiri'
require 'loofah'
require 'pry'

module ApplicationHelper
  def strip_html(src)
    src.gsub!(
      /<link.*?>|<style.*?<\/style>|bgcolor=["'].*?["']|color=["'].*?["']|
      style=["'].*?["']/imx, ''
    )
    Nokogiri::HTML(Loofah.document(src).scrub!(:prune).to_s).to_s
  end

  class HTMLParser
    include HTTParty
    def self.parse_url(url)
      self.base_uri(url)
    end
  end

  def parse_url(url)
    HTMLParser.parse_url(url)
  end

  def save_html(url)
    strip_html(HTTParty.get(parse_url(url)).body)
    rescue => e
      puts e.inspect
  end
end

class MyTestClass
  include ApplicationHelper
end

a = MyTestClass.new.save_html('w3schools.com/html/html_iframe.asp')
b = MyTestClass.new.parse_url('w3schools.com/html/html_iframe.asp')

binding.pry
