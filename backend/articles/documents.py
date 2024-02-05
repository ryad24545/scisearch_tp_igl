from django_elasticsearch_dsl import Document,fields,Index
from .models import Article, Institution, MotCle, Reference
from django.contrib.auth.models import User
PUBLISHER_INDEX = Index('article')

PUBLISHER_INDEX.settings(
    number_of_shards=1,
    number_of_replicas=1
)

@PUBLISHER_INDEX.doc_type
class UserDocument(Document):
    class Index:
        name = "users"
        settings = {
            "number_of_shards": 1,
            "number_of_replicas": 1,
        }

    class Django:
        model = User



@PUBLISHER_INDEX.doc_type
class NewsDocument(Document):
    
    id = fields.IntegerField(attr='id')
    fielddata=True
    titre = fields.TextField(
        fields={
            'raw':{
                'type': 'keyword',
            }
            
        }
    )
    texte = fields.TextField(
        fields={
            'raw': {
                'type': 'keyword',
                
            }
        },
    )
   

    class Django(object):
        model = Article
