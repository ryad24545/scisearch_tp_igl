from django.urls import path
from .views import welcome , confirmation_page

urlpatterns = [
    path('', welcome, name='welcome'),
    path('confirmation/', confirmation_page, name='confirmation_page'),

]