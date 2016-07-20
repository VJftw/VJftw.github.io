---
layout: page
title: Projects
---
<div>
{% assign project_counter = 0 %}
    {% for project in site.projects %}
    {% assign proj_mod = project_counter | modulo: 3 %}
    {% if proj_mod == 0 %}
        <div class="row">
    {% endif %}
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-10">
                            <h4 class="pull-left">
                                <a class="project-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.name }}</a>
                            </h4>
                        </div>
                        <div class="col-md-2">
                            {% if project.status == "in-progress" %}
                                <span class="pull-right label label-primary">In progress</span>
                            {% elsif project.status == "concept" %}
                                <span class="pull-right label label-info">Concept</span>
                            {% elsif project.status == "complete" %}
                                <span class="pull-right label label-success">Complete</span>
                            {% elsif project.status == "idle" %}
                                <span class="pull-right label label-warning">Idle</span>
                            {% elsif project.status == "abandoned" %}
                                <span class="pull-right label label-danger">Abandoned</span>
                            {% endif %}
                        </div>
                    </div>
                    <p>{{ project.short_description }}</p>
                </div>
            </div>
        </div>
        {% assign project_counter = project_counter | plus: 1 %}
        {% if proj_mod == 2 %}
            </div>
        {% endif %}
    {% endfor %}
</div>
