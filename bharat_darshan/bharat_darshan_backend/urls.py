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


    path("", include("accounts.urls")),


    #maps
    #ancient maps
    path('nanda-map/', views.nanda_map, name='nanda_map'),
    path('mauryan-map/', views.mauryan_map, name='mauryan_map'),
    path('shunga-map/', views.shunga_map, name='shunga_map'),
    path('kanva-map/', views.kanva_map, name='kanva_map'),
    path('saka-map/', views.saka_map, name='saka_map'),
    path('indo-greek-map/', views.indo_greek_map, name='indo_greek_map'),
    path('satvahana-map/', views.satvahana_map, name='satvahana_map'),
    path('indo-parthians-map/', views.indo_parthians_map, name='indo_parthians_map'),
    path('kushana-map/', views.kushana_map, name='kushana_map'),
    path('western-kshatrapas-map/', views.western_kshatrapas_map, name='western_kshatrapas_map'),
    path('mukharis-map/', views.mukharis_map, name='mukharis_map'),
    path('gupta-map/', views.gupta_map, name='gupta_map'),
    path('huna-map/', views.huna_map, name='huna_map'),
    path('vakataka-map/', views.vakataka_map, name='vakataka_map'),
    path('harsha-map/', views.harsha_map, name='harsha_map'),
    path('gauda-map/', views.gauda_map, name='gauda_map'),
    path('maitraka-map/', views.maitraka_map, name='maitraka_map'),
    path('gurjara-pratihara-map/', views.gurjara_pratihara_map, name='gurjara_pratihara_map'),
    path('pala-map/', views.pala_map, name='pala_map'),
    path('southern-kingdoms-map/', views.southern_kingdoms_map, name='southern_kingdoms_map'),



    #Medival Maps
    path('gurjara-map/',views.gurjara_map,name="gurjara_map"),
    path('pala-map/', views.pala_map, name='pala_map'),                        
    path('rashtrakuta-map/', views.rashtrakuta_map, name='rashtrakuta_map'),                   
    path('chola-map/', views.chola_map, name='chola_map'),                       
    path('chandelachauhan-map/', views.chandelachauhan_map, name='chandelachauhan_map'),
    path('rajput-map/', views.rajput_map, name='rajput_map'),
    path('delhi-map/', views.delhi_map, name='delhi_map'),
    path('mewar-map/', views.mewar_map, name='mewar_map'),
    path('vijaynagar-map/', views.vijaynagar_map, name='vijaynagar_map'),
    path('bahmani-map/', views.bahmani_map, name='bahmani_map'),
    path('kakatiya-hoysala-map/', views.kakatiya_hoysala_map, name='kakatiya-hoysala-map'),
    path('endofmedival-map/', views.endofmedival_map, name='endofmedival_map'),
    path('mahmud-of-gazhni-map/', views.mahmud_of_gazhni_map, name='mahmud-of-gazhni-map'),
    path('ghurid-dynasty-map/', views.ghurid_dynasty_map, name='ghurid_dynasty_map'),
    path('khilji-map/', views.khilji_map, name='khilji_map'),
    path('tughlaq-map/', views.tughlaq_map, name='tughlaq_map'),
    path('sayyid-map/', views.sayyid_map, name='sayyid_map'),
    path('lodi-map/', views.lodi_map, name='lodi_map'),
    path('bijapur-map/', views.bijapur_map, name='bijapur_map'),
    path('barid-shahid-of-bidar-map/', views.barid_shahid_of_bidar, name='barid-shahid-of-bidar-map'),
    path('nizam-shahi-of-ahmadnagar-map/', views.nizam_shahi_of_ahmadnagar, name='nizam-shahi-of-ahmadnagar-map'),
    path('qutb-shahi-of-golconda-map/', views.qutb_shahi_of_golconda, name='qutb-shahi-of-golconda-map'),
    path('mughal-map/', views.mughal_map, name='mughal_map'),
    path('shershah-map/', views.shershah_map, name='shershah_map'),
    path('talikota-map/', views.talikota_map, name='talikota_map'),
    path('marathas-map/', views.marathas_map, name='marathas_map'),
    path('bhakti-map/', views.bhakti_map, name='bhakti_map'),
    path('sikh-map/', views.sikh_map, name='sikh_map'),

]



  


