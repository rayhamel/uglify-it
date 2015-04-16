module HTMLGettable
  extend ActiveSupport::Concern

  def strip_html(doc)
    doc.gsub!(
      /<link.*?>|<style.*?<\/style>|bgcolor=["'].*?["']|color=["'].*?["']|
      style=["'].*?["']/imx, ''
    )
    Nokogiri::HTML(Loofah.document(doc).scrub!(:prune).to_s)
  end

  def fix_links(doc, remote_url)
    tags = { 'img' => 'src', 'a' => 'href' }
    remote_url = URI(remote_url)
    doc.search(tags.keys.join(',')).each do |node|
      url_param = tags[node.name]
      link = node[url_param]
      unless link.nil? || link.empty?
        uri = URI.parse(link)
        unless uri.host
          uri.scheme = remote_url.scheme
          uri.host = remote_url.host
          node[url_param] = uri.to_s
        end
      end
    end
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
    url = parse_url(self.url)
    doc = strip_html(HTTParty.get(url).body)
    fix_links(doc, url)
    self.html = doc.to_s.force_encoding('iso8859-1').encode('utf-8')
  end
end
