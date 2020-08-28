from django.db import models

class Board(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title

class User(models.Model):
    name = models.CharField(max_length=50)
    user_id = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    create_id = models.CharField(max_length=50)
    create_date = models.DateTimeField('date published')

    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.TextField()
    comment_id = models.CharField(max_length=50)
    comment_date = models.DateTimeField('date published')

    def __str__(self):
        return self.content
