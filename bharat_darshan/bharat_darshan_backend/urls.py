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

    # Ancient Dynasties
    path('dynasties/Ancient_history/gauda/', views.gauda, name='gauda'),
    path('dynasties/Ancient_history/Gupta/', views.gupta, name='gupta'),
    path('dynasties/Ancient_history/gurjaraPratihara/', views.gurjara_pratihara, name='gurjara_pratihara'),
    path('dynasties/Ancient_history/harsha/', views.harsha, name='harsha'),
    path('dynasties/Ancient_history/huna/', views.huna, name='huna'),
    path('dynasties/Ancient_history/indo-greek/', views.indo_greek, name='indo_greek'),
    path('dynasties/Ancient_history/indo-parthians/', views.indo_parthian, name='indo_parthian'),
    path('dynasties/Ancient_history/kanva/', views.kanva, name='kanva'),
    path('dynasties/Ancient_history/kushan/', views.kushana, name='kushana'),
    path('dynasties/Ancient_history/maurya/', views.maurya, name='maurya'),
    path('dynasties/Ancient_history/mukharis/', views.mukharis, name='mukharis'),
    path('dynasties/Ancient_history/maitraka/', views.maitraka, name='maitraka'),
    path('dynasties/Ancient_history/nanda/', views.nanda, name='nanda'),
    path('dynasties/Ancient_history/pala/', views.pala, name='pala'),
    path('dynasties/Ancient_history/saka/', views.saka, name='saka'),
    path('dynasties/Ancient_history/satavahana/', views.sathavahana, name='sathavahana'),
    path('dynasties/Ancient_history/shunga/', views.shunga, name='shunga'),
    path('dynasties/Ancient_history/vakataka/', views.vakataka, name='vakataka'),
    path('dynasties/Ancient_history/southern-kingdoms/', views.southern_kingdoms, name='southern_kingdoms'),
    path('dynasties/Ancient_history/western-kshatrapas/', views.western_kshatrapas, name='western_kshatrapas'),

]
    




