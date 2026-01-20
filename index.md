--- 
layout: mylayout.njk
title: Jamila Akhtar Portfolio! 
---
# {{ title }}

## Posts

{%- for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

