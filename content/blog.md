---
title: Skeleton Blog
description: Update form skeleton 11ty Blogs
pagination:
  data: collections.posts
  size: 5
  reverse: true
testdata:
 - item1
 - item2
permalink: "blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
<hr/>{%- for item in pagination.items %}<a href="{{item.url}}"><h2>{{item.data.title}}</h2></a><h3>{{item.data.description}}</h3><p>
Posted by <a href="{{metadata.author.url}}">{{item.data.author or metadata.author.name}}</a> on {% if page.date %}on <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time><br/>{% endif %} </p> <hr/>{% endfor -%} <p class="pagi">{% if pagination.href.previous %}<a class="button no" href="{{ pagination.href.previous }}">← Previous</a>{% endif %}{% if pagination.href.next %}<a class="button no" href="{{ pagination.href.next }}">Next →</a>{% endif %}</p>
