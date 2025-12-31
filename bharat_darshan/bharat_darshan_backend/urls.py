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
    path('pala/', views.pala, name='pala'),                         # c. 750–1174 CE
    path('rashtrakuta/', views.rashtrakuta, name='rashtrakuta'),     # c. 753–973 CE
    path('gurjara/', views.gurjara, name='gurjara'),                 # Gurjara-Pratihara
    path('chola/', views.chola, name='chola'),                       # c. 850–1279 CE
    path('chandelachauhan/', views.chandelachauhan, name='chandelachauhan'),
    path('rajput/', views.rajput, name='rajput'),
    path('kakatiya-hoysala/', views.kakatiya_hoysala, name='kakatiya-hoysala'),
    path('delhi-sultanate/', views.delhi_sultanate, name='delhi-sultanate'),
    path('mewar/', views.mewar, name='mewar'),
    path('vijaynagar/', views.vijaynagar, name='vijaynagar'),
    path('bahmani/', views.bahmani, name='bahmani'),
    path('endofmedival/', views.endofmedival, name='endofmedival'),


    #modern dynasties
   path('portugese/', views.portugese, name='portugese'),                 # 1498 onwards
   path('dutch/', views.dutch, name='dutch'),                             # 17th century
   path('danes/', views.danes, name='danes'),                             # 17th century
   path('french/', views.french, name='french'),                         # 17th–18th century
   path('anglo_french/', views.anglo_french, name='anglo_french'),       # Carnatic Wars

   path('plasssey/', views.plasssey, name='plasssey'),                   # 1757
   path('buxar/', views.buxar, name='buxar'),                             # 1764
   path('british_expansion/', views.british_expansion, name='british_expansion'),

   path('mughal_decline/', views.mughal_decline, name='mughal_decline'), # 18th century
   path('revolt_1857/', views.revolt_1857, name='revolt_1857'),

   path('social_relegious_movement/', views.social_relegious_movement, name='social_relegious_movement'),
   path('indian_nc/', views.indian_nc, name='indian_nc'),                 # 1885

   path('bengal_swadeshi/', views.bengal_swadeshi, name='bengal_swadeshi'), # 1905
   path('home_rule/', views.home_rule, name='home_rule'),                 # 1916
   path('jallianwala_bagh/', views.jallianwala_bagh, name='jallianwala_bagh'), # 1919

   path('non_cooperation/', views.non_cooperation, name='non_cooperation'),
   path('civil_disobidience/', views.civil_disobidience, name='civil_disobidience'),

   path('quit_india_movement/', views.quit_india_movement, name='quit_india_movement'), # 1942
   path('india_independence/', views.india_independence, name='india_independence'),   # 1947

]



