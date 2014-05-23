---
layout: blank
title: Nyoro~n
---

### Pages:

[wishlist](wishlist.html)

---

### Posts:

{% for post in site.posts %}
<span>{{ post.date | date_to_string }}</span> &#9055; <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
