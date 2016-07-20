---
layout: page
title: Education
---
<div class="container">
    <div class="row">
        <div class="col-md-12">
            {% for qualification in site.qualifications %}
            <div class="qualification row">
                <div class="col-md-10">
                    <h2><small>{{ qualification.year_range }}</small> {{ qualification.name }} {% if qualification.award %}<small>{{ qualification.award }}</small>{% endif %}</h2>
                </div>
                <div class="col-md-12">
                </div>

                {% for institution in qualification.institutions %}
                <div class="col-md-12">
                    <h3>
                        <a target="_blank" href="{{ institution.uri }}">
                            {{ institution.name }}
                        </a>
                    </h3>
                    <div class="panel-group" role="tablist" aria-multiselectable="true">
                        {% for year in institution.years %}
                        <div class="year panel panel-default">
                            {% assign headingId = year.year_range | replace:'/', '_' | prepend:'heading_' %}
                            <div class="panel-heading clearfix" role="tab" id="{{ headingId }}">
                                {% assign panelId = year.year_range | replace:'/', '_' | prepend:'collapse_' %}
                                <div class="col-md-11 clearfix">
                                    <h4 class="panel-title">
                                    <a
                                        role="button"
                                        data-toggle="collapse"
                                        href="#{{ panelId }}"
                                        aria-expanded="true"
                                        aria-controls="{{ panelId }}"
                                        >
                                        <small>
                                        <i class="fa fa-chevron-down"></i>
                                        ({{ year.year_range}})</small>
                                     {{ year.name }}</a> {% if year.location %}@ {{ year.location }} {% endif %}
                                </h4>
                                </div>
                                <div class="col-md-1 clearfix pull-right">

                                    {% if year.score %}
                                    <span class="label label-success">{{ year.score }}%</span>
                                    {% else %}
                                    <span class="label label-info">Sitting</span>
                                    {% endif %}

                                </div>
                            </div>
                            <div
                            id="{{ panelId }}"
                            class="panel-collapse collapse clearfix"
                            role="tabpanel"
                            aria-labelledby="{{ headingId }}"
                            >
                                <ul class="list-group">
                                    <li class="list-group-item clearfix">
                                        <div class="col-md-11"><small><strong>Module</strong></small></div>
                                        <div class="col-md-1 text-right"><small><strong>%</strong></small></div>
                                    </li>
                                    {% for module in year.modules %}
                                    <li class="list-group-item clearfix">
                                        <div class="col-md-11">{{ module.name }}</div>
                                        {% if module.score %}
                                        <div class="col-md-1 text-right">
                                            {{ module.score }}
                                        </div>
                                        {% else %}
                                        <div class="col-md-1 text-right">
                                            <span class="label label-info">Sitting</span>
                                        </div>
                                        {% endif %}
                                    </li>
                                    {% endfor %}
                                </ul>
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                </div>
                {% endfor %}
            </div>
            {% endfor %}
        </div>
    </div>
</div>
