from django.db import models
from django.contrib.auth.models import User
# Create your models here.

from users import NewUser



class Institution(models.Model):
    nom = models.CharField(max_length=200)

    def __str__(self):
        return self.nom
class MotCle(models.Model):
    mot = models.CharField(max_length=50)

    def __str__(self):
        return self.mot

class Reference(models.Model):
    reference = models.TextField()

    def __str__(self):
        return self.reference
    
class Article(models.Model):
    titre = models.CharField(max_length=200)
    resume = models.TextField()
    auteurs = models.ForeignKey(to=User, on_delete=models.CASCADE)  
    institutions = models.ManyToManyField(Institution)  
    mots_cles = models.ManyToManyField(MotCle)
    texte = models.TextField()
    url_pdf = models.URLField()
    references = models.ManyToManyField(Reference)

    def __str__(self):
        return f"{self.auteurs}: {self.titre}"


class Favori(models.Model):
    utilisateur = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.utilisateur.user_name} - {self.article.titre}"

