import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.shell import inspect_response
import json

alert_measure = {}

class TravelAdviceSpider(scrapy.Spider):
    name = "traveladvice"

    def start_requests(self):
        url = 'https://wwwnc.cdc.gov/travel/destinations/list'
        yield scrapy.Request(url, callback=self.pre_parse)

    def pre_parse(self, response):
        for href in response.css('ul.list-bullet > li > a::attr(href)'):
            url = response.urljoin(href.extract())
            yield scrapy.Request(url, callback = self.parse)

    def parse(self, response):
        country = response.url
        for text in response.xpath("//td[@class='traveler-disease']/text()"):
            d = text.extract()
            alert_measure[country] = d
        with open('travelerInfo.json', 'w') as outfile:
            json.dump(alert_measure, outfile)
