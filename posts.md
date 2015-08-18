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
                    {{ post.date | date: "%b %-d, %Y" }}
                    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                </div>
            </div>
        </div>
    {% endfor %}
</div>
