from django.urls import path, include
from game.views.index import index

urlpatterns = [
    path("",index,name="index"),
   # path("menu/",include("game.urls.menu.index.py")),
   # path("playground/",include("game.urls.playground.index.py")),
    #path("settings",include('game.urls.settings.index.py')),
]

