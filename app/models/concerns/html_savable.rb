module HTMLSavable
  extend ActiveSupport::Concern

  def load_from_redis
    document = Nokogiri::HTML(self.html)
    doc_slug = self.slug
    sorted_keys = sort_keys(REDIS.hkeys(doc_slug))
    sorted_keys[:styles].each do |key|
      node = document.xpath(key[/.*?\]/])[0]
      style_node(node, key[/(.*?\]) (.*)/, 2], REDIS.hget(doc_slug, key))
    end
    document.to_s
  end

  def save_to_database
    self.html = load_from_redis
    self.save
  end

  private

  def sort_keys(keys)
    sorted_keys = { gifs: [], marquees: [], styles: [] }
    keys.each do |key|
      if key.start_with?("<marquee")
        sorted_keys[:marquees] << key
      else
        sorted_keys[:styles] << key
      end
    end
    sorted_keys
  end

  def style_node(node, attribute, ugly_style)
    style = node.styles
    style[attribute] = ugly_style
    node.styles = style
  end
end
