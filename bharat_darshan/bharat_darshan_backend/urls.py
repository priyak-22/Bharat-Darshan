from django.contrib import admin
from django.urls import include, path
from accounts import views

urlpatterns = [
    path('', views.atlas, name='home'),

    path('admin/', admin.site.urls),

    path('main/', views.main, name='main'),

    path('atlas/',views.atlas, name='atlas'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('signup/', views.signup, name='signup'),




    path('ancient/', views.ancient, name='ancient'),
    path('medieval/', views.medieval, name='medieval'),
    path('modern/', views.modern, name='modern'),
    path('empires/', views.empires, name='empires'),
    path('battles/', views.battles, name='battles'),
    path('cultural-heritage/', views.cultural_heritage, name='cultural_heritage'),
    path('freedom-movement/', views.freedom_movement, name='freedom_movement'),

    # Ancient Dynasties
    path('gauda/', views.gauda, name='gauda'),
    path('gupta/', views.gupta, name='gupta'),
    path('gurjara_pratihara/', views.gurjara_pratihara, name='gurjara_pratihara'),
    path('harsha/', views.harsha, name='harsha'),
    path('huna/', views.huna, name='huna'),
    path('indo-greek/', views.indo_greek, name='indo-greek'),
    path('indo-parthians/', views.indo_parthians, name='indo-parthians'),
    path('kanva/', views.kanva, name='kanva'),
    path('kushana/', views.kushana, name='kushana'),
    path('maurya/', views.maurya, name='maurya'),
    path('mukharis/', views.mukharis, name='mukharis'),
    path('maitraka/', views.maitraka, name='maitraka'),
    path('nanda/', views.nanda, name='nanda'),
    path('pala/', views.pala, name='pala'),
    path('saka/', views.saka, name='saka'),
    path('satvahana/', views.satvahana, name='satvahana'),
    path('shunga/', views.shunga, name='shunga'),
    path('vakataka/', views.vakataka, name='vakataka'),
    path('southern-kingdoms/', views.southern_kingdoms, name='southern-kingdoms'),
    path('western-kshatrapas/', views.western_kshatrapas, name='western-kshatrapas'),


    #Medival Dynasties
    path('pala/', views.pala, name='pala'),                        
    path('rashtrakuta/', views.rashtrakuta, name='rashtrakuta'),     
    path('gurjara/', views.gurjara, name='gurjara'),                
    path('chola/', views.chola, name='chola'),                       
    path('chandelachauhan/', views.chandelachauhan, name='chandelachauhan'),
    path('rajput/', views.rajput, name='rajput'),
    path('delhi/', views.delhi, name='delhi'),
    path('mewar/', views.mewar, name='mewar'),
    path('vijaynagar/', views.vijaynagar, name='vijaynagar'),
    path('bahmani/', views.bahmani, name='bahmani'),
    path('kakatiya-hoysala/', views.kakatiya_hoysala, name='kakatiya-hoysala'),
    path('endofmedival/', views.endofmedival, name='endofmedival'),
    path('mahmud-of-gazhni/', views.mahmud_of_gazhni, name='mahmud-of-gazhni'),
    path('ghurid-dynasty/', views.ghurid_dynasty, name='ghurid-dynasty'),
    path('khilji/', views.khilji, name='khilji'),
    path('tughlaq/', views.tughlaq, name='tughlaq'),
    path('sayyid/', views.sayyid, name='sayyid'),
    path('lodi/', views.lodi, name='lodi'),
    path('bijapur/', views.bijapur, name='bijapur'),
    path('barid-shahid-of-bidar/', views.barid_shahid_of_bidar, name='barid-shahid-of-bidar'),
    path('nizam-shahi-of-ahmadnagar/', views.nizam_shahi_of_ahmadnagar, name='nizam-shahi-of-ahmadnagar'),
    path('qutb-shahi-of-golconda/', views.qutb_shahi_of_golconda, name='qutb-shahi-of-golconda'),
    path('mughal/', views.mughal, name='mughal'),
    path('shershah/', views.shershah, name='shershah'),
    path('talikota/', views.talikota, name='talikota'),
    path('marathas/', views.marathas, name='marathas'),
    path('bhakti/', views.bhakti, name='bhakti'),
    path('sikh/', views.sikh, name='sikh'),

   # Modern Dynasties 
    path('anglo_french/', views.anglo_french, name='anglo_french'),
    path('bengal_swadeshi/', views.bengal_swadeshi, name='bengal_swadeshi'),
    path('british/', views.british_expansion, name='british'),
    path('buxar/', views.buxar, name='buxar'),
    path('civil_disobidience/', views.civil_disobidience, name='civil_disobidience'),
    path('danes/', views.danes, name='danes'),
    path('dutch/', views.dutch, name='dutch'),
    path('french/', views.french, name='french'),
    path('home_rule/', views.home_rule, name='home_rule'),
    path('india_independence/', views.india_independence, name='india_independence'),
    path('indian_nc/', views.indian_nc, name='indian_nc'),
    path('jallianwala_bagh/', views.jallianwala_bagh, name='jallianwala_bagh'),
    path('mughal_decline/', views.mughal_decline, name='mughal_decline'),
    path('non_cooperation/', views.non_cooperation, name='non_cooperation'),
    path('plassey/', views.plassey, name='plassey'),
    path('portugese/', views.portugese, name='portugese'),
    path('quit_india_movement/', views.quit_india_movement, name='quit_india_movement'),
    path('revolt_1857/', views.revolt_1857, name='revolt_1857'),
    path('social_relegious_movement/', views.social_relegious_movement, name='social_relegious_movement'),
    

   
#timeline
    path('ancient_timeline/', views.ancient_timeline, name="ancient_timeline"),
    path('medival_timeline/', views.medival_timeline, name="medival_timeline"),
    path('modern_timeline/', views.modern_timeline, name="modern_timeline"),

    #culture
    path('ancient-culture/', views.ancient_culture, name="ancient-culture"),
    path('medival-culture/', views.medival_culture, name="medival-culture"),
    path('modern-culture/', views.modern_culture, name="modern-culture"),



]


