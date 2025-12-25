from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.home, name='home'),
    path('main/', views.main, name='main'),

    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),

    path('ancient/', views.ancient, name='ancient'),
    path('medieval/', views.medieval, name='medieval'),
    path('modern/', views.modern, name='modern'),
    path('empires/', views.empires, name='empires'),
    path('battles/', views.battles, name='battles'),
    path('cultural-heritage/', views.cultural_heritage, name='cultural_heritage'),
    path('freedom-movement/', views.freedom_movement, name='freedom_movement'),
]
