from django.db import models

class Board(models.Model):
    id = models.AutoField(primary_key=True)  # PK 자동증가 
    title = models.CharField(max_length=120)
    content = models.TextField()
    create_id = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class User(models.Model):
    name = models.CharField(max_length=50)
    user_id = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str_(self):
        return self.user_id

class Post(models.Model):
    id = models.AutoField(primary_key=True)  # PK 자동증가 
    title = models.CharField(max_length=200)
    content = models.TextField()
    create_id = models.CharField(max_length=50)
   
    def __str__(self):
        return self.title

class Comment(models.Model):
    content = models.TextField()
    comment_id = models.ForeignKey(Post, on_delete=models.CASCADE) # 게시판 참조
    comment_date = models.DateTimeField('date published')

    def __str__(self):
        return self.content