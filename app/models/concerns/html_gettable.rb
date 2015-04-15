module HTMLGettable
  extend ActiveSupport::Concern

  def strip_html(src)
    src.gsub!(
      /<link.*?>|<style.*?<\/style>|bgcolor=["'].*?["']|color=["'].*?["']|
      style=["'].*?["']/imx, ''
    )
    Nokogiri::HTML(
      Loofah.document(src).scrub!(:prune).to_s
    ).to_s.force_encoding('iso8859-1').encode('utf-8')
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

  def save_html
    self.html = strip_html(HTTParty.get(parse_url(self.url)).body)
    rescue SocketError
      flash[:notice] = "#{url} is not a valid URL!"
      redirect_to :new
  end
end
