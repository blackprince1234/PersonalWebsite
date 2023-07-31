from django.contrib import admin
from django.urls import path
from testbackend import views

#List of URL
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name = 'index'),
    path('files/', views.files, name = 'files'),
    path('dates/', views.dates, name = 'dates')    
]
