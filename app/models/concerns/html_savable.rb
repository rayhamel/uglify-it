module HTMLSavable
  extend ActiveSupport::Concern

  def load_from_redis
    document = Nokogiri::HTML(self.html)
    doc_slug = self.slug
    style_doc(doc_slug, document)
    add_gifs(doc_slug, document)
    add_marquees(doc_slug, document)
    self.html = document.to_s.encode('utf-8')
  end

  def save_to_database
    self.load_from_redis
    self.save
  end

  private

  def style_doc(doc_slug, document)
    REDIS.hkeys("#{doc_slug}_styles").each do |key|
      node = document.at_xpath(key[/.*?\]/])
      style_node(
        node, key[/(.*?\]) (.*)/, 2], REDIS.hget("#{doc_slug}_styles", key)
      )
    end
  end

  def add_gifs(doc_slug, document)
    body = document.at_xpath('//body')
    REDIS.smembers("#{doc_slug}_gifs").each do |member|
      body.add_child(member)
    end
  end

  def add_marquees(doc_slug, document)
    REDIS.hkeys("#{doc_slug}_marquees").each do |key|
      node = document.xpath(key)
      node.wrap(REDIS.hget("#{doc_slug}_marquees", key))
    end
  end

  def style_node(node, attribute, ugly_style)
    style = node.styles
    style[attribute] = ugly_style
    node.styles = style
    rescue NoMethodError
  end
end
