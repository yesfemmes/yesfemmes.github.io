---
layout: default
title: Issue One
bodyclass: issue-one
permalink: /issue-first/
---

<div class="issue-landing issue-first">
  <div class="img-wrapper"></div>



 <div class="author-info"> 
 <ul class="authors">
{% assign sorted = (site.issues | where: "issue", "first" | sort: 'lastname') %}

  {% for item in sorted %}
  <li class="item-{% increment counter %}"><h2><a href="{{ item.url }}">{{ item.firstname }} {{item.lastname}} /  </a></h2></li>
{% endfor %}
</ul>

