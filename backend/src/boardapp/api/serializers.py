from rest_framework import serializers
from boardapp.models import Board
from boardapp.models import Comment
from boardapp.models import User

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('title', 'content')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email', 'password', 'created_at','updated_at')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('content')