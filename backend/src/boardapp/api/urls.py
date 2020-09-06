from django.urls import path
from .views import BoardListView, BoardDetailView, LoginView, SignupView, Userview

urlpatterns = [
    path('posts/', BoardListView.as_view()),
    path('posts/<pk>', BoardDetailView.as_view()),
 #  path('create', CreateView.as_view()),
 #  path('posts<pk>', CommentView.as_view()), 
    path('login/', LoginView.as_view()),
    path('signup/', SignupView.as_view()),
    path('user/', Userview.as_view()),
 #  path('posts?title=[keyword]', SearchView/as_view()),
]

# 기능 3개를 더 추가해야해요 ^^
