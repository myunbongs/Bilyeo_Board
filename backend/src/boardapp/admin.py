from django.contrib import admin
from .models import Board, User, Post, Comment

admin.site.register(Board)
admin.site.register(User)
admin.site.register(Post)
admin.site.register(Comment)
