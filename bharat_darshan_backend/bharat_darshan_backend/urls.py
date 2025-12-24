from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from accounts import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', include('accounts.urls')),  # your login app
    path('', TemplateView.as_view(template_name='html/atlas.html'), name='home'),
    path('', views.home, name='home'),
]
