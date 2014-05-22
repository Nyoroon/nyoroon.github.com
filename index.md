---
layout: default
title: Nyoro~n
---

* Pages
* [wishlist](wishlist.html) 
{:.breadcrumb}

<hr>
<h2>Blog</h2>
<div class="list-group">
    {% for post in site.posts %}
    <div class="list-group-item"><h4><small>{{ post.date | date_to_string }}</small>&nbsp;<a href="{{ post.url }}">{{ post.title }}</a></h4></div>
    {% endfor %}
</div>
