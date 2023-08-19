from . import views
from django.urls import path

urlpatterns = [
    path("",views.index,name="game_index")
]

