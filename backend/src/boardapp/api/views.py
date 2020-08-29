from rest_framework import viewsets
from boardapp.models import Board, Comment, User
from .serializers import CommentSerializer, UserSerializer , BoardSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView

import json
from django.views import View
from django.http import JsonResponse
'''
class UserCreateView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BoardCreateView(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer 
   
class CommentCreateView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer 
    
'''
##viewset 라우터 연결이 좀 까다로울것같아서 ListView나 CreateView로 변경하는것도 좋을것같습니다.. 

class BoardListView(ListAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

class BoardDetailView(RetrieveAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)     #json 형태로 저장된 request.body를 변수 data에 저장
        User(
            user_id     = data['user_id'],      #data에 user_id, email, password를 입력
            email       = data['email'],
            password    = data['password']
        )

        if User.objects.filter(user_id = data['user_id'], password = data['password']).exists() == True :      #아이디와 비번이 맞을 경우 로그인
            return JsonResponse({"message": "로그인에 성공하셨습니다."}, status = 200)
        else:    #아이디와 비번이 틀릴 경우
            return JsonResponse({"message" : "아이디나 비밀번호가 일치하지 않습니다."}, status = 401)

    def get(self, request): #데이터베이스 내 유저의 데이터를 응답함(검색)
        user = User.objects.values()
        return JsonResponse({"list" : list(user)}, status = 200)

class SignupView(View):
    def post(self, request):
        data = json.loads(request.body)     #json 형태로 저장된 request.body를 변수 data에 저장
        User(
            user_id     = data['user_id'],      #data에 user_id, email, password를 입력
            email       = data['email'],
            password    = data['password'],
        )

        if User.objects.filter(user_id = data['user_id']).exists() == True:     #유저 데이터베이스 내에 요청받은 유저아이디가 있을 경우
            return JsonResponse({"message" : "이미 존재하는 아이디입니다."}, status = 401)

        else:       #유저 데이터베이스 내에 요청받은 유저아이디가 없을 경우 아이디 생성
            User.objects.create(user_id = data['user_id'], email = data['email'], password = data['password'])
            return JsonResponse({"message" : "회원으로 가입되셨습니다."}, status = 200)