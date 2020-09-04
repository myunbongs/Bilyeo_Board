from rest_framework import serializers
from boardapp.models import Board
from boardapp.models import Comment
from boardapp.models import User

from django.contrib.auth import authenticate

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('title', 'content')
'''
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email', 'password', 'created_at','updated_at')
'''
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('content')
    
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("user_id", "name", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, data):
        user = User(
            user_id     = data['user_id'],      #data에 user_id, name, password를 입력
            name       = data['name'],
            password    = data['password']
        )
        '''
        user = User.objects.create_user(
            validated_data["user_id"], validated_data["name"], validated_data["password"]
        )
        '''
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "name")

class LoginUserSerializer(serializers.Serializer):
    name = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")