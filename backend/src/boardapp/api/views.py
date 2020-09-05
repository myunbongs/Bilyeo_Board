from rest_framework import viewsets, permissions, generics
from boardapp.models import Board, Comment, User, Post
from .serializers import CommentSerializer, UserSerializer , BoardSerializer, CreateUserSerializer, LoginUserSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import filters

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
    filter_backends = [filters.SearchFilter]   #추가
    search_fields = ['title', 'content']       #추가

class BoardDetailView(RetrieveAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

class SignupView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    def post(self, request, *args, **kwargs):
        if len(request.data["user_id"]) < 6 or len(request.data["password"]) < 4:
            body = {"message": "short field"}
            return Response(body)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user.save()
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
            }
        )

class LoginView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = LoginUserSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,
            }
        )

class Userview(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user