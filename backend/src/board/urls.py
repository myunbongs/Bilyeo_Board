from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('boardapp.api.urls')),
    path('api/login', include('boardapp.api.urls')),
    path('api/signup', include('boardapp.api.urls')),  
    #path('api/posts, include('boardapp.api.urls')),
    #path('api/posts<int:id>, include('boardapp.api.urls')),
    
    # 수정해야해요.. 

]