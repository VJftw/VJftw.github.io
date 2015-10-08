---
layout: page
title: About
permalink: /about/
---
<div class="container">
<div class="row">
    <div class="col-md-12">
        {% for qualification in site.qualifications %}
            <div class="qualification row">
                <h2>{{ qualification.name }} <small>{{ qualification.year_range }}</small></h2>
                {% for institution in qualification.institutions %}
                    <div class="col-md-12">
                        <h3>
                            <a target="_blank" href="{{ institution.uri }}">
                                {{ institution.name }}
                            </a>
                        </h3>
                        {% for year in institution.years %}
                            <div class="year col-md-12">
                                <div class="col-md-10">
                                    <h4>{{ year.name }} <small>({{ year.year_range}})</small></h4>
                                </div>
                                <div class="col-md-1">
                                    <span class="label label-success">{{ year.score }}%</span>
                                </div>
                                <div class="col-md-1">
                                    <small>{{ year.credits }} credits</small>
                                </div>
                                <div class="col-md-12">
                                    <ul class="list-group">
                                        <li class="list-group-item clearfix">
                                            <div class="col-md-10"><strong>Module Name</strong></div>
                                            <div class="col-md-1 text-right"><strong>%</strong></div>
                                            <div class="col-md-1 text-right"><small><strong>Credits</strong></small></div>
                                        </li>
                                        {% for module in year.modules %}
                                            <li class="list-group-item clearfix">
                                                <div class="col-md-10">{{ module.name }}</div>
                                                <div class="col-md-1 text-right">
                                                {{ module.score }}
                                                </div>
                                                <div class="col-md-1 text-right">
                                                {% assign module_gained_credits = module.score|divided_by:100|times:module.credits %}
                                                <small>{{ module_gained_credits | round }}/{{ module.credits}}</small>
                                                </div>
                                            </li>
                                        {% endfor %}
                                    </ul>
                                </div>
                            </div>
                        {% endfor %}
                    </div>
                {% endfor %}
            </div>
        {% endfor %}
    </div>
</div>
</div>
