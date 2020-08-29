from django.urls import path
from .views import BoardListView, BoardDetailView, LoginView, SignupView

urlpatterns = [
    path('', BoardListView.as_view()),
    path('<pk>', BoardDetailView.as_view()),
    path('/login', LoginView.as_view()),
    path('/signup', SignupView.as_view()),
]
