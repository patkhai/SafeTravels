import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.shell import inspect_response
import json

alert_measure = {}

class TravelNoticeSpider(scrapy.Spider):
    name = "travelnotice1"

    def start_requests(self):
        url = 'https://wwwnc.cdc.gov/travel/destinations/list'
        yield scrapy.Request(url, callback=self.pre_parse)

    def pre_parse(self, response):
        for href in response.css('ul.list-bullet > li > a::attr(href)'):
            url = response.urljoin(href.extract())
            yield scrapy.Request(url, callback = self.parse)

    def parse(self, response):
        country = response.url[56:]
        country = chr(ord(country[0]) - 32) + country[1:]
        country = country.replace('-', ' ')
        for text in response.xpath("//h4[@class='notice-typename notice-typename-watch']/text()"):
            d = text.extract()
            alert_measure[country] = d
        with open('travelalert_level1.json', 'w') as outfile:
            json.dump(alert_measure, outfile)

