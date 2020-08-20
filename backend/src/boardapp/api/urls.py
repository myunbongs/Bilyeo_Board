from django.urls import path
from .views import BoardListView, BoardDetailView

urlpatterns = [
    path('', BoardListView.as_view()),
    path('<pk>', BoardDetailView.as_view()),
]