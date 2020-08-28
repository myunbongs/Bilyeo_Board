from rest_framework import viewsets
from boardapp.models import Board, Comment, User
from .serializers import CommentSerializer, UserSerializer , BoardSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView

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

