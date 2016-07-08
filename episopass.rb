# -*- coding: utf-8 -*-
# -*- ruby -*-

$:.unshift File.expand_path 'lib', File.dirname(__FILE__)

require 'rubygems'
require 'sinatra'
require 'sinatra/cross_origin'
require 'data'
require 'defaultdata'
require 'app'
require 'config'

enable :cross_origin

get '/' do
  redirect "/index.html"
end

post '/:name/__write' do |name|
  data = params[:data]
  log(name,data)
  writedata(name,params[:data])
end

get '/:name.apk' do |name|
  # return "- Service Temporarily Unavailable -"
  content_type 'application/vnd.android.package-archive'
  apk(name)
end

get '/:name.html' do |name|
  @name = name
  @json = readdata(name)
  @json = defaultdata.to_json if @json.nil?
  erb :app
end

get '/:name.json' do |name|
  cross_origin
  json = readdata(name)
  json = defaultdata.to_json if json.nil?
  json
end

get '/:name/:seed' do |name,seed|
  @name = name
  @json = readdata(name)
  @json = defaultdata.to_json if @json.nil?
  @seed = seed
  @seed = JSON.parse(@json)['seed'] if @seed == ''
  erb :episopass
end

get '/:name/' do |name|
  redirect "/#{name}"
end

get '/:name' do |name|
  @name = name
  @json = readdata(name)
  @json = defaultdata.to_json if @json.nil?
  @seed = params[:seed].to_s
  @seed = JSON.parse(@json)['seed'] if @seed == ''
  erb :episopass
end
