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
    path('gauda/', views.gauda, name='gauda'),
    path('Gupta/', views.gupta, name='gupta'),
    path('gurjaraPratihara/', views.gurjara_pratihara, name='gurjara_pratihara'),
    path('harsha/', views.harsha, name='harsha'),
    path('huna/', views.huna, name='huna'),
    path('indo-greek/', views.indo_greek, name='indo_greek'),
    path('indo-parthians/', views.indo_parthian, name='indo_parthian'),
    path('kanva/', views.kanva, name='kanva'),
    path('kushan/', views.kushana, name='kushana'),
    path('maurya/', views.maurya, name='maurya'),
    path('mukharis/', views.mukharis, name='mukharis'),
    path('maitraka/', views.maitraka, name='maitraka'),
    path('nanda/', views.nanda, name='nanda'),
    path('pala/', views.pala, name='pala'),
    path('saka/', views.saka, name='saka'),
    path('satavahana/', views.sathavahana, name='sathavahana'),
    path('shunga/', views.shunga, name='shunga'),
    path('vakataka/', views.vakataka, name='vakataka'),
    path('southern-kingdoms/', views.southern_kingdoms, name='southern_kingdoms'),
    path('western-kshatrapas/', views.western_kshatrapas, name='western_kshatrapas'),


    #Medival Dynasties
    path('gurjara/', views.gauda, name='gurjara'),
    path('bahmani/', views.gupta, name='bahmani'),
    path('chandelachauhan/', views.gurjara_pratihara, name='chandelachauhan'),
    path('chola/', views.harsha, name='chola'),
    path('delhi/', views.huna, name='delhi'),
    path('endofmedival/', views.indo_greek, name='endofmedival'),
    path('kakatiya-hoysala/', views.indo_parthian, name='kakatiya-hoysala'),
    path('mewar/', views.kanva, name='mewar'),
    path('pala/', views.kushana, name='pala'),
    path('rajput/', views.maurya, name='rajput'),
    path('rashtrakuta/', views.mukharis, name='rashtrakuta'),
    path('vijaynagar/', views.mukharis, name='vijaynagar'),

    #modern dynasties
    path('anglo_french/', views.gauda, name='anglo_french'),
    path('bengal_swadeshi/', views.gupta, name='bengal_swadeshi'),
    path('british/', views.gurjara_pratihara, name='british'),
    path('buxar/', views.harsha, name='buxar'),
    path('civil_disobidience/', views.huna, name='civil_disobidience'),
    path('danes/', views.indo_greek, name='danes'),
    path('dutch/', views.indo_parthian, name='dutch'),
    path('french/', views.kanva, name='french'),
    path('home_rule/', views.kushana, name='home_rule'),
    path('india_independence/', views.maurya, name='india_independence'),
    path('indian_nc/', views.mukharis, name='indian_nc'),
    path('jallianwala_bagh/', views.mukharis, name='jallianwala_bagh'),
    path('mughal_decline/', views.kushana, name='mughal-decline'),
    path('non_cooperation/', views.maurya, name='non_cooperation'),
    path('plassey/', views.mukharis, name='plassey'),
    path('portugese/', views.mukharis, name='portugese'),
    path('quit_india_movement/', views.kushana, name='quit_india_movement'),
    path('revolt_1857/', views.maurya, name='revolt_1857'),
    path('social_relegious_movement/', views.mukharis, name='social_relegious_movement'),
   

]



