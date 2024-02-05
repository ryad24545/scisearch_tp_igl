from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import  Article
from users import NewUser
from .serializers import ArticleSerializer
from users.serializers import UserCreateSerializer
from django.shortcuts import render

from django.http import JsonResponse
import requests
import json
from articles.models import *
from .documents import *
from .serializers import *
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    CompoundSearchFilterBackend
)
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    OrderingFilterBackend,
)




class FavoriViewSet(viewsets.ViewSet):
    def create(self, request):
        user = NewUser.objects.get(id=request.data['user_id'])
        article = Article.objects.get(id=request.data['article_id'])
        user.favorite_articles.add(article)
        return Response({'status': 'Article ajouté aux favoris'}, status=status.HTTP_201_CREATED)

    def delete_fav(self, request, pk=None):
        user = NewUser.objects.get(id=request.data['user_id'])
        article = Article.objects.get(id=pk)
        user.favorite_articles.remove(article)
        return Response({'status': 'Article supprimé des favoris'}, status=status.HTTP_204_NO_CONTENT)

class ModerateurViewSet(viewsets.ModelViewSet):
    queryset = NewUser.objects.filter(is_moderator=True)
    serializer_class = UserCreateSerializer

    def delete_article(self, instance):
        if not self.request.user.is_superuser:
            return Response({'status': 'Seulement  un administrateur qui peut supprimer un modérateur'}, status=status.HTTP_403_FORBIDDEN)
        instance.delete()


def generate_random_data():
    url = 'https://newsapi.org/v2/everything?q=apple&from=2021-04-23&to=2021-04-23&sortBy=popularity&apiKey=827705eea42e455cba8bf4afafc7da90'
    r = requests.get(url)
    payload = json.loads(r.text)
    count = 1
    for data in payload.get('articles'):
        print(count)
        Article.objects.create(
            titre = data.get('title'),
            texte = data.get('description'),
            auteurs = data.get('name'),
            mots_cles = data.get(),
            institutions = data.get()
        )

def index(request):
    generate_random_data()
    return JsonResponse({'status' : 200})




class PublisherDocumentView(DocumentViewSet):
    document = NewsDocument
    serializer_class = NewsDocumentSerializer
    #fielddata=True
    filter_backends = [
        FilteringFilterBackend,
        OrderingFilterBackend,
        CompoundSearchFilterBackend,
    ]
   
    search_fields = (
        'title',
        'texte',
    )
    multi_match_search_fields = (
       'title',
        'texte ',
    )
    filter_fields = {
       'title' : 'title',
        'content' : 'content',
    }
    ordering_fields = {
        'id': None,
    }
    ordering = ( 'id'  ,)
        
  
