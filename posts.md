---
layout: page
title: Blog
permalink: /blog/
---
<div class="row">
    {% assign posts = site.posts | where:"layout", "post" %}
    {% for post in posts %}
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                            <div class="col-md-12">
                                <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                {% if post.categories[0] %}
                                    <span class="label label-primary">{{ post.categories[0] }}</span>
                                {% endif %}
                                {% if post.categories[1] %}
                                    <span class="label label-info">{{ post.categories[1] }}</span>
                                {% endif %}
                                {% if post.categories[2] %}
                                    <span class="label label-default">{{ post.categories[2] }}</span>
                                {% endif %}
                            </div>
                            <div class="col-md-4">
                                <small class="text-right pull-right">{{ post.date | date: "%b %-d, %Y" }}</small>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    {% endfor %}
</div>
