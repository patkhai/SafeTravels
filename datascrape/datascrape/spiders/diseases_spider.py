import scrapy
from scrapy.utils.response import open_in_browser
from scrapy.shell import inspect_response
import json

all_diseases = {}

class DiseasesSpider(scrapy.Spider):
    name = "diseases_list"

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
        diseases = []
        for href in response.css('div.item h5 > a::attr(href)'):
            d = href.extract()[17:].replace('-', ' ')
            d = chr(ord(d[0]) - 32) + d[1:]
            if (d == 'Hepatitis b'):
                diseases.append('Hepatitis B')
            elif (d == 'Hepatitis a'):
                diseases.append('Hepatitis A')
            else:
                diseases.append(d)
        all_diseases[country] = diseases
        with open('disease_list.json', 'w') as outfile:
            json.dump(all_diseases, outfile)
